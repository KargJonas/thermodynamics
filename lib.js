let cnv = document.querySelector("canvas");
let c = cnv.getContext("2d");

let WIDTH = 0;
let HEIGHT = 0;

function maxCnv() {
  // WIDTH = window.innerWidth;
  // HEIGHT = window.innerHeight;
  WIDTH = 500;
  HEIGHT = 500;

  cnv.setAttribute("width", WIDTH);
  cnv.setAttribute("height", HEIGHT);
}

maxCnv();
// window.addEventListener("resize", maxCnv);