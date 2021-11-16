import styled from "styled-components";

export const Wrapper = styled.footer`
  position: static;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 70px;
  background-color: transparent;
  border: 2px solid #2b84d4;
  box-shadow: 0 0 20px rgba(43, 132, 212, 0.5);
  border-bottom: 0;
  border-radius: 25px 25px 0 0;

  h3 {
    display: flex;
    color: #2b84d4;
  }
`;
