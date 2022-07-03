import React, { useState } from 'react';
import { projects } from '../data/projects';
import Project from '../modules/Project';

const Research = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    
    const allKeywords = [...new Set(projects.map(proj => proj.keywords).flat(1))];
    const allCategories = [...new Set(projects.map(proj => proj.topic).flat(1))];

    const selectKeyword = (e) => {
        const keyword = e.target.innerText;
        if (selectedKeywords.includes(keyword)) {
            const newSelectedKeywords = selectedKeywords.filter(s => s !== keyword);
            setSelectedKeywords(newSelectedKeywords);
        }
        else {
            const newSelectedKeywords = [...selectedKeywords, keyword];
            setSelectedKeywords(newSelectedKeywords);
        }
    }
    const selectCategory = (e) => {
        const category = e.target.innerText;
        if (selectedCategories.includes(category)) {
            const newSelectedCategories = selectedCategories.filter(c => c !== category);
            setSelectedCategories(newSelectedCategories);
        }
        else {
            const newSelectedCategories = [...selectedCategories, category];
            setSelectedCategories(newSelectedCategories);
        }
    }

    return (
        <section className="full-height bg-white">
            <div className="row pt-5 px-2">
                <div className="col-12 col-md-10 col-lg-8 mb-2">
                    <strong className="text-black">Keywords</strong> <br/>
                    {allKeywords.map((keyword, i) => 
                        <span key={i} className={`${selectedKeywords.includes(keyword) && "text-bold"} mr-1 pointer`} onClick={selectKeyword}>{keyword}</span>
                    )}
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <strong className="text-black">Category</strong> <br/>
                    {allCategories.map((category, i) => 
                        <span key={i} className={`${selectedCategories.includes(category) && "text-bold"} mr-1 pointer`} onClick={selectCategory}>{category}</span>
                    )}
                </div>
            </div>
            <div className="row pt-4 pb-5 px-2">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="row">
                    {projects.map(proj => {
                        let show = false;
                        for (let keyword of selectedKeywords) {
                            if (proj.keywords.includes(keyword)) {
                                show = true;
                                break;
                            }
                        }
                        for (let category of selectedCategories) {
                            if (proj.topic.includes(category)) {
                                show = true;
                                break;
                            }
                        }
                        if (show || (selectedKeywords.length === 0 && selectedCategories.length === 0)) { 
                            return <Project key={proj.id} proj={proj} />
                        }
                        return <div key={proj.id}></div>;
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Research;