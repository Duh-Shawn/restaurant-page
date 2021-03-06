
import fork from './images/fork.png'
import knife from './images/knife.png'
import './style.css';

const renderHomePage = () => {
    
    //main content of page to append to
    const content = document.getElementById('content'); 

    const headline = document.createElement('div');
    headline.classList ="headline"
    content.appendChild(headline);

    const forkLogo = new Image();
    forkLogo.src = fork;
    forkLogo.id = "pizza-logo"
    const knifeLogo = new Image();
    knifeLogo.src = knife;
    knifeLogo.id = "pizza-logo"
    const headlineHeading = document.createElement('h1');
    headlineHeading.textContent = "D's Krazy Food";
    headline.id = "home-headline";
    headline.appendChild(forkLogo);
    headline.appendChild(headlineHeading);
    headline.appendChild(knifeLogo);

    const info = document.createElement('div');
    info.classList = "info";
    content.appendChild(info);

    //about us section
    const aboutBlock = document.createElement('div');
    aboutBlock.classList ="home-block";
    aboutBlock.id = "about-section"
    const aboutHeading = document.createElement('h2');
    const aboutText = document.createElement('p')
    aboutHeading.textContent = "About Us"
    aboutText.textContent = "Founded by a true foodie, we set across the globe to find the tastiest and most authentic recipes. From Newport News to Northern Virginia, we have set out to find the most unique and cultural dishes to share. Whether you are new on your foodie journey, or a seasoned traveler, we have something for you!";
    aboutBlock.appendChild(aboutHeading);
    aboutBlock.appendChild(aboutText);

    //restaraunt hours section
    const hoursBlock = document.createElement('div');
    hoursBlock.classList ="home-block";
    hoursBlock.id = "hours-section"
    const hoursHeading = document.createElement('h2');
    const hoursText = document.createElement('p');
    hoursHeading.textContent = "Hours"
    hoursText.innerHTML = "Monday: 9am - 9pm <br> Tuesday: 9am - 9pm <br> Wednesday: 9am - 9pm <br> Thursday: 9am - 9pm <br> Friday: 9am - 9pm <br> ";
    hoursBlock.appendChild(hoursHeading);
    hoursBlock.appendChild(hoursText);

    //locaton section
    const locationBlock = document.createElement('div');
    locationBlock.classList ="home-block";
    locationBlock.id = "location-section";
    const locationHeading = document.createElement('h2');
    const locationText = document.createElement('p');
    locationHeading.textContent = "Location"
    locationText.innerHTML = "1000 Good Food Avenue, Arlington, Virginia";
    locationBlock.appendChild(locationHeading);
    locationBlock.appendChild(locationText);

    info.appendChild(aboutBlock);
    info.appendChild(hoursBlock);
    info.appendChild(locationBlock);
}

export default renderHomePage;


