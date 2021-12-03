import { useState } from "react";
import "./works.scss"

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data =[
        {
        id: "1",
        // icon: "./assets/images/GoodMorning-Cup.jpeg",
        title: "Front End",
        desc: "Projects will show my ability to build on the front end of projects using a variety of languages",
        img:"./assets/images/codepic.jpeg",
    },
    {
        id: "2",
        // icon: "./assets/image",
        title: "Back-End",
        desc: "Projects will show my ability to build back-end database via SQL & NOSQL languagess",
        img:"",
    },
    {
        id: "3",
        // icon: "./assets/image",
        title: "Security",
        desc: "Password Generator creates a unique password for users most private information",
        img:"",
    },
    ];

    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    };
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${ currentSlide * 100}vw)` }} >
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            
                            {/* icon title, and button */}
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon}/>
                                </div>
                                <h2>{d.title}</h2>
                                <p> {d.desc}</p>
                                <span>
                                   projects 
                                </span>
                            </div>
                        </div>
                        
                        <div className="right">
                            <img src="./assets/images/codepic.jpeg" alt="" />
                        </div>
                        
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/images/white-arrow-png-41954.png" className="arrow left" alt="" onClick={() =>handleClick("left")} />
            <img src="assets/images/white-arrow-png-41954.png" className="arrow right" alt="" onClick={() =>handleClick()} />
        </div>
    );
}

export default Works
