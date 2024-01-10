import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LoginBox = styled.div`
  border: 1px solid lightgray;
  width: 400px;
  padding: 60px 40px;
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`;

export const LoginInput = styled.input`
  margin: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: darkblue;
  }
`;

export const KaKaoLoginButton = styled.button`
  background: yellow;
`;

export const LoginCheckboxLabel = styled.label`
  margin-left: 10px;
`;

export const LoginCheckbox = styled.input`
  margin-left: 5px;
`;

export const StyledLoader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
