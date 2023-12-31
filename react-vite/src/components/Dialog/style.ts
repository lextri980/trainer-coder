import styled from "styled-components";
import { Dialog } from "@mui/material";

export const DialogContainer = styled(Dialog)`
  .dialog-container {
    padding: 20px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    .modal-body {
      padding: 20px 0;
      width: 100%;
    }
    .group-btn {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  }
`;
