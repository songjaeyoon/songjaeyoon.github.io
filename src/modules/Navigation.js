import React from 'react';
import { FloatingButton, Item } from "../fab";

const Navigation = ({ history }) => {
    return (
        <FloatingButton
            top={true}
        >
            <Item
                icon="🖋"
                onClick={() => {
                    window.location.replace("https://blog.jaeyoon.io");
                }}
            />
            <Item
                icon="🎨"
                onClick={() => {
                    history.push("/designer");
                }}
            />
            <Item
                icon="👩‍💻"
                onClick={() => {
                    history.push("/developer");
                }}
            />
            <Item
                icon="🧐"
                onClick={() => {
                    history.push("/researcher");
                }}
            />
            <Item
                icon="📚"
                onClick={() => {
                    history.push("/publications");
                }}
            />
            
            
            
        </FloatingButton>
    );
}
  
export default Navigation;
  