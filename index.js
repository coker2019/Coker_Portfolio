const hamburgerButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-lists');
const closed = document.querySelector('.close-icon');
const mobileList = document.querySelectorAll('.mobile-list');

hamburgerButton.addEventListener('click', (event) => {
  mobileMenu.style.display = 'block';
  event.preventDefault();
});

closed.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

mobileList.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
