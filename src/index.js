import "./style.css"

// creates the image to use at the top of the page
const image = document.createElement('img');
image.src = "../src/beans.jpg";
image.className = 'beans-image';
document.body.appendChild(image);

const header = document.createElement('h1');
header.textContent = `Odin's Cafe`;
header.className = 'rest-name';
document.body.appendChild(header);


// Creates the 3 buttons that change the elements in the content div
const homeBtn = document.createElement('button');
homeBtn.className = 'nav-button';
homeBtn.id = 'homeButton';
homeBtn.innerHTML = 'Home'
homeBtn.addEventListener('click', home);
const menuBtn = document.createElement('button');
menuBtn.className = 'nav-button';
menuBtn.id = 'menuButton'
menuBtn.innerHTML = 'Menu'
menuBtn.addEventListener('click', menu);
const contactBtn = document.createElement('button');
contactBtn.className = 'nav-button';
contactBtn.id = 'contactButton'
contactBtn.innerHTML = 'Contact'
contactBtn.addEventListener('click', contact);

// Creates a div to group the buttons and sets class name for CSS
const navButtons = document.createElement('div');
navButtons.className = 'nav-buttons';
navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);
// attach the buttons to the body
document.body.appendChild(navButtons);

// creating the content div which is where each tab generates content
const content = document.createElement('content');
content.className = 'content';
document.body.appendChild(content);

// Each function is responsible for the individual tabs content to load into the content div
function home() {
    // set content html to blank string - this will clear the text before building to avoid each button click inserting
    // a new paragraph. The clearing/loading process is so fast that it's not noticed on the page
    // IF THIS IS REMOVED, A NEW METHOD OF PREVENTING DUPING IS NECCESARY
    content.innerHTML = "";

    // creating the info that the home button presents to the page - this is the default content that loads with refreshing page
    const greeting = document.createElement('div');
    greeting.className = 'blurb greeting';
    const greetingText = document.createElement('p');
    greetingText.innerHTML = `Welcome to Odin's Cafe where you can satisfy all your Java needs!
    <br><br>Here at Odin's cafe, we believe Java is serious business and that's why all of our sizes are standardized`;
    greeting.appendChild(greetingText);

    // Generates the hours of operation text and adds them to the content div
    const operatingHours = document.createElement('div');
    operatingHours.className = 'blurb hours';
    const hoursTitle = document.createElement('h2');
    hoursTitle.innerHTML = 'HOURS';
    const hoursList = document.createElement('p');
    // creating class name here to stylize the hours separately from the title
    hoursList.className = 'hours-list';
    hoursList.innerHTML = `Monday thru Fridays
    <br>
    6AM - 10PM
    <br>
    <br>
    Saturday & Sundays
    <br>
    8AM - 11PM`;
    operatingHours.appendChild(hoursTitle);
    operatingHours.appendChild(hoursList);

    content.appendChild(greeting);
    content.appendChild(operatingHours);
}

function menu() {
    content.innerHTML = "";

    const drinks = document.createElement('div');
    drinks.className = 'drinks';

    const coffeTitle = document.createElement('h2');
    coffeTitle.textContent = 'COFFEE'
    drinks.appendChild(coffeTitle);

    const coffeeList = document.createElement('p');
    coffeeList.innerHTML = 
    `SMALL - $2.99 
    <br><br>
    MEDIUM - $4.99
    <br><br>
    LARGE - $5.99 
    `;
    drinks.appendChild(coffeeList);

    const teaTitle = document.createElement('h2');
    teaTitle.textContent = 'TEA'
    drinks.appendChild(teaTitle);

    const teaFlavors = document.createElement('p');
    teaFlavors.className = 'flavors';
    teaFlavors.innerHTML = 'Green, Earl Grey, White, or Oolong';
    drinks.appendChild(teaFlavors);

    const teaList = document.createElement('p');
    teaList.innerHTML = 
    `SMALL - $1.99 
    <br><br>
    MEDIUM - $3.99
    <br><br>
    LARGE - $4.99 
    `;

    drinks.appendChild(teaList);

    content.appendChild(drinks);
}

function contact() {
    content.innerHTML = "";

    const contact = document.createElement('div');
    contact.className = 'contact';

    
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'HOW TO REACH US';
    contact.appendChild(contactTitle);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'We are located inside the subway on Sesame Street'
    contact.appendChild(contactInfo);

    // Creates the image from Sesame Street
    const contactImage = document.createElement('img');
    contactImage.src = "../src/street.png";
    contactImage.className = 'street-image';
    contact.appendChild(contactImage);

    const addressTitle = document.createElement('h3');
    addressTitle.textContent = 'Address';
    const contactAddress = document.createElement('p');
    contactAddress.className = 'contact-address';
    contactAddress.innerHTML = `123 Sesame Street <br>
    Manhattan NY, 10016
    `;
    contact.appendChild(addressTitle);
    contact.appendChild(contactAddress);

    const phone = document.createElement('h3');
    phone.textContent = 'Phone';
    const contactPhone = document.createElement('p');
    contactPhone.innerHTML = '555-123-4567';
    contact.appendChild(phone);
    contact.appendChild(contactPhone);

    content.appendChild(contact);
}

// Preselecting the Home button when page finishes loading so the user is greeted with the home info
const preSelected = document.getElementById('homeButton');
preSelected.click();