'use strict'
var numColumns = 7;
var numRows = 7;
var intervalChangeSlideValue = 8000;
var intervalChangeSlideBlockValue = 100;
var arrImages = ['1.jpg','2.jpg','3.jpg','4.jpg'];


var countSlide = 0;
var slider = document.querySelector('.slider')


createBlocks();

var sliderOldWraps = document.querySelectorAll('.sliderOldWrap');
var sliderOldBlocks = document.querySelectorAll('.sliderOldBlock');
var sliderNewWraps = document.querySelectorAll('.sliderNewWrap');
var sliderNewBlocks = document.querySelectorAll('.sliderNewBlock');


function createBlock(newBlockName, className, parentBlock) {
	var newBlockName = document.createElement('div');
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
}


createBlock('toolsSliderBlock', 'toolsSliderBlock toolsSliderBlockHorizont', slider);
var toolsSliderBlock = document.querySelector('.toolsSliderBlock');
createBlock('timeBarBlockHorizont', 'timeBarBlockHorizont', toolsSliderBlock);
var timeBarBlockHorizont = document.querySelector('.timeBarBlockHorizont');
// createBlock('timeBarProgresHorizont', 'timeBarProgresHorizont', timeBarBlockHorizont);
// var timeBarProgresHorizont = document.querySelector('.timeBarProgresHorizont');
createBlock('slideLeft', 'slideLeft', toolsSliderBlock);
var slideLeft = document.querySelector('.slideLeft');
// slideLeft.addEventListener('click', prevSlide, false);
createBlock('circleBlock', 'circleBlock circleBlockHorizont', toolsSliderBlock);
var circleBlock = document.querySelector('.circleBlock');
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
var circles = document.querySelectorAll('.circle');
createBlock('slideRight', 'slideRight', toolsSliderBlock);
var slideRight = document.querySelector('.slideRight');
// slideRight.addEventListener('click', nextSlide, false);
// createBlock('controlCircle', 'controlCircle controlPause', toolsSliderBlock);
// var controlCircle = document.querySelector('.controlCircle');


slideRight.style.background = 'transparent url("./images/slider/right.png") no-repeat 0 0 / cover';
slideLeft.style.background = 'transparent url("./images/slider/left.png") no-repeat 0 0 / cover';



changeDirectionBlock('vertical');

function createBlocks() {
	var marginLeftPos = 0;
	for ( var i = 0; i < numColumns; i++ ) {
		var sliderOldWrap = document.createElement('div');
		sliderOldWrap.className = 'sliderOldWrap';
		sliderOldWrap.style.height = 100 + '%';
		sliderOldWrap.style.width = window.innerWidth / numColumns + 'px';
		sliderOldWrap.style.top = 0 + 'px';
		sliderOldWrap.style.left = marginLeftPos + 'px';
		slider.appendChild(sliderOldWrap);

		var sliderNewWrap = document.createElement('div');
		sliderNewWrap.className = 'sliderNewWrap';
		sliderNewWrap.style.height = 100 + '%';
		sliderNewWrap.style.width = window.innerWidth / numColumns + 'px';
		sliderNewWrap.style.top = 100 + '%';
		sliderNewWrap.style.left = marginLeftPos + 'px';
		slider.appendChild(sliderNewWrap);

		var sliderOldBlock = document.createElement('div');
		sliderOldBlock.className = 'sliderOldBlock';
		sliderOldBlock.style.height = 100 + '%';
		sliderOldBlock.style.width = window.innerWidth + 'px';
		sliderOldBlock.style.backgroundPosition = '-' + marginLeftPos + 'px, 0px';
		sliderOldBlock.style.backgroundImage = 'url(./images/slider/' + arrImages[0] + ')';
		sliderOldWrap.appendChild(sliderOldBlock);

		var sliderNewBlock = document.createElement('div');
		sliderNewBlock.className = 'sliderNewBlock';
		sliderNewBlock.style.height = 100 + '%';
		sliderNewBlock.style.width = window.innerWidth + 'px';
		sliderNewBlock.style.backgroundPosition = '-' + marginLeftPos + 'px, 0px';
		sliderNewBlock.style.backgroundImage = 'url(./images/slider/' + arrImages[1] + ')';
		sliderNewWrap.appendChild(sliderNewBlock);	

		marginLeftPos += window.innerWidth / numColumns;
	}

}

