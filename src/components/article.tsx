import React, { FunctionComponent } from "react";

type ArticleProps = {
  title: string;
  paragraphs: string[];
};

// Displays resume's article
const Article: FunctionComponent<ArticleProps> = ({ title, paragraphs }) => {
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
