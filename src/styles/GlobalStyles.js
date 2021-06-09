import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    /* background:  */
    background: linear-gradient(180deg, #0B0A10 0%, #0F0E31 65.99%);
    height: 100vh;
}

`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-template-rows: 1fr 5.5rem;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 30% 45% 1fr;
    grid-template-rows: 1fr;
  }
`;

export const AudioWrapper = styled.div`
  position: fixed;
  z-index: -1;
  visibility: hidden;
`;

export const MainWrapper = styled.div``;
