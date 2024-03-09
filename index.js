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

// popup window
const bodyTag = document.querySelector('body');
const projectContainer = document.querySelector('.works');

const worksProjects = [
  {
    name: 'ToDo List',
    imageURL: 'images/todo.png',
    company: 'Microverse',
    role: 'Front/Back End Dev',
    year: '2023',
    description:
      'To-do-List It a project to add my activities for the day. Added and deleted when its done.',
    dataset: 0,

  },
  {
    name: 'Budget App',
    imageURL: 'images/mybudget.png',
    company: 'Microverse',
    role: 'Back End Dev',
    year: '2023',
    description:
      'Budget App Manage your finances effortlessly using our user-friendly budget app.',
    dataset: 1,

  },
  {
    name: 'Magic Magician',
    imageURL: 'images/magic.png',
    company: 'Microverse',
    role: 'Front End Dev',
    year: '2023',
    description:
      'It a Single Page App (SPA) that allows users to make simple calculations and read a random math related quote.',
    dataset: 2,

  },
  {
    name: 'Metrics App',
    imageURL: 'images/metricsapp.png',
    company: 'Microverse',
    role: 'Front End Dev',
    year: '2023',
    description:
      'React and Redux single page application that contains basic information about European countries: population, capital and timezone.',
    dataset: 3,
  },

];

const modalProjects = [
  {
    title: 'ToDo List',
    description: 'To-do-List It a project to add my activities for the day. Added and deleted when its done.',
    image: 'images/todo.png',
    technologies: ['Html', 'Css', 'Webpack'],
    company: 'Microverse',
    role: 'Front End Dev',
    year: '2023',
    liveLink: 'https://coker2019.github.io/To-do-List/dist/',
    sourceLink: 'https://github.com/coker2019/To-do-List',
  },
  {
    title: 'Budget App',
    description: 'Budget App Manage your finances effortlessly using our user-friendly budget app',
    image: 'images/mybudget.png',
    technologies: ['Ruby', 'Rails', 'PostgreSQL'],
    company: 'Microverse',
    role: 'Back End Dev',
    year: '2023',
    liveLink: 'https://postgre-budget.onrender.com/users/sign_in',
    sourceLink: 'https://github.com/coker2019/budget_app_ror',
  },
  {
    title: 'Magic Magician',
    description: 'It is a Single Page App (SPA) that allows users to make simple calculations and read a random math related quote.',
    image: 'images/magic.png',
    technologies: ['CSS', 'HTML', 'Javascript'],
    company: 'Microverse',
    role: 'Front End Dev',
    year: '2023',
    liveLink: 'https://math-magicianapp.onrender.com/calculator',
    sourceLink: 'https://github.com/coker2019/math_magician',
  },
  {
    title: 'Metrics App',
    description: 'React and Redux single page application that contains basic information about European countries: population, capital and timezone.',
    image: 'images/metricsapp.png',
    technologies: ['CSS', 'HTML', 'Javascript'],
    company: 'Microverse',
    role: 'Front End Dev',
    year: '2023',
    liveLink: 'https://populationapp.onrender.com/',
    sourceLink: 'https://github.com/coker2019/metrics_app',
  },

];

const addStyledHeader = () => {
  const header = document.createElement('header');
  header.setAttribute('class', 'portfolio');
  const heading = document.createElement('h1');
  heading.textContent = 'My Recent Works';

  // Style the header and heading
  header.style.padding = '40px';
  heading.style.margin = '0';
  header.style.padding = '20px';
  header.style.textAlign = 'center'; // Align text to the center
  header.style.boxSizing = 'border-box';
  heading.style.fontSize = '1.5em';

  header.appendChild(heading);
  projectContainer.before(header); // Insert the header before the projectContainer
};

addStyledHeader();

