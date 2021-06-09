import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Context from "../context/Context";

import PlayButton from "../assets/PlayButton.svg";
import PauseButton from "../assets/pauseButton.svg";
import NextButton from "../assets/nextButton.svg";

import {
  ControlWrapper,
  Image,
  FlexWrapper,
  InfoContainer,
  ControlsContainer,
  Icon,
} from "../styles/components/PlayControls";

const PlayControls = ({ cover, name, autor, play }) => {
  const { playSong, pauseSong } = useContext(Context);

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1100px)",
  });

  const getSizeIcons = (desktop, iconType) => {
    if (iconType === "nextButton") {
      return desktop ? "16" : "12";
    }

    return desktop ? "50" : "27";
  };

  return (
    <ControlWrapper>
      {cover && <Image src={cover} alt="CoverImage" />}
      <FlexWrapper>
        <InfoContainer>
          <p>{name}</p>
          <p>{autor}</p>
        </InfoContainer>

        {cover !== "" && (
          <ControlsContainer>
            <Icon
              size={getSizeIcons(isDesktop, "nextButton")}
              rotate="180"
              src={NextButton}
              alt="Icon"
            />
            <Icon
              size={getSizeIcons(isDesktop)}
              cover={true}
              src={play ? PauseButton : PlayButton}
              onClick={() => (play ? pauseSong() : playSong())}
              alt="Icon"
            />
            <Icon
              size={getSizeIcons(isDesktop, "nextButton")}
              src={NextButton}
              alt="Icon"
            />
          </ControlsContainer>
        )}
      </FlexWrapper>
    </ControlWrapper>
  );
};

export default PlayControls;
