import React from "react";
import Text from "./Text";
import shoes1 from "../img/shoes1.png";
import shoes2 from "../img/shoes11.png";

const firstShoe = {
  width: "90%",
  right: "30%",
  top: "60px",
  transform: "rotate(35deg)",
  position: "absolute"
};
const secondShoe = {
  width: "90%",
  left: "34%",
  top: "175px",
  transform: "rotate(-34deg)",
  position: "absolute"
};

const SecondCircle = () => {
  return (
    <div className="flex justify-between items-center pl-10">
      <div>
        <div className="w-16">
          <div
            style={{
              fontSize: "10px",
              borderRightWidth: "14px",
              height: "2px"
            }}
            className="font-semibold border-r border-black flex order-first items-center"
          >
            NEW IN
          </div>
        </div>
        <Text className="text-3xl w-48 pt-10 pb-4 header">
          Nike Super Shoes
        </Text>
        <div
          style={{ fontSize: "12px" }}
          className="font-semibold border-solid border-b-2 border-black inline-block"
        >
          Buy Now
        </div>
      </div>
      <div className="relative">
        <div
          style={{ width: "450px", height: "450px" }}
          className="rounded-full bg-blue-500 pulse"
        >
          <div className="header">
            <img style={firstShoe} className="dot2" src={shoes2} />
          </div>
          <div className="header2">
            <img className="dot" style={secondShoe} src={shoes1} />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{ width: "222px", height: "0px" }}
          className="invisible"
        ></div>
      </div>
    </div>
  );
};

export default SecondCircle;
