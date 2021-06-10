import React, { useRef, useEffect, useContext } from "react";
import Context from "../context/Context";

const Audio = ({ song }) => {
  const audio = useRef(null);

  const {
    state: {
      controls: { play, volume },
    },
    playNextSong,
  } = useContext(Context);

  useEffect(() => {
    if (audio.current && song) {
      audio.current.pause();
      audio.current.load();
      audio.current.play();
    }
  }, [song]);

  if (audio.current) {
    audio.current.volume = volume;
  }

  if (audio.current && song && play) {
    if (audio.current.readyState > 0) {
      audio.current.play();
    }
  }

  if (audio.current && song && !play) {
    if (audio.current.readyState > 0) {
      audio.current.pause();
    }
  }

  return (
    <div>
      <audio controls onEnded={() => playNextSong()} ref={audio}>
        <source src={song} />
      </audio>
    </div>
  );
};

export default Audio;
