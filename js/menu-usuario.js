document.addEventListener("DOMContentLoaded", () => {
  const iconeUsuario = document.getElementById("abrir-menu");
  const menu = document.getElementById("menu-opcoes");
  const botaoSair = document.getElementById("sair");

  if (!iconeUsuario || !menu) {
    console.warn("Menu do usuário não encontrado.");
    return;
  }

  iconeUsuario.addEventListener("click", (event) => {
    event.stopPropagation();
    menu.classList.toggle("ativo");
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== iconeUsuario) {
      menu.classList.remove("ativo");
    }
  });

  if (botaoSair) {
    botaoSair.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("logado");
      window.location.href = "index.html";
    });
  }
});