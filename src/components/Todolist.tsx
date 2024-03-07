import Swal from "sweetalert2";

import type { TodosProps } from "../types/todosType";
import { StBtn, StBtnDiv, StDiv, StP, StTitle } from "./style/styled";

function Todolist({ todos, setTodos, listIsDone }: TodosProps) {
  const deleteTodo = (id: number) => {
    Swal.fire({
      icon: "question",
      title: "삭제 하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        setTodos(todos.filter((item) => item.id !== id));
      }
    });
  };

  const switchTodo = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <>
      <StTitle>{listIsDone ? "Done..!🎉" : "Working..🔥"}</StTitle>
      {todos
        .filter((todo) => todo.isDone === listIsDone)
        .map((todo) => {
          return (
            
            <StDiv key={todo.id}>
              <StP>{todo.title}</StP>
              <p>{todo.contents}</p>
              <StBtnDiv>
                <StBtn onClick={() => deleteTodo(todo.id)}>삭제</StBtn>
                <StBtn onClick={() => switchTodo(todo.id)}>
                  {listIsDone ? "취소" : "완료"}
                </StBtn>
              </StBtnDiv>
            </StDiv>
            
          );
        })}
    </>
  );
}

export default Todolist;

// const StTodoDiv = styled.div`
//   margin: 0px auto;
// `;

