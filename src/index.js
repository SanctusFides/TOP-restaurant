import "./style.css"

// creates the image to use at the top of the page
const image = document.createElement('img');
image.src = "../src/beans.jpg";
image.className = 'beans-image';
document.body.appendChild(image);




// Creates the 3 buttons that change the elements in the content div
const homeBtn = document.createElement('button');
homeBtn.className = 'nav-button';
homeBtn.innerHTML = 'Home'
homeBtn.addEventListener('click', home);
const menuBtn = document.createElement('button');
menuBtn.className = 'nav-button';
menuBtn.innerHTML = 'Menu'
const contactBtn = document.createElement('button');
contactBtn.className = 'nav-button';
contactBtn.innerHTML = 'Contact'
// Creates a div to group the buttons and sets class name for CSS
const navButtons = document.createElement('div');
navButtons.className = 'nav-buttons';
navButtons.appendChild(homeBtn);
navButtons.appendChild(menuBtn);
navButtons.appendChild(contactBtn);
// attach the buttons to the body
document.body.appendChild(navButtons);


//

    NEED TO FIGURE OUT HOW TO DEFAULT HOME BUTTON CLICKED AND ADD A WAY TO IDENTIFY WHICH
    BUTTON THE USER IS ON SO THAT MULTIPLE CLICKS DO NOT POPULATE THE DATA - THAT OR JUST CLEAR IT AND REFILL ON CLICK

// 

const content = document.createElement('content');
document.body.appendChild(content);
function home() {
    console.log('test');
    const blurb = document.createElement('div');
    blurb.id = 'blurb';
    blurb.className = 'blurb';
    
    
    const header = document.createElement('h1');
    header.textContent = `Odin's Cafe`;
    const text = document.createElement('p');
    text.innerHTML = `Welcome to Odin's Cafe where you can satisfy all your java needs!`;
    
    blurb.appendChild(header);
    blurb.appendChild(text);
    
    content.appendChild(blurb);
}