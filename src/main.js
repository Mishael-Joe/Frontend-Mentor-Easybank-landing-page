// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
   // const element = selector;
   if(element) return element;
   throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`)
};

const openIcon = selectElement('.open');
const closeIcon = selectElement('.close');

function toggleMenu() {
    const mobileNav = selectElement('.mobileNav');
    
    openIcon.classList.toggle('activated');
    closeIcon.classList.toggle('activated');
    mobileNav.classList.toggle('activated');
}

openIcon.addEventListener('click', toggleMenu)
closeIcon.addEventListener('click', toggleMenu)
