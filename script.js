// Personality traits

const words = document.getElementsByClassName("words")[0];
console.log(words);

words.setAttribute("id", "traits");

let traits = document.getElementById("traits").innerHTML;

document.getElementById("traits").innerHTML = "Stubborn<br>Aggressive<br>mentally unhinged";



// Profile picture


let editCSS = document.createElement("style")
editCSS.innerHTML = ".cedric {background: url(../img/walter.jpg)}";
document.body.appendChild(editCSS);


//let cedric = document.getElementsByClassName("cedric")[0];
//console.log(cedric);

//cedric[0].setAttribute("background", "url(../img/walter.jpg)");

//cedric.src = "../img/walter.jpg"



// Bowling picture



// Bowling text

document.getElementById("sportDescription").innerHTML = "“Smokey, this is not 'Nam. This is bowling. There are rules. You mark that frame an 8, and you're entering a world of pain.”"


