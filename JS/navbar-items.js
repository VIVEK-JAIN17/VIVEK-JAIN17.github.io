function renderNavbarItems(navItems, navContainerId) {
    const navContainer = document.getElementById(navContainerId);
    if (!navContainer) {
        console.error("Navigation container not found.");
        return;
    }

    navItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "nav-item";
        if (index === 0) { // Make the first item active
            li.classList.add("active");
        }

        const a = document.createElement("a");
        a.href = item.href;
        a.className = "nav-link";
        a.textContent = item.text;

        li.appendChild(a);
        navContainer.appendChild(li);
    });
}

// Example usage with an array of navigation items:
const navbarItems = [
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#skills", text: "Skills" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "My Work" },
    { href: "#contact", text: "Contact" },
];

// Call the function with your navigation items and the container ID:
renderNavbarItems(navbarItems, "navbar-items"); // Replace "navbar-items" with your actual ul ID