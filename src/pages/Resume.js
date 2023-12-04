import React from "react";

const Resume = () => {
  return (
    <section>
      <aside className="row mb-5 mt-5 pt-5">
        <div className="col-11 col-md-3 col-lg-2">
          <h2 className="text-serif">Resume</h2>
        </div>

        <div className="col-11 indent col-md-7 col-lg-5">
          <div className="mb-2">
            <a href={require(`../pdf/CV.pdf`)}>
              <b>🔗 Resume as a Researcher</b>
            </a>
            <br />
            Last updated: 12/04/2023
          </div>
          <div>
            <a href="https://bit.ly/developerjaeyoon">
              <b>🔗 Resume as a Developer</b>
            </a>
            <br />
            Last updated: 03/07/2022
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Resume;
