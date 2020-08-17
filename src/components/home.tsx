import React, { Component } from "react";
import gsap from "gsap";

type TDiv = HTMLDivElement | null;

export default class Home extends Component<{}> {
  headlineElementFirst: TDiv = null;
  headlineElementSecond: TDiv = null;
  headlineElementThird: TDiv = null;
  dividerElement: TDiv = null;
  descriptionElement: TDiv = null;
  buttonElement: TDiv = null;
  animationTween = gsap.timeline({ paused: true });

  componentDidMount() {
    const OFFSET = 0.7;
    this.animationTween
      // Headline - moving
      .from(
        [this.headlineElementFirst, this.headlineElementSecond, this.headlineElementThird],
        { y: 44, stagger: 0.1, ease: "none" },
        OFFSET
      )
      // Headline - visibility
      .from(
        [this.headlineElementFirst, this.headlineElementSecond, this.headlineElementThird],
        { opacity: 0, stagger: 0.1, ease: "power2.in" },
        OFFSET
      )
      // Divider - visibility
      .from(this.dividerElement, { opacity: 0, ease: "none", duration: 1 }, OFFSET + 0.1)
      // Description - visibility
      .from(this.descriptionElement, { opacity: 0, x: -200, ease: "elastic.out", duration: 2 }, OFFSET + 0.1)
      // Button - visibility
      .from(this.buttonElement, { opacity: 0 }, OFFSET + 0.3)
      .play();
  }

  render() {
    return (
      <header className="masthead" id="home">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <div>
                <h1 className="text-black font-weight-bold" ref={(el) => (this.headlineElementFirst = el)}>
                  Hi,
                </h1>
                <h1 className="text-black font-weight-bold" ref={(el) => (this.headlineElementSecond = el)}>
                  I'm Radim Smílek,
                </h1>
                <h1 className="text-black font-weight-bold" ref={(el) => (this.headlineElementThird = el)}>
                  software developer.
                </h1>
              </div>
              <div ref={(el) => (this.dividerElement = el)}>
                <hr className="divider my-4" />
              </div>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h4 className="text-black font-weight-bold mb-5" ref={(el) => (this.descriptionElement = el)}>
                Desktop &bull; Web &bull; Mobile
              </h4>
              <div ref={(el) => (this.buttonElement = el)}>
                <a className="button -primary js-scroll-trigger" href="#about-me">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
