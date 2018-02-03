var strOldRotate = document.querySelector('.titleRotate').innerHTML;
var strNewRotate = strOldRotate;
var countString = 0;
var containerRotate = document.querySelector('.containerRotate');
var titleRotate = document.querySelector('.titleRotate');

convert(strOldRotate, 0);
var oldLettersRotate = document.querySelectorAll('.oldLetterRotate');
convert(strNewRotate, 1);
var newLettersRotate = document.querySelectorAll('.newLetterRotate');

var numRotate = oldLettersRotate.length - 1;
var magicFlagRotate = false;

var magicIntervalRotate = setInterval(function() {
	countString = 0;
	magicRotate();
}, 3000);


function convert(string, countString) {
	for ( var i = 0; i < string.length; i++ ) {
		var blockName = document.createElement('span');
		if (countString == 0) {
			blockName.className = 'oldLetterRotate';
		} else {
			blockName.className = 'newLetterRotate';
		}
		blockName.style.position = 'absolute';
		blockName.style.top = 0 + 'px';
		blockName.style.left = 40 * (i + 1) + 'px';
		blockName.innerHTML = string[i];
		containerRotate.appendChild(blockName);
	}
	titleRotate.style.display = 'none';
}

function magicRotate() {
	var intervalMagicRotate = setInterval( function() {
		if ( countString != oldLettersRotate.length ) {
			numRotate++;
			if ( numRotate == oldLettersRotate.length ) {
				numRotate = 0;
			}
			if (magicFlagRotate == false) {
				oldLettersRotate[numRotate].className = 'oldLetterRotate hideLetterRotate';
				newLettersRotate[numRotate].className = 'newLetterRotate showLetterRotate';
			} else {
				oldLettersRotate[numRotate].className = 'oldLetterRotate showLetterRotate';
				newLettersRotate[numRotate].className = 'newLetterRotate hideLetterRotate';
			}
			countString++;
		} else {
			if ( magicFlagRotate == false ) {
				magicFlagRotate = true;
			} else {
				magicFlagRotate = false;
			}
			clearInterval(intervalMagicRotate);
		}
	}, 100);
}