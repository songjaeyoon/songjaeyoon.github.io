import React from "react";
import { pubs } from "../data/publications";
import { projects } from "../data/projects";
import Publication from "../modules/Publication";

const publications = pubs.sort((a, b) => b.year - a.year);
const papers = publications.filter((pub) => pub.attrs.includes("paper"));
const posters = publications.filter((pub) => pub.attrs.includes("poster"));
const wips = publications.filter((pub) => pub.attrs.includes("wip"));

const Publications = () => {
    return (
        <section className="full-height bg-white py-4 px-2">
            <div className="row">
                <div className="section-title col-12 col-md-3 col-lg-2 mb-1">
                    <strong className="text-mono">Work in Progress</strong>
                </div>

                <div className="col-12 indent col-md-7 col-lg-6">
                    {wips.map((wip, i) => (
                        <Publication pub={wip} projects={projects} key={i} />
                    ))}
                </div>
            </div>
            <div className="row">
                <div className="section-title col-12 col-md-3 col-lg-2 mb-1">
                    <strong className="text-mono">
                        Journal {"&"} Conference Papers
                    </strong>
                </div>

                <div className="col-12 indent col-md-7 col-lg-6">
                    {papers.map((paper, i) => (
                        <Publication pub={paper} projects={projects} key={i} />
                    ))}
                </div>
            </div>

            <div className="row">
                <div className="section-title col-12 col-md-3 col-lg-2 mb-1">
                    <strong className="text-mono">Posters</strong>
                </div>

                <div className="col-12 indent col-md-7 col-lg-6">
                    {posters.map((poster, i) => (
                        <Publication pub={poster} projects={projects} key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
