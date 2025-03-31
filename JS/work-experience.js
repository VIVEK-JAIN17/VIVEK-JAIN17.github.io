function renderExperienceDivs(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    data.forEach((item, index) => {
        const div = document.createElement("div");
        if (index == data.length - 1) {
            div.className = "row align-items-center justify-content-around p-lg-4";
        } else {
            div.className = "row align-items-center justify-content-around p-lg-4 mb-md-4";
        }

        let imageOrder = "order-2";
        let textOrder = "order-1";

        // If first item, image will be after text, then alternate for each item
        if (index % 2 !== 0) {
            imageOrder = "order-1";
            textOrder = "order-2";
        }

        div.innerHTML = `
        <div class="d-none d-lg-inline-block col-lg-4 pt-5 text-center ${imageOrder}">
          <img src="${item.imageUrl}" alt="work" class="img-fluid">
        </div>
        <div class="col-10 col-lg-8 p-4 bg-blur rounded-lg ${textOrder}">
          <h2>${item.title}</h2>
          <h3 class="d-none">blank</h3>
          <h4>${item.role} <small>${item.type}</small></h4>
          <h5 class="d-none">blank</h5>
          <h6 class="text-custom">${item.dateRange}</h6>
  
          <p class="lead pt-3">${item.overview}</p>
          <ul class="hand-right">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
      `;

        container.appendChild(div);
    });
}

// Example usage with JSON data:
const experienceData = [
    {
        imageUrl: "Images/Work3.png",
        title: "Zemoso technologies pvt. ltd.",
        role: "Software Engineer II",
        type: "",
        dateRange: "January,2024 - Present",
        overview: "Delivered high-impact solutions under tight deadlines, showcasing leadership and advanced technical skills in architectural overhauls and efficiency improvements.",
        points: [
            "Delivered critical SDK feature enhancements for a major client within tight deadlines, directly contributing to a $1M+ revenue increase, showcasing exceptional time-management and problem-solving skills.",
            "Led a major Java SDK architectural overhaul, reducing technical debt through idiomatic design, simplifying integrations via use of design patterns, while integrating generative AI tools, resulting in ~50% reduction in future development turnaround time."
        ]

    },
    {
        imageUrl: "Images/Work3.png",
        title: "Zemoso technologies pvt. ltd.",
        role: "Software Engineer I",
        type: "",
        dateRange: "July,2023 - December,2023",
        overview: "Expanded technical expertise and ensured business continuity through proactive bug resolution and cross-platform contributions.",
        points: [
            "Proactively identified and resolved critical bugs across multiple SDKs, including the Android SDK, ensuring business continuity.",
            "Expanded expertise across Java, Node.js, and other technologies, demonstrating cross-platform proficiency and contributing to diverse software integrations."
        ]
    },
    {
        imageUrl: "Images/Work3.png",
        title: "Zemoso technologies pvt. ltd.",
        role: "Associate Software Engineer",
        type: "",
        dateRange: "November,2022 - June,2023",
        overview: "Focused on enhancing SDK reliability and rapid feature delivery, demonstrating strong testing and development skills.",
        points: [
            "Engineered and implemented a comprehensive E2E test suite for the Android SDK using Espresso and Cucumber, significantly reducing potential customer-facing bugs and improving release reliability.",
            "Contributed to rapid feature delivery across multiple SDKs, utilizing Kotlin for Android SDK enhancements and delivering critical customer-requested features."
        ]
    },
    {
        imageUrl: "Images/Work3.png",
        title: "Zemoso technologies pvt. ltd.",
        role: "Developer Intern",
        type: "(Internship)",
        dateRange: "December,2021 - October,2022",
        overview: "Quickly mastered diverse technologies and contributed to a collaborative project, demonstrating strong technical adaptability and effective teamwork.",
        points: [
            "Rapidly acquired proficiency in 10+ technologies (SQL, Hibernate, GraphQL, etc.) through mentored learning and hands-on project development, adhering to SOLID principles and incorporating micro-service architecture.",
            "Contributed to a collaborative team of 3, delivering a fully functional React and Spring Boot project, while maintaining consistent communication through daily stand-ups to ensure a streamlined workflow and successful project completion.",
        ],
    },
    {
        imageUrl: "Images/Work3.png",
        title: "Nectars",
        role: "Full Stack Developer",
        type: "(Internship)",
        dateRange: "August,2021 - November,2021",
        overview: "Developed and deployed comprehensive front-end and back-end solutions for a dynamic E-commerce platform and mobile application, focusing on efficient API creation and team collaboration.",
        points: [
            "Engineered and delivered robust front-end and back-end solutions for an e-commerce platform and mobile application, including 30+ fully tested APIs, within strict deadlines.",
            "Collaborated across teams, utilizing MERN stack and other technologies (Git, Sockets, Redux), while leading a 3-person team to ensure efficient and timely project completion.",
        ],
    },
    {
        imageUrl: "Images/Work3.png",
        title: "Coding Blocks pvt. ltd.",
        role: "Teaching Assistant",
        type: "(Internship)",
        dateRange: "August,2019 - November,2019",
        overview: "Did an internship as a teaching assistant in a classroom programme offered by coding blocks at pitampura. The course emphasised on learning data structures and algorithms using JAVA pogramming language.",
        points: [
            "Effectively instructed and supported students in Data Structures and Algorithms (DSA) and Java, including concept clarification, doubt resolution, and problem-solving assistance.",
            "Demonstrated strong technical proficiency by debugging extensive Java code, resolving numerous concept queries, and solving a significant number of DSA problems on competitive programming platforms.",
        ],
    },
];

// Call the function with your data and the container ID:
renderExperienceDivs(experienceData, "experience-container"); // Replace "experience-container" with your actual container ID