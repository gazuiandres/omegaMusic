import styled from "styled-components";

export const IconsWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 25vh;
  a {
    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
`;

export const ImgIcon = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
