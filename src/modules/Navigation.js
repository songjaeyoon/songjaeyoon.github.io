import React from 'react';
import { FloatingButton, Item } from "../fab";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
    
    const navigate = useNavigate();
    
    return (
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
                description="researcher"
                onClick={() => {
                    navigate("/researcher");
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
    );
}
  
export default Navigation;
  