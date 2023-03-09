import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { isMobile } from "react-device-detect";

const Home = () => {

    let injected = false;

    useEffect(() => {
        if (!injected) {
            injected = true;
            const script = document.createElement("script");

            script.src = "js/sphere.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }, []);

    return (
        <div className="container">
            <section className="full-height initial-section">

                <div className="col-11 col-md-6">
                    <p className="initial-text">
                        <strong className="mobile-small">Jaeyoon Song</strong> <br/>
                        <span className="text-weight-normal">PhD Student @ MIT Sloan</span> <br/>
                        UX, HCI, Social Computing, Computational Social Science
                    </p>

                    <Parallax speed={isMobile ? -5 : -15} className="text-muted text-small">
                        Hello 🧚🏻 <br/>
                        I am a PhD student at MIT Sloan in the Information Technologies (IT) group - a subgroup of the Management Science program. 
                        My general research area is <b>social computing</b> and <b>computational social science</b> at the intersection of computer science, data science, and social science. I employ data-driven computational thinking and methods to explore social science questions. Specifically, I am interested in human-AI collaboration, online discussions/meetings, and misinformation on social media.<br/>
                        <br/>
                        jaeyoons [at] mit [dot] edu
                    </Parallax>
                </div>
            </section>

            <div id="sphere"></div>
        </div>
    );
}

export default Home;