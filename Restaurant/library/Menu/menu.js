'use strict'

var timeHideMenu = 7000; //интервал скрытия меню
var arrMenuItems = ['gallery','pricing','contacts','all blocks']; //Наименования пунктов меню
var arrMenuLinks = ['5','8','11',''];	//Внутренние ссылки меню
var arrSubmenuNumItems = [0,0,0,11];	//кол-во подменю пугктов мею
var arrSubmenuItems = ['Start','3 steps','Counters','Other Customers','Gallery','Team','Shef','Pricing','Clients','Foods','Contacts']; //Наименования пунктоа подменю
var arrSubmenuLinks = ['#1','#2','#3','#4','#5','#6','#7','#8','#9','#10','#11']; //Ссылки пунктов подменю

var countSubmenuItems = 0;
var activMenuFlag = false;



var mainMenu = document.querySelector('.mainMenu');

var menu = document.createElement('ul');
menu.className = 'menu';
mainMenu.appendChild(menu);

var nav = document.getElementById('nav');

createMenu();

function createMenu() {
	var controlMenuBlock = document.createElement('div');
	controlMenuBlock.className = 'controlMenuBlock';
	nav.appendChild(controlMenuBlock);

	for ( var i = 0; i < arrMenuItems.length; i++ ) {
		var li = document.createElement('li');
		menu.appendChild(li);
		var a = document.createElement('a');
		a.className = 'menuItem';
		a.innerHTML = arrMenuItems[i];
		a.dataset.index = arrMenuLinks[i];
		a.style.zIndex = '10';
		li.appendChild(a);

		if ( arrSubmenuNumItems[i] != 0 ) {
			var submenu = document.createElement('ul');
			submenu.className = 'submenu';
			li.appendChild(submenu);
			li.addEventListener('click',toggleSubmenu,false);
			for (var j = 0; j < arrSubmenuNumItems[i]; j++ ) {

					var submenuItem = document.createElement('li');
					submenuItem.className = 'submenuItem';
					submenu.appendChild(submenuItem);
					
					var a = document.createElement('a');
					a.innerHTML = arrSubmenuItems[ j + countSubmenuItems ];
					a.href = '#' + (j+1);
					a.dataset.index = j+1;
					submenuItem.appendChild(a);
			}
			countSubmenuItems += arrSubmenuNumItems[i];
		} else {
			// если нет есть вложенного меню
			a.href = '#' + arrMenuLinks[i];
		}
	}
}

var menuItems = document.querySelectorAll('.menuItem');
var submenuItems = document.querySelectorAll('.submenuItem');

var submenu = document.querySelector('.submenu');
countSubmenuItems = 0;

var intervalItemsShow;
var flagShowMenu = true;
var flagShowSubmenu = false;

function toggleSubmenu() {
	countSubmenuItems = 0;
	if ( flagShowSubmenu == false) {
		intervalItemsShow = setInterval( function(){
			submenu.style.opacity = 1;
			submenu.style.display = 'block';
			if ( countSubmenuItems < arrSubmenuItems.length ){
				if ( countSubmenuItems%2 == 0 ) {
					submenuItems[countSubmenuItems].className += ' showSubmenuleft';
				} else {
					submenuItems[countSubmenuItems].className += ' showSubmenuRight';
				}
					countSubmenuItems++;
			} else {
					clearInterval(intervalItemsShow);
				}
			flagShowSubmenu = true;

		}, 100);
	} else {
		clearInterval(intervalItemsShow);
		for (var i = 0; i < submenuItems.length; i++ ) {
			submenuItems[i].className = 'submenuItem';
			hideSubmenu();
		}
		flagShowSubmenu = false;
		submenu.style.display = 'none';
	}
}


function hideSubmenu() {
	clearInterval(intervalItemsShow);
	for (var i = 0; i < submenuItems.length; i++ ) {
		submenuItems[i].className = 'submenuItem';
	}
	flagShowSubmenu = false;
}

var intervalHideMenu = setInterval( hideMenu, 10000);

function hideMenu() {
	if ( flagShowMenu == true && flagShowSubmenu == false) {
		nav.style.transform = 'translateY(-100%)';
		clearInterval(intervalHideMenu);
		flagShowMenu = false;
	}
}


var controlMenuBlock = document.querySelector('.controlMenuBlock');
controlMenuBlock.addEventListener('click', toggleMenu, false);

function toggleMenu() {
	if ( flagShowMenu == true) {
		nav.style.transform = 'translateY(-100%)';
		hideSubmenu();
		clearInterval(intervalHideMenu);
		flagShowMenu = false;
		flagShowSubmenu = false;
	} else {
		nav.style.transform = 'translateY(0%)';
		intervalHideMenu = setInterval( hideMenu, 10000);
		flagShowMenu = true;
	}

}

// window.addEventListener('click',toggleSubmenu, false);