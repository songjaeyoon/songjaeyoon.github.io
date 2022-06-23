/**
 * @param {number} size             the size  of the buttons.
 * @param {boolean} top             specify if the button should be on the top if false the
 * button will be at the bottom.
 * @param {boolean} right           specify if the button should be on the right if false the
 * button will be at the left.
 * @param {string} color            the backgroundColor for the main button
 * @children should be an Item component with params :
 *  @param {string} icon          the icon to use on given button
 *  @param {function} onClick       the callback function call onClick
 *  @param {string} backgroundColor            the backgroundColor for the Item
 */

 import React, { useState, useEffect, useRef } from "react";
 import { Container, Floating, Item } from "./styles";
 import { PoseGroup } from "react-pose";
 import PropTypes from "prop-types";
 import MenuToggle from "./hamburger";
 
 const rotations = {
   "3": [
     [(3 * Math.PI) / 2, Math.PI],
     [0, Math.PI / 2],
   ],
   "6": [
     [Math.PI, Math.PI],
     [0, 0],
   ],
 };
 
 function FloatingButton({
   backgroundColor,
   color,
   size,
   top,
   right,
   icon,
   children,
 }) {
   const [expanded, setExpanded] = useState(false);
   const ref = useRef(null);
 
   let number = React.Children.count(children);
 
   useEffect(() => {
     document.addEventListener("click", handleClickOutside, true);
     return () => {
       document.removeEventListener("click", handleClickOutside, true);
     };
   });
 
   const handleClickOutside = (event) => {
     if (ref.current && !ref.current.contains(event.target)) {
       setExpanded(false);
     }
   };
 
   function getAngle(i) {
     const angle =
       number <= 3 ? Math.PI / 2 : number <= 6 ? Math.PI : 2 * Math.PI;
     const rotate =
       rotations[number <= 3 ? "3" : "6"][Number(top)][Number(right)];
     return {
       angle:
         rotate +
         (number <= 6 ? (i * angle) / (number - 1) : (i * angle) / number),
       distance:
         number <= 6
           ? size / Math.sin(angle / (number - 1)) + size / 2
           : size / Math.sin(angle / number) + size / 2,
     };
   }
 
   return (
     <Floating
       onClick={() => {
         setExpanded(!expanded);
       }}
       top={top}
       right={right}
       pose={expanded ? "open" : "closed"}
       number={number}
       distance={getAngle(0).distance}
       ref={ref}
       center={window.innerWidth < 400}
     >
       <Container
         size={size}
         style={{ backgroundColor: `${backgroundColor || "none"}` }}
       >
           <MenuToggle expanded={expanded} color={color} size={size} />
       </Container>
       {number === 1 ? (
         <Item
           key={0}
           i={getAngle(0).angle}
           size={size}
           distance={getAngle(0).distance}
           style={{
             backgroundColor: children.props.backgroundColor,
           }}
           onClick={() => children.props.onClick()}
         >
           <span>{children.props.icon}</span>
         </Item>
       ) : (
         <PoseGroup>
           {expanded &&
             [...Array(number)].map((x, i) => (
               <Item
                 key={i}
                 i={getAngle(i).angle}
                 size={size}
                 distance={getAngle(i).distance}
                 style={{
                   backgroundColor: children[i].props.backgroundColor,
                   fontSize: 20,
                 }}
                 onClick={() => children[i].props.onClick()}
               >
                  <span>{children[i].props.icon}</span>
               </Item>
             ))}
         </PoseGroup>
       )}
     </Floating>
   );
 }

 console.log()
 
 FloatingButton.defaultProps = {
   color: "#828282",
   backgroundColor: "#b41717",
   size: window.innerWidth < 400 ? 48 : 56,
   top: false,
   right: true,
   children: {},
 };
 
 FloatingButton.propTypes = {
   color: PropTypes.string,
   backgroundColor: PropTypes.string,
   size: PropTypes.number,
   top: PropTypes.bool,
   right: PropTypes.bool,
   children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
 };
 
 export default FloatingButton;
 export { FloatingButton };
 export { Item };