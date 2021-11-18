// Components are imported here
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact";
import Works from "./Components/Works/Works"
import Intro from "./Components/Intro/Intro"
import Testimonials from "./Components/Testimonials/Testimonials"
import "./app.scss"
import { useState } from 'react';
import Menu from "./Components/Menu/Menu";

// Componets are passed through here in App.js--- importing state above
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
      <main className= "app">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        
        <div className="sections"> 
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
        
      </main>
    );
}

export default App;