function changeDirectionBlock(directionBlock) {
	var marginLeftPos = 0;
	var marginTopPos = 0;

	if ( directionBlock == 'vertical' ) {
		for ( var i = 0; i < numColumns; i++ ) {
			sliderOldWraps[i].style.height = 100 + '%';
			sliderOldWraps[i].style.width = window.innerWidth / numColumns + 'px';
			sliderOldWraps[i].style.top = 0 + 'px';
			sliderOldWraps[i].style.left = marginLeftPos + 'px';

			sliderNewWraps[i].style.height = 100 + '%';
			sliderNewWraps[i].style.width = window.innerWidth / numColumns + 'px';
			sliderNewWraps[i].style.top = 100 + '%';
			sliderNewWraps[i].style.left = marginLeftPos + 'px';

			sliderOldBlocks[i].style.height = 100 + '%';
			sliderOldBlocks[i].style.width = window.innerWidth / numColumns + 'px';
			sliderOldBlocks[i].style.backgroundPosition = '-' + marginLeftPos + 'px 0px';

			sliderNewBlocks[i].style.height = 100 + '%';
			sliderNewBlocks[i].style.width = window.innerWidth / numColumns + 'px';
			sliderNewBlocks[i].style.backgroundPosition = '-' + marginLeftPos + 'px 0px';

			marginLeftPos += window.innerWidth / numColumns;
		}
	} else if ( directionBlock == 'horizont' ) {
		marginTopPos = 0;
		for ( var i = 0; i < numColumns; i++ ) {
			sliderOldWraps[i].style.height = window.innerHeight / numRows + 'px';
			sliderOldWraps[i].style.width = 100 + '%';
			sliderOldWraps[i].style.top = marginTopPos + 'px';
			sliderOldWraps[i].style.left = 0 + 'px';

			sliderNewWraps[i].style.height = window.innerHeight / numRows + 'px';
			sliderNewWraps[i].style.width = 100 + '%';
			sliderNewWraps[i].style.top = marginTopPos + 'px';
			sliderNewWraps[i].style.left = 0 + 'px';

			sliderOldBlocks[i].style.width = 100 + '%';
			sliderOldBlocks[i].style.height = window.innerHeight / numRows + 'px';			
			sliderOldBlocks[i].style.backgroundPosition = '0px -'+ marginTopPos + 'px';

			sliderNewBlocks[i].style.width = 100 + '%';
			sliderNewBlocks[i].style.height = window.innerHeight / numRows + 'px';
			sliderNewBlocks[i].style.backgroundPosition = '0px -'+ marginTopPos + 'px';

			marginTopPos += window.innerHeight / numRows;

		}
	}

}

var intervalChangeSlide = setInterval(changeSlideAuto, intervalChangeSlideValue);
var intervalChangeSlideBlock;
var	nextImg = 1;


function changeSlideAuto() {
	var	numSlideBlock = 0;
	
		intervalChangeSlideBlock = setInterval( function() {

			if ( countSlide%2!= 0) {
				changeDirectionBlock('vertical');
				sliderNewBlocks[numSlideBlock].style.backgroundImage = 'url(./images/slider/' + arrImages[nextImg] + ')';
				sliderOldWraps[numSlideBlock].className = 'sliderOldWrap hideTopSlideBlock';
				sliderNewWraps[numSlideBlock].className = 'sliderNewWrap showBottomSlideBlock';
			 } else {
			 	changeDirectionBlock('horizont');
		 		sliderOldBlocks[numSlideBlock].style.backgroundImage = 'url(./images/slider/' + arrImages[nextImg] + ')';
			 	sliderNewWraps[numSlideBlock].className = 'sliderNewWrap hideRightSlideBlock';
				sliderOldWraps[numSlideBlock].className = 'sliderOldWrap showLeftSlideBlock';
			 }

			numSlideBlock++;
			if ( numSlideBlock == numColumns ) {
				numSlideBlock = 0;
				clearInterval(intervalChangeSlideBlock);
				return;
			}

		}, intervalChangeSlideBlockValue);

		circles[countSlide].className = 'circle';
		countSlide++;

		if ( countSlide == arrImages.length) {
			countSlide = 0;
		}
		circles[countSlide].className += ' circleActive';
		nextImg = countSlide;

		if ( nextImg == arrImages.length ) {
			nextImg = 0;
		}
}

// Назначение события на кнопку управления слайдером пауза/пуск
// controlCircle.addEventListener('click', controlSlider, false);

// Первоначальное состояние слайдера
circles[countSlide].className += ' circleActive';


// Смена слайда по выбору
function changeSlideManual(event) {
	clearInterval( intervalChangeSlide );
	circles[countSlide].className = "circle";
	if ( event.target != this ) {
		for ( var i = 0; i <= circles.length; i++ ) {
			if ( circles[i] == event.target ) {
				circles[i].className += " circleActive";
				countSlide = i;
				intervalChangeSlide = setInterval(changeSlideAuto, intervalChangeSlideValue);
			}
		}
	}	
}

// Следующий слайд
function nextSlide() {
	clearInterval( intervalChangeSlide );
	circles[countSlide].className = "circle";
	if ( countSlide == circles.length-1 ) {
		countSlide = -1;
	}
	countSlide++;
	circles[countSlide].className = "circle circleActive";
	intervalChangeSlide = setInterval(changeSlideAuto, intervalChangeSlideValue);
}

// Предыдущий слайд
function prevSlide() {
	clearInterval( intervalChangeSlide );
	circles[countSlide].className = "circle";
	if ( countSlide == 0 ) {
		countSlide = circles.length;
	}
	countSlide--;
	circles[countSlide].className = "circle circleActive";
	intervalChangeSlide = setInterval(changeSlideAuto, intervalChangeSlideValue);
}


// Назначение таймера смены слайдов
// var intervalSliderProgres = setInterval(timeBar, intervalChangeSlideValue/80);

// Таймер заполнения прогресбара смены слайдов
// function timeBar() {
// 	if  ( parseInt( getComputedStyle(timeBarProgresHorizont).width) <= 280 ) {
// 		timeBarProgresHorizont.style.width = parseInt( getComputedStyle(timeBarProgresHorizont).width) + parseInt( getComputedStyle(timeBarBlockHorizont).width) / 50 + 'px';
// 	}
// }