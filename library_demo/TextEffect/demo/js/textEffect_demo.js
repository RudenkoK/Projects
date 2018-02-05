'use strict'

var strOld = "Classic Restaurant";
var strNew = "Restaurant On-line";
var intervalChangeAll = 6000;
var intervalChangeLetter = 100;

var cikl = 0;
var container = document.querySelector('.container');

var title = document.createElement('div');
title.className = 'title';
container.appendChild(title);


// анимация первого экрана при загрузке документа
window.addEventListener('load',screenLoad, false);

// Состояние первого экрана при загрузке
function screenLoad() {
	title.className += ' showTitle';
	title.style.width = strOld.length * 45 + 'px';
	title.style.transform = 'translateX(-50%)';
	magic();
}

var countString = 0;

convert(strOld, 0);
var oldLetters = document.querySelectorAll('.oldLetter');
convert(strNew, 1);
var newLetters = document.querySelectorAll('.newLetter');

var num = oldLetters.length - 1;
var magicFlag = false;

var magicInterval = setInterval(function() {
	countString = 0;
	magic();
}, intervalChangeAll);


function convert(string, countString) {
	for ( var i = 0; i < string.length; i++ ) {
		var block = document.createElement('span');
		if (countString == 0) {
			block.className = 'oldLetter';
		} else {
			block.className = 'newLetter';
		}
		block.style.position = 'absolute';
		block.style.top = 0 + 'px';
		block.style.left = 40 * (i + 1) + 'px';
		block.innerHTML = string[i];
		title.appendChild(block);
	}
}

function magic() {
	var intervalMagic = setInterval( function() {
		if ( countString != oldLetters.length ) {
			num++;
			if ( num == oldLetters.length ) {
				num = 0;
			}
			if (magicFlag == false) {
				oldLetters[num].className = 'oldLetter hideLetter';
				newLetters[num].className = 'newLetter showLetter';
			} else {
				oldLetters[num].className = 'oldLetter showLetter';
				newLetters[num].className = 'newLetter hideLetter';
			}
			countString++;
		} else {
			if ( magicFlag == false ) {
				magicFlag = true;
			} else {
				magicFlag = false;
			}
			clearInterval(intervalMagic);
		}
	}, intervalChangeLetter);
}
