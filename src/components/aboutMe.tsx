import React, { FunctionComponent } from "react";
import profile from "../images/profile.jpg";
import Article from "./article";

const AboutMe: FunctionComponent = () => {
  return (
    <div className="container resume-section about-me" id="about-me">
      <Article
        title="About Me"
        paragraphs={[
          `I am a SW developer and architect with several years of experience in the field management of technological processes 
             and processing of data obtained from them. I have worked mainly on desktop applications, but in now days primarily 
             on web and mobile applications.`,
          `I am an independent, creative, purposeful person with a high workload deployment. I have always tried to be
             a useful member of the team working on the project, but with knowledge of the issue also manage it.`,
          `For programming, I enjoy solving problems that occur in the real world in such a way that they are elegant, 
             meaningful and logical on the inside and user-friendly and intuitive on the outside, but above all useful and 
             effective for the given purpose.`,
          `My hobbies are  walking with dog and long distance trail running.`,
        ]}
        image={<img className="img-fluid img-profile rounded-circle" src={profile} alt="" />}
      ></Article>
    </div>
  );
};

export default AboutMe;
