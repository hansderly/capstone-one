const menuIcon = document.querySelector('.menu_icon');
const closeIcon = document.querySelector('.close_icon');
const menu = document.querySelector('.navigation_wrapper');

const openMenu = () => {
	menu.style.display = 'flex';
	menuIcon.style.display = 'none';
	closeIcon.classList.remove('hide');
};

const closeMenu = () => {
	menu.style.display = 'none';
	menuIcon.style.display = 'flex';
	closeIcon.classList.add('hide');
};

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
