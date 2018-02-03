'use strict'

var foodPlans = document.querySelectorAll('.foodPlan');
var prices = document.querySelectorAll('.price');

var arrCategory = ['Cheese','Pasta','Vegetables','Meat'];
var arrCurPrice = ['59','69','79','99'];
var arrSelectProd0 = ['Standart','Mozzarella','Parmesan','Roquefort','Camembert'];
var arrSelectPrice0 = ['0$','5$','7$','11$','12$'];
var arrSelectProd1 = ['Standart','Manicotti','Bucatini','Tagliatelle','Fettuccini'];
var arrSelectPrice1 = ['0$','4$','6$','6$','8$'];
var arrSelectProd2 = ['Standart','Tomato','Bell pepper','Zucchini','Mix veget'];
var arrSelectPrice2 = ['0$','6$','7$','7$','11$'];
var arrSelectProd3 = ['Standart','Сhicken','Turkey','Veal','Duck'];
var arrSelectPrice3 = ['0$','7$','9$','12$','15$'];

function createBlock(newBlockName, typeBlock, className, parentBlock) {
	var newBlockName = document.createElement(typeBlock);
	newBlockName.className = className;
	parentBlock.appendChild(newBlockName);
	return newBlockName;
}
function createAccordeon(k) {
	var accordionContainer = createBlock('accordionContainer', 'div', 'accordion-container', foodPlans[k]);
	// accordionContainer.className = 'accordion-container';
	// foodPlans[k].appendChild(accordionContainer);

	for ( var i = 0; i < 4; i++) {
		var wrapAccord = createBlock('wrapAccord','div','wrapAccord', accordionContainer);
		var category = createBlock('category','a','', wrapAccord);
		category.innerHTML = arrCategory[i];
		var faplus = createBlock('fa-plus','i','fa fa-plus', category);
		var content = createBlock('content','div','content', wrapAccord);
		
		for ( var j = 0; j < 5; j++) {
			var product = createBlock('product','div','product', content);
			var prodSelect = createBlock('','div','prodSelect', product);

			var curProd = [];
			var curPrice = [];
			switch (i) {
				case 0:
					curProd = arrSelectProd0;
					curPrice = arrSelectPrice0;
					break;
				case 1:
					curProd = arrSelectProd1;
					curPrice = arrSelectPrice0;
					break;
				case 2:
					curProd = arrSelectProd2;
					curPrice = arrSelectPrice0;
					break;
				case 3:
					curProd = arrSelectProd3;
					curPrice = arrSelectPrice0;
					break;
			}

			var prodSelectCh = document.createElement('input');
			prodSelectCh.name = k + '_' + arrCategory[i]; 
			prodSelectCh.type = 'radio';
			prodSelectCh.value = parseInt(curPrice[j]);
			prodSelect.appendChild(prodSelectCh);

			prodSelectCh.addEventListener('change',selectPrice,false);

			var prodName = createBlock('prodName','div','prodName', product);
			prodName.innerHTML = curProd[j];
			var prodImg = createBlock('prodImg','div','prodImg', product);
			var prodPrice = createBlock('prodPrice','div','prodPrice', product);
			prodPrice.innerHTML = curPrice[j];
		}
	}
}

for ( var i = 0; i < foodPlans.length; i ++) {
	prices[i].innerHTML = arrCurPrice[i] + '$'; 
	createAccordeon(i);
}

var firstPlanPrice = 0;
var secondPlanPrice = 0;
var firdPlanPrice = 0;
var fouthPlanPrice = 0;

function selectPrice(event) {
	var curPrice = arrCurPrice[parseInt(this.name)];
	if ( this.checked == true ) {
		switch (parseInt(this.name)) {
			
			case 0:
				firstPlanPrice = +curPrice + parseInt(this.value);
				break;
			case 1:
				secondPlanPrice = +curPrice + parseInt(this.value);
				break;
			case 2:
				firdPlanPrice = +curPrice + parseInt(this.value);
				break;
			case 3:
				fouthPlanPrice = +curPrice + parseInt(this.value);
				break;
		}
		prices[parseInt(this.name)].innerHTML = firstPlanPrice + secondPlanPrice + firdPlanPrice + fouthPlanPrice + '$';
	}
}


//toggle
$(document).ready(function(){
	$(".wrapAccord > a").on("click", function(){
		if($(this).hasClass('active')){
			$(this).removeClass("active");
			$(this).siblings('.content').slideUp(300);
			$(".wrapAccord > a i").removeClass("fa-minus").addClass("fa-plus");
		}else{
			$(".wrapAccord > a i").removeClass("fa-minus").addClass("fa-plus");
		$(this).find("i").removeClass("fa-plus").addClass("fa-minus");
		$(".wrapAccord > a").removeClass("active");
		$(this).addClass("active");
		$('.content').slideUp(300);
		$(this).siblings('.content').slideDown(300);
		}
	});
});