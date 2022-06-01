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





// 