import React from "react";
import Header from "./Header";
import Circle from "./Circle";
import Footer from "./Footer";

const style = {
  boxSizing: "border-box",
  height: "calc(100% - 60px)"
};

const FirstPage = () => {
  return (
    <div
      style={{ borderWidth: "30px" }}
      className="border border-orange-500 fadein"
    >
      <div style={style} className="bg-gray-200 flex flex-col justify-between">
        <Header />
        <Circle />
        <Footer text="01-02" />
      </div>
    </div>
  );
};

export default FirstPage;
