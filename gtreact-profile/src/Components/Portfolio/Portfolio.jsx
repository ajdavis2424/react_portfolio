import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio, designPortfolio, contentPortfolio, } from "../../data"

function Portfolio() {
    // whenever something from array is selected it will be active class
        const [selected, setSelected] = useState("featured");
    const list =[
        {
            id: "featured",
        title: "Featured",
        },
        {
            id: "web",
        title: "Web App",
        },
        {
            id: "mobile",
        title: "Mobile App",
        },
        {
            id: "design",
        title: "Design",
        },
        {
            id: "content",
        title: "Content",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {/* map through array above listed as "list" and return PortfolioList */}
                {list.map((item) => (
                    <PortfolioList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
                
                
                {/* <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Designing</li>
                <li>Branding</li> */}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
                <div className="item">
                    <img src="gtreact-profile/public/assets/images/Weather App Image.png" alt="" />
                    <h3>Weather App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
