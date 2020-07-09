import React, { Component } from "react";
import IconEmail from "../../static/assets/social/email.svg";
import IconLinkedin from "../../static/assets/social/linkedin.svg";
import IconGithub from "../../static/assets/social/github.svg";
import IconFacebook from "../../static/assets/social/facebook.svg";
import IconInstagram from "../../static/assets/social/instagram.svg";

const SocialIcon = ({ icon, href }) => {
  return (
    <a className="social-icon" href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default class ContactMe extends Component {
  render() {
    return (
      <div className="container" id="contactme">
        <div className="row">
          <div className="col-md">
            <div className="headline">Contact Me</div>
            <div className="primary-content">
              I am interested freelance opportunities - especially ambitious or large projects. However, if
              you have other request or question, do not hesitate to contact me using beside form either.
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
            <form
              className="contactme"
              action="https://sendmail.w3layouts.com/SubmitContactForm"
              method="post"
            >
              <div className="d-flex flex-column primary-content">
                <input className="p-1 mb-2" type="text" name="w3lName" id="w3lName" placeholder="Name" />
                <input
                  className="p-1 mb-2"
                  type="email"
                  name="w3lSender"
                  id="w3lSender"
                  placeholder="Email"
                />
                <input
                  className="p-1 mb-2"
                  type="text"
                  name="w3lSubject"
                  id="w3lSubject"
                  placeholder="Subject"
                />
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
  }
}
