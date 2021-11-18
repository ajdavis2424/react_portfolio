// Components are imported here
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact";
import Works from "./Components/Works/Works"
import Intro from "./Components/Intro/Intro"
import Testimonials from "./Components/Testimonials/Testimonials"
import "./app.scss"

// Componets are passed through here in App.js
function App() {
  return (
      <main className= "app">
        <Header />
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
