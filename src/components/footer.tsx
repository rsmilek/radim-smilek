import React, { FunctionComponent } from "react";
import IconGatsby from "../../static/assets/skills/gatsby.svg";
import IconNetlify from "../../static/assets/skills/netlify.svg";

type FooterIconLinkProps = {
  title: string;
  href: string;
  icon: JSX.Element;
};

const FooterIconLink: FunctionComponent<FooterIconLinkProps> = ({ title, href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title} <div className="footer-icon baseline">{icon}</div>
    </a>
  );
};

const Footer: FunctionComponent<{}> = () => {
  return (
    <footer className="container footer">
      Copyright &copy; {new Date().getFullYear()} &bull; Designed &amp; developed by Radim Smílek with{" "}
      <FooterIconLink title="Gatsby" href="https://www.gatsbyjs.org/" icon={<IconGatsby />} /> &amp;{" "}
      <FooterIconLink title="Netlify" href="https://www.netlify.com/" icon={<IconNetlify />} />
    </footer>
  );
};

export default Footer;
