import React from 'react';
import { FloatingButton, Item } from "../fab";

const Navigation = ({ history }) => {
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
                    history.push("/designer");
                }}
            />
            <Item
                icon="👩‍💻"
                description="developer"
                onClick={() => {
                    history.push("/developer");
                }}
            />
            <Item
                icon="🧐"
                description="researcher"
                onClick={() => {
                    history.push("/researcher");
                }}
            />
            <Item
                icon="📚"
                description="publications"
                onClick={() => {
                    history.push("/publications");
                }}
            />
            
            
            
        </FloatingButton>
    );
}
  
export default Navigation;
  