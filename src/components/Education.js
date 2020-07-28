import React, { Component } from "react";
import Article from "./Article";

export default class Education extends Component {
  render() {
    return (
      <div className="container" id="education">
        <Article
          title="Education"
          paragraphs={[
            `We have been educated since birth, but the most important things will teach us life ourselves...
             Follow the education that others have committed to me.`,
          ]}
        />
        <div className="article-subtitle">Technical University of Ostrava</div>
        <div className="article-paragraph italic">Bachelor of Engineering - BE &bull; 1992 - 1997</div>
        <div className="article-paragraph italic">Electronics and telecommunications technology, Measurement and automation technology</div>
        <div className="article-paragraph">
          Diploma thesis - Automated monitoring of frames and signaling of 2Mbit/s flows in telecommunications - creation of an application for data collection and
          analysis in LabVIEW including device drivers for GPIB bus (call analyzer Gm EPC91 and flow multiplexer Tesla MLT293)
        </div>
        <div className="article-subtitle">High School of Rožnov pod Radhoštěm</div>
        <div className="article-paragraph italic">Leaving examination &bull; 1988 – 1992</div>
        <div className="article-paragraph italic">Microelectronics</div>
        <div className="article-paragraph">
          Graduation project - electronic potentiometer for audio signal level control with visualization of settings with the help of LED
        </div>
      </div>
    );
  }
}
