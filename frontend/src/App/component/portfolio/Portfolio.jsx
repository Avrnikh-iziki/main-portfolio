import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

const list = ["Mobile App", "Web App", "Data Science", "Games"]

export default function Portfolio({ Data }) {
  const [selected, setSelected] = useState("Mobile App");
  const [data, setData] = useState([]);
  const [an, setan] = useState(false)
  useEffect(() => {
    switch (selected) {
      case "Web App":
        setData(Data.Web_App);
        break;
      case "Mobile App":
        setData(Data.Mobile_App);
        break;
      case "Data Science":
        setData(Data.Data_Science);
        break;
      case "Games":
        setData(Data.Games);
        break;
      default:
        setData(Data.Mobile_App);
    }
  }, [selected, Data]);

  return (
    <>
      <div className="bg" style={{ backgroundImage: "url(https://res.cloudinary.com/avrnikh/image/upload/v1641770785/clavierbg_dntbea.jpg)" }} >
      </div>
      <div className="portfolio" id="portfolio">
        <div className="url-container">
          <h1>Portfolio</h1>
          <ul>
            {list.map((item, index) => (
              <PortfolioList
                key={index}
                title={item}
                active={selected === item}
                setSelected={setSelected}
                setan={setan}
              />
            ))}
          </ul>
        </div>
        <div className="container">
          {data.map((d, index) => (
            <div key={index}>
              <div className={an ? "item an" : "item"}
                onAnimationEnd={() => setan('')}
              >
                <img src={d.img} alt="" />
                <div className="item-bg">
                  <div className="hover-items">
                    <div className="title">{d.title}</div>
                    <div className="icons">
                      <a href={d.git} className="icon">
                        <i className="fab fa-github"></i>
                      </a>
                      {
                        d.web && <a href={d.web} className="icon">
                          <i className="fa fa-globe"></i>
                        </a>
                      }

                    </div> 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
