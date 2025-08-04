import Navigation from "./modules/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Publications from "./pages/Publications";
import Research from "./pages/Research";
import Developer from "./pages/Developer";
import Designer from "./pages/Designer";
import Home from "./pages/Home";
import About from "./pages/About";

import { ParallaxProvider } from "react-scroll-parallax";
import { createBrowserHistory } from "history";
import ScrollToTop from "./modules/ScrollToTop";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

import { projects } from "./data/projects";
import { devProjects } from "./data/devProjects";
import NotFound from "./pages/NotFound";

const history = createBrowserHistory();

const designImage = require("./images/design/magicspell.jpeg");
const video0 = require("./images/videos/video0.mp4");
const video1 = require("./images/videos/video1.mp4");
const video2 = require("./images/videos/video2.mp4");
const video3 = require("./images/videos/video3.mp4");

const projImages = {};
const devImages = {};
for (let project of projects) {
    projImages[project.id] = require(`./images/${project.image}`);
}
for (let project of devProjects) {
    devImages[project.id] = require(`./images/${project.image}`);
}

function App() {
    useEffect(() => {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = isMobile ? window.outerHeight : window.innerHeight;
        // Then we set the value in the --vh custom property to the root of the document
        document
            .querySelector(".overall-border")
            .style.setProperty("height", `${vh}px`);

        // We listen to the resize event
        window.addEventListener("resize", () => {
            // We execute the same script as before
            vh = isMobile ? window.outerHeight : window.innerHeight;
            document
                .querySelector(".overall-border")
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
                        .querySelector(".overall-border")
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
                <div className="overall-border"></div>
                <Routes>
                    <Route path="/" exact element={<Home />} />

                    <Route
                        path="/publications"
                        exact
                        element={<Publications />}
                    />

                    <Route
                        path="/project/:id"
                        exact
                        element={<About projImages={projImages} />}
                    />

                    <Route
                        path="/projects"
                        exact
                        element={
                            <Research
                                projImages={projImages}
                                history={history}
                            />
                        }
                    />

                    <Route
                        path="/developer"
                        exact
                        element={<Developer devImages={devImages} />}
                    />

                    <Route
                        path="/designer"
                        exact
                        element={
                            <Designer
                                designImage={designImage}
                                video0={video0}
                                video1={video1}
                                video2={video2}
                                video3={video3}
                            />
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </ParallaxProvider>
    );
}

export default App;
