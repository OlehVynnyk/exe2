import React from "react";
import classnames from "classnames";

const Text = ({ children, className }) => {
  return (
    <div className={classnames("font-extrabold", className)}>{children}</div>
  );
};

export default Text;
