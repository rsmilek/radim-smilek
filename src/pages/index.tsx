import React, { FunctionComponent, Fragment } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
// import HeroHeader from "../components/heroHeader";
import MainNavbar from "../components/mainNavbar";
import Home from "../components/home";
import AboutMe from "../components/aboutMe";
import SkillsAnim from "../components/skills";
import Education from "../components/education";
import Portfolio from "../components/portfolio";
import Blog from "../components/blog";
import ContactMe from "../components/contactMe";

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    allMarkdownRemark: { edges: any };
  };
};

const IndexPage: FunctionComponent<IndexPageProps> = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge: any) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Fragment>
      <Home />
      <Layout>
        <Helmet>
          <title>{site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <MainNavbar />
        <AboutMe />
        <Education />
        <SkillsAnim />
        <Portfolio />
        <Blog posts={Posts} />
        {/* <HeroHeader /> */}
        {/* <h2>Blog Posts &darr;</h2>
        <div className="grids">{Posts}</div> */}
        <ContactMe />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
