const botoes = document.querySelectorAll('.botao');
botoes.forEach(botao => {
    const menu = botao.closest('.passo1')
});

botao.addventListener('mouseenter', () => {
    menu.ClassList.add('zoom-ativo');
});

bota.addventListener('mouseleave', () => {
    menu.ClassList.remove('zoom-ativo');
});

  const btnTopo = document.getElementById("btn-topo");

  // Mostrar o botão quando o usuário rolar a página
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  };

  

  // Ao clicar no botão, rolar suavemente para o topo
  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });