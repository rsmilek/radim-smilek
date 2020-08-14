import React, { Component, FunctionComponent, RefObject, createRef } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";
import Article from "./Article";
// Icons - Programming languages
import IconC from "../../static/assets/skills/c.svg";
import IconCss3 from "../../static/assets/skills/css3.svg";
import IconCsharp from "../../static/assets/skills/csharp.svg";
import IconDelphi from "../../static/assets/skills/delphi.svg";
import IconGraphql from "../../static/assets/skills/graphql.svg";
import IconHtml5 from "../../static/assets/skills/html5.svg";
import IconJavascript from "../../static/assets/skills/javascript.svg";
import IconPython from "../../static/assets/skills/python.svg";
import IconSass from "../../static/assets/skills/sass.svg";
// Frameworks & Libraries
import IconBootstrap from "../../static/assets/skills/bootstrap.svg";
import IconDotnet from "../../static/assets/skills/dotnet.svg";
import IconGatsby from "../../static/assets/skills/gatsby.svg";
import IconJquery from "../../static/assets/skills/jquery.svg";
import IconNextjs from "../../static/assets/skills/next-dot-js.svg";
import IconNodejs from "../../static/assets/skills/node-dot-js.svg";
import IconReact from "../../static/assets/skills/react-icon.svg";
import IconXamarin from "../../static/assets/skills/xamarin.svg";
// Databases
import IconInflux from "../../static/assets/skills/influx.svg";
import IconMssqlserver from "../../static/assets/skills/microsoftsqlserver.svg";
import IconMysql from "../../static/assets/skills/mysql.svg";
import IconSqlite from "../../static/assets/skills/sqlite.svg";
// Icons - IDE's & Tools
import IconDocker from "../../static/assets/skills/docker.svg";
import IconGithub from "../../static/assets/skills/github.svg";
import IconNpm from "../../static/assets/skills/npm.svg";
import IconNuget from "../../static/assets/skills/nuget.svg";
import IconSubversion from "../../static/assets/skills/subversion.svg";
import IconVisualStudio from "../../static/assets/skills/visualstudio.svg";
import IconVisualStudioCode from "../../static/assets/skills/visualstudiocode.svg";
import IconYarn from "../../static/assets/skills/yarn.svg";
// Test&Measurement & IoT
import IconLabview from "../../static/assets/skills/labview.svg";
import IconNationalInstruments from "../../static/assets/skills/national-instruments.svg";
import IconArduino from "../../static/assets/skills/arduino.svg";
import IconRaspberrypi from "../../static/assets/skills/raspberrypi.svg";
import IconZigbee from "../../static/assets/skills/zigbee.svg";

type TDivRef = RefObject<HTMLDivElement> | null;
type TDiv = HTMLDivElement | null;

type TIcon = {
  svg: JSX.Element;
  title: string;
  iconElementRef: TDivRef;
  titleElementRef: TDivRef;
};

type SkillIconProps = {
  icon: TIcon;
};

// Displays one icon of personal skill
const SkillIcon: FunctionComponent<SkillIconProps> = ({ icon }) => {
  return (
    <div className="icon-wrapper">
      <div className="icon-box">
        <div className="image" ref={icon.iconElementRef}>
          {icon.svg}
        </div>
        <div className="title" ref={icon.titleElementRef}>
          {icon.title}
        </div>
      </div>
    </div>
  );
};

type SkillProps = {
  header: string;
  headerElementRef: TDivRef;
  icons: TIcon[];
};

