import React from "react";
import { Link } from "react-router-dom";
import { IconsWrapper, ImgIcon } from "../styles/components/MenuMobile";

import HomeIconActive from "../assets/homeActive.svg";
import HeartButton from "../assets/heartLikedButton.svg";

const MenuMobile = () => {
  return (
    <IconsWrapper>
      <Link to="/">
        <ImgIcon size="25" src={HomeIconActive} alt="Home Icon" />
      </Link>
      <Link to="/favorites">
        <ImgIcon size="25" src={HeartButton} alt="Heart Icon" />
      </Link>
    </IconsWrapper>
  );
};

export default MenuMobile;
