import React from "react";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import style from "./index.module.less";

const Page = ({ children }) => {
  return (
    <div className={style.appContainer}>
      <div className={style.leftWrap}>
        <Menu />
        <UserInfo />
      </div>
      <div className={style.contentWrap}>{children}</div>
    </div>
  );
};

export default Page;
