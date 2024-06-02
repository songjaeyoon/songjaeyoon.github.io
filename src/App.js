import Navigation from "./modules/Navigation";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Developer from "./pages/Developer";
import Designer from "./pages/Designer";
import Home from "./pages/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import { createBrowserHistory } from "history";
import ScrollToTop from "./modules/ScrollToTop";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

const history = createBrowserHistory();

function App() {
    useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = isMobile ? window.outerHeight : window.innerHeight;
        // Then we set the value in the --vh custom property to the root of the document
        document
            .querySelector(".border")
            .style.setProperty("height", `${vh}px`);

        // We listen to the resize event
        window.addEventListener("resize", () => {
            // We execute the same script as before
            vh = isMobile ? window.outerHeight : window.innerHeight;
            document
                .querySelector(".border")
                .style.setProperty("height", `${vh}px`);
        });

        if (isMobile) {
            window.addEventListener("scroll", () => {
                console.log(vh);
                console.log(window.outerHeight);
                console.log(window.innerHeight);
                if (vh !== window.outerHeight) {
                    vh = window.outerHeight;
                    document
                        .querySelector(".border")
                        .style.setProperty("height", `${vh}px`);
                }
            });
        }
    }, []);

    return (
        <ParallaxProvider>
            <Router history={history}>
                <ScrollToTop />
                <Navigation />
                <div className="border"></div>
                <Routes>
                    <Route path="/" exact element={<Home />} />

                    <Route
                        path="/publications"
                        exact
                        element={<Publications />}
                    />

                    <Route path="/projects" exact element={<Research />} />

                    <Route path="/developer" exact element={<Developer />} />

                    <Route path="/designer" exact element={<Designer />} />
                </Routes>
            </Router>
        </ParallaxProvider>
    );
}

export default App;
