var isShown = false;
var cube = document.querySelector(".cube");
var sides = Array.from( document.querySelectorAll(".side") );
var prop;

var desCon = document.querySelector("#des-container");
var des = desCon.offsetParent;

// Expand or Close Navigation
document.querySelector(".nav-toggle").onclick = function(e) {
  e.preventDefault();
  document.querySelector(".nav-toggle").disabled = true;
  var indexNav = document.querySelector(".nav");
  if (!isExpanded) {
    indexNav.classList.add("expanded");
    isExpanded = true;
    document.querySelector(".cube").classList.add("pause");
    // Open the cube
    open();
  }
  else {
    indexNav.classList.remove("expanded");
    isExpanded = false;
    close();
  } 
}

// Cube
for (var i = 0; i < sides.length; i++) {
  let index = i;
  // On mobile, when clicked, show Explanation absolute
  if (isTouch && !isDesktop) {
    sides[i].addEventListener('click', function() {
      showDesMobile(index);
    });
//    sides[i].addEventListener('touchend', function() {
//      if (!isExpanded) {
//        cube.style.bottom = 0;
//        console.log("end");
//        document.querySelector("#m-des-container").classList.remove("show");
//      }
//    });
  }
  sides[i].addEventListener('mouseenter', function(e){
    isDesktop = Modernizr.mq('(min-width: 768px)');
    // On small desktop, when hovered, show Explanation absolute
    if (!isTouch && !isDesktop) {
      showDesMobile(index);
    }
    // On tablet, when clicked, show Explanation relative to mouse position 
    // On big desktop, when hovered, show Explanation relative to mouse position
    if (!isExpanded && isDesktop) {
      var point = handler(e);
      var centerX = window.innerWidth / 2;
      var centerY = window.innerHeight / 2;
      cube.classList.add("pause");
      changeContent(index, document.querySelector("#des-heading"), document.querySelector("#des-text"));
      console.log(index + "mouseenter");
      // left
      if (point.x < centerX) {
        if (point.y < centerY) {
          // 2사분면
          des.className = "des top left";
          console.log("2사분면")
        }
        else {
          // 3사분면
          des.className = "des bottom left";
          console.log("3사분면")
        }
        showDes(point.x, point.y, 1);
      }
      // right
      else {
        if (point.y < centerY) {
          // 1사분면
          des.className = "des top right";
          console.log("1사분면")
        }
        else {
          // 4사분면
          des.className = "des bottom right";
          console.log("4사분면")
        }
        showDes(point.x, point.y, 2);
      }
    }
  });
  sides[i].addEventListener('mouseleave', function() {
    isDesktop = Modernizr.mq('(min-width: 768px)');
    if (!isExpanded && isDesktop) {
      document.querySelector('#des-line').style.transition = "opacity .5s ease";
      document.querySelector('#des-line').style.width = 0;
      document.querySelector('#des-line').style.opacity = 0;
      cube.classList.remove("pause");
      desCon.classList.remove("show");
      console.log(index + "mouseout");
    }
  });
}

// Functions
function handler(e) {
  e = e || window.event;
  var pageX = e.pageX;
  var pageY = e.pageY;

  // IE 8
  if (pageX === undefined) {
    pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: pageX,
    y: pageY
  };
}
function changeContent(i, hd, txt) {
  var arr = [
    {
      num: "04",
      title: "Lab",
      url: "cube/lab.html",
      bold: "Academic Works:",
      light: "Human Computer Interaction Topics"
    },
    {
      num: "01",
      title: "About",
      url: "cube/about.html",
      bold: "Brief Introduction of Me:",
      light: "Who I am, What I love, What I pursue"
    },
    {
      num: "04",
      title: "Lab",
      url: "cube/lab.html",
      bold: "Academic Works:",
      light: "Human Computer Interaction Topics"
    },
    {
      num: "03",
      title: "Works",
      url: "cube/works.html",
      bold: "Web Project Portfolio:",
      light: "Selected web projects I've worked on"
    },
    {
      num: "05",
      title: "Blog",
      url: "cube/https://jyoonsong.github.io",
      bold: "My blog in Korean:",
      light: "Powered by Github Pages & Jekyll"
    },
    {
      num: "02",
      title: "Contact",
      url: "cube/contact.html",
      bold: "Contact Information:",
      light: "Check my availability and hire me :D"
    }
  ]
  hd.innerHTML = "<a href='" + arr[i].url + "'>" + arr[i].title + "<div>" + arr[i].num + "</div></a>";
  txt.innerHTML = "<b>" + arr[i].bold + "</b><br>" + arr[i].light;
}
function showDesMobile(index) {
  if (!isExpanded) {
    cube.style.bottom = "-3rem";
  }
  changeContent(index, document.querySelector("#m-des-heading"), document.querySelector("#m-des-text"));
  document.querySelector("#m-des-container").classList.add("show");
  isShown = true;
}
function showDes(posX, posY, num) {
  // create line
  var desY = des.offsetTop + 12.5;
  var desX = des.offsetLeft + 12.5;
  var desLine = document.querySelector('#des-line');
  if (num === 1) {
    desX = desX + des.offsetWidth - 25;
    drawLine(desLine,desX,desY,posX,posY,1);
  }
  else {
    drawLine(desLine,posX,posY,desX,desY,2);
  }
  // show content
  desCon.classList.add("show");
}
function close() {
  if (Modernizr.preserve3d) {
    // Close the cube
    cube.classList.remove("open");
    if( Modernizr.mq('(min-width: 768px)') ) {
      cube.style.bottom = 0;
    }
    else if (isShown) {
      cube.style.bottom = "-3rem";
    }
    navDes();
    // Rotate to the start position and restart animation
    setTimeout(function(){ 
      cube.classList.remove("origin-bottom");
    }, 1000); // >= side transform's transition time
    setTimeout(function(){
      cube.style.animation = "spin 15s infinite linear";
      cube.style.webkitAnimation = "spin 15s infinite linear";
      document.querySelector(".nav-toggle").disabled = false;
    }, 1200); // >= cube transform's transition time
  }
  else {
    document.querySelector(".cube-wrapper").classList.remove("open");
    document.querySelector(".nav-toggle").disabled = false;
  }
}

