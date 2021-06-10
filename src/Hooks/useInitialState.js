import { useState } from "react";
import InitialState from "../initialState";

import { findNextSong, findPrevSong } from "../utils";

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const loadSong = (payload) => {
    const { controls } = state;
    setState({
      ...state,
      main: {
        ...payload,
      },
      controls: {
        ...controls,
        play: true,
      },
    });
  };

  const pauseSong = () => {
    const { controls } = state;
    setState({
      ...state,
      controls: {
        ...controls,
        play: false,
      },
    });
  };

  const playSong = () => {
    const { controls } = state;
    setState({
      ...state,
      controls: {
        ...controls,
        play: true,
      },
    });
  };

  const addToFavorites = (payload) => {
    const { songs, favorites } = state;
    const song = songs.find((song) => song.id === payload);

    let isLiked = false;

    favorites.forEach((fav) => {
      if (fav.id === song.id) {
        isLiked = true;
      }
    });

    if (!isLiked) {
      setState({
        ...state,
        favorites: [...favorites, song],
      });
    }
  };

  const removeFromFavorites = (payload) => {
    const { favorites } = state;

    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== payload
    );

    setState({
      ...state,
      favorites: [...newFavorites],
    });
  };

  const playPreviousSong = () => {
    const {
      main: { id },
      songs,
      controls,
    } = state;
    const prevSong = findPrevSong(songs, id);

    if (prevSong) {
      setState({
        ...state,
        main: {
          ...prevSong,
        },
        controls: {
          ...controls,
          play: false,
        },
      });
    }
  };

  const playNextSong = () => {
    const {
      main: { id },
      songs,
      controls,
    } = state;
    let nextSong = findNextSong(songs, id);

    if (nextSong) {
      setState({
        ...state,
        main: {
          ...nextSong,
        },
        controls: {
          ...controls,
          play: true,
        },
      });
    }
  };

  const volumeControl = (value) => {
    const { controls } = state;
    setState({
      ...state,
      controls: {
        ...controls,
        volume: value,
      },
    });
  };

  return {
    loadSong,
    pauseSong,
    playSong,
    addToFavorites,
    removeFromFavorites,
    playNextSong,
    playPreviousSong,
    volumeControl,
    state,
  };
};

export default useInitialState;
