import React, { Component, FunctionComponent } from "react";
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
import IconMicrosoftsqlserver from "../../static/assets/skills/microsoftsqlserver.svg";
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

type TIcon = { svg: JSX.Element; title: string /*iconElementRef: TDivRef; titleElementRef: TDivRef */ };

type SkillIconProps = {
  icon: TIcon;
};

type SkillProps = {
  header: string;
  icons: TIcon[];
};

const SkillIcon: FunctionComponent<SkillIconProps> = ({ icon }) => {
  return (
    <div className="iconWrapper">
      <div className="iconBox">
        <div className="imgFluid" /*ref={icon.iconElementRef}*/>{icon.svg}</div>
        <div className="iconBoxCaption" /*ref={icon.titleElementRef}*/>
          <div className="iconTitle">{icon.title}</div>
        </div>
      </div>
    </div>
  );
};

const Skill: FunctionComponent<SkillProps> = ({ header, icons }) => {
  return (
    <React.Fragment>
      <div className="article-subtitle skill-header">{header}</div>
      <div className="skill-container">
        {icons.map((item, index) => (
          <React.Fragment key={index}>
            <SkillIcon icon={item} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default class Skills extends Component<{}> {
  iconsProgLanguages: TIcon[] = [
    { svg: <IconC />, title: "C" },
    { svg: <IconCss3 />, title: "CSS3" },
    { svg: <IconCsharp />, title: "C#" },
    { svg: <IconDelphi />, title: "Delphi" },
    { svg: <IconGraphql />, title: "GraphQL" },
    { svg: <IconHtml5 />, title: "HTML5" },
    { svg: <IconJavascript />, title: "Javascript" },
    { svg: <IconPython />, title: "Python" },
    { svg: <IconSass />, title: "Sass" },
  ];
  iconsFwsLibs: TIcon[] = [
    { svg: <IconBootstrap />, title: "Bootstrap" },
    { svg: <IconDotnet />, title: ".NET" },
    { svg: <IconGatsby />, title: "Gatsby" },
    { svg: <IconJquery />, title: "JQuery" },
    { svg: <IconNextjs />, title: "NextJS" },
    { svg: <IconNodejs />, title: "NodeJS" },
    { svg: <IconReact />, title: "React" },
    { svg: <IconXamarin />, title: "Xamarin" },
  ];
  iconsDatabases: TIcon[] = [
    { svg: <IconInflux />, title: "Influx" },
    { svg: <IconMicrosoftsqlserver />, title: "MS SQL" },
    { svg: <IconMysql />, title: "MySQL" },
    { svg: <IconSqlite />, title: "SQLite" },
  ];
  iconsIdeTools: TIcon[] = [
    { svg: <IconDocker />, title: "Docker" },
    { svg: <IconGithub />, title: "Github" },
    { svg: <IconNpm />, title: "NPM" },
    { svg: <IconNuget />, title: "Nuget" },
    { svg: <IconSubversion />, title: "SVN" },
    { svg: <IconVisualStudio />, title: "VS" },
    { svg: <IconVisualStudioCode />, title: "VS Code" },
    { svg: <IconYarn />, title: "Yarn" },
  ];
  iconsTMIot: TIcon[] = [
    { svg: <IconNationalInstruments />, title: "National Instruments" },
    { svg: <IconLabview />, title: "Labview" },
    { svg: <IconArduino />, title: "Arduino" },
    { svg: <IconRaspberrypi />, title: "Raspberry PI" },
    { svg: <IconZigbee />, title: "Zigbee" },
  ];

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
        <Skill header="Programming languages &amp; IDE's" icons={this.iconsProgLanguages} />
        <Skill header="Frameworks &amp; Libraries" icons={this.iconsFwsLibs} />
        <Skill header="Databases" icons={this.iconsDatabases} />
        <Skill header="IDE's &amp; Tools" icons={this.iconsIdeTools} />
        <Skill header="Test/Measurement &amp; IoT" icons={this.iconsTMIot} />
      </div>
    );
  }
}
