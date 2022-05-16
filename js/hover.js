
var svgs  = Array.from(document.querySelectorAll("svg"));
var paths = Array.from(document.querySelectorAll("svg path"));

var degs = [0, 0, 0, 0]
var timeout;

svgs.forEach((svg, index) => {
    svg.addEventListener("mousemove", handleHover);
})


function handleHover(event) {
    clearTimeout(timeout);
    const id = event.target.id || event.target.parentElement.id;
    const index = parseInt(id.substr(5, ));

    const x = event.offsetX - event.target.clientWidth;
    const y = event.offsetY - event.target.clientHeight;

    console.log(x, y);
    svgs[index].style.transform = `rotateZ(${ x > y ? -5 : 5 }deg)`;

    timeout = setTimeout(() => {
        if (document.querySelectorAll(".cloud:hover").length === 0) {
            svgs[index].style.transform = `rotateZ(0deg)`;
        }
    }, 300);
}
