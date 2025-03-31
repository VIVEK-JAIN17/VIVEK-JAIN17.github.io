function renderEducationCards(educationDataArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    educationDataArray.forEach((educationItem) => {
        const colDiv = document.createElement("div");
        colDiv.className = "col-sm-8 col-md-6 mb-4";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card border-dark rounded-lg";

        cardDiv.innerHTML = `
        <img src="${educationItem.imageUrl}" alt="${educationItem.imageAlt}" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">${educationItem.title}</h4>
          <h5 class="card-subtitle text-muted">${educationItem.dateRange}</h5>
          ${educationItem.class10CGPA ? `<h6 class="card-subtitle pt-3 text-muted">${educationItem.class10CGPA}</h6>` : ""}
          ${educationItem.class12CGPA ? `<h6 class="card-subtitle pt-3 text-muted">${educationItem.class12CGPA}</h6>` : ""}
          ${educationItem.cgpa ? `<h6 class="card-subtitle pt-3 text-muted">${educationItem.cgpa}</h6>` : ""}
          <div class="card-text pt-3">${educationItem.description}</div>
        </div>
      `;

        colDiv.appendChild(cardDiv);
        container.appendChild(colDiv);
    });
}

// Example usage with JSON data:
const educationDataArray = [
    {
        imageUrl: "Images/School.jpg",
        imageAlt: "School",
        title: "Abhinav Public School",
        dateRange: "2009 - 2018",
        class10CGPA: "10 CGPA Class-10th",
        class12CGPA: "8.89 CGPA Class-12th",
        description:
            "Completed my primary and secondary level Education at Abhinav Public School, CU-Block Pitampura with an excellent academic record.",
    },
    {
        imageUrl: "Images/college.png",
        imageAlt: "college",
        title: "Guru Gobind Singh Indraprastha University",
        dateRange: "2018 - 2022",
        cgpa: "8.63 CGPA",
        description:
            "Completed my bahcelors degree in Computer Science Engineering at B.M. Institute of Engineering and Technology affiliated from Guru Gobind Singh Indraprastha University.",
    },
    // Add more education objects as needed
];

// Call the function with your data and the container ID:
renderEducationCards(educationDataArray, "education-container"); // Replace "education-container" with your actual container ID