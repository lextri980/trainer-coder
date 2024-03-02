import styled from "styled-components";

export const TodoContainer = styled.div`
  .todo-list {
    display: flex;
    flex-direction: column;
    background-color: #80808060;
    margin-bottom: 10px;
    position: relative;
    .todo-update {
      position: absolute;
      top: 0;
      right: 60px;
      cursor: pointer;
      color: orange;
    }
    .todo-delete {
      position: absolute;
      top: 0;
      right: 0;
      color: red;
      cursor: pointer;
    }
  }
  .todo-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 15px 0;
  }
  .group-input {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;
