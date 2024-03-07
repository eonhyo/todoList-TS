import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { jsonApi } from "../axios/api";
import { StButton, StForm, StInput, StLabel } from "../style/styled";

function Form() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const [todo, setTodo] = useState([]);

  const fetchTodo = async () => {
    try {
      const { data } = await jsonApi.get("/todos");
      setTodo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmitButtonHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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
    try {
      await jsonApi.post("/todos", newTodo);
      setTitle("");
      setContents("");
      fetchTodo();
    } catch (error) {
      console.log(error);
    }
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

