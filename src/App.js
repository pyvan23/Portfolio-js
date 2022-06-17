import { About } from "./components/About";
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
      <LinkSocial />
    </div>
  );
}

export default App;
