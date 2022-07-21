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

    // //wrapper for js injected ata
    // const wrapper = document.createElement('div');
    // wrapper.classList = "wrapper";
    // content.appendChild(wrapper);

    const headline = document.createElement('div');
    headline.classList ="headline"
    content.appendChild(headline);

    const headlineHeading = document.createElement('h1');
    headlineHeading.textContent = "Menu";
    headline.appendChild(headlineHeading);

    const menuItems = document.createElement('div');
    menuItems.classList = "menu-items";
    content.appendChild(menuItems);


    var text = [
        {
            heading: "Steak", imageSrc: steak, description: "A steak, also sometimes called \"beef steak\", is a meat generally sliced across the muscle fibers, potentially including a bone. It is normally grilled, though it can also be pan-fried." 
        },
        {
            heading: "Fish", imageSrc: fish, description: "Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits."
        }, 
        {
            heading: "Cake", imageSrc: cake, description: "Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked." 
        }, 
        {
            heading: "Hot Skillet", imageSrc: hotSkillet, description: "One-skillet meals are the go-to when you cannot decide. Mix of meat, cheese, veggies, and rice." 
        },
        {
            heading: "Fried Rice", imageSrc: friedRice, description: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat." 
        },
        {
            heading: "Glizzy Dog", imageSrc: hotDog, description: "A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. " 
        }, 
        {
            heading: "Gyro", imageSrc: kebab, description: "Gyros—in some regions, chiefly North America, anglicized as a gyro —is a food item of Greek origin made from meat cooked on a vertical rotisserie and served wrapped or stuffed in pita bread, along with ingredients such as tomato, onion, fried potatoes, and tzatziki." 
        }, 
        {
            heading: "Ramen", imageSrc: ramen, description: "Ramen is a Japanese noodle dish. It consists of Chinese-style alkaline wheat noodles served in a meat-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori, menma, and scallions." 
        },
        {
            heading: "'Za", imageSrc: pizza, description: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven." 
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