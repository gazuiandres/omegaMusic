import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Context from "../context/Context";

import PlayButton from "../assets/PlayButton.svg";
import PauseButton from "../assets/pauseButton.svg";
import NextButton from "../assets/nextButton.svg";
import VolumeUp from "../assets/volumeUp.svg";
import VolumeDown from "../assets/volumeDown.svg";

import {
  ControlWrapper,
  Image,
  FlexWrapper,
  InfoContainer,
  VolumenContainer,
  ControlsContainer,
  Icon,
} from "../styles/components/PlayControls";

const PlayControls = ({ cover, name, autor, play, volume }) => {
  const { playSong, pauseSong, playNextSong, playPreviousSong, volumeControl } =
    useContext(Context);

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

        {cover && (
          <>
            {isDesktop && (
              <VolumenContainer>
                <img
                  src={volume > 0.4 ? VolumeUp : VolumeDown}
                  alt="Volume Icon"
                />
                <input
                  type="range"
                  value={volume}
                  min="0.1"
                  max="1"
                  step="0.01"
                  onChange={(e) => volumeControl(e.target.value)}
                />
              </VolumenContainer>
            )}

            <ControlsContainer>
              <Icon
                size={getSizeIcons(isDesktop, "nextButton")}
                rotate="180"
                src={NextButton}
                alt="Icon Previous Song"
                onClick={() => playPreviousSong()}
              />
              <Icon
                size={getSizeIcons(isDesktop)}
                src={play ? PauseButton : PlayButton}
                onClick={() => (play ? pauseSong() : playSong())}
                alt="Icon Play Song"
              />
              <Icon
                size={getSizeIcons(isDesktop, "nextButton")}
                src={NextButton}
                alt="Icon Next Song"
                onClick={() => playNextSong()}
              />
            </ControlsContainer>
          </>
        )}
      </FlexWrapper>
    </ControlWrapper>
  );
};

export default PlayControls;
