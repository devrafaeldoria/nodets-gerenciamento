let arrow = document.querySelector('.arrow');

function openAndCloseNav() {
    if(arrow.classList.contains('right')) {
        let nav = document.querySelector('nav');

        arrow.innerHTML = '';

        arrow.classList.remove('right');
        arrow.classList.add('left');

        nav.style.display = 'block';
        arrow.innerHTML = '<img src="assets/images/arrow-left.png" alt="">'

    } else {
        let nav = document.querySelector('nav');

        arrow.innerHTML = '';

        arrow.classList.remove('left');
        arrow.classList.add('right');

        nav.style.display = 'none';
        arrow.innerHTML = '<img src="assets/images/arrow-right.png" alt="">';
    }
};

function  openAndCloseMenu(evn) {
    let nameMenu = evn.target.getAttribute('data-nameMenu');

    if(nameMenu === 'produtos') {
        activeMenu(nameMenu);
        let menuProducts = document.querySelector('.options-products');
        if(menuProducts.classList.contains('closed')) {
            menuProducts.style.display = 'block';

            menuProducts.classList.remove('closed');
            menuProducts.classList.add('opened');
        } else {
            menuProducts.style.display = 'none';

            menuProducts.classList.remove('opened');
            menuProducts.classList.add('closed');
        }
    } else if(nameMenu === 'funcionarios') {
        activeMenu(nameMenu);
        let menuEmployees = document.querySelector('.options-employes');
        if(menuEmployees.classList.contains('closed')) {
            menuEmployees.style.display = 'block';

            menuEmployees.classList.remove('closed');
            menuEmployees.classList.add('opened');
        } else {
            menuEmployees.style.display = 'none';

            menuEmployees.classList.remove('opened');
            menuEmployees.classList.add('closed');
        }
    } else if(nameMenu = 'dashboard') {
        activeMenu(nameMenu);
    }
};

function activeMenu(nameMenu) {
    let menuEmployees = document.querySelector('.menu-select-employess');
    let menuProducts = document.querySelector('.menu-select-products');
    let menuDashboard = document.querySelector('.menu-select-dashboard');
    switch(nameMenu) {
        case 'funcionarios':
            menuEmployees.classList.add('active');

            menuDashboard.classList.remove('active');
            menuProducts.classList.remove('active');
            break;
        case 'produtos':
            menuProducts.classList.add('active');

            menuEmployees.classList.remove('active');
            menuDashboard.classList.remove('active');
            break;
        case 'dashboard': 
            menuDashboard.classList.add('active');

            menuEmployees.classList.remove('active');
            menuProducts.classList.remove('active');
            break;
    }
}

document.querySelector('.arrow').addEventListener('click', openAndCloseNav);
document.querySelectorAll('.menu-select').forEach((evn) => {
    evn.addEventListener('click', openAndCloseMenu);
});