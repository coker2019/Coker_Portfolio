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

// popup_window

// popup windows

const ProjectContainer = document.querySelector('.mobile-cards');

const mobileProject = [
  {
    id: "1",
    imageURL: "canopies.png",
    name: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    tech: ["html", "css", "javascript"],
    projectURL: "",
    btnId: "btn1"
  },
  {
    id: "2",
    imageURL: "available.png",
    name: "Multi-Post Stories",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    tech: ["html", "css", "javascript"],
    projectURL: "",
    id: "p2",
    btnId: "btn2"
  },
  {
    id: "3",
    imageURL: "gym.png",
      name: "Tonic",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      id: "p3",
      btnId: "btn3"
  },
  {
    id: "4",
    imageURL: "mobile-art.png",
      name: "Multi-Post Stories",
      company: "CANOPY",
      role: "Back End Dev",
      year: "2015",
      description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      tech: ["html", "css", "javascript"],
      projectURL: "",
      btnId: "btn4"
  },
];

let allLists = () => {
  ProjectContainer.innerHTML = '';
  for(let i = 0; i <  mobileProject.length; i++) {
    const listWrapper = document.createElement('div');
    // const listHeading = document.createElement('h2');
    // listHeading.textContent = my_lists[i].heading;
    const projectImage = document.createElement();
    projectImage.textContent = mobileProject[i].imageURL;
    const projectName = document.createElement();
    projectName.textContent = mobileProject[i].name;
    const projectRole = document.createElement();
    projectRole.textContent = mobileProject[i].role;
    const projectYear = document.createElement();
    projectYear.textContent = mobileProject[i].year;
    const projectDesc = document.createElement('p');
    projectDesc.textContent = mobileProject[i].description;

  
    const listBtn = document.createElement('button');
    listBtn.textContent = 'Example';

    listWrapper.append(listHeading, listDesc, listBtn);

    sect.appendChild(listWrapper)

    listBtn.addEventListener('click', () => {
      console.log(`The button at id: ${my_lists[i].id} was clicked`)
    })
  }

}