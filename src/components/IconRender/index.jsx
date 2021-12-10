import React from "react";

const IconRender = (props) => {
  const { icon, label, iconSize, ...restProps } = props;

  return (
    <span {...restProps}>
      <span
        className={`iconfont ${icon}`}
        style={{ fontSize: `${iconSize}px` }}
      ></span>
      {label ? <>&nbsp;</> : ""}
      {label ? label : ""}
    </span>
  );
};

export default IconRender;
