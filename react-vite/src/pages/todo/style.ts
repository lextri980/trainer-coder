import { TextField } from "@mui/material";
import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .create-group {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  .todo-list {
    min-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .single-todo {
      display: flex;
      justify-content: space-between;
      .action-btn-group {
        display: flex;
        gap: 5px
      }
    }
    .todo-no {
      display: inline-block;
      min-width: 20px;
    }
  }
`;

export const TextFieldStyle = styled(TextField)`
  width: 100%;
`;
