import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .login-card {
    width: 500px;
    background-color: rgba(255,255,255, 0.95);
    box-shadow: 0 0 4px gray;
    border-radius: 4px;
    padding: 50px 20px;
    z-index: 99;


    h2 {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }

    .input-field {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .footer {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      p {
        margin-bottom: 10px;
      }
    }
  }
`;
