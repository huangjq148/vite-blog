import React from "react";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import ScrollToTop from "../components/ScrollToTop";
import style from "./index.module.less";

const Page = ({ children }) => {
  return (
    <div className={style.appContainer}>
      <ScrollToTop />
      <div className={style.leftWrap}>
        <Menu />
        <UserInfo />
      </div>
      <div className={style.contentWrap}>{children}</div>
    </div>
  );
};

export default Page;
