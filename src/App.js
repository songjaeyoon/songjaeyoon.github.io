import Navigation from "./modules/Navigation";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Developer from "./pages/Developer";
import Designer from "./pages/Designer";
import Home from "./pages/Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import { createBrowserHistory } from "history";
import Logo from "./modules/Logo";
import ScrollToTop from "./modules/ScrollToTop";

const history = createBrowserHistory();

function App() {
  return (
    <ParallaxProvider>
      <Router history={history}>
        <ScrollToTop />
        <Logo />
        <Navigation />
        <div className="border"></div>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/publications" exact element={<Publications />} />

          <Route path="/projects" exact element={<Research />} />

          <Route path="/developer" exact element={<Developer />} />

          <Route path="/designer" exact element={<Designer />} />

        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
