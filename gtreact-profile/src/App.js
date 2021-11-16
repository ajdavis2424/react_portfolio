// Components are imported here
import Header from './Components/Header';
import Project from './Components/Project';
import Footer from './Components/Footer';


// Componets are passed through here in App.js
function App() {
  return (
      <main className= "app">
        <Header />
        <About />
        <Project />
        <Footer />
      </main>
    );
}

export default App;
