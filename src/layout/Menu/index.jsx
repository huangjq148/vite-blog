import React from "react";
import style from "./index.module.less";
import { useLocation, Link } from "react-router-dom";
import IconRender from "@/components/IconRender";

const Page = () => {
  const { pathname } = useLocation();

  const menus = [
    { path: "/", label: "Home", icon: "icon-home-fill" },
    { path: "/about", label: "About", icon: "icon-user" },
    { path: "/tags", label: "Tags", icon: "icon-tag-fill" },
  ];
  return (
    <div className={style.menuWrap}>
      <div className={style.title}>日积硅步</div>
      <ul>
        {menus.map((item) => (
          <Link to={item.path} key={item.path}>
            <li className={item.path === pathname ? style.active : ""}>
              <IconRender label={item.label} icon={item.icon} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Page;
