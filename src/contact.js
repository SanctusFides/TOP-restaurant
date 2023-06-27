export default function contact() {
    const content = document.createElement('content');
    content.className = 'content';
    content.id = 'content';
    document.body.appendChild(content);

    const contact = document.createElement('div');
    contact.className = 'contact';

    
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'HOW TO REACH US';
    contact.appendChild(contactTitle);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'We are located inside the subway station on Sesame Street'
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