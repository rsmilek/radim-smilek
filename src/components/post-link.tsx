import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

type PostLinkProps = {
  key: any;
  post: any;
};

const PostLink: FunctionComponent<PostLinkProps> = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
);

export default PostLink;
