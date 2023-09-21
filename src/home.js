function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

     // Header
     const header = document.createElement('header');
     header.classList.add('header');
 
     const headerTitle = document.createElement('h1');
     headerTitle.textContent = "BMO's Breakfast Bar!";
     header.appendChild(headerTitle);
 
     const menu = document.createElement('div');
     menu.classList.add('menu');
 
     const homeDiv = document.createElement('div');
     homeDiv.classList.add('home');
     const homeBtn = document.createElement('button');
     homeBtn.id = 'homebtn';
     homeBtn.textContent = 'Home';
     homeDiv.appendChild(homeBtn);
     menu.appendChild(homeDiv);
 
     const menuDiv = document.createElement('div');
     menuDiv.classList.add('menu');
     const menuBtn = document.createElement('button');
     menuBtn.id = 'menubtn';
     menuBtn.textContent = 'Menu';
     menuDiv.appendChild(menuBtn);
     menu.appendChild(menuDiv);
 
     const contactDiv = document.createElement('div');
     contactDiv.classList.add('contact');
     const contactBtn = document.createElement('button');
     contactBtn.id = 'contactbtn';
     contactBtn.textContent = 'Contact';
     contactDiv.appendChild(contactBtn);
     menu.appendChild(contactDiv);
 
     header.appendChild(menu);
     content.appendChild(header);
 
     // Main content
     const main = document.createElement('div');
     main.classList.add('main');
 
     // Chef section
     const chefDiv = document.createElement('div');
     chefDiv.classList.add('chef');
     const chefImage = document.createElement('img');
     chefImage.src = '/src/Images/bmo.png';
     chefImage.id = 'bmo';
     chefDiv.appendChild(chefImage);
     const chefText = document.createElement('p');
     chefText.textContent = `All of our meals are cooked personally by chef 
     BMO himself! ... with some help from Jake. Having studied tirelessly at a top culinary academy, 
     BMO will make sure to wow you with his savory dishes!`;
     chefDiv.appendChild(chefText);
     main.appendChild(chefDiv);
 
     // Description section
     const descriptionDiv = document.createElement('div');
     descriptionDiv.classList.add('description');
     const descriptionImage = document.createElement('img');
     descriptionImage.src = '/src/Images/house.png';
     descriptionImage.id = 'house';
     descriptionDiv.appendChild(descriptionImage);
     const descriptionText = document.createElement('p');
     descriptionText.textContent = `BMO's Breakfast Bar is the prime spot for the 
     best breakfast experience. While our primary location is still under construction, 
     BMO will be serving his dishes out of his home.
     Location: Tree House, Grass Lands`;
     descriptionDiv.appendChild(descriptionText);
     main.appendChild(descriptionDiv);
 
     // Hours section
     const hoursDiv = document.createElement('div');
     hoursDiv.classList.add('hours');
     const hoursImage = document.createElement('img');
     hoursImage.src = '/src/Images/clock.png';
     hoursImage.id = 'clock';
     hoursDiv.appendChild(hoursImage);
     const hoursText = document.createElement('div');
     hoursText.classList.add('hourslist');
     const hoursHeader = document.createElement('h1');
     hoursHeader.textContent = 'Hours';
     hoursText.appendChild(hoursHeader);
     const hoursList = document.createElement('p');
     hoursList.innerHTML = `
         Monday: 7am-2pm<br>
         Tuesday: 7am-2pm<br>
         Wednesday: 7am-8pm<br>
         Thursday: 7am-8pm<br>
         Friday: 7am-8pm<br>
         Saturday: 7am-8pm<br>
         Sunday: 7am-2pm<br>
     `;
     hoursText.appendChild(hoursList);
     hoursDiv.appendChild(hoursText);
     main.appendChild(hoursDiv);
 
     content.appendChild(main);
 }
 
 export default loadHome;