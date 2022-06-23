import { FloatingButton, Item } from "react-floating-button";
import homeIcon from "../images/home.svg";
import projectsIcon from "../images/projects.svg";

const Navigation = () => {
    return (
      <div className="container">
        <FloatingButton
        >
            <Item
                imgSrc={homeIcon}
                onClick={() => {
                console.log("callback function here");
                }}
            />
            <Item
                imgSrc={projectsIcon}
                onClick={() => {
                console.log("callback function here");
                }}
            />
        </FloatingButton>;
      </div>
    );
}
  
export default Navigation;
  