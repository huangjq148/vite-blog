import React from "react";
import all, { categories } from "../../../config";
import style from "./index.module.less";
// import {} from "";

const Categories = (props) => {
  const {} = props;

  return (
    <div className={style.categoriesContainer}>
      <header>categories</header>
      <section>{categories.length} categories in total</section>
      <article>
        <ul>
          {categories.map((item) => (
            <li>
              <span className={style.categories}>{item}</span>
              <span className={style.count}>&nbsp;({all[item].length})</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Categories;
