import React, { useEffect, useState } from "react";
import IconRender from "@/components/IconRender";
import style from "./index.module.less";
import classNames from "classnames";

const ScrollToTop = () => {
  const [isShowButton, setIsShowButton] = useState(false);
  useEffect(() => {
    window.document.addEventListener("scroll", function (e) {
      if (document.documentElement.scrollTop > 300) {
        setIsShowButton(true);
      } else {
        setIsShowButton(false);
      }

      return () => {
        window.document.body.removeEventListener("scroll");
      };
    });
  }, []);
  return (
    <div
      className={style.buttonWrap}
      style={{ display: isShowButton ? "block" : "none" }}
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
      onTouchEndCapture={() => {
        document.documentElement.scrollTop = 0;
      }}
    >
      <IconRender iconSize={40} icon="icon-up-circle-fill" />
    </div>
  );
};

export default ScrollToTop;
