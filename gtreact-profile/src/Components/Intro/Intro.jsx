import "./intro.scss"
// for animation
import { init } from 'ityped'
import { useEffect, useRef } from "react"
 
function Intro() {
    // useRef is the hook
    const textRef = useRef();

    useEffect(()=> {
// empty [] means the useeffect will happen 1 time only
// console.log(textRef);
// this was pulled from npm ityped documentation-- displays animation text
init(textRef.current, { 
    showCursor: true, 
    backDelay: 1500,
    backSpeed: 60,
    strings: [ "Full-Stack Engineer", "Project Manager", "M.B.A." ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/images/IMG_1313.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There! I'm</h2>
                    <h1> Alexander J. Davis</h1>
                    <h3> Emerging <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                <img src="./assets/images/white-arrow-png-41944.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
