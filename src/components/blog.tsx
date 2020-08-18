import React, { FunctionComponent } from "react";
import Article from "./article";

type BlogProps = {
  posts: JSX.Element;
};

const Blog: FunctionComponent<BlogProps> = ({ posts }) => {
  return (
    <div className="container resume-section" id="blog">
      <Article
        title="Blog"
        paragraphs={[
          `Here you’ll find articles about software development and other topics that I’m interested in. 
          I hope you enjoy them and find them useful.`,
        ]}
      />
      <div className="grids">{posts}</div>;
    </div>
  );
};

export default Blog;
