import React from "react";
import style from "./index.module.less";
import IconRender from "@/components/IconRender";
import { files, categories } from "../../../config/index";

const UserInfo = (props) => {
  const {} = props;

  const articlesInfo = [
    { count: files.length, desc: "posts" },
    { count: categories.length, desc: "categories" },
    { count: 0, desc: "tags" },
  ];

  const ItemRender = ({ item, isShowBorder }) => {
    return (
      <div className={`${style.item} ${isShowBorder ? style.border : null}`}>
        <div className={style.count}>{item.count}</div>
        <div className={style.desc}>{item.desc}</div>
      </div>
    );
  };

  return (
    <div className={style.userInfoContainer}>
      <div className={style.avatarWrap}>
        <img
          src="https://img1.baidu.com/it/u=927342739,204721214&fm=26&fmt=auto"
          alt=""
        />
      </div>
      <div className={style.name}>Huang Jianqiang</div>
      <div className={style.motto}>把优秀当成习惯</div>
      <div className={style.articles}>
        {articlesInfo.map((item, index) => (
          <ItemRender key={item.desc} item={item} isShowBorder={index == 1} />
        ))}
      </div>
      <div className={style.connectInfo}>
        <div>
          <IconRender icon="icon-github-fill" label="GitHub" />
        </div>
        <div>
          <IconRender icon="icon-mail-fill" label="E-Mail" />
        </div>
        <div>
          <IconRender icon="icon-weibo" label="Weibo" />
        </div>
        <div>
          <IconRender icon="icon-zhihu-circle-fill" label="知乎" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
