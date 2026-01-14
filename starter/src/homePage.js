import homePageImage from "url:./images/homePage.png";
import {
  createHeader,
  createElement,
  createImage,
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

export const renderHomePage = () => {
  const main = document.querySelector("main");
  if (!main) return;
  main.innerHTML = "";

  const container = document.createElement("div");
  container.className = "homeContainer";

  const header = createHeader("h1", "Study Night", "home_header");
  const subHeading = createElement("h2", "A Digital Study Solution for the Modern World");
  const image = createImage(homePageImage, "Desk of laptops");

  container.append(header, subHeading, image);
  main.appendChild(container);

  const form = document.createElement("form");
  // منع الفورم من عمل Refresh للصفحة عند الضغط (مهم جداً لـ Cypress)
  form.onsubmit = (e) => e.preventDefault(); 
  
  form.append(
    createLabel("Set Name", "setName"),
    createInput("setName"), 
    createSubmitButton("Create Set")
  );

  main.appendChild(form);
};