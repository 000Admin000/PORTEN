/*--------------------------------------------------------------*/

$(".up-but").click(function() { // ID откуда кливаем
	$('html').animate({
		scrollTop: $("html").offset().top  // класс объекта к которому приезжаем
	}, 800); // Скорость прокрутки
});

/*--------------------------------------------------------------*/

const progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {

	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = ((windowScroll / windowHeight) * 100);

	progress.style.width = per + '%';
};

/*--------------------------------------------------------------*/

burger.addEventListener('click', function(){

	let burger = document.getElementById('burger');
	let body = document.querySelector('body');
	let menuList = document.getElementById('menu-list');
	let menu = document.getElementById('menu');
	let info = document.getElementById('info');


	menuList.classList.toggle('active-menu-list');
	burger.classList.toggle('burger-active');
	body.classList.toggle('overflow');
	info.classList.toggle('info-active');
});

/*--------------------------------------------------------------*/

































