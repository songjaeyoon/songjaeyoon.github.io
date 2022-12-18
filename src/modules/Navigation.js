import React from 'react';
import { FloatingButton, Item } from "../fab";
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";

const Navigation = () => {
    
    const navigate = useNavigate();

    return (
        <>
        {isMobile ?
            <FloatingButton
                top={true}
            >
                <Item
                    icon="🎨"
                    description="designer"
                    onClick={() => {
                        navigate("/designer");
                    }}
                />
                <Item
                    icon="👩‍💻"
                    description="developer"
                    onClick={() => {
                        navigate("/developer");
                    }}
                />
                <Item
                    icon="🧐"
                    description="projects"
                    onClick={() => {
                        navigate("/projects");
                    }}
                />
                <Item
                    icon="📚"
                    description="publications"
                    onClick={() => {
                        navigate("/publications");
                    }}
                />
                <Item
                    icon="🏠"
                    description="home"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </FloatingButton>
            :
            <FloatingButton
                top={true}
            >
                <Item
                    icon="🖋"
                    description="blog"
                    onClick={() => {
                        window.location.replace("https://blog.jaeyoon.io");
                    }}
                />
                <Item
                    icon="🎨"
                    description="designer"
                    onClick={() => {
                        navigate("/designer");
                    }}
                />
                <Item
                    icon="👩‍💻"
                    description="developer"
                    onClick={() => {
                        navigate("/developer");
                    }}
                />
                <Item
                    icon="🧐"
                    description="projects"
                    onClick={() => {
                        navigate("/projects");
                    }}
                />
                <Item
                    icon="📚"
                    description="publications"
                    onClick={() => {
                        navigate("/publications");
                    }}
                />
            </FloatingButton>
        }
        </>
    );
}
  
export default Navigation;
  