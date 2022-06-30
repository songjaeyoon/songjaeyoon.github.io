import React from 'react';
import { pubs } from "../data/publications";
import { projects } from "../data/projects";
import Publication from '../modules/Publication';

const publications = pubs.sort((a, b) => b.year - a.year);
const papers = publications.filter(pub => pub.attrs.includes("paper"))
const posters = publications.filter(pub => pub.attrs.includes("poster"))
const wips = publications.filter(pub => pub.attrs.includes("wip"))

const Publications = () => {
    return (
        <section className="full-height bg-white py-4 px-2">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-2">
                    <h2 className="text-serif">Conference {"&"} Journal Papers</h2>
                </div>

                <div className="col-12 indent col-md-7 col-lg-5">
                    {papers.map((paper, i) => 
                        <Publication pub={paper} projects={projects} key={i} />
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-3 col-lg-2">
                    <h2 className="text-serif">Posters</h2>
                </div>

                <div className="col-12 indent col-md-7 col-lg-5">
                    {posters.map((poster, i) => 
                        <Publication pub={poster} projects={projects} key={i} />
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-3 col-lg-2">
                    <h2 className="text-serif">Work in Progress</h2>
                </div>

                <div className="col-12 indent col-md-7 col-lg-5">
                    {wips.map((wip, i) => 
                        <Publication pub={wip} projects={projects} key={i} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Publications;