function open() {
  if (Modernizr.preserve3d) {
    // Set transform value to current position & Disable Animation for removing pause
    prop = window.getComputedStyle(cube,null).getPropertyValue("transform");
    cube.style.transform = prop;
    cube.style.webkitTransform = prop;
    cube.style.MozTransform = prop;
    cube.style.msTransform = prop;
    cube.style.OTransform = prop;
//    cube.style.animation = "none";
    // Rotate the cube to its initial position & Remove pause
    setTimeout(function(){ 
      cube.style.animation = "none";
      cube.style.webkitAnimation = "none";
      cube.offsetWidth; //force a reflow
      cube.classList.remove("pause");
      cube.classList.add("origin-bottom");
      cube.style.transform = "rotateX(-20deg) rotateY(42deg)";
      cube.style.webkitTransform = "rotateX(-20deg) rotateY(42deg)";
      cube.style.MozTransform = "rotateX(-20deg) rotateY(42deg)";
      cube.style.msTransform = "rotateX(-20deg) rotateY(42deg)";
      cube.style.OTransform = "rotateX(-20deg) rotateY(42deg)";
      if( Modernizr.mq('(min-width: 768px)') ) {
        cube.style.bottom = "15%";
      }
      else {
        cube.style.bottom = "0";
      }
    }, 50);
    // Open the cube
    setTimeout(function(){ 
      cube.classList.add("open");
      document.querySelector(".nav-toggle").disabled = false;
      // Show all the Explanations
      navDes();
    }, 1000); // >= side transform's transition time
  }
  else {
    // Set transform value to current position & Disable Animation for removing pause
    for (var i=0; i<6; i++) {
      var from = window.getComputedStyle(sides[i],null).getPropertyValue("transform");
      sides[i].style.transform = from;
      sides[i].style.animationName = "unset";
    }
    // Rotate the cube to its initial position & Remove pause
    var to = ["matrix3d(6.12323e-17, 0, -1, 0, 0, 1, 0, 0, 1, 0, 6.12323e-17, 0, 130, 0, 7.9602e-15, 1)",
              "matrix3d(-1.83697e-16, 0, 1, 0, 0, 1, 0, 0, -1, 0, -1.83697e-16, 0, -130, 0, -2.38806e-14, 1)",
              "matrix3d(1, 0, 0, 0, 0, 6.12323e-17, 1, 0, 0, -1, 6.12323e-17, 0, 0, -130, 7.9602e-15, 1)",
              "matrix3d(1, 0, 0, 0, 0, 6.12323e-17, -1, 0, 0, 1, 6.12323e-17, 0, 0, 130, 7.9602e-15, 1)",
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 130, 1)",
              "matrix3d(-1, 0, -1.22465e-16, 0, 0, 1, 0, 0, 1.22465e-16, 0, -1, 0, 1.59204e-14, 0, -130, 1)"];
    setTimeout(function(){ 
      // document.querySelector(".cube").classList.remove("pause");
      for (var i=0; i<6; i++) {
        sides[i].style.transform = to[i];
      }
    }, 50);
    // Open the cube
    setTimeout(function() {
      document.querySelector(".cube-wrapper").classList.add("open");
      document.querySelector(".nav-toggle").disabled = false;
    }, 1800); // >= cube transform's transition time
  }
}
//function shine(index) {
//  var inners = Array.from( document.querySelectorAll(".side-inner.mobile-only") );
//  inners[index].style.opacity = 1;
//  for (var i = 0; i < inners.length; i++) {
//    if (i === index) { continue; }
//    inners[i].style.opacity = 0;
//  }
//}