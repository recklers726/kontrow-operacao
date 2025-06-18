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