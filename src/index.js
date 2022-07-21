import renderHomePage from "./home";
import renderMenuPage from "./menu";
import renderContactPage from "./contact";

renderHomePage();


const clearContent = () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

//module pattern to attach event listeners to the appropriate buttons
const attachEventListeners = (() => {
    
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener('click', () => {
        clearContent();
        renderHomePage();
    });

    console.log(homeButton);

    const menuButton = document.getElementById("menu-button");
    menuButton.addEventListener('click', () => {
        clearContent();
        renderMenuPage();
    });

    const contactButton = document.getElementById("contact-button");
    contactButton.addEventListener('click', () => {
        clearContent();
        renderContactPage();
    });

})();