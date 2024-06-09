const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const menuOptions = document.querySelectorAll(".nav .option");
const body = document.querySelector("body");

// Função para fechar o menu
function fecharMenu() {
    nav.classList.remove("active");
    body.classList.remove("no-scroll");
}

// Adiciona um event listener para o clique no hamburger
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

// Adiciona event listeners para cada opção do menu
menuOptions.forEach(option => {
    option.addEventListener("click", fecharMenu);
});
