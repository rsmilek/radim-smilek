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

type TIcon = { svg: JSX.Element /*; title: string; iconElementRef: TDivRef; titleElementRef: TDivRef */ };
type SkillProps = {
  header: string;
  icons: TIcon[];
};

const Skill: FunctionComponent<SkillProps> = ({ header, icons }) => {
  return (
    <React.Fragment>
      <div className="article-subtitle skill-header">{header}</div>
      <div className="row skill-icons">
        {icons.map((icon, index) => (
          <div key={index} className="skill-icon">
            {icon.svg}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default class Skills extends Component<{}> {
  iconsProgLanguages: TIcon[] = [
    { svg: <IconC /> },
    { svg: <IconCss3 /> },
    { svg: <IconCsharp /> },
    { svg: <IconDelphi /> },
    { svg: <IconGraphql /> },
    { svg: <IconHtml5 /> },
    { svg: <IconJavascript /> },
    { svg: <IconPython /> },
    { svg: <IconSass /> },
  ];
  iconsFwsLibs: TIcon[] = [
    { svg: <IconBootstrap /> },
    { svg: <IconDotnet /> },
    { svg: <IconGatsby /> },
    { svg: <IconJquery /> },
    { svg: <IconNextjs /> },
    { svg: <IconNodejs /> },
    { svg: <IconReact /> },
    { svg: <IconXamarin /> },
  ];
  iconsDatabases: TIcon[] = [{ svg: <IconInflux /> }, { svg: <IconMicrosoftsqlserver /> }, { svg: <IconMysql /> }, { svg: <IconSqlite /> }];
  iconsIdeTools: TIcon[] = [
    { svg: <IconDocker /> },
    { svg: <IconGithub /> },
    { svg: <IconNpm /> },
    { svg: <IconNuget /> },
    { svg: <IconSubversion /> },
    { svg: <IconVisualStudio /> },
    { svg: <IconVisualStudioCode /> },
    { svg: <IconYarn /> },
  ];
  iconsTMIot: TIcon[] = [
    { svg: <IconNationalInstruments /> },
    { svg: <IconLabview /> },
    { svg: <IconArduino /> },
    { svg: <IconRaspberrypi /> },
    { svg: <IconZigbee /> },
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
