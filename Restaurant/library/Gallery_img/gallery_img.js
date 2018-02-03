'use strict'

var blockX = 10;
var blockAll = Math.ceil(blockX * Math.ceil(window.innerHeight / Math.ceil(window.innerWidth / blockX)) );

var gallery = document.querySelector('.gallery');

var topPos = 0;
var leftPos = 0;
var arrBlocks = [];
var galleryH2 = document.querySelector('.galleryH2');
var galleryH4 = document.querySelector('.galleryH4');

createBlocks();
createBtnBack();

arrBlocks.sort (new Function ('x, y', 'return Math.random () - Math.random ()'));

var blocks = document.querySelectorAll('.block');

/* Создание мини-блоков на весь экран с рендомным заполнением картинками*/
function createBlocks() {
	for (var i = 0; i < blockAll / blockX ; i++ ) {
		for (var j = 0; j < blockX ; j++ ) {
			var block = document.createElement('div');
			block.className = 'block';
			block.style.width = window.innerWidth / blockX + 'px';
			block.style.height = block.style.width;
			block.style.top = topPos + 'px';
			block.style.left = leftPos + 'px';
			gallery.appendChild(block);
			block.style.backgroundImage = 'url(./images/mini/' + Math.floor( 1+Math.random()*59 ) + '.jpg)';
			block.style.backgroundPosition = 'center center' ;
			block.style.backgroundSize = 'cover';
			block.addEventListener('click', showFullPic, false);

			leftPos += window.innerWidth / blockX;
		}

		topPos += window.innerWidth / blockX;
		leftPos = 0;
	}
	for (var i = 0; i < blockAll; i++) {
        arrBlocks.push(i);
	}
}

function createBtnBack() {
	var btnBack = document.createElement('div');
	btnBack.className = 'call2Act btnBack';
	btnBack.innerHTML = 'BACK'
	gallery.appendChild(btnBack);
	btnBack.addEventListener('click', fillBlock, false);
}
var btnBack = document.querySelector('.btnBack');


/* Заполнение мини-блоков рендомно картинками */
function fillBlock() {
	var count = 0;
 
	var rotateBlock = setInterval(function(){
		if ( count < blockAll ) {
			blocks[arrBlocks[count]].style.backgroundImage = 'url(./images/mini/' + Math.floor( 1+Math.random()*59 ) + '.jpg)';
			blocks[arrBlocks[count]].style.backgroundPosition = 'center center' ;
			blocks[arrBlocks[count]].style.backgroundSize = 'cover';
			blocks[arrBlocks[count]].className = 'block';			
			count++;
		} else {
			clearInterval(rotateBlock);
		}
	},20);

	btnBack.style.display = 'none';
	galleryH2.style.display = 'block';
	galleryH4.style.display = 'block';
}

	var fullPic = document.createElement('div');
	fullPic.className = 'fullPic';
	gallery.appendChild(fullPic);


function showFullPic(event) {
	var actualPic = event.target.style.backgroundImage;
	actualPic = 'url("./images/fullPic/' + actualPic.substr(19);

	fullPic.style.backgroundImage = actualPic;

	var count = 0;
 
	var rotateBlock = setInterval(function(){
		if ( count < blockAll ) {

			var topPos = parseInt( getComputedStyle(blocks[arrBlocks[count]]).top );
			var leftPos = parseInt( getComputedStyle(blocks[arrBlocks[count]]).left );
			var heightW = window.innerHeight;
			var widthW = window.innerWidth;

			if ( (leftPos < widthW / 3) && (topPos < heightW / 3) ) {
				blocks[arrBlocks[count]].className += ' flyLeftTop';
			}
			if ( (leftPos < widthW / 3) && ( (topPos <  heightW * 0.66) && (topPos > heightW / 3)) ) {
				blocks[arrBlocks[count]].className += ' flyLeft';
			}
			if ( (leftPos < widthW / 3) && (topPos >  heightW * 0.66) ) {
				blocks[arrBlocks[count]].className += ' flyLeftBottom';
			}
			if ( ((leftPos > widthW / 3) && (leftPos < widthW * 0.66)) && topPos < heightW / 3 ) {
				blocks[arrBlocks[count]].className += ' flyTop';
			}
			if ( ((leftPos > widthW / 3) && (leftPos < widthW * 0.66)) && ( (topPos <  heightW * 0.66) && (topPos > heightW / 3)) ) {
				blocks[arrBlocks[count]].className += ' flyFace';
			}
			if ( ((leftPos > widthW / 3) && (leftPos < widthW * 0.66)) && topPos >  heightW * 0.66 ) {
				blocks[arrBlocks[count]].className += ' flyBottom';
			}
			if ( leftPos > widthW * 0.66 && topPos < heightW / 3 ) {
				blocks[arrBlocks[count]].className += ' flyRightTop';
			}		
			if ( leftPos > widthW * 0.66 && ( (topPos < heightW * 0.66) && (topPos > heightW / 3)) ) {
				blocks[arrBlocks[count]].className += ' flyRight';
			}	
			if ( leftPos > widthW * 0.66 && topPos > heightW * 0.66 ) {
				blocks[arrBlocks[count]].className += ' flyRightBottom';
			}
			
			count++;
		} else {
			clearInterval(rotateBlock);
		}
	},10);
	galleryH2.style.display = 'none';
	galleryH4.style.display = 'none';
	btnBack.style.display = 'block';
}