const projectLists = () => {
  projectContainer.innerHTML = '';
  for (let i = 0; i < worksProjects.length; i += 1) {
    const projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('class', 'works main');
    if (i % 2 !== 0) {
      projectWrapper.setAttribute('class', 'works main main2');
    }

    const imageWrapper = document.createElement('div');
    imageWrapper.setAttribute('class', 'cont1');
    const projectImage = document.createElement('img');
    projectImage.setAttribute('src', worksProjects[i].imageURL);

    const contBlock = document.createElement('div');
    contBlock.setAttribute('class', 'cont2');

    const projectName = document.createElement('h2');
    projectName.textContent = worksProjects[i].name;

    const listItems2 = document.createElement('ul');
    const list1 = document.createElement('li');
    list1.textContent = worksProjects[i].company;
    list1.setAttribute('class', 'show');

    const list2 = document.createElement('li');
    list2.textContent = worksProjects[i].role;
    list2.setAttribute('class', 'show2');

    const list3 = document.createElement('li');
    list3.textContent = worksProjects[i].year;
    list3.setAttribute('class', 'show3');

    const projectDesc = document.createElement('p');
    projectDesc.textContent = worksProjects[i].description;

    const listItems = document.createElement('ul');
    listItems.setAttribute('class', 'lang-desk lang2');
    const list4 = document.createElement('li');
    list4.textContent = 'HTML';

    const list5 = document.createElement('li');
    list5.textContent = 'CSS';

    const list6 = document.createElement('li');
    list6.textContent = 'JAVASCRIPT';

    const projectBtn = document.createElement('button');
    projectBtn.textContent = 'See Project';
    projectBtn.setAttribute('class', 'see_btn');
    projectBtn.setAttribute('data-dataBtn', worksProjects[i].dataset);

    listItems.append(list4, list5, list6);

    listItems2.append(list1, list2, list3);
    imageWrapper.appendChild(projectImage);

    contBlock.append(
      projectName,
      listItems2,
      projectDesc,
      listItems,
      projectBtn,
    );

    projectWrapper.append(imageWrapper, contBlock);

    projectContainer.appendChild(projectWrapper);
  }
};

// function to add element given tag name and class name
const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

// function to create ul and li elements given an array of items & the class name of the ul element
const createList = (items, className) => {
  const ul = createElement('ul', className);
  items.forEach((item) => {
    const li = createElement('li', `${className}-item`);
    li.innerText = item;
    ul.appendChild(li);
  });
  return ul;
};

projectLists();

// modalProjects implementation

function projectModals(e) {
  const docFragment = document.createDocumentFragment();
  const projectCardDetails = modalProjects[parseInt(e.target.dataset.databtn, 10)];
  const popupContainer = createElement('div', 'popupContainer');

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('projectPopup', 'project-card');

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  docFragment.appendChild(popupHeader);

  const popupTitle = createElement('h2', 'popupTitle');
  popupTitle.innerHTML = projectCardDetails.title;
  popupHeader.appendChild(popupTitle);

  const popupBody = createElement('div', 'popupBody');
  docFragment.appendChild(popupBody);

  const modalList = document.createElement('ul');
  modalList.classList.add('popTags');

  const modalList1 = document.createElement('li');
  modalList1.innerHTML = projectCardDetails.company;
  modalList1.classList.add('tagsList1');

  const modalList2 = document.createElement('li');
  modalList2.innerHTML = projectCardDetails.role;
  modalList2.classList.add('tagsList2');

  const modalList3 = document.createElement('li');
  modalList3.innerHTML = projectCardDetails.year;
  modalList3.classList.add('tagsList3');

  modalList.append(modalList1, modalList2, modalList3);
  popupHeader.appendChild(modalList);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = projectCardDetails.image;
  popupImgContainer.appendChild(popupImg);

  const lowerContainer = createElement('div', 'lowerContainer');
  popupBody.appendChild(lowerContainer);

  const popupTextContainer = createElement('div', 'popupTextContainer');
  lowerContainer.appendChild(popupTextContainer);

  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = projectCardDetails.description;
  popupTextContainer.appendChild(popupDescription);

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  lowerContainer.appendChild(popupLinkContainer);

  const popupLanguages = createList(projectCardDetails.technologies, 'popupLanguages');
  popupLinkContainer.appendChild(popupLanguages);

  const popupLive = createElement('div', 'linkContainer');
  popupLinkContainer.appendChild(popupLive);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = projectCardDetails.liveLink;
  popupLive.appendChild(liveLink);

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = projectCardDetails.sourceLink;
  popupLive.appendChild(sourceLink);

  projectPopup.appendChild(docFragment);
  popupContainer.appendChild(projectPopup);
  bodyTag.appendChild(popupContainer);

  document.querySelector('.tool_bar').style.filter = 'blur(10px)';
  projectContainer.style.filter = 'blur(10px)';
  document.querySelector('.headline-sec').style.filter = 'blur(10px)';
  document.querySelector('.about-section').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(popupContainer);

    document.querySelector('.tool_bar').style.filter = 'blur(0)';
    projectContainer.style.filter = 'blur(0)';
    document.querySelector('.headline-sec').style.filter = 'blur(0)';
    document.querySelector('.about-section').style.filter = 'blur(0)';
  });
}

const projectsBtn = document.querySelectorAll('.see_btn');
projectsBtn.forEach((btn) => btn.addEventListener('click', projectModals));

// $(document).ready(() => {
//   // Add a class to the navigation when scrolling down
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//       $('.tool_bar').addClass('sticky');
//     } else {
//       $('.tool_bar').removeClass('sticky');
//     }
//   });

//   // Add your responsive navigation toggle code here
// });
