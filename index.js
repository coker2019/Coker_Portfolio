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
const projectModals = document.querySelector('.modalsProjects');

const worksProjects = [
  {
    name: 'Tonic',
    imageURL: 'Snapper.png',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required',
    dataset: 0,
  
  },
  {
    name: 'Multi-Post Stories',
    imageURL: 'Carbon-5.png',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    dataset: 1,


  },
  {
    name: 'Facebook 360',
    imageURL: 'Amanda.png',
    company: 'FACEBOOK',
    role: 'Back End Dev',
    year: '2015',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    dataset: 2,

    
  },
  {
    name: 'Uber Navigation',
    imageURL: 'Avail-port.png',
    company: 'Uber',
    role: 'Back End Dev',
    year: '2015',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    dataset: 3,
  },

];

const modalProjects = [
  {
    title: 'Tonic',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image:  'Snapper.png',
    technologies: ['CSS', 'HTML', 'Javascript', 'Ruby', 'Bootstrap'],
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: 'https://coker2019.github.io/Coker_Portfolio/',
    sourceLink: 'https://github.com/coker2019/Coker_Portfolio',
  },
  {
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: 'Carbon-5.png',
    technologies: ['CSS', 'HTML', 'Javascript', 'Ruby', 'Bootstrap'],
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: 'https://coker2019.github.io/Coker_Portfolio/',
    sourceLink: 'https://github.com/coker2019/Coker_Portfolio',
  },
  {
    title: 'Facebook 360',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: 'Amanda.png',
    technologies: ['CSS', 'HTML', 'Javascript', 'Ruby', 'Bootstrap'],
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: 'https://coker2019.github.io/Coker_Portfolio/',
    sourceLink: 'https://github.com/coker2019/Coker_Portfolio',
  },
  {
    title: 'Uber Navigation',
    description: `A daily selection of privately personalized reads; no accounts or  sign-ups required. has been the industry's standard dummy text ever  since the 1500s, when an unknown printer took a standard dummy text.
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.`,
    image: 'Avail-port.png',
    technologies:['CSS', 'HTML', 'Javascript', 'Ruby', 'Bootstrap'],
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    liveLink: 'https://coker2019.github.io/Coker_Portfolio/',
    sourceLink: 'https://github.com/coker2019/Coker_Portfolio',
  },
 
];


const projectLists = () => {
  projectContainer.innerHTML = '';
  for (let i = 0; i < worksProjects.length; i += 1) {
    const projectWrapper = document.createElement('div');
    projectWrapper.setAttribute('class', 'works main');
    if(i%2!==0){
      projectWrapper.setAttribute('class', ' works main main2');
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
    projectBtn.setAttribute('data-Btn', worksProjects[i].dataset);

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
  };
};

projectLists();

// modalProjects implementation

function projectModals (e){
  const docFragment = document.createDocumentFragment();
  const projectCardDetails = modalProjects[parseInt(e.target.dataset.databtn, 10)];
  const popupContainer = createElement('div', 'popupContainer');

  const projectPopup = document.createElement('div');
  projectPopup.classList.add('projectPopup', 'project-card');

  const popupHeader = createElement('div', 'popupHeader');
  popupHeader.innerHTML = '<i class="uil uil-multiply" id="closeBtn"></i>';
  docFragment.appendChild(popupHeader);

  const popupTitle = createElement('h3', 'popupTitle');
  popupTitle.innerHTML = projectCardDetails.title;
  popupHeader.appendChild(popupTitle);

  const modalList = document.createElement('ul');
  const modalList1 = document.createElement('li');
  modalList1.innerHTML = projectCardDetails.company;

  const modalList2 = document.createElement('li');
  modalList2.innerHTML = projectCardDetails.role;

  const modalList3 = document.createElement('li');
  modalList3.innerHTML = projectCardDetails.year;

  modalList.append(modalList1, modalList2, modalList3);
  popupHeader.appendChild(modalList);

  const popupBody = createElement('div', 'popupBody');
  docFragment.appendChild(popupBody);

  const popupImgContainer = createElement('div', 'popupImgContainer');
  popupBody.appendChild(popupImgContainer);

  const popupImg = createElement('img', 'popupImg');
  popupImg.src = projectCardDetails.image;
  popupImgContainer.appendChild(popupImg);
 
  const popupTextContainer = createElement('div', 'popupTextContainer');
  popupBody.appendChild(popupTextContainer);
 
  const popupDescription = createElement('p', 'popupDescription');
  popupDescription.innerText = projectCardDetails.description;
  popupTextContainer.appendChild(popupDescription);
 

  const popupLinkContainer = createElement('div', 'popupLinkContainer');
  popupBody.appendChild(popupLinkContainer);

  const popupLanguages = createList(projectCardDetails.technologies, 'popupLanguages');
  popupLinkContainer.appendChild(popupLanguages);

  const liveLink = createElement('a', 'liveLink');
  liveLink.innerHTML = 'See live&nbsp;&nbsp;<i class="uil uil-export"></i>';
  liveLink.href = projectCardDetails.liveLink;
  popupLinkContainer.appendChild(liveLink);

  

  const sourceLink = createElement('a', 'sourceLink');
  sourceLink.innerHTML = 'See source&nbsp;&nbsp;<i class="uil uil-github"></i>';
  sourceLink.href = projectCardDetails.sourceLink;
  popupLinkContainer.appendChild(sourceLink);

  
  projectPopup.appendChild(docFragment);
  popupContainer.appendChild(projectPopup);
  bodyTag.appendChild(popupContainer);
  
  document.querySelector('.header').style.filter = 'blur(10px)';
  projectContainer.style.filter = 'blur(10px)';
  document.getElementById('headline').style.filter = 'blur(10px)';
  document.getElementById('about-me').style.filter = 'blur(10px)';

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(popupContainer);
    document.querySelector('.header').style.filter = 'blur(0)';
    projectContainer.style.filter = 'blur(0)';
    document.getElementById('headline').style.filter = 'blur(0)';
    document.getElementById('about-me').style.filter = 'blur(0)';
  });

}

const projectsBtn = document.querySelectorAll('.data-Btn');
projectsBtn.forEach((btn) => btn.addEventListener('click', projectModals));

