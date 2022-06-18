import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { LinkSocial } from "./components/LinkSocial";
import { NavBar } from "./components/NavBar";
import { Proyects } from "./components/Proyects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Proyects/>
      <Contact />
      <LinkSocial />
    </div>
  );
}

export default App;
