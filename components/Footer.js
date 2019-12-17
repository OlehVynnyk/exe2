import React from "react";
import { Link } from "@reach/router";
import leftArrow from "../img/leftArrow.svg";
import rightArrow from "../img/rightArrow.svg";
import shoes from "../img/shoes.svg";
import bag from "../img/bag.svg";
import "./style.module.css";

const style = {
  transform: "scaleX(-1)"
};

const Footer = ({ text }) => {
  return (
    <div className="flex justify-between pt-24">
      <div
        style={{ bottom: "70", left: "0" }}
        className="flex pl-16 justify-center items-center absolute"
      >
        <Link to="/1">
          <div className="w-16 h-8 bg-black flex justify-center items-center arrowLeft">
            <img className="w-24 py-2 px-6 icon" src={leftArrow} />
          </div>
        </Link>
        <Link to="/2">
          <div className="w-16 h-8 bg-white flex justify-center items-center arrowRight">
            <img
              style={style}
              className="w-24 py-2 px-6 icon2"
              src={rightArrow}
            />
          </div>
        </Link>
        <div className="text-xs font-bold pl-8">{text}</div>
      </div>
      <div
        style={{ bottom: "30", right: "30" }}
        className="w-4/12 h-32 bg-white flex items-center pl-10 flex justify-between absolute"
      >
        <div className="flex justify-center items-center font-semibold style">
          <img className="w-20 mr-10 style btn" src={shoes} />
          <div>
            <div
              style={{ fontSize: "11px", marginBottom: "10px" }}
              className="text-gray-500"
            >
              EDITOR'S PICK
            </div>
            <div
              className="pt-10"
              style={{ fontSize: "12px" }}
              className="w-20"
            >
              Nike Air Force 107 All Black
            </div>
          </div>
        </div>
        <div className="w-24 h-32 bg-black flex justify-center items-center btn2">
          <img src={bag} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
