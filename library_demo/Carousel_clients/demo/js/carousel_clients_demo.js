var countClients = 12;		// кол-во изображений в карусели
var countImgPage = 3;		// кол-во изображений на странице
var countImgStep = 1;		// шаг смещения
var timerChangeImg = 5000;	// частота смены картинок в миллисекундах
var durationMove = 3;		// продолжительность смены картинки в секундах

var position = 0;
var flagMouseOver = true;
var widthImg =  Math.floor( window.innerWidth * 0.6 / 3) ;	// ширина изображения px

var marginImg = 40;			// суммарный внешний горизонтальный отступ	 

var clients = document.querySelector('.clients');

var clientText = 'Clients are companies or individuals who would like to open their own restaurant and have a financial opportunity.';
var ourCompany = 'We have experience and detailed instructions how to achieve amazing results.';
var partners = 'Partners help us and our customers to supply the necessary equipment, equipment and products.';


function createCarousel() {
	var carousel = document.createElement('div');
	carousel.className = 'carousel';
	carousel.style.width = (widthImg + marginImg) * countImgPage + 'px';
	clients.appendChild(carousel);

	var clientsList = document.createElement('ul');
	clientsList.className = 'clientsList';
	clientsList.style.transition = durationMove + 's';
	carousel.appendChild(clientsList);

	for ( var i = 0; i < countClients; i++ ) {
		var li = document.createElement('li');
		clientsList.appendChild(li);

		var img = document.createElement('img');
		img.src = './images/firm/firm' + i + '.png';
		img.style.width = widthImg + 'px';
		img.className = 'clientImg';
		li.appendChild(img);
	}
}

function moveCarouselLeft() {
	if ( position < 0 ) { 
		position = position + (widthImg + marginImg) * countImgStep;
		clientsList.style.marginLeft = position + 'px';
	}
}

function moveCarouselRight() {
	if ( position > -(widthImg + marginImg) * (countClients - countImgPage)) { 
		position = position - (widthImg + marginImg) * countImgStep;
		clientsList.style.marginLeft = position + 'px';
	}
}

function moveCarouselAuto() {
	var moveCarouselInterval = setInterval(function(){
		if ( position > -(widthImg + marginImg) * (countClients - countImgPage) && flagMoveRight == true) {
			moveCarouselRight();
		} else {
			moveCarouselLeft();
			flagMoveRight = false;
		}

		if ( position == 0) {
			flagMoveRight = true;
		}

	},timerChangeImg);
}

createCarousel();
moveCarouselAuto();

var leftArrow = document.querySelector('.leftArrow');
var rightArrow = document.querySelector('.rightArrow');
var clientsList = document.querySelector('.clientsList');
var carousel = document.querySelector('.carousel');

var flagMoveRight = true;