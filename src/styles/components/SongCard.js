import styled from "styled-components";

export const SongCardMain = styled.div`
  display: flex;
  align-items: center;
  width: 28rem;
  margin: 0 auto 2.5rem;
  /* background-color: red; */
  @media (min-width: 768px) {
    width: 43rem;
  }
  @media (min-width: 1100px) {
    width: 51rem;
  }
`;

export const CardImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-right: 1.5rem;
  @media (min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: #dfdfdf;
  @media (min-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export const CardIcon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 1100px) {
    width: 30px;
    height: 30px;
    margin-right: 4rem;
  }
`;
