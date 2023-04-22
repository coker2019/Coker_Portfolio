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
    errorMsg.textContent = '(Successful)';
    errorMsg.style.color = 'green';
    errorMsg.style.padding = '1rem';
    form.submit();
  }
});

// Local-storage

const formStorage = document.querySelector('contact-form');
formStorage.addEventListener('input', () => {
  const data = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#mail').value,
    message: document.querySelector('#msg').value,
  };
  localStorage.setItem('formStorage', JSON.stringify(data));
});
const object = JSON.parse(localStorage.getItem('formStorage'));
document.querySelector('#name').value = object.name;
document.querySelector('#mail').value = object.email;
document.querySelector('#msg').value = object.message;
