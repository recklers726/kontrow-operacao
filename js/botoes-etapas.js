document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.botao, .botao2, .botao3, .botao4, .botao5, .botao6');

  botoes.forEach(botao => {
    const etapa = botao.closest('.etapa');

    botao.addEventListener('mouseenter', () => etapa.classList.add('hover-etapa'));
    botao.addEventListener('mouseleave', () => etapa.classList.remove('hover-etapa'));
  });
});