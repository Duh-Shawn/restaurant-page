
import Logo from './pizza.png'
import './style.css';

const renderHomePage = () => {
    
    //main content of page to append to
    const content = document.getElementById('content'); 

    //wrapper for js injected data
    const wrapper = document.createElement('div');
    wrapper.classList = "wrapper";
    content.appendChild(wrapper);

    const headline = document.createElement('div');
    headline.classList ="headline"
    wrapper.appendChild(headline);

    const pizzaLogo = new Image();
    pizzaLogo.src = Logo;
    pizzaLogo.id = "pizza-logo"
    const headlineHeading = document.createElement('h1');
    headlineHeading.textContent = "D's Pizza Shop";
    headline.appendChild(pizzaLogo);
    headline.appendChild(headlineHeading);

    const info = document.createElement('div');
    info.classList = "info";
    wrapper.appendChild(info);

    //about us section
    const aboutBlock = document.createElement('div');
    aboutBlock.classList ="home-block";
    const aboutHeading = document.createElement('h2');
    const aboutText = document.createElement('p')
    aboutHeading.textContent = "About Us"
    aboutText.textContent = "Founded by a true foodie, we set across the globe to find the tastiest and most authentic recipes. We started in Northern Virginia and expanded as far as South Africa. To-date, we have over 30,000 restauraunts worldwide. No matter where you are located, we have the PIZZA for you!";
    aboutBlock.appendChild(aboutHeading);
    aboutBlock.appendChild(aboutText);

    //restaraunt hours section
    const hoursBlock = document.createElement('div');
    hoursBlock.classList ="home-block";
    const hoursHeading = document.createElement('h2');
    const hoursText = document.createElement('p');
    hoursHeading.textContent = "Hours"
    hoursText.innerHTML = "Monday: 9am - 9pm <br> Tuesday: 9am - 9pm <br> Wednesday: 9am - 9pm <br> Thursday: 9am - 9pm <br> Friday: 9am - 9pm <br> ";
    hoursBlock.appendChild(hoursHeading);
    hoursBlock.appendChild(hoursText);

    //contact us sections
    const contactBlock = document.createElement('div');
    contactBlock.classList ="home-block";
    const contactHeading = document.createElement('h2');
    const contactText = document.createElement('p');
    contactHeading.textContent = "Contact Us"
    contactText.innerHTML = "Locations worldwide. Please check your locale food registry! <br><br> Corporate phoneline: 1-800-DAMN-GOOD-PIZZA";
    contactBlock.appendChild(contactHeading);
    contactBlock.appendChild(contactText);

    info.appendChild(aboutBlock);
    info.appendChild(hoursBlock);
    info.appendChild(contactBlock);

    
}

export default renderHomePage;


