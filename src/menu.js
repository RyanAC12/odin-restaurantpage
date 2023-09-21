function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Header
    const header = document.createElement('header');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "BMO's Breakfast Bar!";
    header.appendChild(headerTitle);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    const homeBtn = document.createElement('button');
    homeBtn.id = 'homebtn';
    homeBtn.textContent = 'Home';
    homeDiv.appendChild(homeBtn);

    const menuButtonDiv = document.createElement('div');
    menuButtonDiv.classList.add('menu');
    const menuBtn = document.createElement('button');
    menuBtn.id = 'menubtn';
    menuBtn.textContent = 'Menu';
    menuButtonDiv.appendChild(menuBtn);

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    const contactBtn = document.createElement('button');
    contactBtn.id = 'contactbtn';
    contactBtn.textContent = 'Contact';
    contactDiv.appendChild(contactBtn);

    menuDiv.appendChild(homeDiv);
    menuDiv.appendChild(menuButtonDiv);
    menuDiv.appendChild(contactDiv);

    header.appendChild(menuDiv);
    content.appendChild(header);

    // Main Content
    const main = document.createElement('div');
    main.classList.add('main');

    const items = [{
        className: 'bmocake',
        src: '/src/Images/bmocake.png',
        id: 'bmocake',
        heading: 'BMO Cake',
        text: 'Yellow cake filled with batteries.\nA nice way to charge up your morning!'
    }, {
        className: 'baconpancakes',
        src: '/src/Images/baconpancakes.png',
        id: 'baconpancakes',
        heading: 'Bacon Pancakes',
        text: 'Jake\'s famous recipe, \nand BMO\'s personal favorite dish!'
    }, {
        className: 'perfectsandwich',
        src: '/src/Images/perfectsandwich.png',
        id: 'perfectsandwich',
        heading: 'Perfect Sandwich',
        text: 'Sometimes the best breakfast is lunch. \nWhat\'s more perfect than the perfect sandwich?'
    }];

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(item.className);

        const img = document.createElement('img');
        img.src = item.src;
        img.id = item.id;
        itemDiv.appendChild(img);

        const h2 = document.createElement('h2');
        h2.textContent = item.heading;
        itemDiv.appendChild(h2);

        const p = document.createElement('p');
        p.textContent = item.text;
        itemDiv.appendChild(p);

        main.appendChild(itemDiv);
    });

    content.appendChild(main);
}

export default loadMenu;
