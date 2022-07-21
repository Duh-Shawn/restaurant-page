import './style.css';

const renderContactPage = () => {
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
    headlineHeading.textContent = "Contact Us";
    headline.appendChild(headlineHeading);

    const contactBlock = document.createElement('div');
    contactBlock.classList = "contact-block";
    const phone = document.createElement('p');
    phone.textContent = "Corporate phoneline: 1-800-DAMN-GOOD-FOOD";
    contactBlock.appendChild(phone);
    wrapper.appendChild(contactBlock);
} 

export default renderContactPage;