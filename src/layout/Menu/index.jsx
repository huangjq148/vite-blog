import React, { useState } from "react";
import style from "./index.module.less";
import { useLocation, Link } from "react-router-dom";
import IconRender from "@/components/IconRender";
import classnames from "classnames";

const Page = () => {
  const { pathname } = useLocation();
  const [isExpand, setIsExpand] = useState(false);

  const menus = [
    { path: "/", label: "Home", icon: "icon-home-fill" },
    { path: "/about", label: "About", icon: "icon-user" },
    { path: "/tags", label: "Tags", icon: "icon-tag-fill" },
    { path: "/categories", label: "Categories", icon: "icon-appstore-fill" },
  ];
  return (
    <div className={style.menuWrap}>
      <div className={style.title}>
        <IconRender
          className={style.expandButton}
          icon={isExpand ? "icon-close" : "icon-indent"}
          onClick={() => setIsExpand(!isExpand)}
        />
        日积硅步
      </div>
      <ul className={classnames(isExpand ? style.ulExpand : "")}>
        {menus.map((item) => (
          <Link to={item.path} key={item.path}>
            <li
              className={item.path === pathname ? style.active : ""}
              onClick={() => setIsExpand(false)}
            >
              <IconRender label={item.label} icon={item.icon} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
