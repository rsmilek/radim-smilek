import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="footer">
          <p>Copyright &copy; {new Date().getFullYear()} &bull; Designed &amp; developed by Radim Smílek</p>
        </footer>
      </div>
    );
  }
}
