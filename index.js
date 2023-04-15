const hamburgerButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-lists");
const closed = document.querySelector(".close-icon");
const mobileList = document.querySelectorAll(".mobile-list");

hamburgerButton.addEventListener("click", (event) => {
  mobileMenu.style.display = "block";
  event.preventDefault();
});

closed.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

mobileList.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// popup_window

// popup windows

const ProjectContainer = document.querySelector(".mobile-card");

const mobileProject = [
  {
    name: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "canopies.png",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "available.png",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    id: "3",
    name: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "gym.png",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image: "mobile-art.png",
    // technologies: ["HTML", "CSS", "JAVASCRIPT"],
    linkToLive: "",
    linkToSource: "",
  },
];

const allLists = () => {
  ProjectContainer.innerHTML = "";
  for (let i = 0; i < mobileProject.length; i += 1) {
    const projectWrapper = document.createElement("div");
    projectWrapper.setAttribute("class", "card_work card_work2");

    const projectImage = document.createElement("img");
    projectImage.setAttribute("src", mobileProject[i].image);
    projectImage.setAttribute("class", "snapshot");

    const projectName = document.createElement("h2");
    projectName.textContent = mobileProject[i].name;
    projectName.setAttribute("class", "tonic-text");

    const leftBlock = document.createElement("div");
    leftBlock.setAttribute("class", "left_block");

    const frameTwo = document.createElement("div");
    frameTwo.setAttribute("class", "frame-2");

    const projectCompany = document.createElement("h4");
    projectCompany.textContent = mobileProject[i].company;
    projectCompany.setAttribute("class", "canopy frame-2");

    const countImage = document.createElement("img");
    countImage.setAttribute("class", "count");

    const projectRole = document.createElement("h4");
    projectRole.textContent = mobileProject[i].role;
    projectRole.setAttribute("class", "role frame-2");

    const countImage2 = document.createElement("img");
    countImage2.setAttribute("class", "count");

    const projectYear = document.createElement("h4");
    projectYear.textContent = mobileProject[i].year;
    projectYear.setAttribute("class", "year frame-2");

    const projectDesc = document.createElement("p");
    projectDesc.textContent = mobileProject[i].description;
    projectDesc.setAttribute("class", "daily_text");

    const listItems3 = document.createElement("ul");
    listItems3.setAttribute("class", "tags");

    const list8 = document.createElement("li");
    list8.setAttribute("class", "html-links html-text");
    list8.textContent = "HTML";

    const list9 = document.createElement("li");
    list9.setAttribute("class", "css-link css-text");
    list9.textContent = "CSS";

    const list10 = document.createElement("li");
    list10.setAttribute("class", "java-link java-text");
    list10.textContent = "JAVASCRIPT";

    const projectBtn = document.createElement("button");
    projectBtn.textContent = "See Project";
    projectBtn.setAttribute(
      "class",
      "btn-container see-btn text_project display openpop"
    );

    frameTwo.append(
      projectCompany,
      countImage,
      projectRole,
      countImage2,
      projectYear
    );

    leftBlock.append(projectName, frameTwo);

    listItems3.append(list8, list9, list10);

    projectWrapper.append(
      projectImage,
      leftBlock,
      projectDesc,
      listItems3,
      projectBtn
    );

    ProjectContainer.appendChild(projectWrapper);
  }
};

allLists();

// desktop cards

const deskContainer = document.querySelector(".desk-card");

const desktopProjects = [
  {
    imageURL: "Amanda.png",
    name: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    projectURL: "",
  },
  {
    imageURL: "Carbon-5.png",
    name: "Multi-Post Stories",
    company: "CANOPY",
    role: "Full Stack Dev",
    year: "2015",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",

    projectURL: "",
  },
  {
    imageURL: "Snapper.png",
    name: "Facebook 360",
    company: "FACEBOOK",
    role: "Full Stack Dev",
    year: "2015",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",

    projectURL: "",
  },
  {
    imageURL: "Avail-port.png",
    name: "Uber Navigation",
    company: "Uber",
    role: "Lead Developer",
    year: "2015",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    projectURL: "",
  },
];

