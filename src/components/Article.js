import React from "react";

const Article = ({ title, paragraphs }) => {
  return (
    <React.Fragment>
      <div className="article-title inline">{title}</div>
      {paragraphs.map((paragraph, index) => (
        <div key={index} className={"article-paragraph " + (index === 0 ? "inline" : "")}>
          {paragraph}
        </div>
      ))}
    </React.Fragment>
  );
};

export default Article;
