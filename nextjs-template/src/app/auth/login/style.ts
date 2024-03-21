import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .login-card {
    width: 500px;
    height: 70%;
    background-color: white;
    box-shadow: 0 0 4px gray;
    border-radius: 4px;
    padding: 20px;

    h3 {
      display: flex;
      justify-content: center;
    }
  }
`;
