function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Header
    const header = document.createElement('header');
    header.classList.add('header');

    const h1 = document.createElement('h1');
    h1.textContent = "BMO's Breakfast Bar!";
    header.appendChild(h1);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const homeBtn = document.createElement('button');
    homeBtn.id = 'homebtn';
    homeBtn.textContent = 'Home';
    homeDiv.appendChild(homeBtn);

    const menuDivNested = document.createElement('div');
    menuDivNested.classList.add('menu');

    const menuBtn = document.createElement('button');
    menuBtn.id = 'menubtn';
    menuBtn.textContent = 'Menu';
    menuDivNested.appendChild(menuBtn);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const contactBtn = document.createElement('button');
    contactBtn.id = 'contactbtn';
    contactBtn.textContent = 'Contact';
    contactDiv.appendChild(contactBtn);

    menuDiv.append(homeDiv, menuDivNested, contactDiv);
    header.appendChild(menuDiv);
    content.appendChild(header);

    // Main Content
    const contactMain = document.createElement('div');
    contactMain.classList.add('contactmain');

    const phoneImg = document.createElement('img');
    phoneImg.src = '/src/Images/phone.png';
    phoneImg.id = 'phone';
    contactMain.appendChild(phoneImg);

    const contactUsDiv = document.createElement('div');
    contactUsDiv.classList.add('contactus');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact us!';
    contactUsDiv.appendChild(h2);

    const contactP = document.createElement('p');
    contactP.innerHTML = `For any urgent questions, please contact <br>
                          BMO at 888-888-8888! <br>
                          For casual inquiries, please <br>
                          email BMOBreakfast@Bmail.com`;
    contactUsDiv.appendChild(contactP);

    contactMain.appendChild(contactUsDiv);

    const phone2Img = document.createElement('img');
    phone2Img.src = '/src/Images/phone2.png';
    phone2Img.id = 'phone2';
    contactMain.appendChild(phone2Img);

    content.appendChild(contactMain);
}

export default loadContact;
