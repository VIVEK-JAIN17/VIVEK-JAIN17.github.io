function renderCardItems(cardDataArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    const carouselParent = document.createElement("div");
    carouselParent.className = "owl-carousel owl-theme";

    cardDataArray.forEach((data) => {
        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
        <div class="card border-dark rounded-lg">
          <img src="${data.imageUrl}" alt="${data.imageAlt}" class="img-fluid card-img-top">
          <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
            <h5 class="d-none">blank</h5>
            <h6 class="card-subtitle text-muted pb-2">${data.subtitle}</h6>
            <p class="card-text">${data.description}</p>
            <a href="${data.link}" target="_blank" class="text-secondary">
              <i class="fa fa-link"></i>
              <small>Project link</small>
            </a>
          </div>
        </div>
      `;

        carouselParent.appendChild(div);
    });
    container.appendChild(carouselParent);
}

const cardDataArray = [
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "placeholder Image 4",
        title: "YelpCampApp",
        subtitle: "Express Node MongoDB",
        description:
            "A Web application that let's users post 'campgrounds' on the app. Worked on User Authentication and Authorisation, RESTful APIs and Cloud (Heroku).",
        link: "https://github.com/VIVEK-JAIN17/YelpCampApp",
    },
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "placeholder Image",
        title: "Blog App",
        subtitle: "Express Node MongoDB",
        description:
            "A web application that let's users post 'Blogs' on the app. Supports User Authntication and CRUD operations via MongoDB.",
        link: "https://github.com/vivek-jain17/BlogApp",
    },
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "placeholder Image",
        title: "Movie App",
        subtitle: "Express Node EJS",
        description:
            "A simple web application that uses OMDb API to fetch data of Movies/TV-shows and displays them to user in an Interactive format. Supports search operation.",
        link: "https://github.com/vivek-jain17/MovieApp",
    },
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "placeholder Image",
        title: "Expensify",
        subtitle: "ReactJS Redux",
        description:
            "A React application that let's users add several 'expenses' and manages them for users. Users can also put a special 'note' regarding expense.",
        link: "https://github.com/vivek-jain17/Expensify",
    },
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "placeholder Image",
        title: "Indecision App",
        subtitle: "ReactJS SCSS",
        description:
            "A simple React application that takes in several to-do items and then picks one of them at random. Users can either remove a particular item or all the items in the list.",
        link: "https://github.com/vivek-jain17/IndecisionApp",
    },
    {
        imageUrl: "Images/Work2.png",
        imageAlt: "project Image 3",
        title: "Color Guessing Game",
        subtitle: "HTML CSS JavaScript",
        description:
            "A JavaScript based colour guessing game, an interactive method to improve skills in understanding RGB values.",
        link: "https://vivek-jain17.github.io/colorGameProject/",
    },
];

// Call the function with your data and the container ID:
renderCardItems(cardDataArray, "projects-container"); // Replace "card-container" with your actual container ID