// Displays one category/row of personal skill = header + icons
const Skill: FunctionComponent<SkillProps> = ({ header, headerElementRef, icons }) => {
  return (
    <React.Fragment>
      <div className="article-subtitle header" ref={headerElementRef}>
        {header}
      </div>
      <div className="icons-container">
        {icons.map((item, index) => (
          <React.Fragment key={index}>
            <SkillIcon icon={item} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

type SkillsProps = {
  enableAnimation: boolean; // Enables animation of skills
  autoPlayAnimation: boolean; // True if automatically start animation on component mount; valid if animation enabled only
  isInView: boolean; // True if component is in view-port otherwise False, Notification from react intersection observer; valid if animation enabled only
};

// Displays personal skills in animated form, optionally if active in browser's view-port, see "SkillsAnim" component
export class Skills extends Component<SkillsProps> {
  static defaultProps = {
    doAnimation: false,
    autoPlayAnimation: true,
    isInView: false,
  };
  // prettier-ignore
  skills: SkillProps[] = [
    {
      header: "Programming languages &amp; IDE's",
      headerElementRef: createRef(),
      icons: [
        { svg: <IconC />, title: "C", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconCss3 />, title: "CSS3", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconCsharp />, title: "C#", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconDelphi />, title: "Delphi", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconGraphql />, title: "GraphQL", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconHtml5 />, title: "HTML5", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconJavascript />, title: "Javascript", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconPython />, title: "Python", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconSass />, title: "Sass", iconElementRef: createRef(), titleElementRef: createRef() },
      ],
    },
    {
      header: "Frameworks &amp; Libraries",
      headerElementRef: createRef(),
      icons: [
        { svg: <IconBootstrap />, title: "Bootstrap", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconDotnet />, title: ".NET", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconGatsby />, title: "Gatsby", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconJquery />, title: "JQuery", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconNextjs />, title: "NextJS", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconNodejs />, title: "NodeJS", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconReact />, title: "React", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconXamarin />, title: "Xamarin", iconElementRef: createRef(), titleElementRef: createRef() },
      ],
    },
    {
      header: "Databases",
      headerElementRef: createRef(),
      icons: [
        { svg: <IconInflux />, title: "Influx", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconMssqlserver />, title: "MS SQL", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconMysql />, title: "MySQL", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconSqlite />, title: "SQLite", iconElementRef: createRef(), titleElementRef: createRef() },
      ],
    },
    {
      header: "IDE's &amp; Tools",
      headerElementRef: createRef(),
      icons: [
        { svg: <IconDocker />, title: "Docker", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconGithub />, title: "Github", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconNpm />, title: "NPM", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconNuget />, title: "Nuget", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconSubversion />, title: "SVN", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconVisualStudio />, title: "VS", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconVisualStudioCode />, title: "VS Code", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconYarn />, title: "Yarn", iconElementRef: createRef(), titleElementRef: createRef() },
      ],
    },
    {
      header: "Test/Measurement &amp; IoT",
      headerElementRef: createRef(),
      icons: [
        { svg: <IconNationalInstruments />, title: "National Instruments", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconLabview />, title: "Labview", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconArduino />, title: "Arduino", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconRaspberrypi />, title: "Raspberry PI", iconElementRef: createRef(), titleElementRef: createRef() },
        { svg: <IconZigbee />, title: "Zigbee", iconElementRef: createRef(), titleElementRef: createRef() },
      ],
    },
  ];
  animationTween = gsap.timeline({ paused: true });

  componentDidMount() {
    if (this.props.enableAnimation) {
      this.bindAnimation();
      if (this.props.autoPlayAnimation) this.animationTween.play();
    }
  }

  componentDidUpdate() {
    if (this.props.enableAnimation && this.props.isInView) this.animationTween.restart();
  }

  render() {
    return (
      <div className="container skills" id="skills">
        <Article
          title="Skills"
          paragraphs={[
            `Worked primarily with C# and JavaScript with frameworks such as .NET, .NET Core and React.js.`,
            `Experienced in both SQL and NoSQL, having worked in companies making use of MS SQL, MySQL and
             SQLite, with personal further projects utilizing Influxdb.`,
          ]}
        />
        {this.skills.map((item, index) => (
          <Skill key={index} header={item.header} headerElementRef={item.headerElementRef} icons={item.icons} />
        ))}
      </div>
    );
  }

  bindAnimation() {
    const STAGGER = 0.3;
    this.skills.forEach((skill, index) => {
      const headerElementCurrent: TDiv = skill.headerElementRef!.current;
      const iconElementsCurrent: TDiv[] = skill.icons.map((item) => item.iconElementRef!.current); // ! - Non-null assertion operator
      const titleElementsCurrent: TDiv[] = skill.icons.map((item) => item.titleElementRef!.current);
      const DURATION = skill.icons.length * STAGGER;
      const OFFSET = 0.3 * index;
      this.animationTween
        // Header - Show
        .from(headerElementCurrent, { opacity: 0 }, 0 + OFFSET)
        // Title - Show
        .to(
          titleElementsCurrent,
          { duration: DURATION, scale: 1, opacity: 1, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          0 + OFFSET
        )
        // Title - Hide
        .to(
          titleElementsCurrent,
          { duration: DURATION, scale: 1, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          OFFSET + STAGGER + 0.1
        )
        // Icon - Show
        .from(
          iconElementsCurrent,
          { duration: DURATION, scale: 0.5, opacity: 0, delay: 0, stagger: STAGGER, ease: "elastic", force3D: true },
          OFFSET + 2 * STAGGER
        );
    });
  }
}

// Displays personal skills in animated form when active in browser's view-port
const SkillsAnim: FunctionComponent<{}> = () => (
  <InView threshold={0.5}>
    {({ inView, ref, entry }) => (
      <div ref={ref}>
        <Skills enableAnimation={true} autoPlayAnimation={false} isInView={inView} />
      </div>
    )}
  </InView>
);

export default SkillsAnim;
