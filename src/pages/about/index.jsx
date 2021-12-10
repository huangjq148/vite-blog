import React from "react";
import style from "./index.module.less";

const AboutMe = (props) => {
  const {} = props;

  return (
    <div className={style.userInfoContainer}>
      <div className={style.name}>Huang Jianqiang（黄坚强）</div>
      <div className={style.desc}>A Programmer</div>
      <div className={style.skillsWrap}>
        <div className={style.title}>Skills</div>
        <hr />
        <ul className={style.skills}>
          <li>Vue</li>
          <li>React</li>
          <li>Nodejs</li>
        </ul>
      </div>
      <div className={style.contact}>
        <div className={style.title}>Contact</div>
        <hr />
        <div className={style.email}>583075772@qq.com</div>
      </div>
    </div>
  );
};

export default AboutMe;
