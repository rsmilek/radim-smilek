import React, { Component, FunctionComponent, Fragment, RefObject, createRef } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import Logo from "../../static/assets/skills/react-icon.svg";
import styles from "./gsapTitleIcon.module.css";

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

// const GsapTitleIcon: FunctionComponent<{}> = () => {
//   const icons2D: TIcon[][] = [
//     [
//       { svg: <Logo />, title: "React", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "Angular", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: ".NET", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "Visual Studio", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "National Instruments", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "Java", iconElementRef: createRef(), titleElementRef: createRef() },
//     ],
//     [
//       { svg: <Logo />, title: "C", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "CSS5", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "C#", iconElementRef: createRef(), titleElementRef: createRef() },
//       { svg: <Logo />, title: "Delphi", iconElementRef: createRef(), titleElementRef: createRef() },
//     ],
//   ];
//   const myTween = gsap.timeline({ paused: true });

//   const doAnimation = () => {
//     const STAGGER = 0.3;
//     icons2D.forEach((icons) => {
//       const iconElementsCurrent: TDiv[] = icons.map((item) => item.iconElementRef!.current); // ! - Non-null assertion operator
//       const titleElementsCurrent: TDiv[] = icons.map((item) => item.titleElementRef!.current);
//       const DURATION = icons.length * STAGGER;
//       myTween
//         // Title - Show
//         .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
//         // Title - Hide
//         .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
//         // Icon - Show
//         .from(iconElementsCurrent, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER);
//     });
//     myTween.play();
//   };

//   // doAnimation();

//   return (
//     <Fragment>
//       {icons2D.map((icons, index) => (
//         <TitleIconList key={index} icons={icons} />
//       ))}
//     </Fragment>
//   );
// };

// export default GsapTitleIcon;

export default class GsapTitleIcon extends Component<{ isInView: boolean }> {
  icons2D: TIcon[][] = [
    [
      { svg: <Logo />, title: "React", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "Angular", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: ".NET", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "Visual Studio", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "National Instruments", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "Java", iconElementRef: createRef(), titleElementRef: createRef() },
    ],
    [
      { svg: <Logo />, title: "C", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "CSS5", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "C#", iconElementRef: createRef(), titleElementRef: createRef() },
      { svg: <Logo />, title: "Delphi", iconElementRef: createRef(), titleElementRef: createRef() },
    ],
  ];
  myTween = gsap.timeline({ paused: true });

  componentDidMount() {
    const STAGGER = 0.3;
    this.icons2D.forEach((icons) => {
      const iconElementsCurrent: TDiv[] = icons.map((item) => item.iconElementRef!.current); // ! - Non-null assertion operator
      const titleElementsCurrent: TDiv[] = icons.map((item) => item.titleElementRef!.current);
      const DURATION = icons.length * STAGGER;
      this.myTween
        // Title - Show
        .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
        // Title - Hide
        .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
        // Icon - Show
        .from(iconElementsCurrent, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER);
    });
    this.myTween.play(); // ???
  }

  componentDidUpdate() {
    console.log(this.props.isInView);
    // if (this.props.isInView) {
    //   this.myTween.play();
    // } else {
    //   this.myTween.restart();
    // }
    this.myTween.restart();
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

  doAnimation() {
    const STAGGER = 0.3;
    this.icons2D.forEach((icons) => {
      const iconElementsCurrent: TDiv[] = icons.map((item) => item.iconElementRef!.current); // ! - Non-null assertion operator
      const titleElementsCurrent: TDiv[] = icons.map((item) => item.titleElementRef!.current);
      const DURATION = icons.length * STAGGER;
      this.myTween
        // Title - Show
        .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, "Start")
        // Title - Hide
        .to(titleElementsCurrent, { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, STAGGER + 0.1)
        // Icon - Show
        .from(iconElementsCurrent, { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true }, 2 * STAGGER);
    });
    this.myTween.play();
  }
}

export const Pokus = () => (
  <InView threshold={0.5}>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <GsapTitleIcon isInView={inView} />
      </div>
    )}
  </InView>
);
