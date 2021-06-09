import React, { useRef, useEffect, useContext } from "react";
import Context from "../context/Context";

const Audio = ({ song }) => {
  const audio = useRef(null);

  const {
    state: {
      controls: { play },
    },
  } = useContext(Context);

  useEffect(() => {
    if (!song) {
      audio.current.volume = 0.5;
    }

    // if (audio.current) {
    //   console.log(audio.current);
    // }

    if (audio.current && song) {
      audio.current.pause();
      audio.current.load();
      audio.current.play();
    }
  }, [song]);

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
      <audio controls ref={audio}>
        <source src={song} />
      </audio>
    </div>
  );
};

export default Audio;
