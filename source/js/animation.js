// Reference: https://codepen.io/osublake/pen/qaRBmY/613dea251165576962577e898b1a4ce7
// Author: Blake Bowen

TweenLite.defaultEase = Elastic.easeOut.config(1, 0.2);

const svgs  = Array.from(document.querySelectorAll("svg"));
const paths = Array.from(document.querySelectorAll("svg path"));

const connected = [false, false, false, false];
const snapDist = 10;
const smooth = 0.15;

// other values
const nexts = [
    [267, 416], // 223, 406, 138, 435],
    [151, 223], // 161, 186, 129, 115],
    [518, 240], // 561, 221, 640, 264],
    [538, 81], // 558, 121, 660, 76],
];

// get 4 curves each with 3 points
const starts = [
    [327, 275, 365, 328, 316, 372],
    [306, 273, 248, 305, 199, 264], // 150 ?
    [409, 48, 430, 140, 474, 190],
    [327, 187, 348, 128, 442, 104],
];
const curves = [
    { x0: 327, y0: 275, x1: 365, y1: 328, x2: 316, y2: 372},
    { x0: 306, y0: 273, x1: 248, y1: 305, x2: 199, y2: 264},
    { x0: 409, y0: 48, x1: 430, y1: 140, x2: 474, y2: 190},
    { x0: 326, y0: 187, x1: 348, y1: 128, x2: 442, y2: 104},
];

const getMaxDistance = (curve, start) => {
    let dis0 = Math.abs(curve.x0 - start[0]);
    let dis1 = Math.abs(curve.y0 - start[1]);
    let dis2 = Math.abs(curve.x1 - start[2]);
    let dis3 = Math.abs(curve.y1 - start[3]);
    let dis4 = Math.abs(curve.x2 - start[4]);
    let dis5 = Math.abs(curve.y2 - start[5]);
    
    return Math.max(dis0, dis1, dis2, dis3, dis4, dis5);
}

const update = () => {
    for (let index = 0; index < 4; index++) {
        // 6 dots
        let currentPaths = Array.from(document.querySelectorAll("svg path"));
        let dots = currentPaths[index].getAttribute("d").split("C"); 

        // reset the 4th dot (3rd curve)
        dots[3] = curves[index].x0 + " " + curves[index].y0 + " " + curves[index].x1 + " " + curves[index].y1 + " " + curves[index].x2 + " " + curves[index].y2; 
        currentPaths[index].setAttribute("d", dots.join("C"));
    
        // animation for the reset
        const maxDistance = getMaxDistance(curves[index], starts[index]);
        if (maxDistance > snapDist * 2) {        
            connected[index] = false;

            TweenLite.to(curves[index], 1, { 
                x0: starts[index][0], y0: starts[index][1],
                x1: starts[index][2], y1: starts[index][3],
                x2: starts[index][4], y2: starts[index][5],
            });
        } 
    } 
}

// https://codepen.io/francoisromain/pen/XabdZm
const line = (pointA, pointB) => {
    const lengthX = pointB[0] - pointA[0]
    const lengthY = pointB[1] - pointA[1]
    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    }
}
const calculateCurve = (curr, prev, next, reverse) => {
    const l = line(prev || curr, next || curr);

    const angle = l.angle + (reverse ? Math.PI : 0);
    const length = l.length * smooth;

    const x = curr[0] + Math.cos(angle) * length;
    const y = curr[1] + Math.sin(angle) * length;

    return [x, y];
}

const handleHover = (event) => {
    const id = event.target.id || event.target.parentElement.id;
    const index = parseInt(id.substr(5, ))
  
    if (!connected[index] && !isNaN(index)) {    
        connected[index] = true;   
        TweenLite.killTweensOf(curves[index]); // Kill any active tweens on the point
    }

    const point2 = [parseInt(event.offsetX * 2 - curves[index].x2 / 2), parseInt(event.offsetY * 2 - curves[index].y2 / 2)];

    const prevprev = [curves[index].x0, curves[index].y0];
    const prev = [curves[index].x1, curves[index].y1];

    const point0 = calculateCurve(prev, prevprev, point2);
    const point1 = calculateCurve(point2, prev, nexts[index], true);

    if (connected[index]) { 
        curves[index] = {
            x0: point0[0], 
            y0: point0[1],
            x1: point1[0], 
            y1: point1[1],
            x2: point2[0], 
            y2: point2[1],
        }
    }
}

svgs.forEach((svg, index) => {
    svg.addEventListener("mousemove", handleHover);
})

TweenLite.ticker.addEventListener("tick", update);
update();


// Navigation
// if mobile or home
document.querySelector("header.header").classList.add("mobile");