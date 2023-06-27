export default function menuFunct() {
    const content = document.createElement('content');
    content.className = 'content';
    content.id = 'content';
    document.body.appendChild(content);

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