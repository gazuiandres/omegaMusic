import React, { useContext } from "react";
import Context from "../context/Context";
import useSearchSong from "../Hooks/useSearchSong";

import SearchBar from "../components/SearchBar";
import SongWrapper from "../components/SongWrapper";

const FavoritesContainer = () => {
  const {
    state: { favorites },
    loadSong,
    addToFavorites,
    removeFromFavorites,
  } = useContext(Context);

  const { query, setQuery, filteredSongs } = useSearchSong(favorites);

  const playSong = ({ src, name, cover, autor }) => {
    loadSong({
      src,
      name,
      cover,
      autor,
    });
  };

  const addingToFavorite = ({ id }) => {
    addToFavorites(id);
  };

  const removingFromfavorite = ({ id }) => {
    removeFromFavorites(id);
  };

  if (favorites.length === 0) {
    return "";
  }

  return (
    <>
      <SearchBar onChange={setQuery} value={query} />
      <SongWrapper
        title="Favorites :"
        songs={filteredSongs}
        playEvent={playSong}
        addToFavorites={addingToFavorite}
        removeFromFavorite={removingFromfavorite}
      />
    </>
  );
};

export default FavoritesContainer;
