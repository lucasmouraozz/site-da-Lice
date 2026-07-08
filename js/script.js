const logo = document.getElementById('logo');
const home = document.getElementById('home');

window.addEventListener('scroll'), () => {
  const limite = home.offsetHeight - 100;

  if (window.scrollY > limite) {
    logo.classList.add('oculta');
  } else {
    logo.classList.remove('oculta');
  }
}