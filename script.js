// Personality traits

const words = document.getElementsByClassName("words")[0];
console.log(words);

words.setAttribute("id", "traits");

let traits = document.getElementById("traits").innerHTML;

document.getElementById("traits").innerHTML = "Stubborn<br>Aggressive<br>mentally unhinged";


// Quote

document.querySelector("q").innerHTML = "You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me. Hell, I can get you a toe by 3 o'clock this afternoon... with nail polish."


// Profile picture


let editCSS = document.createElement("style")
editCSS.innerHTML = ".cedric {background: url(../img/walter.jpg)}";
document.body.appendChild(editCSS);

let noRepeat1 = document.createElement("style")
noRepeat1.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat1);


//let cedric = document.getElementsByClassName("cedric")[0];
//console.log(cedric);

//cedric[0].setAttribute("background", "url(../img/walter.jpg)");

//cedric.src = "../img/walter.jpg"



// Bowling picture

let editCSSTwo = document.createElement("style")
editCSSTwo.innerHTML = ".hockey {background: url(../img/bowling.jpg)}";
document.body.appendChild(editCSSTwo);

let noRepeat2 = document.createElement("style")
noRepeat2.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat2);



// Bowling text

document.getElementById("sportDescription").innerHTML = "“Smokey, this is not 'Nam. This is bowling. There are rules. You mark that frame an 8, and you're entering a world of pain.”";


// Colour text

document.getElementById("colourDescription").innerHTML = "I actually love the summer, don't have a favourite color however so Bordeaux is fine by me!"





// Celebrity text


document.getElementById("celebrityDescription").innerHTML = "This choice was a difficult one for me! Big fan of Hideo Kojima, Adam Granduciel, just to name a few. As much as I like Keanu Reeves as an actor and human being, I think in the light of this themed website, we have to go for John Goodman. Just for his performance in the The Big Lebowski alone he is a worthy man."





// celebrity photo

let editCSSThree = document.createElement("style")
editCSSThree.innerHTML = ".keanu {background: url(../img/goodman.jpg)}";
document.body.appendChild(editCSSThree);


let noRepeat3 = document.createElement("style")
noRepeat3.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat3);



// Creating bounce game

// Create the canvas and draw on it


const canvas = document.createElement("CANVAS");

console.log(canvas);

canvas.setAttribute("id", "myCanvas");

console.log(canvas);



canvas.style.background = "#eee";
canvas.style.display = "block";
canvas.style.margin = "O auto";

document.querySelector("canvas");

console.log(canvas);


let myCanvas = document.getElementById("myCanvas");

myCanvas.style.width = "480px";
myCanvas.style.height = "320px";

// Storing a reference to the <canvas> element to the canvas variable. Then we're creating the ctx variable to store the 2D rendering context — the actual tool we can use to paint on the Canvas.

let canvasBasics = document.getElementById("myCanvas");
let ctx = canvasBasics.getContext("2d");


// All the instructions are between the beginPath() and closePath() methods. We are defining a rectangle using rect(): the first two values specify the coordinates of the top left corner of the rectangle on the canvas, while the second two specify the width and height of the rectangle. In our case the rectangle is painted 20 pixels from the left side of the screen and 40 pixels from the top side, and is 50 pixels wide and 50 pixels high, which makes it a perfect square. The fillStyle property stores a color that will be used by the fill() method to paint the square, in our case, red.

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

// 

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();













