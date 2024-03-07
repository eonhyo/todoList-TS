import styled from "styled-components";

// Form.tsx

export const StForm = styled.form`
  margin: 5px auto;
  width: 1000px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #e0aed0;
  gap: 20px;
`;

export const StLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const StInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: large;
`;

export const StButton = styled.button`
  height: 50px;
  width: 100px;
  padding: 10px;
  border: none;
  background-color: #ac87c5;
  border-radius: 20px;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

//Header.tsx

export const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #ffe5e5;
  font-size: 20px;
  border-radius: 15px;
  width: 1000px;
  margin: 0px auto;
  font-weight: bold;
`;

export const StSpan = styled.span`
  margin: 0px 20px;
`;

// Todolist.tsx

export const StTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 0px 100px;
`;

export const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 20px;
  margin: 5px 100px;
  border: 4px solid #ffe5e5;
  
`;

export const StP = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const StBtnDiv = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

export const StBtn = styled.button`
  width: 80px;
  border: none;
  background-color: dimgray;
  color: white;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const StListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 100px;
`