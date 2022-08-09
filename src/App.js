import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Proyects } from "./components/Proyects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="animate__animated animate__fadeIn   animate__delay-0.5s" >
      <NavBar />
      <Home /> 
      <About />
      <Skills/>
      <Proyects />
    </div>
  );
}

export default App;
