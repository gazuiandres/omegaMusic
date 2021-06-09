import { useContext } from "react";
import Context from "../context/Context";

const useIsFavorite = (id) => {
  const {
    state: { favorites },
  } = useContext(Context);

  let isFavorite = false;

  favorites.forEach((fav) => {
    if (fav.id === id) isFavorite = true;
  });

  return isFavorite;
};

export default useIsFavorite;
