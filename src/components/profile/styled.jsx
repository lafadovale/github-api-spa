import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 25px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  h4 {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 5px;
  a {
    font-size: 1.2rem;
    color: #2b84d4;
    font-weight: bold;

    &:hover {
      color: #4e99dc;
    }
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 15rem;
  margin: 15px 8px;
  border: 2px solid #2b84d4;
  box-shadow: 0 2px 20px rgba(43, 132, 212, 0.5);
`;
