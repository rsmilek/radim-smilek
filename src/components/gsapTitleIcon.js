import React, { Component } from "react";
import gsap from "gsap";
import Logo from "../../static/assets/skills/react-icon.svg";
import "./gsapTitleIcon.css";

const TitleIcon = ({ items }) => {
  return (
    <div className="icon-container">
      {items.map((item, index) => (
        <div key={index} className="icon-wrapper">
          <div className="icon-box">
            <div className="img-fluid" ref={item.iconElementRef}>
              {item.icon}
            </div>
            <div className="icon-box-caption" ref={item.titleElementRef}>
              <div className="icon-title">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default class GsapTitleIcon extends Component {
  constructor(props) {
    super(props);
    this.myTween = gsap.timeline({ paused: true });
    this.icons2 = [
      { icon: <Logo />, title: "React", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Angular", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: ".NET", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Visual Studio", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "National Instruments", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
      { icon: <Logo />, title: "Java", iconElementRef: React.createRef(), titleElementRef: React.createRef() },
    ];
  }

  componentDidMount() {
    const STAGGER = 0.3;
    const DURATION = 6 * STAGGER;
    const iconElements2Current = this.icons2.map((item) => item.iconElementRef.current);
    const titleElements2Current = this.icons2.map((item) => item.titleElementRef.current);
    this.myTween
      // Title2 - Show
      .to(titleElements2Current, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
      // Title2 - Hide
      .to(titleElements2Current, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
      // Icon2 - Show
      .from(iconElements2Current, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER)
      .play();
  }

  render() {
    return (
      <React.Fragment>
        <TitleIcon items={this.icons2} />
      </React.Fragment>
    );
  }
}
