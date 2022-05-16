var section = document.querySelector("section");
var footer = document.querySelector("footer");

var controller = new ScrollMagic.Controller();
var showItem = new ScrollMagic.Scene({triggerElement: section, triggerHook: .9})
                  .setClassToggle(document.querySelector("#title"), "show")
                  .addTo(controller);
var changeBg = new ScrollMagic.Scene({triggerElement: section, triggerHook: .7})
                  .on("enter", function () {
                    changeWrapper("#fff", "rgba(255,255,255,0)", 1);
                  })
                  .on("leave", function () {
                    changeWrapper("", "", .1);
                  })
                  .addTo(controller);
var footerChange = new ScrollMagic.Scene({triggerElement: footer, triggerHook: .7})
                  .on("enter", function () {
                    changeWrapper("", "", .1);
                    footer.classList.add("show");
                    navbar.classList.remove("invert");
                  })
                  .on("leave", function () {
                    changeWrapper("#fff", "rgba(255,255,255,0)", 1);
                    footer.classList.remove("show");
                    navbar.classList.add("invert");
                  })
                  .addTo(controller);
var changeNav = new ScrollMagic.Scene({triggerElement: section})
                  .on("enter", function () {
                    navbar.classList.add("invert");
                  })
                  .on("leave", function (e) {
                    navbar.classList.remove("invert");
                  })
                  .addTo(controller);

function changeWrapper(a, b, c, d) {
  document.querySelector(".wrapper").style.background = a;
  document.querySelector(".wrapper").style.borderColor = b;
  document.querySelector(".wrapper").style.opacity = c;
}