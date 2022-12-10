import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navber from "./Components/Navber";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Home></Home>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>

      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
