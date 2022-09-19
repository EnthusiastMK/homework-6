document.addEventListener("DOMContentLoaded", (event) => {

    // #1 Підкреслення активного посилання в хедері

    const menuHomeActive = document.getElementById('menuHome');
    const menuCompanyActive = document.getElementById('menuCompany');
    const menuFeaturesActive = document.getElementById('menuFeatures');

    const handleMenuHome = () => {
        menuHomeActive.classList.add('menu-item--active');
        menuCompanyActive.classList.remove('menu-item--active');
        menuFeaturesActive.classList.remove('menu-item--active');
    };
    
    const handleMenuCompany = () => {
        menuCompanyActive.classList.add('menu-item--active');
        menuFeaturesActive.classList.remove('menu-item--active');
        menuHomeActive.classList.remove('menu-item--active');
    };

    const handleMenuFeatures = () => {
        menuFeaturesActive.classList.add('menu-item--active');
        menuHomeActive.classList.remove('menu-item--active');
        menuCompanyActive.classList.remove('menu-item--active');
    };

    menuHomeActive.addEventListener('click', handleMenuHome);
    menuCompanyActive.addEventListener('click', handleMenuCompany);
    menuFeaturesActive.addEventListener('click', handleMenuFeatures);

    // #2 Бургер меню

    const burgerMenuBtn = document.getElementById('burgerMenuBtn');
    const headerBurgerList = document.getElementById('headerBurgerList');
    const closeBurgerMenu = document.getElementById('closeBurgerMenu');

    const handleBurgerMenuOpen = () => {
        headerBurgerList.style.display = 'block';
    };

    const handleBurgerMenuClose = () => {
        headerBurgerList.style.display = 'none';
    };

    burgerMenuBtn.addEventListener('click', handleBurgerMenuOpen);
    closeBurgerMenu.addEventListener('click', handleBurgerMenuClose);

    // #3 Відправка форми (submit) => в console.log()

    const exploreEmail = document.getElementById('exploreEmail');
    const exploreForm = document.querySelector('.explore__form');
    
    const handleSubmitEmail = (e) => {
        e.preventDefault();
        console.log('Email:', exploreEmail.value);
    };

    exploreForm.addEventListener('submit', handleSubmitEmail);
    
    // #4 Кожен клік має щось показати в консолі

    document.getElementById('headerAuthBtn').addEventListener('click', () => console.log('Sign In'));
    document.getElementById('heroBtnGet').addEventListener('click', () => console.log('Get It Now'));
    document.getElementById('heroBtnExplore').addEventListener('click', () => console.log('Explore Device'));
    document.getElementById('menuHome').addEventListener('click', () => console.log('Home'));
    document.getElementById('menuCompany').addEventListener('click', () => console.log('Company'));
    document.getElementById('menuFeatures').addEventListener('click', () => console.log('Features'));
    document.getElementById('contentBtn').addEventListener('click', () => console.log('Get It Now'));
    document.getElementById('exploreFormBtn').addEventListener('click', () => console.log('Start'));

    // #5 Select => змінну зберегти і в консоль вивести
    
    const sortSelect = document.getElementById("sortSelect");
    
    const handleSortSelectChange = (e) => {
        let sortType = e.target.value;
        console.log(sortType);
    };

    sortSelect.addEventListener('change', handleSortSelectChange); 

    // #6 Sign in => (submit) показати логін і пароль юзера в консолі
    // #7 Add new card => (submit) показати в консоль картку яку хочемо додати
    
    // #8 Після SignIn змінити хедер на auth хедер (показати іконку юзера)

    const headerAuthBtn = document.getElementById('headerAuthBtn');
    const headerUser = document.getElementById('headerUser');

    const handleAuthUser = () => {
        headerUser.style.display = 'block';
        headerAuthBtn.style.display = 'none';
    };

    headerAuthBtn.addEventListener('click', handleAuthUser);

});