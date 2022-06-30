import Navigation from "./modules/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Developer from "./pages/Developer";
import Designer from "./pages/Designer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ParallaxProvider } from 'react-scroll-parallax';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <ParallaxProvider>
      <Router history={history}>
        <Navigation />
        <div className="border"></div>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/publications" exact element={<Publications />} />

          <Route path="/research" exact element={<Research />} />

          <Route path="/projects" exact element={<Developer />} />

          <Route path="/designer" exact element={<Designer />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
