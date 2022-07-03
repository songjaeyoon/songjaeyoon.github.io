import React from 'react';

const Designer = () => {
    return (
        <section className="full-height bg-white">
            <div className="row mb-3">
                <div className="col-12 col-md-9 col-lg-7 pt-5 pb-4">
                    <div className="text-black"><strong>Photography & Drawings</strong></div>
                    <div className="text-muted">&copy; Jaeyoon Song 2022</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row">
                        {[...Array(21).keys()].map(index =>
                            <div className="col-12 col-md-4 mb-2" key={index}>
                                <div className="image-wrapper">
                                    <img src={require(`../images/drawings/im${index}-min.jpeg`)} />
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