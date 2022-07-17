import renderHomePage from "./homePage";

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

    console.log(menuButton);
    
    menuButton.addEventListener('click', clearContent);

})();