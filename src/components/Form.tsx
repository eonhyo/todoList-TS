import React, { useState } from "react";
import Swal from "sweetalert2";
import type { TodosProps } from "../types/todosType";
import { StButton, StForm, StInput, StLabel } from "./style/styled";

function Form({ todos, setTodos }: Omit<TodosProps, "listIsDone">) {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmitButtonHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return Swal.fire("제목을 입력해주세요.");
    } else if (!contents) {
      return Swal.fire("내용을 입력해주세요.");
    }
    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };
  return (
    <div>
      <StForm onSubmit={onSubmitButtonHandler}>
        <StLabel htmlFor="title">제목</StLabel>
        <StInput value={title} onChange={onChangeTitleHandler} />
        <StLabel htmlFor="contents">내용</StLabel>
        <StInput value={contents} onChange={onChangeContentsHandler} />
        <StButton type="submit">추가</StButton>
      </StForm>
    </div>
  );
}

export default Form;

