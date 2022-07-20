import pizza from './images/pizza.png'
import fish from './images/asian-food.png'
import cake from './images/cake.png'
import hotSkillet from './images/cooking.png'
import friedRice from './images/fried-rice.png'
import hotDog from './images/hotdog.png'
import kebab from './images/kebab.png'
import ramen from './images/ramen.png'
import steak from './images/restaurant.png'
import './style.css';

const renderMenuPage = () => {
    // main content of page to append to
    const content = document.getElementById('content'); 

    //wrapper for js injected ata
    const wrapper = document.createElement('div');
    wrapper.classList = "wrapper";
    content.appendChild(wrapper);

    const headline = document.createElement('div');
    headline.classList ="headline"
    wrapper.appendChild(headline);

    const headlineHeading = document.createElement('h1');
    headlineHeading.textContent = "Menu";
    headline.appendChild(headlineHeading);

    const menuItems = document.createElement('div');
    menuItems.classList = "menu-items";
    wrapper.appendChild(menuItems);


    var text = [
        {
            heading: "Delicious Item", imageSrc: steak, description: "Delicious food for you to eat!!!!" 
        },
        {
            heading: "Delicious Item", imageSrc: fish, description: "Delicious food for you to eat!!!!" 
        }, 
        {
            heading: "Delicious Item", imageSrc: cake, description: "Delicious food for you to eat!!!!" 
        }, 
        {
            heading: "Delicious Item", imageSrc: hotSkillet, description: "Delicious food for you to eat!!!!" 
        },
        {
            heading: "Delicious Item", imageSrc: friedRice, description: "Delicious food for you to eat!!!!" 
        },
        {
            heading: "Delicious Item", imageSrc: hotDog, description: "Delicious food for you to eat!!!!" 
        }, 
        {
            heading: "Delicious Item", imageSrc: kebab, description: "Delicious food for you to eat!!!!" 
        }, 
        {
            heading: "Delicious Item", imageSrc: ramen, description: "Delicious food for you to eat!!!!" 
        },
        {
            heading: "Delicious Item", imageSrc: pizza, description: "Delicious food for you to eat!!!!" 
        },
    ];

    text.forEach( (element) => {
        const itemContainer = document.createElement('div')
        itemContainer.classList = "item";

        const itemHeading = document.createElement('h2');
        itemHeading.textContent = element.heading;
        const itemPicture = new Image();
        itemPicture.src = element.imageSrc;
        itemPicture.classList = "item-picture";
        const itemDescription = document.createElement('p');
        itemDescription.textContent = element.description;
        const orderButton = document.createElement('button');
        orderButton.textContent = "Add to Order";

        
        itemContainer.appendChild(itemPicture);
        itemContainer.appendChild(itemHeading);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(orderButton);

        menuItems.appendChild(itemContainer);
    });
    
};

export default renderMenuPage;