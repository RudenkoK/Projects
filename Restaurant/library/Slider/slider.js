/* Файл библиотеки SLIDER.
Размещается в папке JS на одном уровне с images, css
Графические файлы размещаются в папке images/slider
Файлы картинок слайдера должны называться 1-4 расширения jpg
*/

'use strict'

// Массив изображений для слайдера
var arrImages = ['1.jpg','2.jpg','3.jpg','4.jpg'];
var timerSlide = 8000;

var slider = document.querySelector('.slider');

function createBlock(newBlockName, className, parentBlock) {
	var newBlockName = document.createElement('div');
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
}

createBlock('slideOld', 'slideOld', slider);
var slideOld = document.querySelector('.slideOld');
createBlock('slideNew', 'slideNew', slider);
var slideNew = document.querySelector('.slideNew');
createBlock('toolsSliderBlock', 'toolsSliderBlock toolsSliderBlockHorizont', slider);
var toolsSliderBlock = document.querySelector('.toolsSliderBlock');
createBlock('timeBarBlockHorizont', 'timeBarBlockHorizont', toolsSliderBlock);
var timeBarBlockHorizont = document.querySelector('.timeBarBlockHorizont');
createBlock('timeBarProgresHorizont', 'timeBarProgresHorizont', timeBarBlockHorizont);
var timeBarProgresHorizont = document.querySelector('.timeBarProgresHorizont');
createBlock('slideLeft', 'slideLeft', toolsSliderBlock);
var slideLeft = document.querySelector('.slideLeft');
createBlock('circleBlock', 'circleBlock circleBlockHorizont', toolsSliderBlock);
var circleBlock = document.querySelector('.circleBlock');
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
var circles = document.querySelectorAll('.circle');
createBlock('slideRight', 'slideRight', toolsSliderBlock);
var slideRight = document.querySelector('.slideRight');
createBlock('controlCircle', 'controlCircle controlPause', toolsSliderBlock);
var controlCircle = document.querySelector('.controlCircle');


slideRight.style.background = 'transparent url("./images/slider/right.png") no-repeat 0 0 / cover';
slideLeft.style.background = 'transparent url("./images/slider/left.png") no-repeat 0 0 / cover';


var actualImg = 0;

// Назначение события на кнопку управления слайдером пауза/пуск
controlCircle.addEventListener('click', controlSlider, false);


// Первоначальное состояние слайдера
slideOld.style.background = '#000 url("./images/slider/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover';
circles[actualImg].className += ' circleActive';



	
var intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
var intervalSliderProgres = setInterval(timeBar, timerSlide/160);

slideRight.addEventListener('click', nextSlide, false);
slideLeft.addEventListener('click', prevSlide, false);
circleBlock.addEventListener('click', changeSlideManual , false);
var playSlider = true;

// Автоматическая смена слайдов 
function changeSlideAuto() {
	clearInterval( intervalChangeSlide );
	clearInterval(intervalSliderProgres);
	circles[actualImg].className = 'circle';
	actualImg++;

	changeSlideHelper();

	circles[actualImg].className += ' circleActive';
	intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
	intervalSliderProgres = setInterval(timeBar, timerSlide/160);
}

function changeSlideHelper() {
	if ( actualImg > arrImages.length-1 ){
		actualImg = 0;
	}
	if (actualImg%2 == 0) {
		slideNew.className = "slideNew slideHide";
		slideOld.style.background = '#000 url("./images/slider/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover';
		slideOld.className = "slideOld slideShow";
	} else {		
		slideOld.className = "slideOld slideHide";
		slideNew.style.background = '#000 url("./images/slider/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover';
		slideNew.className = "slideNew slideShow";	
	}
	timeBarProgresHorizont.style.width = 0 + 'px';
}


// Смена слайда по выбору
function changeSlideManual(event) {
	clearInterval( intervalChangeSlide );
	circles[actualImg].className = "circle";
	if ( event.target != this ) {
		for ( var i = 0; i <= circles.length; i++ ) {
			if ( circles[i] == event.target ) {
				circles[i].className += " circleActive";
				actualImg = i;
				changeSlideHelper();
				intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
			}
		}
	}	
}

// Следующий слайд
function nextSlide() {
	clearInterval( intervalChangeSlide );
	circles[actualImg].className = "circle";
	if ( actualImg == circles.length-1 ) {
		actualImg = -1;
	}
	actualImg++;
	circles[actualImg].className = "circle circleActive";
	changeSlideHelper();
	intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
}

// Предыдущий слайд
function prevSlide() {
	clearInterval( intervalChangeSlide );
	circles[actualImg].className = "circle";
	if ( actualImg == 0 ) {
		actualImg = circles.length;
	}
	actualImg--;
	circles[actualImg].className = "circle circleActive";
	changeSlideHelper();
	intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
}

// Кнопки управления слайдером
function controlSlider() {
	if ( this.className == 'controlCircle controlPause' ) {
		this.className = 'controlCircle controlPlay';
		clearInterval( intervalChangeSlide );
		timeBarProgresHorizont.style.height = 0 + 'px';
		clearInterval(intervalSliderProgres);
	} else {
		this.className = 'controlCircle controlPause';
		intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
		intervalSliderProgres = setInterval(timeBar, timerSlide/100);
	}
}



// Назначение таймера смены слайдов
//intervalSliderProgres = setInterval(timeBar, timerSlide/160);

// Таймер заполнения прогресбара смены слайдов
function timeBar() {
	if  ( parseInt( getComputedStyle(timeBarProgresHorizont).width) <= 270 ) {
		timeBarProgresHorizont.style.width = parseInt( getComputedStyle(timeBarProgresHorizont).width) + parseInt( getComputedStyle(timeBarBlockHorizont).width) / 100 + 'px';
	}
}