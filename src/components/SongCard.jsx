import React from "react";
import useVerifyIsFavorite from "../Hooks/useVerifyIsFavorite";

import {
  SongCardMain,
  CardImage,
  CardText,
  FlexWrapper,
  CardIcon,
} from "../styles/components/SongCard";

import PlayButton from "../assets/PlayButton.svg";
import HeartButton from "../assets/heartButton.svg";
import heartLiked from "../assets/heartLikedButton.svg";

const SongCard = ({
  id,
  src,
  autor,
  cover,
  name,
  event,
  addToFavorites,
  removeFromFavorite,
}) => {
  const isFavorite = useVerifyIsFavorite(id);

  return (
    <SongCardMain>
      <CardImage loading="lazy" src={cover} alt="Cover Song" />
      <FlexWrapper>
        <div>
          <CardText>{name}</CardText>
          <CardText>{autor}</CardText>
        </div>
        <div>
          <CardIcon
            src={PlayButton}
            onClick={() => event({ src, name, cover, autor, id })}
            alt="Play Icon"
          />
          {isFavorite ? (
            <CardIcon
              src={heartLiked}
              onClick={() => removeFromFavorite({ id })}
              alt="Liked Icon"
            />
          ) : (
            <CardIcon
              src={HeartButton}
              onClick={() => addToFavorites({ id })}
              alt="Like Icon"
            />
          )}
        </div>
      </FlexWrapper>
    </SongCardMain>
  );
};

export default SongCard;
