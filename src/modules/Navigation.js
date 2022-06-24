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
                    history.push("/fun");
                }}
            />
            <Item
                icon="🔥"
                onClick={() => {
                    history.push("/projects");
                }}
            />
            <Item
                icon="📑"
                onClick={() => {
                    history.push("/publications");
                }}
            />
            <Item
                icon="👩‍💻"
                onClick={() => {
                    history.push("/about");
                }}
            />
            
            
        </FloatingButton>
    );
}
  
export default Navigation;
  