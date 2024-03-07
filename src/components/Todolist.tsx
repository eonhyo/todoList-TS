import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todoSlice";
import { RootState } from "../redux/config/ConfigStore";
import { jsonApi } from "../axios/api";
import { StBtn, StBtnDiv, StDiv, StListDiv, StP, StTitle } from "../style/styled";

function Todolist({ isDone }: { isDone: boolean }) {
  const [todo, setTodo] = useState([]);
  const dispatch = useDispatch();

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
  }, [todo]);

  const onDeleteButtonHandler = async (id: number) => {
    Swal.fire({
      icon: "question",
      title: "삭제 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await jsonApi.delete(`/todos/${id}`);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const onSwitchButtonHandler = async (id: number) => {
    try {
      await jsonApi.patch(`/todos/${id}`, { isDone: !isDone });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <StTitle>{isDone ? "Done..!🎉" : "Working..🔥"}</StTitle>
      <StListDiv>
        {todo
          .filter((item: any) => item.isDone === isDone)
          .map((item: any) => {
            return (
              <StDiv key={item.id}>
                <StP>{item.title}</StP>
                <p>{item.contents}</p>
                <StBtnDiv>
                  <StBtn onClick={() => onDeleteButtonHandler(item.id)}>
                    삭제
                  </StBtn>
                  <StBtn onClick={() => onSwitchButtonHandler(item.id)}>
                    {isDone ? "취소" : "완료"}
                  </StBtn>
                </StBtnDiv>
              </StDiv>
            );
          })}
      </StListDiv>
    </>
  );
}

export default Todolist;

