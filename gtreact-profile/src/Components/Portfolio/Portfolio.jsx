import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio, designPortfolio, contentPortfolio, webPortfolio, mobilePortfolio } from "../../data.js"

function Portfolio() {
    // whenever something from array is selected it will be active class
        const [selected, setSelected] = useState("featured");
        const [data,setData] = useState([]);
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

        // to choose selected and selct data
    useEffect(() => {

        switch(selected){
            case "featured" :setData(featuredPortfolio);
            break;
            case "design" :setData(designPortfolio);
            break;
            case "content" :setData(contentPortfolio);
            break;
            case "mobile" :setData(mobilePortfolio);
            break;
            case "web" :setData(webPortfolio);
            break;
            default: setData(featuredPortfolio);
        }
    },[selected])


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
                {data.map((d) => (
                <div className="item">
                    <img src={d.img}alt="" /> 
                    {/* <img src="./assets/images/GoodMorning-Cup.jpeg" alt=""  /> */}
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src={d.img}alt="" /> 
                    {/* <img src="./assets/images/Weather App Image.png" alt=""  /> */}
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio
