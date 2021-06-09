import styled from "styled-components";

export const PageTitle = styled.h1`
  padding: 0 2rem 0;
  color: #ffffff;
  font-size: 3.6rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const CardWrapper = styled.div`
  padding: 1rem 0;
  overflow-y: scroll;
  height: 59vh;
  /* background-color: orange; */
  @media (min-height: 731px) {
    height: 63vh;
  }
  @media (min-width: 768px) {
    height: 75vh;
  }
  @media (min-width: 1100px) {
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ff8807;
      border-radius: 4px;
    }
  }
`;
