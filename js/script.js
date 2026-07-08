const menu = document.querySelector(".menu");
const botao = document.querySelector(".menu-mobile");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});


