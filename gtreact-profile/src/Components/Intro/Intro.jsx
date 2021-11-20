import "./intro.scss"
import { init } from 'ityped'
 
function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="gtreact-profile/public/assets/IMG_1380.jpeg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1> Alexander J. Davis</h1>
                    <h3> Full-Stack <span>Engineer</span></h3>
                </div>
                <a href="#portfolio">
                down arrow here
                </a>
            </div>
        </div>
    )
}

export default Intro
