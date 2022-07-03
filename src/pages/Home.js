import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { isMobile } from "react-device-detect";
import { Link } from 'react-router-dom';

import CardContainer from '../modules/CardContainer';
import Experience from '../modules/Experience';
import Education from '../modules/Education';

import { currentProjects, education, experience } from "../data";
import bgVideo from "../images/bg-video.mp4";
import project1 from "../images/story.jpeg";
import project2 from "../images/note-taking.jpeg";
import project3 from "../images/schedule.jpeg";
import { projects } from '../data/projects';

const imgs = [project1, project2, project3];

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
                        <Parallax speed={isMobile ? -5 : -15}>
                            <h3>Hello 🙋‍♀️</h3>
                            I am a PhD student at MIT Sloan in the Information Technologies (IT) group - a subgroup of the Management Science program. 
                            My general research area is <b>social computing</b> and <b>computational social science</b> at the intersection of computer science, data science, and social science. I employ data-driven computational thinking and methods to explore social science questions. Specifically, I am interested in human-AI collaboration, online discussions/meetings, and misinformation on social media.<br/>
                            <br/>
                            jaeyoons [at] mit [dot] edu
                        </Parallax>
                    </div>
                </div>
                
            </section>

            <section className="full-height bg-white py-5 px-3">
                <aside className="row mb-5 mt-5">
                    <div className="col-12 col-md-3 col-lg-2">
                        <h2 className="text-serif">Experience</h2>
                    </div>

                    <div className="col-12 indent col-md-7 col-lg-5">
                        {experience.map((exp, i) => 
                            <Experience key={i} exp={exp} />
                        )}
                    </div>
                </aside>

                <aside className="row mb-5 mt-2">
                    <div className="col-12 col-md-3 col-lg-2">
                        <h2 className="text-serif">Education</h2>
                    </div>

                    <div className="col-12 indent col-md-7 col-lg-5">
                        {education.map((edu, i) => 
                            <Education key={i} edu={edu} />
                        )}
                    </div>
                </aside>

                <aside className="row mb-5 mt-2">
                    <div className="col-12 col-md-3 col-lg-2">
                        <h2 className="text-serif">Resume</h2>
                    </div>

                    <div className="col-12 indent col-md-7 col-lg-5">
                        <div className="mb-2">
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

            <section className="full-height bg-gradient row current-projects">
                <div className={`col-11 mb-4 ${isMobile ? "text-center" : "text-right"}`}>
                    <h2>
                        <strong>Current Projects</strong>
                    </h2>
                    <p>
                    Ongoing projects I'm working on.<br/>
                    Please contact me for more information.
                    </p>
                </div>

                {currentProjects.map((project, i) =>
                    <div key={i} className="project col-12 col-md-4"
                        style={{
                            backgroundImage: `url(${imgs[i]})`,
                        }}
                    >
                        <div className="overlay">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                )}   

                <div className="col-12 center mt-4 mb-4">
                    <Link to="/projects" className="btn">View More</Link>
                </div>

                <div className={`col-11 mt-4 mb-4 ${isMobile && "text-center"}`}>
                    <h2>
                        <strong>Featured Projects</strong>
                    </h2>
                    <p className="text-black">
                    Selected projects among the ones I have previously participated in.<br/>
                    You can click each project to view more information.
                    </p>
                </div>

                {projects.filter(proj => proj.featured).slice(0, 3).map((project, i) =>
                    <div key={i} className="project col-12 col-md-4"
                        style={{
                            backgroundImage: `url(${require(`../images/${project.image}`)})`,
                        }}
                    >
                        <div className="overlay">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </div>
                )} 

                <div className="col-12 center mt-4 mb-4">
                    <Link to="/projects" className="btn">View More</Link>
                </div>
            </section>

            <footer className="bg-red pt-5 text-center text-black">
                &copy; Jaeyoon Song 2022
            </footer>
        </div>
    );
}

export default Home;