'use strict'


$(document).ready(function(){
	$('.main').onepage_scroll({
		afterMove:function (index){
			switch (index) {
				case 2:
					screen2_animation();
					break;
				case 3:
					dynamicNumber($('#dynNum1'), 0, 6524, 2000);
					dynamicNumber($('#dynNum2'), 0, 598, 2000)
					dynamicNumber($('#dynNum3'), 0, 15, 2000);
					dynamicLine($('#barFirst'), 95);
					dynamicLine($('#barSecond'), 80);
					dynamicLine($('#barFird'), 82);
					dynamicLine($('#barFourth'), 42);
					dynamicLine($('#barFifth'), 63);
					dynamicLine($('#barSix'), 34);
					break
				case 6:
					personBlockShow();
					break;
				case 7:
					screen7_animation();
					break;
			}
		}
	});
});     


var statusScrolBar = document.querySelector('.statusScrolBar');
var screens = document.getElementsByTagName('section');

function createBlock(newBlockName, typeBlock, className, parentBlock) {
	var newBlockName = document.createElement(typeBlock);
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
	return newBlockName;
}

// каждая секция/экран высотой с видимую часть экрана
for ( var i = 0; i < screens.length; i++ ) {
	screens[i].style.height = window.innerHeight + 'px';
}

var call2Acts = document.querySelectorAll('.call2Act');
for ( var i = 0; i < call2Acts.length; i++) {
	call2Acts[i].addEventListener('click',showCall2Act,false);
}

var videoBtn = document.querySelector('.videoBtn');
videoBtn.addEventListener('click', showMainVideo, false);
var bgVideo = document.querySelector('.bgVideo');
var videoContainerMain = document.querySelector('.video-container-main');
var mainVideo = document.getElementById('mainVideo');

function showMainVideo() {
	videoContainerMain.style.width = 65 + '%';
	videoContainerMain.style.height = videoContainerMain.style.width * 0.6 + 'px';
	videoContainerMain.style.display = 'block';
	bgVideo.style.display = 'block';
	// var closeCall2ActWindow = document.querySelector('.closeCall2ActWindow');
	closeCall2ActWindows[0].style.display = 'block';
	// closeCall2ActWindow.addEventListener('click',closeCall2Act,false);
	mainVideo.play();
}

/* screen 1 */


// screen 2

var circleBlocks = document.querySelectorAll('.screen2 .circleBlock')
var mainCirclesLinz = document.querySelectorAll('.mainCircleLinz');
var mainCircleShadow = document.querySelectorAll('.mainCircleShadow');
var screen2Step = 0;

var sectorCirclesLinz = document.querySelectorAll('.sectorCircleLinz');
var innerCirclesLinz = document.querySelectorAll('.innerCircleLinz');
var sectors1 = document.querySelectorAll('.screen2 .sector1');
var sectors2 = document.querySelectorAll('.screen2 .sector2');
var sectors3 = document.querySelectorAll('.screen2 .sector3');
var col3TxtBlock = document.querySelectorAll('.screen2 .col3TxtBlock');

	col3TxtBlock[0].style.left = -300 + '%';
	col3TxtBlock[0].style.top = 50 + '%';
	col3TxtBlock[1].style.left = 0 + '%';
	col3TxtBlock[1].style.top = 150 + '%';
	col3TxtBlock[2].style.left = 150 + '%';
	col3TxtBlock[2].style.top = 50 + '%';


