import { About } from "./components/About";
import { Home } from "./components/Home";
import { LinkSocial } from "./components/LinkSocial";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <LinkSocial />
    </div>
  );
}

export default App;
