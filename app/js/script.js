const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  console.log("it worked!");

  if (header.classList.contains("open")) {
    //close Hamburger
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (elemet) {
      elemet.classList.remove("fade-in");
      elemet.classList.add("fade-out");
    });
  } else {
    // open hamburger
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (elemet) {
      elemet.classList.remove("fade-out");
      elemet.classList.add("fade-in");
    });
  }
});
