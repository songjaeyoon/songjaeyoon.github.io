var slideCons = Array.from(document.querySelectorAll(".slide-container"));
var arrowNext = document.querySelector("#next");
var arrowPrev = document.querySelector("#prev");
var checks = [ document.querySelector("#development"), document.querySelector("#design"), document.querySelector("#branding"), document.querySelector("#research"), document.querySelector("#photography"), document.querySelector("#sayhi") ];
var inputs = [ document.querySelector("#firstname"), document.querySelector("#lastname"), document.querySelector("#email"), document.querySelector("#ref"), document.querySelector("#project") ];
var labels = Array.from(document.querySelectorAll(".label"));
// slide 1
for (let i=0; i < checks.length; i++) {
  if ( isChecked(checks) ) {
    arrowNext.classList.remove("opacity");
  }
  checks[i].addEventListener("click", function() {
    if ( isChecked(checks) ) {
      arrowNext.classList.remove("opacity");
    }
    else {
      arrowNext.classList.add("opacity");
    }
    if (i == 5) {
      for (var j=0; j<5; j++) {checks[j].checked = false;}
    }
    else {
      checks[5].checked = false;
    }
  });
}
arrowNext.onclick = function() {
  if ( checks[5].checked ) {
    labels[4].innerHTML = "&nbsp;Say anything, I don't bite :D";
  }
  else {
    labels[4].innerHTML = "&nbsp;Describe your project";
  }
  if ( !arrowNext.classList.contains("opacity") ) {
    slideCons[0].classList.add("hidden");
    slideCons[1].style.marginLeft = "-50%";
    setTimeout(function() {
      inputs[0].focus();
    }, 500);
  }
}
// slide 2
arrowPrev.onclick = function() {
  slideCons[1].style.marginLeft= "";
  slideCons[0].classList.remove("hidden");
}
for (let i=0; i < inputs.length; i++) {
  // cache
  if ( inputs[i].value ) {
    changeLabel("up", i);
  }
  // label change on focus
  inputs[i].addEventListener("focus", function() {
    changeLabel("up", i);
  });
  inputs[i].addEventListener("blur", function() {
    if ( inputs[i].value ) {
      changeLabel("up", i);
    }
    else {
      changeLabel("dwon", i);
    }
  });
  // email validator
  inputs[i].onchange = function () {
    if (!this.value) {
      this.parentElement.classList.remove("success");
      this.parentElement.classList.add("error");
    }
    else if (i == 2) {
      if (checkEmail(this.value)) {
        this.parentElement.classList.remove("error");
        this.parentElement.classList.add("success");
      }
      else {
        this.parentElement.classList.remove("success");
        this.parentElement.classList.add("error");
      }
    }
    else {
      this.parentElement.classList.remove("error");
      this.parentElement.classList.add("success");
    }
    if (isChecked(checks) && allTrue(inputs)) {
      document.querySelector("#submit").classList.remove("opacity");
      document.querySelector("#submit").disabled = false;
    }
    else {
      document.querySelector("#submit").classList.add("opacity");
      document.querySelector("#submit").disabled = true;
    }
  }
}
// textarea autosize
inputs[4].addEventListener('keydown', autosize);

// functions
function changeLabel(str, i){
  if (str == "up") {
    labels[i].style.top = 0;
    labels[i].classList.add("opacity", "text-small");
  }
  else {
    labels[i].style.top = "";
    labels[i].classList.remove("opacity", "text-small");
  }
}
function autosize(){
  var el = this;
  setTimeout(function(){
  el.style.height = el.scrollHeight + "px";
  },0);
}
function isChecked(arr) {
  for(var i in arr)
    if(arr[i].checked) return true;
  return false;
}
function allTrue(arr) {
  for(var i in arr)
    if(!arr[i].parentElement.classList.contains("success")) return false;
  return true;
}
function checkEmail(str) {
  console.log(str);
  if( str.indexOf("@") == -1 ) return false;
  else if( str.lastIndexOf(".") <= str.indexOf("@")+1 || str.lastIndexOf(".") == str.length-1) return false;
  return true;
}