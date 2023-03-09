import React, { useState } from 'react';
import { devProjects } from '../data/devProjects';
import { projects } from '../data/projects';
import DevProject from '../modules/DevProject';

const Developer = () => {

    const [selectedStack, setSelectedStack] = useState([]);
    const [selectedCollab, setSelectedCollab] = useState("");
    const allStack = [...new Set(devProjects.map(proj => proj.stack).flat(1))];

    const selectStack = (e) => {
        const stack = e.target.innerText;
        if (selectedStack.includes(stack)) {
            const newSelectedStack = selectedStack.filter(s => s !== stack);
            setSelectedStack(newSelectedStack);
        }
        else {
            const newSelectedStack = [...selectedStack, stack];
            setSelectedStack(newSelectedStack);
        }
    }
    const selectCollab = (e) => {
        const collab = e.target.innerText;
        if (selectedCollab === collab) {
            setSelectedCollab("");
        }
        else {
            setSelectedCollab(collab);
        }
    }

    return (
        <section className="full-height bg-white">
            <div className="row pt-5 px-2">
                <div className="col-12 col-md-10 col-lg-8 mb-2">
                    <strong className="text-muted">Stack</strong> <br/>
                    {allStack.map(stack => 
                        <span key={stack} className={`${selectedStack.includes(stack) && "text-bold"} mr-1 pointer`} onClick={selectStack}>{stack}</span>
                    )}
                </div>
                <div className="col-12 col-md-10 col-lg-8">
                    <strong className="text-muted">Work by</strong> <br/>
                    <span className={`${selectedCollab === "Solo" && "text-bold"} mr-1 pointer`} onClick={selectCollab}>Solo</span>
                    <span className={`${selectedCollab === "Team" && "text-bold"} mr-1 pointer`} onClick={selectCollab}>Team</span>
                </div>
            </div>
            <div className="row pt-4 pb-5 px-2">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="row">
                    {devProjects.map(proj => {
                        let show = false;
                        for (let stack of selectedStack) {
                            if (proj.stack.includes(stack)) {
                                show = true;
                                break;
                            }
                        }
                        if (selectedCollab !== "" && proj.collab.includes(selectedCollab)) {
                            show = true;
                        }
                        if (show || (selectedStack.length === 0 && selectedCollab === "")) { 
                            return <DevProject key={proj.id} proj={proj} projects={projects} />
                        }
                        return <div key={proj.id}></div>;
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Developer;