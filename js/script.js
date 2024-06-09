function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.nav');
    fecharMenu();
});

link2.addEventListener('click', () => {
    scrollToElement('.header');
    fecharMenu();
});

link3.addEventListener('click', () => {
    scrollToElement('.header', 1);
    fecharMenu();
});

link4.addEventListener('click', () => {
    scrollToElement('.coluna');
    fecharMenu();
});