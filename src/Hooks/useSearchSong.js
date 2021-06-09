import { useState, useMemo } from "react";

const useSearchSong = (songs) => {
  const [query, setQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useMemo(() => {
    const result = songs.filter((song) => {
      return song.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredSongs(result);
  }, [songs, query]);

  return { query, setQuery, filteredSongs };
};

export default useSearchSong;
