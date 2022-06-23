import React from 'react';
import { FloatingButton, Item } from "../fab";

const Navigation = () => {
    return (
        <FloatingButton
            top={true}
        >
            <Item
                icon="🖋"
                onClick={() => {
                    console.log("callback function here");
                }}
            />
            <Item
                icon="🎨"
                onClick={() => {
                    console.log("callback function here");
                }}
            />
            <Item
                icon="🔥"
                onClick={() => {
                    console.log("callback function here");
                }}
            />
            <Item
                icon="📑"
                onClick={() => {
                    console.log("callback function here");
                }}
            />
            <Item
                icon="👩‍💻"
                onClick={() => {
                    console.log("callback function here");
                }}
            />
            
            
        </FloatingButton>
    );
}
  
export default Navigation;
  