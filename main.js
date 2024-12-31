// ========= styleCss
let themeSwitcher = false;
function themechanger() {
  themeSwitcher = !themeSwitcher;

  var styleCss = document.querySelector("#styleCss");
  styleCss.href = themeSwitcher ? "DarkMode.css" : "LightMode.css";
  localStorage.setItem("styleCss", styleCss.href);
}
// ========= /styleCss

// ========= Header Image Size
window.onload = function () {
  var savedCssFile = localStorage.getItem("styleCss");
  if (savedCssFile) {
    styleCss.href = savedCssFile;
  }

  var headerSingleImageContainer = document.querySelector(
    "header .header-image-container div"
  );
  var headerImageContainer = document.querySelector(
    "header .header-image-container"
  );

  var ContainerGap = parseFloat(
    window.getComputedStyle(headerImageContainer).gap
  );
  var SingleWidth = headerSingleImageContainer.getBoundingClientRect().width;

  headerImageContainer.style.maxWidth = `${
    SingleWidth * 3 + ContainerGap * 2
  }px`;
};
// ========= /Header Image Size

// ========= Nav Mobile
let mobileNavOpen = false;

function MobileNav() {
  // Toggle the mobile navigation visibility
  mobileNavOpen = !mobileNavOpen;
  const unvisiblePart = document.querySelector("#mobile-nav .unvisible-part");
  const mobileNavIcon = document.querySelector(".open-mobile-nav i");

  // Add or remove the active class for the mobile nav
  if (mobileNavOpen) {
    unvisiblePart.style.display = "block";
    mobileNavIcon.classList.remove("fa-bars-staggered");
    mobileNavIcon.classList.add("fa-xmark");
  } else {
    unvisiblePart.style.display = "none";
    mobileNavIcon.classList.remove("fa-xmark");
    mobileNavIcon.classList.add("fa-bars-staggered");
  }
}

// Handle submenu toggling
function toggleSubmenu(target) {
  // Rotate the clicked icon
  const angleIcon = target.querySelector("i");
  const submenu = target.nextElementSibling;

  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    angleIcon.style.transform = "rotate(0deg)";
  } else {
    // Close all submenus before opening the selected one
    document.querySelectorAll("#mobile-nav .submenu").forEach((submenu) => {
      submenu.style.display = "none";
    });
    document.querySelectorAll("#mobile-nav .title i").forEach((icon) => {
      icon.style.transform = "rotate(0deg)";
    });

    submenu.style.display = "block";
    angleIcon.style.transform = "rotate(180deg)";
  }
}
// Add event listeners to menu titles
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#mobile-nav .menu .title").forEach((menuTitle) => {
    menuTitle.addEventListener("click", () => toggleSubmenu(menuTitle));
  });
});
// ========= /Nav Mobile
