import React from "react";
import Header from "./Header";
import SecondCircle from "./SecondCircle";
import Footer from "./Footer";

const style = {
  boxSizing: "border-box",
  height: "calc(100% - 60px)"
};

const SecondPage = () => {
  return (
    <div
      style={{ borderWidth: "30px" }}
      className="border border-blue-500 element fadein"
    >
      <div style={style} className="bg-gray-200 flex flex-col justify-between">
        <Header />
        <SecondCircle />
        <Footer text="02-02" />
      </div>
    </div>
  );
};

export default SecondPage;
