import React, { Component } from "react";
import IconGatsby from "../../static/assets/skills/gatsby.svg";
import IconNetlify from "../../static/assets/skills/netlify.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Copyright &copy; {new Date().getFullYear()} &bull; Designed &amp; developed by Radim Smílek with{" "}
          <a href="https://www.gatsbyjs.org/">
            Gatsby
            {<IconGatsby className="footer-icon" />}
          </a>{" "}
          &amp;{" "}
          <a href="https://www.netlify.com/">
            Netlify
            {<IconNetlify className="footer-icon" />}
          </a>
        </p>
      </footer>
    );
  }
}
