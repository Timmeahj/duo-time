// Personality traits

const words = document.getElementsByClassName("words")[0];
console.log(words);

words.setAttribute("id", "traits");

let traits = document.getElementById("traits").innerHTML;

document.getElementById("traits").innerHTML = "Stubborn<br>Aggressive<br>mentally unhinged";


// Quote

document.querySelector("q").innerHTML = "You want a toe? I can get you a toe, believe me. With nail polish."


// Profile picture


let editCSS = document.createElement("style")
editCSS.innerHTML = ".cedric {background: url(../img/walter.jpg)}";
document.body.appendChild(editCSS);


//let cedric = document.getElementsByClassName("cedric")[0];
//console.log(cedric);

//cedric[0].setAttribute("background", "url(../img/walter.jpg)");

//cedric.src = "../img/walter.jpg"



// Bowling picture

let editCSSTwo = document.createElement("style")
editCSSTwo.innerHTML = ".hockey {background: url(../img/bowling.jpg)}";
document.body.appendChild(editCSSTwo);

//let bowlingPic = document.createElement("style").bowlingPic.innerHTML = ".hockey {background: url(../img/sobchak bowling copy.jpg)}"


// Bowling text

document.getElementById("sportDescription").innerHTML = "“Smokey, this is not 'Nam. This is bowling. There are rules. You mark that frame an 8, and you're entering a world of pain.”";


// Colour text

document.getElementById("colourDescription").innerHTML = "I actually love the summer, don't have a favourite color however so Bordeaux is fine by me!"