function screen2_animation() {
		var col3TxtBlock = document.querySelectorAll('.screen2 .col3TxtBlock');

		var intervalCircleZoom =  setInterval(function(){
			if (screen2Step < circleBlocks.length) {
				mainCirclesLinz[screen2Step].className += ' zoomMainCircle';
				mainCircleShadow[screen2Step].className += ' zoomMainCircleShadow';
				sectorCirclesLinz[screen2Step].className += ' zoomSectorCircle';
				innerCirclesLinz[screen2Step].className += ' zoomInnerCircle';
				sectors1[screen2Step].className += ' sectorShow';
				sectors2[screen2Step].className += ' sectorShow';
				sectors3[screen2Step].className += ' sectorShow';

				switch (screen2Step) {
					case 0:
						sectors1[screen2Step].style.backgroundColor = 'red';
						sectors2[screen2Step].style.backgroundColor = 'white';
						sectors3[screen2Step].style.backgroundColor = 'white';
						col3TxtBlock[screen2Step].style.left = 0 + '%';
						break;
					case 1:
						sectors1[screen2Step].style.backgroundColor = 'red';
						sectors2[screen2Step].style.backgroundColor = 'red';
						sectors3[screen2Step].style.backgroundColor = 'white';
						col3TxtBlock[screen2Step].style.top = 50 + '%';
						break;
					case 2:
						sectors1[screen2Step].style.backgroundColor = 'red';
						sectors2[screen2Step].style.backgroundColor = 'red';
						sectors3[screen2Step].style.backgroundColor = 'red';
						col3TxtBlock[screen2Step].style.left = 0 + '%';
						break;
				}			
			} 
				screen2Step++;
		}, 300);
	
}



/* screen 3 */
var flagDynNum = 0;

function dynamicNumber(object, curNum, maxNum, speed) {
	if ( flagDynNum < 3 ) {
		$({numberValue: curNum}).animate({numberValue: maxNum}, {
		    duration: speed,
		    easing: 'linear',
		    step: function() { 
		        $(object).text(Math.ceil(this.numberValue)); 
		    }
		});
		flagDynNum++;
	}
}

var widthDynamicLine = 0;

function dynamicLine(elem, widthFinish) {
  var growBarInterval = setInterval(frame, 100);
  function frame() {
    if (widthDynamicLine >= widthFinish) {
      clearInterval(growBarInterval);
    } else {
      widthDynamicLine++; 
      $(elem).css('width', widthDynamicLine + '%'); 
      $(elem).html(widthDynamicLine * 1  + '%');
    }
  }
}
/* END screen 3 */



/* screen 6 */

var personBlocks = document.querySelectorAll('.personBlock');
var persons = document.querySelectorAll('.person');
var personInfos = document.querySelectorAll('.personInfo');
var closeBlocks = document.querySelectorAll('.closeBlock');
var flagShowPersonInfo = false;
var arrSmm = ['fb','g','in','inst','tw','yt','pin','wa'];


createPersonalBlock();
createSMMBlock();

function createPersonalBlock() {
	var personBlockPos = window.innerWidth*0.05;
		for ( var i = 0; i < personBlocks.length; i++ ) {
			personBlocks[i].style.left =  personBlockPos + 'px';
			personBlocks[i].style.width =  window.innerWidth * 0.8 / 4  - 30 + 'px';
			personBlocks[i].style.top = 150 + '%';
			personBlocks[i].addEventListener('click', showInfoPerson, false);
			persons[i].style.height = parseInt(getComputedStyle(persons[i]).width) * 1.35 + 'px';

			personBlockPos += parseInt(window.innerWidth) * 0.8 / 4 + 30;

			personBlocks[i].style.display = 'flex';
			personInfos[i].style.display = 'none';
			personInfos[i].style.background = '#000 url(./images/team/' + (i+1) + '_.jpg) no-repeat 0 0 / cover';
		}

	flagShowPersonInfo = false;
}

function createSMMBlock() {
	for (  var j = 0; j < personInfos.length; j++ ) {
		var smmAll = createBlock('smmAll','div','smmAll', personInfos[j]);
		for ( var i = 0; i < arrSmm.length; i++ ) {
			var smmBlock = document.createElement('div');
			smmBlock.className = 'smmBlock';
			smmBlock.style.background = 'transparent url(./images/smm/smm_' + arrSmm[i] +'.png) no-repeat 0 0 / cover';
			smmAll.appendChild(smmBlock);
		}
	}
}

