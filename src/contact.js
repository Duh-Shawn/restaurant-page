import './style.css';
import user from './images/user.png';

const employees = [
    {
        imageSrc : user,
        name : "De'Shawn Maynard",
        role : "CEO",
        phone : "555-555-5555",
        email : "email@email.com"
    },
    {
        imageSrc : user,
        name : "Barbara Jelensky",
        role : "Manager",
        phone : "555-555-5555",
        email : "email@email.com"
    },
    {
        imageSrc : user,
        name : "Donny James",
        role : "Waiter",
        phone : "555-555-5555",
        email : "email@email.com"
    },
]

const renderContactPage = () => {
    // main content of page to append to
    const content = document.getElementById('content'); 

    const headline = document.createElement('div');
    headline.classList ="headline"
    content.appendChild(headline);

    const headlineHeading = document.createElement('h1');
    headlineHeading.textContent = "Contact Us";
    headline.appendChild(headlineHeading);


    const employeesBlock = document.createElement('div');
    employeesBlock.classList = "employees-block";

    employees.forEach( (employee) => {
        const employeeContainer = document.createElement('div')
        employeeContainer.classList = "employee";

        const employeePicture = new Image();
        employeePicture.src = employee.imageSrc;
        employeePicture.classList = "employee-picture";
        const employeeInfo = document.createElement('div');
        const employeNameAndRole = document.createElement('h2');
        employeNameAndRole.textContent = `${employee.name}, ${employee.role}`;
        const employeePhone = document.createElement('p');
        employeePhone.textContent = employee.phone;
        const employeeEmail = document.createElement('p');
        employeeEmail.textContent = employee.email;

        employeeInfo.appendChild(employeNameAndRole);
        employeeInfo.appendChild(employeePhone);
        employeeInfo.appendChild(employeeEmail);

        employeeContainer.appendChild(employeePicture);
        employeeContainer.appendChild(employeeInfo);
        
        employeesBlock.appendChild(employeeContainer);
    });

    content.appendChild(employeesBlock);

    const contactBlock = document.createElement('div');
    contactBlock.classList = "contact-block";
    const phone = document.createElement('p');
    phone.textContent = "Order NOW: 1-800-DAMN-GOOD-FOOD";
    contactBlock.appendChild(phone);
    content.appendChild(contactBlock);
} 

export default renderContactPage;