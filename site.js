document.addEventListener("DOMContentLoaded", () => {
  // Hover nos botões
  const botoes = document.querySelectorAll('.botao, .botao2, .botao3, .botao4, .botao5, .botao6');
  botoes.forEach(botao => {
    const etapa = botao.closest('.etapa');
    botao.addEventListener('mouseenter', () => etapa.classList.add('hover-etapa'));
    botao.addEventListener('mouseleave', () => etapa.classList.remove('hover-etapa'));
  });

  // Zoom na imagem
  const img = document.querySelector(".zoom-img");
  if (img) {
    img.addEventListener("click", function () {
      this.classList.toggle("zoomed");
      if (!this.classList.contains("zoomed")) {
        this.style.transformOrigin = "center center";
        this.style.transform = "";
      }
    });

    img.addEventListener("mousemove", function (e) {
      if (!this.classList.contains("zoomed")) return;
      const { left, top, width, height } = this.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      this.style.transformOrigin = `${x}% ${y}%`;
    });
  }

  // Menu de usuário
  const iconeUsuario = document.getElementById("abrir-menu");
  const menu = document.getElementById("menu-opcoes");
  const botaoSair = document.getElementById("sair");

  if (iconeUsuario && menu) {
    iconeUsuario.addEventListener("click", () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".menu-usuario")) {
        menu.style.display = "none";
      }
    });
  }

  if (botaoSair) {
    botaoSair.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("logado");
      window.location.href = "isntrução.html";
    });
  }

  // Botões de topo e imprimir
  const btnTopo = document.getElementById("btn-topo");
  const btnPrint = document.getElementById("btn-imprimir");

  window.onscroll = function () {
    const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
    if (btnPrint && btnTopo) {
      btnPrint.style.display = scrollY > 200 ? "block" : "none";
      btnTopo.style.display = scrollY > 200 ? "block" : "none";
    }
  };

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      btnTopo.classList.add("botao-animado");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => btnTopo.classList.remove("botao-animado"), 300);
    });
  }
});