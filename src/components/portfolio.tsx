import React, { Component, FunctionComponent } from "react";
import Article from "./article";
import portfolioIotChart from "../images/portfolio/iot-chart.png";
import portfolioKerberos from "../images/portfolio/kerberos.png";
import portfolioScadus from "../images/portfolio/scadus.png";
import portfolioDatalog from "../images/portfolio/datalog.png";

type PortfolioItemProps = {
  portfolioImage: string;
};

const PortfolioItem: FunctionComponent<PortfolioItemProps> = ({ portfolioImage }) => {
  return (
    <div className="col-lg-6 col-sm-12 p-2">
      <img className="img-fluid" src={portfolioImage} alt="" />
    </div>
  );
};

export default class Portfolio extends Component<{}> {
  portfolioImages: string[] = [portfolioIotChart, portfolioKerberos, portfolioScadus, portfolioDatalog];

  render() {
    return (
      <div className="container resume-section portfolio" id="portfolio">
        <Article title="Portfolio" paragraphs={[`See my work in pictures.`]} />
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            {this.portfolioImages.map((item, index) => (
              <React.Fragment key={index}>
                <PortfolioItem portfolioImage={item} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
