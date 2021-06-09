import React from "react";
import { PageTitle, CardWrapper } from "../styles/components/SongWrapper";

import SongCard from "./SongCard";

const SongWrapper = ({
  title,
  songs,
  playEvent,
  addToFavorites,
  removeFromFavorite,
}) => {
  return (
    <>
      <PageTitle>{title}</PageTitle>
      <CardWrapper>
        {songs.map((song) => (
          <SongCard
            key={song.id}
            {...song}
            event={playEvent}
            addToFavorites={addToFavorites}
            removeFromFavorite={removeFromFavorite}
          />
        ))}
      </CardWrapper>
    </>
  );
};

export default SongWrapper;
