import React from "react";
import Text from "./Text";
import shoes1 from "../img/shoes2.png";
import shoes2 from "../img/shoes22.png";

const firstShoe = {
  width: "85%",
  right: "32%",
  top: "10px",
  transform: "rotate(39deg)",
  position: "absolute"
};
const secondShoe = {
  width: "85%",
  left: "36%",
  top: "135px",
  transform: "rotate(-35deg)",
  position: "absolute"
};

const Circle = () => {
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
        <Text className="text-3xl w-48 pt-10 pb-4 header">Sport Shoes</Text>
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
          className="rounded-full bg-orange-500 pulse"
        >
          <div className="header">
            <img className="dot2" style={firstShoe} src={shoes2} />
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

export default Circle;
