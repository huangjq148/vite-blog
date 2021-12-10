import React, { useState, useEffect } from "react";
import style from "./index.module.less";
import IconRender from "@/components/IconRender";
import MarkdownParser from "@/components/MarkdownParser";
import Pagination from "@/components/Pagination";

const modules = import.meta.glob("../../markdown/*/*.md");

const Article = ({ article }) => (
  <div className={style.article}>
    <div className={style.titleWrap}>
      <span className={style.title}>{article.title}</span>
    </div>
    <div className={style.articleInfo}>
      <IconRender
        icon="icon-calendar"
        label={
          <>
            <span className={style.desc}>Posted on </span>
            <span className={style.underlineDashed}>{article.postedTime}</span>
          </>
        }
      />
      <span className={style.textWithBorder}>
        <IconRender
          icon="icon-calendar-check"
          label={
            <>
              <span className={style.desc}>Edited on </span>
              <span className={style.underlineDashed}>
                {article.updateTime}
              </span>
            </>
          }
        />
      </span>
      <IconRender
        icon="icon-folder"
        label={
          <>
            <span className={style.desc}>In </span>
            <span className={style.underline}>{article.category}</span>
          </>
        }
      />
    </div>
    <hr />
    <div className={style.content}>
      <MarkdownParser content={article.content} />
    </div>
    <div>
      <div className={style.button}>
        Read more <IconRender icon="icon-doubleright" />
      </div>
    </div>
  </div>
);

const Page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const tmp = [];
      for (let key in modules) {
        const fileContent = await modules[key]();
        const fileName = key.slice(key.lastIndexOf("/") + 1, key.length - 3);
        tmp.push({
          id: key,
          title: fileName,
          postedTime: "2021-08-21",
          updateTime: "2021-08-21",
          category: "组件开发",
          content: fileContent.default,
        });
      }
      setArticles(tmp);
      console.log(articles);
    };
    fun();
  }, []);

  return (
    <div className={style.articleContainer}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
      <Pagination total={100} />
    </div>
  );
};

export default Page;
