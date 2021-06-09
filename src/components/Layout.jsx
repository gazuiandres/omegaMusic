import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { GlobalStyle, Main, AudioWrapper } from "../styles/GlobalStyles";

import Audio from "./Audio.jsx";
import PlayControls from "./PlayControls";
import MenuMobile from "./MenuMobile";
import MenuSide from "./MenuSide";
import Context from "../context/Context";

const Layout = ({ children }) => {
  const {
    state: {
      main: { src, autor, name, cover },
      controls,
    },
  } = useContext(Context);

  const isTable = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  return (
    <Main>
      <GlobalStyle />
      <AudioWrapper>
        <Audio song={src} {...controls} />
      </AudioWrapper>
      {isTable && <MenuSide />}
      {children}
      <PlayControls {...controls} autor={autor} name={name} cover={cover} />
      {!isTable && <MenuMobile />}
    </Main>
  );
};

export default Layout;
