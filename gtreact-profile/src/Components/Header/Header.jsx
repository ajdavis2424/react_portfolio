import "./header.scss"
import {Person, Mail} from "@material-ui/icons"

// Passing props through
function Header({menuOpen, setMenuOpen }) {
    return (
        // using state to make hamburger menu dynamic/rotate (in App.js)!!
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                {/* anchor */}
                <a href="#intro" className="logo">LOGO</a>
                <div className="itemContainer">
                    {/* Person & Mail come from materialze icon install */}
                    <Person className="icon"/>
                    <span> 813-465-8252</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" />
                    <span> ajdavis2424@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
