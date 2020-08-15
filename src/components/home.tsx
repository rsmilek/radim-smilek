import React, { Component } from "react";

export default class Home extends Component<{}> {
  render() {
    return (
      <header className="masthead" id="home">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-black font-weight-bold">Hi,</h1>
              <h1 className="text-black font-weight-bold">I'm Radim Smílek,</h1>
              <h1 className="text-black font-weight-bold">software developer.</h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h4 className="text-black font-weight-bold mb-5">Desktop &bull; Web &bull; Mobile</h4>
              <a className="button -primary" href="#skills">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
