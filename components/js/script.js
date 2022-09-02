"use strict";

// Toggle NavBar
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("active");
});

const closeMenuBar = () => {
    header.classList.remove("active");
};
