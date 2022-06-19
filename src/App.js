import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Proyects } from "./components/Proyects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills/>
      <Proyects />
      <Contact />
    </div>
  );
}

export default App;
