import React from "react";
import "./index.module.less";
import "github-markdown-css/github-markdown-light.css"
// import "github-markdown-css/github-markdown-light.css"

const MarkdownParser = (props) => {
  const { content } = props;

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    ></div>
  );
};

export default MarkdownParser;
