import React, { useContext } from "react";
import Context from "../context/Context";
import useSearchSong from "../Hooks/useSearchSong";

import SearchBar from "../components/SearchBar";
import SongWrapper from "../components/SongWrapper";

const HomeContainer = () => {
  const {
    state: { songs },
    loadSong,
    addToFavorites,
    removeFromFavorites,
  } = useContext(Context);

  const { query, setQuery, filteredSongs } = useSearchSong(songs);

  const playSong = ({ src, name, cover, autor, id }) => {
    loadSong({
      src,
      name,
      cover,
      autor,
      id,
    });
  };

  const addingToFavorite = ({ id }) => {
    addToFavorites(id);
  };

  const removingFromfavorite = ({ id }) => {
    removeFromFavorites(id);
  };

  return (
    <>
      <SearchBar onChange={setQuery} value={query} />
      <SongWrapper
        title="Songs :"
        songs={filteredSongs}
        playEvent={playSong}
        addToFavorites={addingToFavorite}
        removeFromFavorite={removingFromfavorite}
      />
    </>
  );
};

export default HomeContainer;
