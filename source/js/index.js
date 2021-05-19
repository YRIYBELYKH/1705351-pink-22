const navButton = document.querySelector('.main-nav__toggle');
const header = document.querySelector('.page-header');
const mainNavList = document.querySelector('.main-nav__list');
const crossButton = document.querySelector('.main-nav__burger-line');

navButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  navButton.classList.toggle('active');
  crossButton.classList.toggle('active');
  mainNavList.classList.toggle('main-nav__list--open');
  header.classList.toggle('page-header--nav-open');
});
