import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, MenuMain, MenuItem } from "../styles/components/MenuSidebar";

import HomeIconActive from "../assets/homeActive.svg";
// import HeartButton from "../assets/heartButton.svg";
import HeartLiked from "../assets/heartLikedButton.svg";

const MenuSide = (props) => {
  return (
    <Sidebar>
      <MenuMain>
        <MenuItem>
          <Link to="/">
            <div>
              <img src={HomeIconActive} alt="Home Icon" />
              <p>Home</p>
            </div>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/favorites">
            <div>
              <img src={HeartLiked} alt="Favorites Icon" />
              <p>Favorites</p>
            </div>
          </Link>
        </MenuItem>
      </MenuMain>
    </Sidebar>
  );
};

export default MenuSide;
