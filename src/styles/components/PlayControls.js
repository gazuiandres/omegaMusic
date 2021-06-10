import styled from "styled-components";

export const ControlWrapper = styled.div`
  display: flex;
  /* height: 6rem; */
  align-items: center;
  padding: 1.2rem 2rem;
  /* margin-bottom: 7rem; */
  width: 100%;
  background-color: rgba(11, 10, 16, 0.33);
  color: #dfdfdf;
  @media (min-width: 768px) {
    grid-column: 1/3;
  }
  @media (min-width: 1100px) {
    grid-column: 3 / 4;
    display: block;
    padding: 6rem 0;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1.5rem;
  object-fit: cover;
  @media (min-width: 1100px) {
    width: 15.8rem;
    height: 15.8rem;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (min-width: 1100px) {
    display: block;
  }
`;

export const InfoContainer = styled.div`
  /* background-color: red; */
  width: 45%;
  p {
    padding-bottom: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
  }
  @media (min-width: 1100px) {
    margin: 0 auto;
    text-align: start;
    margin-bottom: 8rem;
    p {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const VolumenContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto 4rem;

  /* background-color: red; */

  img {
    width: 22px;
    height: 22px;
    margin-right: 2rem;
  }
  input {
    width: 80%;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  @media (min-width: 1100px) {
    /* background-color: red; */
    width: 90%;
    margin: 0 auto;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  transform: rotate(${(props) => props.rotate || 0}deg);
`;
