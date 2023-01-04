const menuIcon = document.querySelector('.menu_icon');
const closeIcon = document.querySelector('.close_icon');
const menu = document.querySelector('.navigation_wrapper');
const buttonMore = document.querySelector('.button_more');
const buttonHide = document.querySelector('.button_hide');
const speakerSectionHide = document.querySelector('.speaker_hide');

const openCLoseMenu = () => {
  menu.classList.toggle('hide--mobile');
  menuIcon.classList.toggle('hide--mobile');
  closeIcon.classList.toggle('hide');
};

const showHideSpeaker = () => {
  speakerSectionHide.classList.toggle('hide--mobile');
  buttonMore.classList.toggle('hide--mobile');
  buttonHide.classList.toggle('hide--mobile');
};

menuIcon.addEventListener('click', openCLoseMenu);
closeIcon.addEventListener('click', openCLoseMenu);
buttonMore.addEventListener('click', showHideSpeaker);
buttonHide.addEventListener('click', showHideSpeaker);
