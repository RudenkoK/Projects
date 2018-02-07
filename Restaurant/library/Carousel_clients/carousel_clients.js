'use strict'

var countClients = 12;		// кол-во изображений в карусели
var countImgPage = 3;		// кол-во изображений на странице
var countImgStep = 1;		// шаг смещения
var timerChangeImg = 3000;	// частота смены картинок в миллисекундах
var durationMove = 1;		// продолжительность смены картинки в секундах

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

createDescription();

var infoClientBlockFaces = document.querySelectorAll('.infoClientBlockFace');
var infoClientBlockBacks = document.querySelectorAll('.infoClientBlockBack');
var icons = document.querySelectorAll('.icon');

var flagMoveRight = true;


function createDescription() {
	var posInfoClientBlock = 0;
	var arrIcon = ['vallet','idea_2','track'];
	var arrDesc = [clientText, ourCompany, partners];

	for ( var i = 0; i < countImgPage; i++) {
		var infoClientBlockBack = document.createElement('div');
		infoClientBlockBack.className = 'infoClientBlockBack infoClientBlock flipBack';
		infoClientBlockBack.style.left = posInfoClientBlock + 'px';
		infoClientBlockBack.style.width = (parseInt( carousel.style.width ) - marginImg) / 3 + 'px';
		carousel.appendChild(infoClientBlockBack);
		infoClientBlockBack.innerHTML = arrDesc[i];
		infoClientBlockBack.addEventListener('mouseover', rotateInfoClientBlock, false);
		infoClientBlockBack.addEventListener('mouseout', rotateInfoClientBlockEscape, false);

		var infoClientBlockFace = document.createElement('div');
		infoClientBlockFace.className = 'infoClientBlockFace infoClientBlock';
		infoClientBlockFace.style.left = posInfoClientBlock + 'px';
		infoClientBlockFace.style.width = (parseInt( carousel.style.width ) - marginImg) / 3 + 'px';
		carousel.appendChild(infoClientBlockFace);
		infoClientBlockFace.addEventListener('mouseover', rotateInfoClientBlock, false);
		infoClientBlockFace.addEventListener('mouseout', rotateInfoClientBlockEscape, false);

		posInfoClientBlock += parseInt( carousel.style.width ) / countImgPage;

		var icon = document.createElement('div');
		icon.className = 'icon';
		icon.style.background = 'transparent url(./images/' + arrIcon[i] + '.png) no-repeat 0 0 /cover';
		infoClientBlockFace.appendChild(icon);
	}
} 

function rotateInfoClientBlock(event) {
	var curObj = null;
	for ( var i = 0; i < countImgPage; i++ ) {
		if ( this == infoClientBlockFaces[i] ) {
			curObj = i;
			if ( this.className == 'infoClientBlockFace infoClientBlock') {
				infoClientBlockFaces[i].className += ' flip';
				infoClientBlockBacks[i].className = 'infoClientBlockBack infoClientBlock';
			}
		} 
	}
}

function rotateInfoClientBlockEscape(event) {
	for ( var i = 0; i < countImgPage; i++ ) {
		 if (this == infoClientBlockBacks[i] ) {
			if ( this.className == 'infoClientBlockBack infoClientBlock') {
				infoClientBlockBacks[i].className += ' flipBack';
				infoClientBlockFaces[i].className = 'infoClientBlockFace infoClientBlock';
			}
		}
	}
}