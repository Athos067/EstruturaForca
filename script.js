const menuCategorias = document.querySelector('.menu-categorias');
const navMenuCategorias = document.querySelector('.nav-menu-categorias');

const atualizarMenu = function () {
  menuCategorias.classList.toggle('ativo');
  navMenuCategorias.classList.toggle('visivel');
}

menuCategorias.onclick = atualizarMenu;