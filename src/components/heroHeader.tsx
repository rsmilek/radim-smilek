import React, { FunctionComponent } from "react";
import Article from "./article";
import { StaticQuery, graphql, Link } from "gatsby";

const HeroHeader: FunctionComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        {/* <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description }}
        /> */}

        <div style={{ marginTop: 60, marginBottom: 30 }}>
          <Article title={data.site.siteMetadata.home.title} paragraphs={[data.site.siteMetadata.home.description]} />
        </div>

        <Link to="/contact" className="button -primary">
          Get in touch &rarr;
        </Link>
      </div>
    )}
  />
);

export default HeroHeader;