function personBlockShow() {
	var num = 0;
	var personBlockInterval = setInterval(function(){
		if (num < personBlocks.length) {
			personBlocks[num].className += ' personBlockShow';
			num++;
		} else {
			clearInterval(personBlockInterval);
		}
	},300);
};

var leftPos = 0;
function showInfoPerson(event) {
	if ( flagShowPersonInfo == false ) {
		leftPos = parseInt( getComputedStyle(this).left) + 'px';
		this.style.left = window.innerWidth*0.05 + 'px';

		for ( var i = 0; i < personBlocks.length; i++ ) {
			if ( personBlocks[i] != this ) {
				personBlocks[i].style.display = 'none';
			} else {
				personInfos[i].style.display = 'flex';
				personInfos[i].style.width = window.innerWidth * 0.8 - window.innerWidth * 0.8 / 4 + 'px';
				personInfos[i].className = "personInfo personInfoShow";
			}
		}
		flagShowPersonInfo = true;
	} else {
		this.style.left = leftPos;
		for ( var i = 0; i < personBlocks.length; i++ ) {
			personBlocks[i].style.display = 'flex';
			personInfos[i].className = "personInfo personInfoHide";
		}
		flagShowPersonInfo = false;
	}
}

/* END screen 6*/


/* screen 7 */

// псевдопараллакс эффект
var boxer = screens[6].querySelector('img');
var maxMove =  screens[6].offsetWidth / 30;
var boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2);
var boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2);
var fluidboxer = window.matchMedia('(min-width: 726px)');

function getMousePos(xRef, yRef) {
  var panelRect = screens[6].getBoundingClientRect();
  return {
      x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)* screens[6].offsetWidth,
      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) *  screens[6].offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
  var mousePos = getMousePos(e.clientX, e.clientY),
   distX = mousePos.x - boxerCenterX,
   distY = mousePos.y - boxerCenterY;
  if (Math.abs(distX) < 1000 && distY < 1000 && fluidboxer.matches) {
  boxer.style.transform = "translate("+(-1*distX)/50+"px,"+(-1*distY)/50+"px)";
     screens[6].style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
  }
})
// END псевдопараллакс эффект


function screen7_animation() {
	var textBlock = document.querySelector('.textBlock');
	var imgBlock = document.querySelector('.imgBlock');

	textBlock.className += ' shefTextBlock';
	imgBlock.className += ' shefPicBlock';
}
/* END screen 7 */


/* screen 8 */


/* END screen 8 */

/* screen 9 */

/* END screen 9*/

/* Call2Act*/
var bgCall2Act = document.querySelector('.bgCall2Act');
var bgvCall2Act = document.querySelector('.bgCall2Act');
var call2ActWindow = document.querySelector('.call2ActWindow');
var sendTelBtn = document.querySelector('.sendTelBtn');
sendTelBtn.addEventListener('click',sendTel, false);
var sendEmailBtn = document.querySelector('.sendEmailBtn');
sendEmailBtn.addEventListener('click',sendEmail, false);
var closeCall2ActWindows = document.querySelectorAll('.closeCall2ActWindow');
var telForm = document.querySelector('.telForm'); 
var emailForm = document.querySelector('.emailForm');
for (var i = 0; i < closeCall2ActWindows.length; i++ ) {
	closeCall2ActWindows[i].addEventListener('click', closeCall2Act,false);
}
var informer = document.querySelector('.informer');

function showCall2Act() {
	bgCall2Act.style.display = 'block';
	call2ActWindow.style.display = 'flex';

	for ( var i = 0; i < screens.length; i++ ) {
		if ( screens[i].classList.contains('active')){
			call2ActWindow.style.top = i  * window.innerHeight + window.innerHeight / 2 + 'px';
			informer.style.top = i  * window.innerHeight + window.innerHeight / 2 + 'px';
			bgCall2Act.style.top = i * window.innerHeight  + 'px';  
		}
	}
	call2ActWindow.style.left = 50 + '%';
	call2ActWindow.style.opacity = 1;
}

