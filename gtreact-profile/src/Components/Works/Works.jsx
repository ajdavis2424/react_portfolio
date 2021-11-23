import { useState } from "react";
import "./works.scss"

function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data =[
        {
        id: "1",
        icon: "./assets/image",
        title: "Branding",
        desc: "lorem Ipsum blah blah blah",
        img:"asstes/images/Functioning Website.jpeg",
    },
    {
        id: "2",
        icon: "./assets/image",
        title: "Branding",
        desc: "lorem Ipsum blah blah blah",
        img:"",
    },
    {
        id: "3",
        icon: "./assets/image",
        title: "Branding",
        desc: "lorem Ipsum blah blah blah",
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
                            <img src="assets/images/Strong-Password-Generator.jpeg" alt="" />
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
