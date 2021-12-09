import React from "react";

const IconRender = ({ icon, label }) => {
  return (
    <>
      <span className={`iconfont ${icon}`}></span>
      {label ? <>&nbsp;</> : ""}
      {label ? label : ""}
    </>
  );
};

export default IconRender;
