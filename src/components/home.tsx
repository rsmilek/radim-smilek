import React, { Component, createRef, RefObject } from "react";
import gsap from "gsap";

type TDivRef = RefObject<HTMLDivElement> | null;
type TDiv = HTMLDivElement | null;

export default class Home extends Component<{}> {
  headlines: TDivRef = createRef();
  headlineFirst: TDivRef = createRef();
  headlineSecond: TDivRef = createRef();
  headlineThird: TDivRef = createRef();
  animationTween = gsap.timeline({ paused: true });

  componentDidMount() {
    this.animationTween
      .from(
        [this.headlineFirst!.current, this.headlineSecond!.current, this.headlineThird!.current],
        { y: 44, stagger: 0.1, ease: "none" },
        0.2
      )
      .from(
        [this.headlineFirst!.current, this.headlineSecond!.current, this.headlineThird!.current],
        { opacity: 0, stagger: 0.1, ease: "power2.in" },
        0.2
      );
    //   .from(this.headlines!.current, { /*y: 20, */ opacity: 0, ease: "power3.out" }, 0.5);
    this.animationTween.play();
  }
  //   this.animationTween.from(
  //     [this.headlineFirst!.current, this.headlineSecond!.current, this.headlineThird!.current],
  //     { y: 44, opacity: 0, stagger: 0.25, ease: "none" },
  //     0.75
  //   );

  //
  //   this.animationTween.from(
  //     [this.headlineFirst!.current, this.headlineSecond!.current, this.headlineThird!.current],
  //     { y: 44, opacity: 0, stagger: 1, ease: "power3.out" },
  //     0.25
  //   );

  //   { y: 44, ease: Power3.easeOut, delay: 0.8, stagger: 0.15 },
  //   { opacity: 0, stagger: 0.15, ease: "elastic" },
  //   { opacity: 0, stagger: 0.15, ease: "power3.out" },
  //   { y: 44, opacity: 0, stagger: 0.25, ease: "power3.out" },
  //
  //   .to(
  //     titleElementsCurrent,
  //     { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
  //     0 + OFFSET
  //   )

  render() {
    return (
      <header className="masthead" id="home">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <div ref={this.headlines}>
                <h1 className="text-black font-weight-bold" ref={this.headlineFirst}>
                  Hi,
                </h1>
                <h1 className="text-black font-weight-bold" ref={this.headlineSecond}>
                  I'm Radim Smílek,
                </h1>
                <h1 className="text-black font-weight-bold" ref={this.headlineThird}>
                  software developer.
                </h1>
              </div>
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