const deskLists = () => {
  deskContainer.innerHTML = "";
  for (let i = 0; i < desktopProjects.length; i += 1) {
    const deskWrapper = document.createElement("div");
    deskWrapper.setAttribute("class", "main main2");

    const projectImage = document.createElement("img");
    projectImage.setAttribute("src", desktopProjects[i].imageURL);
    projectImage.setAttribute("class", "cont1");

    const contBlock = document.createElement("div");
    contBlock.setAttribute("class", "cont2 cont3");

    const projectName = document.createElement("h2");
    projectName.textContent = desktopProjects[i].name;
    projectName.setAttribute("class", "cont2 cont3");

    const listItems2 = document.createElement("ul");
    const list1 = document.createElement("li");
    list1.textContent = desktopProjects[i].company;
    list1.setAttribute("class", "show");

    const list2 = document.createElement("li");
    list2.textContent = desktopProjects[i].role;
    list2.setAttribute("class", "show2");

    const list3 = document.createElement("li");
    list3.textContent = desktopProjects[i].year;
    list3.setAttribute("class", "show3");

    const projectDesc = document.createElement("p");
    projectDesc.textContent = desktopProjects[i].description;
    projectDesc.setAttribute("class", "cont2");

    const listItems = document.createElement("ul");
    listItems.setAttribute("class", "lang-desk lang2");
    const list4 = document.createElement("li");
    list4.textContent = "HTML";

    const list5 = document.createElement("li");
    list5.textContent = "CSS";

    const list6 = document.createElement("li");
    list6.textContent = "JAVASCRIPT";

    const list7 = document.createElement("li");
    list7.textContent = "RUBY ON RAIL";

    const projectBtn = document.createElement("button");
    projectBtn.textContent = "See Project";
    projectBtn.setAttribute("class", "see_btn display openpop");

    listItems.append(list4, list5, list6, list7);

    listItems2.append(list1, list2, list3);

    contBlock.append(
      projectName,
      listItems2,
      projectDesc,
      listItems,
      projectBtn
    );

    deskWrapper.append(projectImage, contBlock);

    deskContainer.appendChild(deskWrapper);
  }
};

deskLists();

const works = document.querySelector(".modal-section");
const div = document.createElement("div");
works.appendChild(div);
div.innerHTML = `
<div class="popupcontainer" id="popup">
<div class="popupcontainer2">
<div class="popuptitle">
<h2 class="header2">
Multi-Post Stories
<div class="frame-2 pop-style">
            <h4 class="canopy">CANOPY</h4>
            <img class="count" src="images/Counter.png" alt="card">
            <h4 class="role">Back End Dev</h4>
            <img class="count" src="images/Counter.png" alt="card">
            <h4 class="year">2015</h4>
          </div>
</h2>

<button class="closebtn active" type="button">&times;</button>
</div>

<div class="popupcontainer3">
<img src="Modal-pix.png" class="image2" alt="">
<div class="description1">
<p class="paragraph2">
A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
<div class="btncontainer">
<div class="row1">
<ul>
<li>html</li>
<li>css</li>
<li>javascript</li>
<li>ruby</li>
</ul>
</div>
<div class="row2">
<button class="popbtn" type="button"><a href=" https://coker2019.github.io/Coker_Portfolio/"><img src="see-live.png" alt="enable"></a></button>
<button class="popbtn" type="button"><a href="https://github.com/Mikey1-nuel/Capstone-Project-One.github.io"><img src="Enabled.png" alt=""></a></button>
</div>
</div>
</div>
</div>
</div>
</div>
`;

const popUpWindow = document.querySelector(".popupcontainer");
const openPopUp = document.querySelector(".openpop");
const displayCard = document.querySelectorAll(".display");
const closeBtn = document.querySelector(".closebtn");
openPopUp.addEventListener("click", () => {
  popUpWindow.classList.toggle("active");
});
for (let i = 0; i < displayCard.length; i += 1) {
  displayCard[i].addEventListener("click", () => {
    popUpWindow.classList.toggle("active");
  });
}
closeBtn.addEventListener("click", () => {
  popUpWindow.classList.remove("active");
});

// local Storage
<<<<<<< HEAD
const formStorage = document.querySelector(".contact-form");
formStorage.addEventListener("input", () => {
=======

formStorage.addEventListener('input', () => {
>>>>>>> bec67e47e56c4caf6d32e0e58cf69bff832ded8b
  const data = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#mail").value,
    message: document.querySelector("#msg").value,
  };
  localStorage.setItem("formStorage", JSON.stringify(data));
});
const object = JSON.parse(localStorage.getItem("formStorage"));
document.querySelector("#name").value = object.name;
document.querySelector("#mail").value = object.email;
document.querySelector("#msg").value = object.message;
