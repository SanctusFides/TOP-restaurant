export default function homeFunct() {
    const content = document.createElement('content');
    content.className = 'content';
    content.id = 'content';
    document.body.appendChild(content);

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