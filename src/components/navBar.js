import React, { Component } from "react";
import $ from "jquery"; // Bootstrap core JS
import ThemeChanger from "./themeChanger";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#myNavbar",
      offset: 75,
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#myNavbar").offset().top > 100) {
        $("#myNavbar").addClass("navbar-scrolled");
      } else {
        $("#myNavbar").removeClass("navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 72,
            },
            1000,
            "easeInOutExpo"
          );
          return false;
        }
      }
    });
  }

  render() {
    return (
      <div id="pageTop">
        <nav className="navbar navbar-expand-lg fixed-top" id="myNavbar">
          {/* Button (Hamburger menu) at first means to be most left in navigation bar on collapse */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* First in DOM, no order applied */}
          <a className="navbar-brand js-scroll-trigger" href="#pageTop">
            Navbar
          </a>
          {/* Second in DOM, order 2, re-order 3 on large screens
              NOTE: Items to always show keep out of the navbar-collapse div */}
          <div className="d-flex flex-row order-2 order-lg-3">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <span className="nav-link px-2">
                  <ThemeChanger />
                </span>
              </li>
            </ul>
          </div>
          {/* Third in DOM, order 3, re-order 2 on large screens */}
          <div className="collapse navbar-collapse order-3 order-lg-2" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarHome">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarLink">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#myNavbarDisabled">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="mt-5">
          <p className="p-5 m-5"></p>
          <p className="p-5 m-5"></p>
          <section id="myNavbarHome">
            <p className="p-5 m-5">Home</p>
          </section>
          <section id="myNavbarLink">
            <p className="p-5 m-5">Link</p>
          </section>
          <section id="myNavbarDropdown">
            <p className="p-5 m-5">Dropdown</p>
          </section>
          <section id="myNavbarAction">
            <p className="p-5 m-5">Action</p>
          </section>
          <section id="myNavbarAnother">
            <p className="p-5 m-5">Another</p>
          </section>
          <section id="myNavbarSomething">
            <p className="p-5 m-5">Something</p>
          </section>
          <section id="myNavbarDisabled">
            <p className="p-5 m-5">Disabled</p>
          </section>
        </div>
      </div>
    );
  }
}

export default NavBar;
