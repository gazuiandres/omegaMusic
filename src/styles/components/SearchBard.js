import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 28.5rem;
  margin: 0 auto;
  padding: 2rem 0;
  margin-bottom: 1rem;
  border: none;
  position: relative;
  /* background-color: red; */
  @media (min-width: 1100px) {
    width: 50rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 5rem;
  padding: 1.5rem 4rem;
  border: none;
  font-size: 1.4rem;
  background-color: rgba(200, 200, 200, 0.18);
  color: rgba(221, 216, 216, 0.6);
  outline: none;
`;

export const SearchIcon = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 1.6rem;
  top: 49%;
  transform: translateY(-50%);
`;