function closeCall2Act() {
	bgVideo.style.display = 'none';
	bgvCall2Act.style.display = 'none';
	videoContainerMain.style.display = 'none';
	mainVideo.pause();

	clearInfo();
	bgCall2Act.style.display = 'none';

	var hints = document.querySelectorAll('.hint');
	hints[0].className = 'hint';
	hints[1].className = 'hint';

}

function sendTel() {
	var str = document.querySelector('.telForm').value;
	var result = '';

	result = str.match(/^((\+\d)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);

	if (result == null) {
		telForm.style.boxShadow = '0 0 5px 3px #FF0006 inset';
		telForm.style.color = 'red';
		telForm.value = 'wrong format';
		var timerRepeat =  setTimeout(function(){
			telForm.style.boxShadow = '0 0 0px 0px #2DD96E inset';
			telForm.style.color = '#5B5B5B';
			telForm.value = str;
		},3000);
	} else {
		telForm.style.color = '#B3B3B3';
		var hints = document.querySelectorAll('.hint');
		hints[0].className = 'hint';
		hints[1].className = 'hint';
		informer.style.left = 50 + '%';
		informer.style.opacity = 1;
		informer.innerHTML = "Thanks! We will contact you.";
		// telForm.style.boxShadow = '0 0 5px 3px #2DD96E inset';
		clearInfo();
		var timerRepeat = setTimeout(function(){
			informer.style.left = -50 + '%';
			informer.style.opacity = 0;
			bgCall2Act.style.display = 'none';
		},4000);
	}
}

function sendEmail() {
	var str = document.querySelector('.emailForm').value;
	var result = '';

	result = str.match(/^[(a-z)(0-9)]+[\_\.\-]*[(a-z)|(0-9)]+[@][(a-z)(0-9)]+[\.]?[a-z]+[\.][a-z]{2,5}$/);
	console.log(result);

	if (result == null) {
		emailForm.style.boxShadow = '0 0 5px 3px #FF0006 inset';
		emailForm.style.color = 'red';
		emailForm.value = 'Address is not correct';
		var timerRepeat =  setTimeout(function(){
			emailForm.style.boxShadow = '0 0 0px 0px #2DD96E inset';
			emailForm.style.color = '#5B5B5B';
			emailForm.value = str;
		},3000);
	} else {
		emailForm.style.color = '#B3B3B3';
		var hints = document.querySelectorAll('.hint');
		hints[0].className = 'hint';
		hints[1].className = 'hint';
		informer.style.left = 50 + '%';
		informer.style.opacity = 1;
		informer.innerHTML = "Thanks! We will contact you.";
		// emailForm.style.boxShadow = '0 0 5px 3px #2DD96E inset';
		clearInfo();
		var timerRepeat = setTimeout(function(){
			informer.style.left = -50 + '%';
			informer.style.opacity = 0;
			bgCall2Act.style.display = 'none';
		},4000);
	}
}

function clearInfo() {
	telForm.value = "";
	telForm.style.color = '#5B5B5B';
	telForm.style.boxShadow = '0 0 0px 0px #2DD96E inset';

	emailForm.value = "";
	emailForm.style.boxShadow = '0 0 0px 0px #2DD96E inset';
	emailForm.style.color = '#5B5B5B';

	call2ActWindow.style.left = -50 + '%';
	call2ActWindow.style.opacity = 0;

}





// placeholder выезжает вверх
var inputBlocks = document.querySelectorAll('input');

for (i=0; i < inputBlocks.length; i++ ) {
	var hint = document.createElement('div');
	hint.innerHTML = inputBlocks[i].placeholder;
	hint.className = 'hint';
	inputBlocks[i].parentNode.insertBefore(hint,inputBlocks[i]);
	inputBlocks[i].onkeydown = function() {

	var placeholder = this.previousElementSibling;
	placeholder.className = ' hint hintTop';
	}
}
