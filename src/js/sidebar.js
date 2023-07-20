const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// Get the main content container
const mainContent = document.querySelector('.main-content');

// Mapping the links to their corresponding content IDs
const linkToContentMap = {
  'Bank': 'bank-content',
  'Shop': 'shop-content',
  'Attack': 'combat-content',
  'Strength': 'combat-content',
  'Defense': 'combat-content',
  'Woodcutting': 'woodcutting-content',
  'Mining': 'mining-content',
  'Fishing': 'fishing-content',
};

// Function to show the corresponding content based on the clicked link
function showContent(contentId) {
  // Hide all content divs
  const contentDivs = mainContent.querySelectorAll('div[id]');
  contentDivs.forEach((div) => {
    div.style.display = 'none';
  });

  // Show the selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }
}

// Event listeners for the navigation links
const navLinks = document.querySelectorAll('.nav_link');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the link text (e.g., "Bank", "Shop", "Attack", etc.)
    const linkText = link.querySelector('.navlink').textContent.trim();

    // Find the corresponding content ID from the map
    const contentId = linkToContentMap[linkText];

    // Call the function to show the corresponding content
    showContent(contentId);
  });
});
