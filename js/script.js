//vars aanmaken
var slides = document.querySelectorAll(".slide__item");
var slidesAmount = slides.length;
var currentSlide = 0;
var timer;
var timerPause = false;
//listeners maken\\

//next button
document.querySelector(".slide__button--previous").addEventListener('click', function() {
	nextSlider(-1);
})

//previous button
document.querySelector(".slide__button--next").addEventListener('click', function() {
	nextSlider(1);
})

// pause button
document.querySelector(".slide__button--pause").addEventListener('click', function() {
	pauseTimer();
})

//onload
window.addEventListener("load", function() {
	timer()
})
//buttonpress
window.addEventListener("keydown", function() {
	switch (event.keyCode) {
		case 37:
			nextSlider(-1);
		break;
		case 39:
			nextSlider(1);
		break;
	}
})

//start functie
changeSlide(currentSlide);
// functie maken voor de slide
function changeSlide(current) {
	currentSlide = current;
	//document.getElementById("demo").innerHTML = slidesAmount + '<br>' + currentSlide;
	console.log ("current:" + currentSlide +"amount: " + slidesAmount);
	if(currentSlide >= slidesAmount) {
		currentSlide = 0;
	}

	if(currentSlide < 0) {
		currentSlide = slidesAmount -1;
	}

	document.getElementById("demo").innerHTML = slidesAmount + '<br>' + currentSlide;

	for(i = 0; i < slidesAmount; i++) {
		slides[i].style.display = "none";
	}
	slides[currentSlide].style.display = "block";
}

//functie maken voor volgende en vorige slider
function nextSlider(input) {
	changeSlide(currentSlide += input);
}

// functie maken voor timer
function timer() {
	timer = setInterval(function() { nextSlider(1); }, 3000);
}
// functie maken voor pauze
function pauseTimer() {
	if (timerPause === false) {
	clearInterval(timer);
	timerPause = true;
	document.querySelector(".slide__button-img-center").src = "img/play.svg";
	} else if (timerPause === true) {
		startTimer();
		timerPause = false;
		document.querySelector(".slide__button-img-center").src = "img/pause.svg";
	}

}

function startTimer() {
	timer = setInterval(function() { nextSlider(1); }, 3000);
}