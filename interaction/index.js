//zeit messen
let startTime;
let clickedTime;
let clickCount = 0;
let clickTimes = [];

function setup() {
  createCanvas(300, 100);
  startTime = millis();
}

function mouseReleased() {
  clickedTime = millis();
  clickTimes.push(clickedTime);
  clickCount++;

  const infos = clickTimes.map((e, i, arr) => {
    if (i === 0) {
      return e;
    } else {
      return e - arr[i - 1];
    }
  });

  //div zum stylen
  const div = createDiv(
    "took you " + infos[clickCount - 1] / 1000 + "s to find the button, loser"
  );
  div.addClass("time-info");

  div.style("position", "absolute");
  div.style("top", "0px");
  div.style("left", "0px");
  div.style("padding", "10px");
  div.style("background-color", "#000000");
  div.style("color", "white");
  div.style("font-size", "18px");

  console.log(infos);
}

let coords = { x: 0, y: 0 }; // position cursors
const circles = document.querySelectorAll(".circle");
const cursor = document.querySelector(".cursor");
const foreground = document.getElementById("foreground");

// ändert hintergrund und button
function changeBackgroundColorAndButtonColor() {
  // random farbe generieren
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;

  // komplementärfarbe hintergrund berechnen
  const complementColor = getComplementaryColor(randomColor);

  // button auf die komplementär setzen
  const button = document.querySelector("button");
  button.style.backgroundColor = complementColor;

  // random position für button berechnen
  const maxWidth = window.innerWidth - 100;
  const maxHeight = window.innerHeight - 50;

  const timeInfo = document.querySelector(".time-info");
  const timeInfoRect = timeInfo
    ? timeInfo.getBoundingClientRect()
    : { top: 0, left: 0, right: 0, bottom: 0 };

  let randomX = Math.floor(Math.random() * maxWidth);
  let randomY = Math.floor(Math.random() * maxHeight);

  // Wenn der Button hinter der Zeit-Anzeige landet, verschiebe ihn:
  if (randomX < timeInfoRect.right && randomY < timeInfoRect.bottom) {
    randomX = timeInfoRect.right + 20; // Button nach rechts verschieben
    randomY = timeInfoRect.bottom + 20; // Button nach unten verschieben
  }

  // button random positionieren
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

// random hexfarbe erzeugt
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// berechnung komplementär
function getComplementaryColor(hex) {
  let r = parseInt(hex.substr(1, 2), 16);
  let g = parseInt(hex.substr(3, 2), 16);
  let b = parseInt(hex.substr(5, 2), 16);

  r = 255 - r;
  g = 255 - g;
  b = 255 - b;

  const compHex =
    "#" +
    ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();
  return compHex;
}

// cursor animation
window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = y - 12 + "px";
  cursor.style.left = x - 12 + "px";

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.x = x;
    circle.y = y;
  });

  updateForegroundMask();

  requestAnimationFrame(animateCircles);
}

// maske des vordergrund basierend auf der maus
function updateForegroundMask() {
  // eine radiale maske mit der position des kreises erstellen
  let mask =
    "radial-gradient(circle at " +
    coords.x +
    "px " +
    coords.y +
    "px, transparent 20%, rgba(0, 0, 0) 21%)";
  foreground.style.maskImage = mask;
  foreground.style.webkitMaskImage = mask; // für safari
}

animateCircles();