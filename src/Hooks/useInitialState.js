import { useState } from "react";

import InitialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const loadSong = (payload) => {
    setState({
      ...state,
      main: {
        ...payload,
      },
      controls: {
        play: true,
      },
    });
  };

  const pauseSong = () => {
    setState({
      ...state,
      controls: {
        play: false,
      },
    });
  };

  const playSong = () => {
    setState({
      ...state,
      controls: {
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

  return {
    loadSong,
    pauseSong,
    playSong,
    addToFavorites,
    removeFromFavorites,
    state,
  };
};

export default useInitialState;
