import React from 'react';
import { designProjects } from '../data/designProjects';

const Designer = () => {
    return (
        <section className="full-height bg-white">
            <div className="row mb-3 px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-5 pb-4">
                    <div className="text-black"><strong>Graphic Design</strong></div>
                    <div className="text-muted">Sketch App, Adobe Illustrator</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row mb-2">
                        <img src={require("../images/design/magicspell.jpeg")} alt="4 illustration of magic spells" />
                    </div>
                    <div className="text-right text-muted text-small ">
                        <b>Magic Spells All Muggles are Jealous of</b><br/>
                        Twelve variations of magic spells that appear in Harry Potter series.<br/>
                        More information is available at <a className="border-link" href="https://jaeyoon.io/dt4c" target="_blank" rel="noreferrer">https://jaeyoon.io/dt4c</a>
                    </div>
                </div>
            </div>


            <div className="row px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-4 pb-4">
                    <div className="text-black"><strong>Web & App Design</strong></div>
                    <div className="text-muted">Figma, Sketch App</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row mb-2">
                        {designProjects.map(proj => 
                            <div className="col-12 col-md-6" key={proj.id}>
                                <img src={require(`../images/${proj.image}`)} alt={proj.title} />
                                <div className="text-right text-muted  text-small mt-1 mb-3">
                                    <b>{proj.title}</b><br/>
                                    <span dangerouslySetInnerHTML={{__html: proj.description}}></span>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>

            <div className="row mb-3 px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-4 pb-4">
                    <div className="text-black"><strong>Photography & Drawings</strong></div>
                    <div className="text-muted">&copy; Jaeyoon Song 2022</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row">
                        {[...Array(21).keys()].map(index =>
                            <div className="col-12 col-md-4 mb-2" key={index}>
                                <div className="image-wrapper">
                                    <img src={require(`../images/drawings/im${index}-min.jpeg`)} alt="drawing" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Designer;