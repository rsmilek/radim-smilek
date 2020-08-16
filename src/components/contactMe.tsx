import React, { FunctionComponent } from "react";
import Article from "./article";
import IconEmail from "../../static/assets/social/email.svg";
import IconLinkedin from "../../static/assets/social/linkedin.svg";
import IconGithub from "../../static/assets/social/github.svg";
import IconFacebook from "../../static/assets/social/facebook.svg";
import IconInstagram from "../../static/assets/social/instagram.svg";

type SocialIconProps = {
  icon: JSX.Element;
  href: string;
};

const SocialIcon: FunctionComponent<SocialIconProps> = ({ icon, href }) => {
  return (
    <a className="social-icon" href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

type ContactInputProps = {
  id: string;
  type: string;
  placeholder: string;
};

const ContactInput: FunctionComponent<ContactInputProps> = ({ id, type, placeholder }) => {
  return <input className="p-1 mb-2" type={type} name={id} id={id} placeholder={placeholder} />;
};

const ContactMe: FunctionComponent<{}> = () => {
  return (
    <div className="container resume-section" id="contactme">
      <div className="row">
        <div className="col-md">
          <div className="mb-4">
            <Article
              title="Contact Me"
              paragraphs={[
                `I am interested freelance opportunities - especially ambitious or large projects. However, if
                   you have other request or question, do not hesitate to contact me using beside form either.`,
              ]}
            />
          </div>
          <div className="social">
            <SocialIcon icon={<IconEmail />} href="mailto:smilek.radim@gmail.com" />
            <SocialIcon icon={<IconLinkedin />} href="https://www.linkedin.com/in/smilekradim/" />
            <SocialIcon icon={<IconGithub />} href="https://github.com/rsmilek" />
            <SocialIcon icon={<IconFacebook />} href="https://www.facebook.com/radim.smilek" />
            <SocialIcon icon={<IconInstagram />} href="https://www.instagram.com/smilek.radim/" />
          </div>
        </div>
        <div className="col-md">
          <form className="contactme" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div className="d-flex flex-column primary-content">
              <ContactInput id="w3lName" type="text" placeholder="Name" />
              <ContactInput id="w3lSender" type="email" placeholder="Email" />
              <ContactInput id="w3lSubject" type="text" placeholder="Subject" />
              <textarea className="p-1" name="w3lMessage" id="w3lMessage" placeholder="Message" />
            </div>
            <div className="d-flex flex-row-reverse">
              <input type="submit" className="button -primary" style={{ marginRight: 0 }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
