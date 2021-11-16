import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 2px solid #2b84d4;
    box-shadow: 0 2px 20px rgba(43, 132, 212, 0.5);
    border-radius: 8px;
    width: 100%;
    height: 40px;
    padding: 8px;
    font-weight: 500;

    &:focus {
      border: 2px solid #4e99dc;
      box-shadow: 0 2px 20px rgba(120, 178, 230, 0.5);
    }
  }

  button {
    background-color: transparent;
    color: #2b84d4;
    border: 2px solid #2b84d4;
    box-shadow: 0 2px 20px rgba(43, 132, 212, 0.5);
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;

    &:hover {
      background-color: transparent;
      font-weight: 500;
      color: #4e99dc;
      box-shadow: 0 2px 20px rgba(120, 178, 230, 0.5);
    }
  }
`;
