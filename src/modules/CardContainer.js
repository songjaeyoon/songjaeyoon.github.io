import React from "react";
import { Link } from "react-router-dom";

const titles = [
    "Publications",
    "Projects",
    "Developer",
    "Designer",
    "Blog",
];

const paths = [
    "/publications",
    "/projects",
    "/developer",
    "/designer",
    "https://blog.jaeyoon.io",
];

const Card = ({title, classes, path}) => {
    return(
        <div className={`card ${classes}`}>
            {path.includes("http") ? 
                <a href={path} target="_blank" rel="noreferrer"  className="card-inner">{title}</a>
            :
                <Link to={path} className="card-inner">
                    {title}
                </Link>
            }
        </div>
    )
}

let timeout;
let borderTimeout;

class CardContainer extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        disableScroll: false,
        scrollWidth: 0,
        scrollPos: 1,
        clonesWidth: 0,
      }
      this.scrollContainerRef = React.createRef();
      this.handleScroll = this.handleScroll.bind(this);
      this.setScroll = this.setScroll.bind(this);
      this.getClonesWidth = this.getClonesWidth.bind(this);
      this.reCalc = this.reCalc.bind(this);
    }
    
    reCalc() {
      let scrollPos = this.state.scrollPos;
      let scrollWidth = this.scrollContainerRef.current.clientWidth;
      let clonesWidth = this.getClonesWidth();
  
      if (scrollPos <= 0) {
        scrollPos = 1;
      }
      this.setState({
        scrollPos: scrollPos,
        scrollWidth: scrollWidth,
        clonesWidth: clonesWidth,
      });
    }
    
    handleScroll(e) {
      const container = e.currentTarget;
      const scrollWidth = container.scrollWidth;
      const clonesWidth = this.getClonesWidth();
      let scrollPos = container.scrollLeft;
      let scrollPosAdd = container.clientWidth > clonesWidth ? container.clientWidth : clonesWidth;
      
      if (!this.state.disableScroll) {
        if (scrollPos + scrollPosAdd >= scrollWidth) {
            this.setScroll(
                // The math floor value helps smooth out the scroll jump, 
                // I don't know why that particular value works, but it does 
                // Same goes for the other setScroll call below
                container, 1 + Math.floor(scrollPosAdd/12.09)
            );
            this.setState({
                disableScroll: true,
            });
        } else if (scrollPos <= 0) {
            console.log(scrollPos);
            this.setScroll(
                container, scrollWidth - clonesWidth - Math.floor(scrollPosAdd/12.09)
            );
            this.setState({
                disableScroll: true,
            });
        }
      } 
      
      this.setState({
        scrollWidth: container.scrollWidth,
        scrollPos: container.scrollLeft,
      });
    } 
    
    getClonesWidth() {
      const clones = document.getElementsByClassName('is-clone');
      let clonesWidth = 0;
      for (let i = 0; i < clones.length; i++) {
        clonesWidth = clonesWidth + clones[i].clientWidth;
      }
      return clonesWidth;
    }
   
    setScroll(element, pos) {
      element.scrollLeft = pos;
      this.setState({
        scrollPos: element.scrollLeft,
      });
    }

    handleMouseover(e) {
        clearTimeout(borderTimeout);
        const border = document.querySelector(".border")
        border.style.borderColor = getComputedStyle(e.target).borderColor;
        borderTimeout = setTimeout(() => {
            border.style.borderColor = "#000"; // "#b41717"
        }, 3000);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.disableScroll) {
            window.setTimeout(function() {
                this.setState({
                disableScroll: false,
                });
            }.bind(this), 40)
        }
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.reCalc);
        function autoScroll() {
            document.querySelector(".scrolling-wrapper").scrollBy(1, 0);
            timeout = setTimeout(autoScroll, 50);
        } 
        autoScroll();

        const cards = Array.from(document.querySelectorAll(".card"))
        cards.forEach(card => {
            card.addEventListener("mouseover", this.handleMouseover);
        })
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.reCalc);
      clearTimeout(timeout);
    }
    
    render() {
      return(
        <div className="card-container">
          <div ref={this.scrollContainerRef} className="scrolling-wrapper" onScroll={this.handleScroll}>
            <Card title={titles[0]} path={paths[0]} classes={"bg-1"}/>
            <Card title={titles[1]} path={paths[1]} classes={"bg-2"} />
            <Card title={titles[2]} path={paths[2]} classes={"bg-3"} />
            <Card title={titles[3]} path={paths[3]} classes={"bg-4"} />
            <Card title={titles[4]} path={paths[4]} classes={"bg-5"} />
            <Card title={titles[0]} path={paths[0]} classes={"bg-1 is-clone is-start"}/>
            <Card title={titles[1]} path={paths[1]} classes={"bg-2 is-clone"}/>
            <Card title={titles[2]} path={paths[2]} classes={"bg-3 is-clone"}/>
            <Card title={titles[3]} path={paths[3]} classes={"bg-4 is-clone"}/>
            <Card title={titles[4]} path={paths[4]} classes={"bg-5 is-clone"}/>
          </div>
        </div>
      )
    }
}
export default CardContainer;