import React, { useEffect, useState } from "react";
import classnames from "classnames";
import style from "./index.module.less";
import IconRender from "@/components/IconRender";

const PageItemRender = (props) => {
  const { content, disabled, isFocus, onClick } = props;
  return content === "..." ? (
    <span>...</span>
  ) : (
    <div
      className={classnames(
        style.pageItem,
        isFocus ? style.pageItemFocused : "",
        disabled ? style.pageItemDisabled : ""
      )}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

const calculatePage = (totalPage, current) => {
  const FIRST = 1;
  const LAST = totalPage;
  let tmp = [];
  switch (totalPage) {
    case 1:
      tmp = [1];
    case 2:
      tmp = [1, 2];
    case 3:
      tmp = [1, 2, 3];
  }
  if (totalPage <= 3) {
    return tmp;
  }

  const prePage = current - 1 < FIRST ? FIRST : current - 1;
  const nextPage = current + 1 > LAST ? LAST : current + 1;

  if (prePage <= FIRST + 1) {
    tmp = Array.from(new Set([FIRST, prePage, current, nextPage, "...", LAST]));
  } else if (nextPage >= LAST - 1) {
    tmp = Array.from(new Set([FIRST, "...", prePage, current, nextPage, LAST]));
  } else {
    tmp = [FIRST, "...", prePage, current, nextPage, "...", LAST];
  }

  return tmp;
};

const Component = (props) => {
  const {
    total,
    size,
    current,
    showBackground = true,
    onCurrentChange = () => {},
  } = props;
  const [innerPagination, setInnerPagination] = useState({
    current: 1,
    total: 0,
    totalPage: 0,
    size: 10,
    ...props,
  });
  const [showPages, setShowPages] = useState([]);

  useEffect(() => {
    const totalPage = Math.ceil(innerPagination.total / innerPagination.size);
    setInnerPagination({
      ...innerPagination,
      totalPage,
    });
  }, []);

  useEffect(() => {
    const tmp = calculatePage(
      innerPagination.totalPage,
      innerPagination.current
    );
    setShowPages(tmp);
  }, [
    innerPagination.current,
    innerPagination.size,
    innerPagination.totalPage,
  ]);

  const changeCurrent = (currentNum) => {
    if (currentNum > innerPagination.totalPage || currentNum < 1) {
      return;
    }
    setInnerPagination({
      ...innerPagination,
      current: currentNum,
    });
  };

  return (
    <div className={classnames(showBackground ? style.paginationWrap : null)}>
      <PageItemRender
        content={<IconRender icon="icon-left" />}
        disabled={innerPagination.current === 1}
        onClick={() => {
          changeCurrent(innerPagination.current - 1);
        }}
      />
      {showPages.map((item, index) => {
        return (
          <PageItemRender
            key={`${item}${index}`}
            content={item}
            onClick={() => {
              changeCurrent(item);
              onCurrentChange(item);
            }}
            isFocus={innerPagination.current === item}
          />
        );
      })}
      <PageItemRender
        content={<IconRender icon="icon-right" />}
        disabled={innerPagination.current === innerPagination.totalPage}
        onClick={() => {
          changeCurrent(innerPagination.current + 1);
        }}
      />
    </div>
  );
};

export default Component;
