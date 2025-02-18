
const unorderedButton = document.getElementById('unorderedButton');
const nav = document.getElementById('nav');

const item = 
`        <ul id="unorderedButton">
          <li><a id="home">Home</a></li>
          <li><a id="services">Services</a></li>
          <li><a id="aboutMe">About me</a></li>
          <li><a id="portfolio">Portfolio</a></li>
          <li><a id="contactMee">Contact me</a></li>
        </ul>
`;
const itemButton = 
`        <ul id="unorderedButton">
          <li><a id="homeButton">Home</a></li>
          <li><a id="servicesButton">Services</a></li>
          <li><a id="aboutMeButton">About me</a></li>
          <li><a id="portfolioButton">Portfolio</a></li>
          <li><a id="contactMeButton">Contact me</a></li>
        </ul>
`;
nav.innerHTML=item;
unorderedButton.innerHTML=itemButton;





const home = document.getElementById("home");
const services = document.getElementById("services");
const aboutMe = document.getElementById("aboutMe");
const portfolio = document.getElementById("portfolio");
const contactMe = document.getElementById("contactMee");
 

// add active class while scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY < 960) {
    home.setAttribute("class", "logo-span");
    services.removeAttribute("class", "logo-span");
    aboutMe.removeAttribute("class", "logo-span");
    portfolio.removeAttribute("class", "logo-span");
    contactMe.removeAttribute("class", "logo-span");
  }
  if (window.scrollY > 960 && window.scrollY < 1700) {
    home.removeAttribute("class", "logo-span");
    services.setAttribute("class", "logo-span");
    aboutMe.removeAttribute("class", "logo-span");
    portfolio.removeAttribute("class", "logo-span");
    contactMe.removeAttribute("class", "logo-span");
  }
  if (window.scrollY > 1700 && window.scrollY < 2870) {
    home.removeAttribute("class", "logo-span");
    services.removeAttribute("class", "logo-span");
    aboutMe.setAttribute("class", "logo-span");
    portfolio.removeAttribute("class", "logo-span");
    contactMe.removeAttribute("class", "logo-span");
  }
  if (window.scrollY > 2870 && window.scrollY < 4450) {
    home.removeAttribute("class", "logo-span");
    services.removeAttribute("class", "logo-span");
    aboutMe.removeAttribute("class", "logo-span");
    portfolio.setAttribute("class", "logo-span");
    contactMe.removeAttribute("class", "logo-span");
  }
  if (window.scrollY > 4450) {
    home.removeAttribute("class", "logo-span");
    services.removeAttribute("class", "logo-span");
    aboutMe.removeAttribute("class", "logo-span");
    portfolio.removeAttribute("class", "logo-span");
    contactMe.setAttribute("class", "logo-span");
  }
});

// school to section on clicking

home.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
homeButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
services.addEventListener("click", () => {
  window.scrollTo(0, 961);
});
servicesButton.addEventListener("click", () => {
  window.scrollTo(0, 961);
});
aboutMe.addEventListener("click", () => {
  window.scrollTo(0, 1701);
});
aboutMeButton.addEventListener("click", () => {
  window.scrollTo(0, 1701);
});
portfolio.addEventListener("click", () => {
  window.scrollTo(0, 2871);
});
portfolioButton.addEventListener("click", () => {
  window.scrollTo(0, 2871);
});
contactMe.addEventListener("click", () => {
  window.scrollTo(0, 4451);
});
contactMeButton.addEventListener("click", () => {
  window.scrollTo(0, 4451);
});
