// homePage.js
// DO NOT CHANGE ANYTHING IN THIS FILE EXCEPT WHAT IS NECESSARY FOR IMAGE/FUNCTIONS

// ===== Image path =====
// الصور موجودة في public/images، لذلك المسار يبدأ من جذر السيرفر مباشرة
const homePageImage = "/images/homePage.png";

// ===== Helper functions =====
import {
  createHeader,
  createElement,
  createImage,
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

// ===== Render Home Page =====
const renderHomePage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  // Header
  const header = createHeader("h1", "Study Night", "home_header");

  // Subheading
  const subHeading = createElement(
    "h2",
    "A Digital Study Solution for the Modern World"
  );

  // Image
  const image = createImage(homePageImage, "Desk of laptops");

  // Container
  const homeContainer = document.createElement("div");
  homeContainer.className = "homeContainer";
  homeContainer.append(header, subHeading, image);
  main.appendChild(homeContainer);

  // ===== Add Form for Cypress testing =====
  const form = document.createElement("form");

  form.append(
    createLabel("Set Name", "setName"),
    createInput("setName"),
    createSubmitButton("Create Set")
  );

  main.appendChild(form);

  // ===== Debugging =====
  console.log("homePageImage:", homePageImage);
  console.log("image element:", image);
  console.log("form element:", form);
};

export { renderHomePage };
