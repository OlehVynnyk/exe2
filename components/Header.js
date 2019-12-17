import React from "react";
import Text from "./Text";
import menu from "../img/menu.svg";
import look from "../img/look.svg";
import avatar from "../img/avatar.svg";

const Header = () => {
  return (
    <div className="flex justify-between pt-10 px-10">
      <div className="flex">
        <img src={menu} />
        <Text className="pl-6 text-xl">kalli</Text>
      </div>
      <div className="flex">
        <img src={look} />
        <img className="pl-6" src={avatar} />
      </div>
    </div>
  );
};

export default Header;
