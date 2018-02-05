'use strict'
 var intervalMoveCarousel = 6000; // интервал смены слайдов карусели миллисекундах
 var animationDuration = 4 * intervalMoveCarousel / 1000; // расчет общей продолжительности цикла
 var directionCarousel = 'active_right_cs'; // влево - active_left_cs, вправо - active_right_cs

var arrSpeachText = ['I’ve been eating their business lunches for the past 7 years. Not even once have I had any unpleasant experience.',
						'The prices are as good as the menu! Each time I spend less money, than anywhere else and get a fresh, homemade dinner!',
						'My friends, who go here every week highly recommended this place to me. But it’s totally worth it!',
						'I’ve been eating their business lunches for the past 7 years. Not even once have I had any unpleasant experience.'
					]
var arrImageCust = ['cust_1.png','cust_2.png','cust_3.png','cust_4.png'];
var arrAutor = ['Tina White','John Doe','Sara Peter','Tom Bell']
var arrDescript = ['one of happy customers','one of happy customers','one of happy customers','one of happy customers'];

var slider_cs = document.querySelector('.slider_cs');


standByPos();
var sliderBlocks_cs = document.querySelectorAll('.sliderBlock_cs');
var leftPosBlock = 0;

function createBlock(newBlockName, typeBlock, className, parentBlock) {
	var newBlockName = document.createElement(typeBlock);
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
	return newBlockName;
}

function standByPos() {
	for ( var i = 0; i < 4; i++ ) {
		var sliderBlock_cs = createBlock('sliderBlock_cs', 'div', 'sliderBlock_cs', slider_cs);
		sliderBlock_cs.style.left = leftPosBlock + 'px';
		sliderBlock_cs.style.width = parseInt( window.innerWidth ) / 4 + 'px';

		switch (i) {
			case 0:
				sliderBlock_cs.style.top = 0;
				sliderBlock_cs.style.left = 15 + '%';
				sliderBlock_cs.style.transform = 'translateX(-50%) scale(0.9';
				sliderBlock_cs.style.zIndex = '5';

				break;
			case 1:
				sliderBlock_cs.style.top = 0;
				sliderBlock_cs.style.left = 50 + '%';
				sliderBlock_cs.style.transform = 'translateX(-50%) scale(1.2)';
				sliderBlock_cs.style.zIndex = '10';
			break;
			case 2:
				sliderBlock_cs.style.top = 0;
				sliderBlock_cs.style.left = 85 + '%';
				sliderBlock_cs.style.transform = 'translateX(-50%) scale(0.9)';
				sliderBlock_cs.style.zIndex = '5';
			break;
			case 3:
				sliderBlock_cs.style.top = 0;
				sliderBlock_cs.style.left = 50 + '%';
				sliderBlock_cs.style.transform = 'translateX(-50%) scale(0.6)';
				sliderBlock_cs.style.zIndex = '2';
			break;	
		}

		var photo = createBlock('photo', 'div', 'photo', sliderBlock_cs);
		photo.style.background = 'url("./images/cust/' + arrImageCust[i] + '") no-repeat 0 0 / cover';
		photo.style.height = parseInt(getComputedStyle(photo).width) + 'px';
		
		var speachText = createBlock('speachText', 'q', 'speachText', sliderBlock_cs);
		speachText.innerHTML = arrSpeachText[i];
		
		var autor = createBlock('autor', 'cite', 'autor', sliderBlock_cs);
		autor.innerHTML = arrAutor[i];
		
		var descript = createBlock('descript', 'h4', 'descript', sliderBlock_cs);
		descript.innerHTML = arrDescript[i];

		sliderBlock_cs.style.animationDuration = animationDuration + 's';
		sliderBlock_cs.className += ' ' + directionCarousel + '_' + i;

		leftPosBlock += parseInt(window.innerWidth) / 3;
	}

	var slideLeft_cs = createBlock('slideLeft_cs', 'div','slideLeft_cs', slider_cs);
	var slider_cs_stop = createBlock('slider_cs_stop', 'div','slider_cs_stop', slider_cs);
	var slideRight_cs = createBlock('slideRight_cs', 'div','slideRight_cs', slider_cs);

	slideRight_cs.style.background = 'transparent url("./images/slider/right.png") no-repeat 0 0 / cover';
	slider_cs_stop.style.background = 'transparent url("./images/slider/pause.png") no-repeat 0 0 / cover';
	slideLeft_cs.style.background = 'transparent url("./images/slider/left.png") no-repeat 0 0 / cover';

	slideRight_cs.addEventListener('click', slider_cs_moveRight, false);
	slider_cs_stop.addEventListener('click', slider_cs_pause, false);
	slideLeft_cs.addEventListener('click', slider_cs_moveLeft, false);
}

