import React from 'react';
import bgVideo from "../images/bg-video.mp4";
import { Parallax } from 'react-scroll-parallax';
import CardContainer from '../modules/CardContainer';
import Experience from '../modules/Experience';
import Education from '../modules/Education';
import { education, experience } from "../data";

const Home = () => {
    return (
        <div className="container">
            <section className="full-height bg-white initial-section">
                <CardContainer />
                <h1 className="title">
                    <strong>Jaeyoon Song</strong><br/>
                    UX researcher @Boston
                </h1>
            </section>
            <section className="full-height bg-red center">
                <div className="video-wrapper">
                    <video 
                        src={bgVideo} 
                        autoPlay={true} 
                        muted={true}
                        loop={true}
                        className="bg-video"
                    />
                </div>
                <div className="row">
                    <div className="col-md-5"></div>
                    <div className="col-12 col-md-6 intro">
                        <Parallax speed={-10}>
                            <h3>Hello 🙋‍♀️</h3>
                            I am a PhD student at MIT Sloan in the Information Technologies (IT) group - a subgroup of the Management Science program. 
                            My general research area is <b>social computing</b> and <b>computational social science</b> at the intersection of computer science, data science, and social science. I employ data-driven computational thinking and methods to explore social science questions. Specifically, I am interested in human-AI collaboration, online discussions/meetings, and misinformation on social media.<br/>
                            <br/>
                            jaeyoons [at] mit [dot] edu
                        </Parallax>
                    </div>
                </div>
                
            </section>

            <section className="full-height bg-white py-4 px-3">
                <aside class="row mb-5 mt-5">
                    <div class="col-12 col-md-3 col-lg-2">
                        <h2 class="text-serif">Experience</h2>
                    </div>

                    <div class="col-12 indent col-md-7 col-lg-5">
                        {experience.map((exp, i) => 
                            <Experience key={i} exp={exp} />
                        )}
                    </div>
                </aside>

                <aside class="row mb-5 mt-2">
                    <div class="col-12 col-md-3 col-lg-2">
                        <h2 class="text-serif">Education</h2>
                    </div>

                    <div class="col-12 indent col-md-7 col-lg-5">
                        {education.map((edu, i) => 
                            <Education key={i} edu={edu} />
                        )}
                    </div>
                </aside>

                <aside class="row mb-5 mt-2">
                    <div class="col-12 col-md-3 col-lg-2">
                        <h2 class="text-serif">Resume</h2>
                    </div>

                    <div class="col-12 indent col-md-7 col-lg-5">
                        <div class="mb-2">
                            <a href="/pdf/CV.pdf"><b>🔗 Resume as a Researcher</b></a><br/>
                            Last updated: 10/16/2021
                        </div>
                        <div>
                            <a href="https://bit.ly/developerjaeyoon"><b>🔗 Resume as a Developer</b></a><br/>
                            Last updated: 03/07/2022
                        </div>
                    </div>
                </aside>

            </section>

            <section className="full-height bg-red py-4">

            </section>
        </div>
    );
}

export default Home;