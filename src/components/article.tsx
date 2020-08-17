import React, { FunctionComponent } from "react";

type ArticleProps = {
  title: string;
  paragraphs: string[];
  image: JSX.Element;
};

// Displays resume's article
const Article: FunctionComponent<ArticleProps> = ({ title, paragraphs, image, children }) => {
  return (
    <React.Fragment>
      <div className="article-title inline">{title}</div>
      {image}
      {paragraphs.map((paragraph, index) => (
        <div key={index} className={"article-paragraph " + (index === 0 ? "inline" : "mt-1")}>
          {paragraph}
        </div>
      ))}
      {children}
    </React.Fragment>
  );
};

export default Article;
