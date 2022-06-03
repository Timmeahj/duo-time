// Personality traits

const words = document.getElementsByClassName("words")[0];


words.setAttribute("id", "traits");

let traits = document.getElementById("traits").innerHTML;

document.getElementById("traits").innerHTML = "Stubborn<br>Aggressive<br>Mentally unhinged";



// Favourite animal

document.getElementById("animalDescription").innerHTML = "Right on the spot with this one! I love dogs but I don't have a labrador called Bella, I would go for a Golden Retriever some day. "


// Animal picture

let editCSSFour = document.createElement("style")
editCSSFour.innerHTML = ".animalPic {background: url(./img/gr.jpg)}";
document.body.appendChild(editCSSFour);


let noRepeat4 = document.createElement("style")
noRepeat4.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat4);



// Quote

document.querySelector("q").innerHTML = "You want a toe? I can get you a toe, believe me. There are ways, Dude. You don't wanna know about it, believe me. Hell, I can get you a toe by 3 o'clock this afternoon... with nail polish."


// Profile picture


let editCSS = document.createElement("style")
editCSS.innerHTML = ".cedric {background: url(./img/walter.jpg)}";
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
editCSSTwo.innerHTML = ".hockey {background: url(./img/bowling.jpg)}";
document.body.appendChild(editCSSTwo);

let noRepeat2 = document.createElement("style")
noRepeat2.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat2);



// Bowling text

document.getElementById("sportDescription").innerHTML = " I'm going for bowling on this one, obviously. Here comes another quote :) “Smokey, this is not 'Nam. This is bowling. There are rules. You mark that frame an 8, and you're entering a world of pain.”";


// Colour text

document.getElementById("colourDescription").innerHTML = "I actually love the summer, don't have a favourite color however so Bordeaux is fine by me!"





// Celebrity text


document.getElementById("celebrityDescription").innerHTML = "This choice was a difficult one for me! Big fan of Hideo Kojima, Adam Granduciel, just to name a few. As much as I like Keanu Reeves as an actor and human being, I think in the light of this themed website, we have to go for John Goodman. Just for his performance in the The Big Lebowski alone he is a worthy man."





// celebrity photo

let editCSSThree = document.createElement("style")
editCSSThree.innerHTML = ".keanu {background: url(./img/goodman.jpg)}";
document.body.appendChild(editCSSThree);


let noRepeat3 = document.createElement("style")
noRepeat3.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat3);


// Fictional character

document.getElementById("characterDescription").innerHTML = "I enjoyed Game of Thrones immensely, right until season 5 I think. Loved the books and am still awaiting those last two, if they ever come out.. So for my fictional character I'm going for another legendary Walter, Walter White aka Heisenberg. You're goddamn right! "


// Fictional character photo


let editCSSFive = document.createElement("style")
editCSSFive.innerHTML = ".khal {background: url(./img/ww.png)}";
document.body.appendChild(editCSSFive);


let noRepeat5 = document.createElement("style")
noRepeat5.innerHTML = ".backgroundImage {background-repeat: no-repeat}";
document.body.appendChild(noRepeat5);


// Creating bouncing ball using keyframes


const ball = document.getElementById("ball");

ball.style.animation = "bounce 0.5s";
ball.style.animationDirection = "alternate";
ball.style.animationTimingFunction = "cubic-bezier(.5,0.05,1,.5)";
ball.style.animationIterationCount = "infinite";




document.styleSheets[0].insertRule('\
			@keyframes bounce {\
				from { transform: translate3d(0, 0, 0);   }\
				to   { transform: translate3d(0, 550px, 0); }\
			}'
		);




        // closing text

        document.getElementsByClassName("p-3")[0].innerHTML = "Remade with ❤ by Cédric";


    











