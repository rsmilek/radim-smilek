import React, { Component, FunctionComponent, Fragment, RefObject, createRef } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import styles from "./gsapTitleIcon.module.css";
import IconC from "../../static/assets/skills/c.svg";
import IconCss3 from "../../static/assets/skills/css3.svg";
import IconCsharp from "../../static/assets/skills/csharp.svg";
import IconDelphi from "../../static/assets/skills/delphi.svg";
import IconReact from "../../static/assets/skills/react-icon.svg";
import IconDotnet from "../../static/assets/skills/dotnet.svg";
import IconXamarin from "../../static/assets/skills/xamarin.svg";
import IconNodejs from "../../static/assets/skills/node-dot-js.svg";
import IconJquery from "../../static/assets/skills/jquery.svg";
import IconNationalInstruments from "../../static/assets/skills/national-instruments.svg";

type TDivRef = RefObject<HTMLDivElement> | null;
type TDiv = HTMLDivElement | null;
type TIcon = { svg: JSX.Element; title: string; iconElementRef: TDivRef; titleElementRef: TDivRef };
type TTitleIconProps = { icon: TIcon };
type TTitleIconListProps = { icons: TIcon[] };

// We can use children even though we haven't defined them in our TTitleIconProps
const TitleIcon: FunctionComponent<TTitleIconProps> = ({ icon }) => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.iconBox}>
        <div className={styles.imgFluid} ref={icon.iconElementRef}>
          {icon.svg}
        </div>
        <div className={styles.iconBoxCaption} ref={icon.titleElementRef}>
          <div className={styles.iconTitle}>{icon.title}</div>
        </div>
      </div>
    </div>
  );
};

const TitleIconList: FunctionComponent<TTitleIconListProps> = ({ icons }) => {
  return (
    <div className={styles.iconContainer}>
      {icons.map((item, index) => (
        <Fragment key={index}>
          <TitleIcon icon={item} />
        </Fragment>
      ))}
    </div>
  );
};

type GsapTitleIconProps = {
  isInView: boolean;
  autoStartAnimation: boolean;
};

export default class GsapTitleIcon extends Component<GsapTitleIconProps> {
  icons2D: TIcon[][] = [
    [
      { svg: <IconReact />, title: "React", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconXamarin />, title: "Xamarin", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconDotnet />, title: ".NET", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconNodejs />, title: "Node JS", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconNationalInstruments />, title: "National Instruments", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconJquery />, title: "JQuery", iconElementRef: createRef(), titleElementRef: createRef() },
    ],
    [
      { svg: <IconC />, title: "C", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconCss3 />, title: "CSS5", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconCsharp />, title: "C#", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <IconDelphi />, title: "Delphi", iconElementRef: createRef(), titleElementRef: createRef() },
    ],
  ];
  myTween = gsap.timeline({ paused: true });

  static defaultProps = {
    autoStartAnimation: true,
    isInView: false,
  };

  componentDidMount() {
    this.bindAnimation();
    if (this.props.autoStartAnimation) this.myTween.play();
  }

  componentDidUpdate() {
    if (this.props.isInView) this.myTween.restart();
  }

  render() {
    return (
      <Fragment>
        {this.icons2D.map((icons, index) => (
          <TitleIconList key={index} icons={icons} />
        ))}
      </Fragment>
    );
  }

  bindAnimation() {
    const STAGGER = 0.3;
    this.icons2D.forEach((icons) => {
      const iconElementsCurrent: TDiv[] = icons.map((item) => item.iconElementRef!.current); // ! - Non-null assertion operator
      const titleElementsCurrent: TDiv[] = icons.map((item) => item.titleElementRef!.current);
      const DURATION = icons.length * STAGGER;
      this.myTween
        // Title - Show
        .to(
          titleElementsCurrent,
          { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          "Start"
        )
        // Title - Hide
        .to(
          titleElementsCurrent,
          { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          STAGGER + 0.1
        )
        // Icon - Show
        .from(
          iconElementsCurrent,
          { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          2 * STAGGER
        );
    });
  }
}

export const GsapTitleIconAnim = () => (
  <InView threshold={0.5}>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <GsapTitleIcon isInView={inView} />
      </div>
    )}
  </InView>
);
