import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="jumbo"></div>
        <section className="full-height initial-section">
          <div className="col-11 col-md-6">
            <div className="pyramid">
              <div className="side left"></div>
              <div className="side front"></div>
              <div className="side right"></div>
              <div className="side back"></div>
            </div>
            <h1 className="mb-1">Jaeyoon Song</h1>
            <p>
              <span className="text-weight-normal">PhD Student @ MIT</span>{" "}
              <br />
              Human-centered AI, Social Computing, Computational Social Science
            </p>
            <p className="text-muted text-small">
              Hello, I am a PhD student at MIT Sloan School of Management in the
              Information Technologies (IT) group - a subgroup of the Management
              Science program. My general research area is{" "}
              <b>social computing</b> and <b>computational social science</b> at
              the intersection of computer science, data science, and social
              science. I employ data-driven computational thinking and methods
              to explore social science questions. Specifically, I am interested
              in human-AI collaboration in various contexts such as customer
              support, creative writing, and online meetings.
              <br />
              <br />
              <a href="https://www.linkedin.com/in/jyoonsong/" target="_blank">
                Linkedin
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a href="https://github.com/jyoonsong" target="_blank">
                GitHub
              </a>{" "}
              &nbsp;|&nbsp; jaeyoons@mit.edu
            </p>
          </div>
        </section>
      </div>
      {/* <section className="full-height initial-section">
        <div className="col-11 col-md-6">
          <p className="initial-text">
            <strong className="mobile-small">Jaeyoon Song</strong> <br />
            <span className="text-weight-normal">
              PhD Student @ MIT Sloan
            </span>{" "}
            <br />
            Human-centered AI, Social Computing, Computational Social Science
          </p>

          <Parallax
            speed={isMobile ? -5 : -15}
            className="text-muted text-small"
          >
            Hello, I am a PhD student at MIT Sloan in the Information
            Technologies (IT) group - a subgroup of the Management Science
            program. My general research area is <b>social computing</b> and{" "}
            <b>computational social science</b> at the intersection of computer
            science, data science, and social science. I employ data-driven
            computational thinking and methods to explore social science
            questions. Specifically, I am interested in human-AI collaboration
            and online discussions/meetings.
            <br />
            <br />
            jaeyoons [at] mit [dot] edu
          </Parallax>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
