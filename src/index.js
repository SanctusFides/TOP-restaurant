import "./style.css";
import home from './home';
import menu from './menu';
import contact from './contact';


// creates the image to use at the top of the page
const image = document.createElement('img');
image.src = "beans.jpg";
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
homeBtn.addEventListener('click', loadHome);

const menuBtn = document.createElement('button');
menuBtn.className = 'nav-button';
menuBtn.id = 'menuButton'
menuBtn.innerHTML = 'Menu'
menuBtn.addEventListener('click', loadMenu);

const contactBtn = document.createElement('button');
contactBtn.className = 'nav-button';
contactBtn.id = 'contactButton'
contactBtn.innerHTML = 'Contact'
contactBtn.addEventListener('click', loadContact);

// Creates a div to group the buttons and sets class name for CSS
const navButtons = document.createElement('div');
navButtons.className = 'nav-buttons';
navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);
// attach the buttons to the body
document.body.appendChild(navButtons);


// I tried to make this work by making a single load function and passing through a string to indicate home/menu/contact
// but for some reason it wasn't properly working to handle multiple routes, so I'm moving on with this broken into 3
// Does a simple check if the content div exists, if not then run the functions which will create it, but if it does
// then go ahead and delete it and then run the function which will make a new one to replace it
// This is a vital check and process to avoid having duplicating sections loading on the page
function loadHome() {
    let contentBody = document.getElementById('content');
    if (typeof contentBody === 'undefined' || contentBody === null) {
        home();
    } else {
        contentBody.remove();
        home();
        console.log('else');
    }
}

function loadMenu() {
    let contentBody = document.getElementById('content');
    if (typeof contentBody === 'undefined' || contentBody === null) {
        menu();
    } else {
        contentBody.remove();
        menu();
        console.log('else');
    }
}

function loadContact() {
    let contentBody = document.getElementById('content');
    if (typeof contentBody === 'undefined' || contentBody === null) {
        contact();
    } else {
        contentBody.remove();
        contact();
        console.log('else');
    }
}


// Preselecting the Home button when page finishes loading so the user is greeted with the home info
const preSelected = document.getElementById('homeButton');
preSelected.click();