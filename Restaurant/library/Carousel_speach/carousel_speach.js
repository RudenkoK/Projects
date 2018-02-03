'use strict'
 var intervalMoveCarousel = 6000; // интервал смены слайдов карусели миллисекундах
 var animationDuration = 4 * intervalMoveCarousel / 1000; // расчет общей продолжительности цикла
 var directionCarousel = 'active_right_cs'; // влево - active_left_cs, вправо - active_right_cs


// Массив изображений для слайдера
var arrSpeachText = ['I’ve been eating their business lunches for the past 7 years. Not even once have I had any unpleasant experience.',
						'The prices are as good as the menu! Each time I spend less money, than anywhere else and get a fresh, homemade dinner!',
						'My friends, who go here every week highly recommended this place to me. But it’s totally worth it!',
						'I’ve been eating their business lunches for the past 7 years. Not even once have I had any unpleasant experience.'
					]
var arrImageCust = ['cust_1.png','cust_2.png','cust_3.png','cust_4.png'];
var arrAutor = ['Tina White','John Doe','Sara Peter','Tom Bell']
var arrDescript = ['one of happy customers','one of happy customers','one of happy customers','one of happy customers'];
var timerSlide = 8000;

var slider_cs = document.querySelector('.slider_cs');

function createBlock(newBlockName, typeBlock, className, parentBlock) {
	var newBlockName = document.createElement(typeBlock);
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
	return newBlockName;
}

var leftPosBlock = 0;

for ( var i = 0; i < 4; i++ ) {
	var sliderBlock_cs = createBlock('sliderBlock_cs', 'div', 'sliderBlock_cs', slider_cs);
	sliderBlock_cs.style.left = leftPosBlock + 'px';
	sliderBlock_cs.style.width = parseInt( window.innerWidth ) / 4 + 'px';
	
	var photo = createBlock('photo', 'div', 'photo', sliderBlock_cs);
	photo.style.background = 'url("./images/cust/' + arrImageCust[i] + '") no-repeat 0 0 / cover';
	photo.style.height = parseInt(getComputedStyle(photo).width) + 'px';
	
	var speachText = createBlock('speachText', 'q', 'speachText', sliderBlock_cs);
	speachText.innerHTML = arrSpeachText[i];
	
	var autor = createBlock('autor', 'cite', 'autor', sliderBlock_cs);
	autor.innerHTML = arrAutor[i];
	
	var descript = createBlock('descript', 'h4', 'descript', sliderBlock_cs);
	descript.innerHTML = arrDescript[i];
	leftPosBlock += parseInt(window.innerWidth) / 3;
}

// var slideLeft_cs = createBlock('slideLeft_cs', 'div','slideLeft_cs', slider_cs);
// var slideRight_cs = createBlock('slideRight_cs', 'div','slideRight_cs', slider_cs);

// slideRight_cs.style.background = 'transparent url("./images/slider/right.png") no-repeat 0 0 / cover';
// slideLeft_cs.style.background = 'transparent url("./images/slider/left.png") no-repeat 0 0 / cover';

// slideRight_cs.addEventListener('click', slider_cs_moveRight, false);
// slideLeft_cs.addEventListener('click', slider_cs_moveLeft, false);

var intervaSlider_cs = setInterval(carouselMove, intervalMoveCarousel);

var sliderBlocks_cs = document.querySelectorAll('.sliderBlock_cs');
var cc = 0;

function carouselMove() {
	if ( cc == sliderBlocks_cs.length) {
		return;
	}
	sliderBlocks_cs[cc].style.animationDuration = animationDuration + 's';
	sliderBlocks_cs[cc].className += ' ' + directionCarousel;
	cc++;
}