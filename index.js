const hamburgerButton = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-lists');
const closed = document.querySelector('.close-icon');
const mobileList = document.querySelectorAll('.mobile-list');

function toggleMobileMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

hamburgerButton.addEventListener('click', (event) => {
  toggleMobileMenu();
  event.preventDefault();
});

closed.addEventListener('click', toggleMobileMenu);

mobileList.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// Form validation

const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
  const errorMsg = document.getElementById('error');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    errorMsg.style.display = 'block';
    errorMsg.style.fontSize = '1rem';
    errorMsg.style.color = '#fff';
    errorMsg.style.padding = '1rem';
    errorMsg.style.backgroundColor = 'red';
    errorMsg.style.borderRadius = '0.5rem';
    event.preventDefault();
    errorMsg.textContent = '(Please enter email in lowercase)';
  } else {
   
    form.submit();
  }
});