var moveleftFlag;
if ( directionCarousel == 'active_right_cs' ) {
	moveleftFlag = false;
} else {
	moveleftFlag = true;
}

var movePlay = true;

function slider_cs_moveRight() {
	if ( moveleftFlag == true) {
		moveleftFlag = false;
		movePlay = true;
		for ( var i = 0; i < sliderBlocks_cs.length; i++) {
			// sliderBlocks_cs[i].style.animationDuration = animationDuration + 's';
			sliderBlocks_cs[i].style.animationPlayState = 'running';
			if ( (parseInt(getComputedStyle(sliderBlocks_cs[i]).left)) > parseInt( window.innerWidth) / 2 ) {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex < 5 ) {
					console.log()
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_2';
					continue;
				} else if ( getComputedStyle(sliderBlocks_cs[i]).zIndex > 5  ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_1';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_2';
				}
			} else if ( (parseInt(getComputedStyle(sliderBlocks_cs[i]).left)) < parseInt( window.innerWidth) / 2  ) {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex < 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_3';
					continue;
				} else if ( getComputedStyle(sliderBlocks_cs[i]).zIndex > 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_0';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_0';
				}
			} else {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex < 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_3';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_right_cs_1';
					continue;
				}
			}
		}
	}
}

function slider_cs_moveLeft() {
	if ( moveleftFlag == false ) {
		moveleftFlag = true;
		movePlay = true;
		for ( var i = 0; i < sliderBlocks_cs.length; i++) {
			// sliderBlocks_cs[i].style.animationDuration = animationDuration + 's';
			sliderBlocks_cs[i].style.animationPlayState = 'running';
			if ( (parseInt(getComputedStyle(sliderBlocks_cs[i]).left)) > parseInt( window.innerWidth) / 2 ) {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex  < 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_1';
					continue;
				} else if ( ( getComputedStyle(sliderBlocks_cs[i]).zIndex  > 5 ) ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_2';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_2';
				}
			} else if ( (parseInt(getComputedStyle(sliderBlocks_cs[i]).left)) < parseInt( window.innerWidth) / 2 ) {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex < 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_0';
					continue;
				} else if ( getComputedStyle(sliderBlocks_cs[i]).zIndex > 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_3';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_0';
				}
			} else if ( (parseInt(getComputedStyle(sliderBlocks_cs[i]).left)) == parseInt( window.innerWidth) / 2 ) {
				if ( getComputedStyle(sliderBlocks_cs[i]).zIndex < 5 ) {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_1';
					continue;
				} else {
					sliderBlocks_cs[i].className = 'sliderBlock_cs active_left_cs_3';
					continue;
				}
			}
		}
	}
}


function slider_cs_pause() {
	var slider_cs_stop = document.querySelector('.slider_cs_stop');
	if (movePlay == true) {
		slider_cs_stop.style.background = 'transparent url("./images/slider/play_.png") no-repeat 0 0 / cover';
		for ( var i = 0; i < sliderBlocks_cs.length; i++) {
			sliderBlocks_cs[i].style.animationPlayState = 'paused';
		}
		movePlay = false;
	} else {
		slider_cs_stop.style.background = 'transparent url("./images/slider/pause.png") no-repeat 0 0 / cover';
		for ( var i = 0; i < sliderBlocks_cs.length; i++) {
			sliderBlocks_cs[i].style.animationPlayState = 'running';
		}
		movePlay = true;
	}
}