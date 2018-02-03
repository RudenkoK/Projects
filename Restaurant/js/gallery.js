'use strict'

var arrImgGallery = ['3.jpg','4.jpg','12.jpg','14.jpg','15.jpg','16.jpg','1.jpg','4.jpg'];

var gallery = document.querySelector('.gallery');


for ( var i = 0; i < arrImgGallery.length; i++) {
	var photoBlock = document.createElement('div');
	photoBlock.className = 'photoBlock';
	gallery.appendChild(photoBlock);
	photoBlock.addEventListener('mouseover', activPhotoBlock, false);
	photoBlock.addEventListener('mouseleave', passivPhotoBlock, false);


	var img = document.createElement('img');
	img.src = './images/' + arrImgGallery[i];
	photoBlock.appendChild(img);
}


function activPhotoBlock(event) {
	event.target.className += ' openTop openBottom';
}

function passivPhotoBlock (event) {
	event.target.className = 'photoBlock';
}