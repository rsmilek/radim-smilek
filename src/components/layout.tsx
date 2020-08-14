import React, { FunctionComponent } from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
// import Navigation from "../components/navigation";
import Footer from "./footer";
import "prismjs/themes/prism-okaidia.css";

const Layout: FunctionComponent<{}> = ({ children }) => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        {/* <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div> */}
        {/* <Navigation /> */}
      </header>
      {children}
      {/* <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Delog &bull; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://w3layouts.com">W3Layouts</a>
        </p>
      </footer> */}
      <Footer />
    </div>
  );
};

export default Layout;
