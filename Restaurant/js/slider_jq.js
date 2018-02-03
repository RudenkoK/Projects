// В HTML должен быть создан контейнер slider
'use strict'

$('#slide').append(slideOld)
;

$('.slider').append( $('.slideOld') );
$('.slideOld').attr('class','slideOld');


createBlock('slideOld', 'slideOld', $('.slider') );
createBlock('slideNew', 'slideONew', slider);
createBlock('toolsSliderBlock', 'toolsSliderBlock toolsSliderBlockHorizont', slider);
createBlock('timeBarBlock', 'timeBarBlock timeBarBlockHorizont', toolsSliderBlock);
createBlock('timeBarProgres', 'timeBarProgres timeBarProgresHorizont', timeBarBlock);
createBlock('slideLeft', 'slideLeft', toolsSliderBlock);
$('.slideLeft').css('background', 'transparent url("../images/left.png") no-repeat 0 0 / cover;');
createBlock('circleBlock', 'circleBlock circleBlockHorizont', toolsSliderBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('circle', 'circle', circleBlock);
createBlock('slideRight', 'slideRight', toolsSliderBlock);
$('.slideRight').css('background', 'transparent url("../images/right.png") no-repeat 0 0 / cover;');
createBlock('controlCircle', 'controlCircle controlPause', toolsSliderBlock);

var actualImg = 0;
var timerSlide = 8000;
// Массив изображений для слайдера
var arrImages = ['_1.jpg','_2.jpg','_3.jpg','_4.jpg'];

// Назначение таймера смены слайдов
var intervalSliderProgres;
var intervalChangeSlide;

// Назначение события на кнопку управления слайдером пауза/пуск
$('.controlCircle').click(controlSlider);



// Первоначальное состояние слайдера
$('.slideOld').css('background', '#000 url("./images/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover');
$('.circle').eq(actualImg).addClass('circleActive');

intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);

$('.slideRight').click(nextSlide);
$('.slideLeft').click(prevSlide);
$('.circleBlock').click(changeSlideManual);

// Автоматическая смена слайдов 
function changeSlideAuto() {
	$('.circle').eq(actualImg).attr('class','circle');
	actualImg++;

	$changeSlideHelper();

	$('.circle').eq(actualImg).addClass('circleActive');
}

function changeSlideHelper() {
	if ( actualImg > arrImages.length-1 ){
		actualImg = 0;
	}
	if (actualImg%2 == 0) {
		$('.slideNew').attr('class','slideNew slideHide');
		$('.slideOld').css('background', '#000 url("./images/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover');
		$('.slideOld').attr('class','slideOld slideShow');
	} else {		
		$('.slideOld').attr('class','slideOld slideHide');
		$('.slideNew').css('background', '#000 url("./images/' + arrImages[actualImg]+ '") no-repeat 0 0 / cover');
		$('.slideNew').attr('class','slideNew slideShow');	
	}
}


// Смена слайда по выбору
function changeSlideManual(event) {
	clearInterval( intervalChangeSlide );
	$('.circle').eq(actualImg).attr('class','circle');
	if ( $(event.target) != $(this) ) {
		for ( var i = 0; i <= $('.circle').length; i++ ) {
			if ( $('.circle').eq(i) == $(event.target) ) {
				$('.circle').eq(i).addClass('circleActive');
				actualImg = i;
				changeSlideHelper();
				intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
			}
		}
		titlePosition(actualImg);
	}	
}

// Следующий слайд
function nextSlide() {
	clearInterval( intervalChangeSlide );
	$('.circle').eq(actualImg).attr('class','circle');
	if ( actualImg == $('.circle').length-1 ) {
		actualImg = -1;
	}
	actualImg++;
	$('.circle').eq(actualImg).attr('class', 'circle circleActive');
	changeSlideHelper();
	intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
	titlePosition(actualImg);
}

// Предыдущий слайд
function prevSlide() {
	clearInterval( intervalChangeSlide );
	$('.circle').eq(actualImg).attr('class', 'circle');
	if ( actualImg == 0 ) {
		actualImg = $('.circle').length;
	}
	actualImg--;
	$('.circle').eq(actualImg).attr('class','circle circleActive');
	changeSlideHelper();
	intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
	titlePosition(actualImg);
}

// Кнопки управления слайдером
function controlSlider() {
	if ( $(this).hasClass('controlCircle controlPause') ) {
		$(this).attr('class','controlCircle controlPlay');
		clearInterval( intervalChangeSlide );
		$('.timeBarProgres').css('height', '0px');
		clearInterval(intervalSliderProgres);
	} else {
		$(this).attr('class','controlCircle controlPause');
		intervalChangeSlide = setInterval(changeSlideAuto, timerSlide);
		intervalSliderProgres = setInterval(timeBar, timerSlide/100);
	}
}


// Назначение таймера смены слайдов
intervalSliderProgres = setInterval(timeBar, timerSlide/100);

// Таймер заполнения прогресбара смены слайдов
function timeBar() {
	if  ( $('.timeBarProgres').css('height') < 154 ) {
		$('.timeBarProgres').css('height', $('.timeBarProgres').css('height') + $('.timeBarBlock').css('height') / 77);
	}
}
