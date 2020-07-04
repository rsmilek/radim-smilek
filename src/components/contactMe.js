import React, { Component } from "react";

class ContactMe extends Component {
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

export default ContactMe;
