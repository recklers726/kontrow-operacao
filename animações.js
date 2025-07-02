  document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.botao, .botao2, .botao3, .botao4, .botao5, .botao6');

    botoes.forEach(botao => {
      const etapa = botao.closest('.etapa');

      botao.addEventListener('mouseenter', () => {
        etapa.classList.add('hover-etapa');
      });

      botao.addEventListener('mouseleave', () => {
        etapa.classList.remove('hover-etapa');
      });
    });
  });

    const btnTopo = document.getElementById("btn-topo");
  const btnPrint = document.getElementById("btn-imprimir");

  // Mostrar o botão quando o usuário rolar a página
  window.onscroll = function () {
    const scrollY = document.body.scrollTop || document.documentElement.scrollTop;

        btnPrint.style.display = scrollY > 200 ? "block" : "none";
         btnTopo.style.display = scrollY > 200 ? "block" : "none";
  };

  // Ao clicar no botão, rolar suavemente para o topo e aplicar a animação
  btnTopo.addEventListener("click", () => {
    // Adiciona classe de animação
    btnTopo.classList.add("botao-animado");

    // Rolagem suave para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Remove a classe após a duração da animação
    setTimeout(() => {
      btnTopo.classList.remove("botao-animado");
    }, 300); // deve coincidir com o tempo da animação CSS
  });

    document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.animar-entrada');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aparecer');
          observer.unobserve(entry.target); // para de observar após a animação
        }
      });
    }, {
      threshold: 0.5 // só ativa quando 50% do elemento estiver visível
    });

    elementos.forEach(el => observer.observe(el));
  });

  