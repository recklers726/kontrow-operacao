document.getElementById("loginForm").addEventListener("submit", function(evento) {
  evento.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  const credenciais = {
    "luiz.carvalho@kontrow.com.br": "968539183",
    "david.bandeira@kontrow.com.br": "970717341",
    "gilberto.rodrigues@kontrow.com.br": "967745830"
  };

  if (credenciais[usuario] && credenciais[usuario] === senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "instrução.html";
  } else {
    mostrarErro("Usuário ou senha incorretos.");
  }
});



function mostrarErro(mensagem) {
  const erro = document.getElementById("mensagem-erro");
  erro.textContent = mensagem;
  erro.classList.add("mostrar");

  // Força reflow (reinicia animação)
  void erro.offsetWidth;

  // Remove após 4 segundos
  setTimeout(() => {
    erro.classList.remove("mostrar");
  }, 4000);
}

  // Sempre que alguém tentar mudar o zoom (via Ctrl + Scroll), desfaz
  document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Evita zoom com gestos (alguns navegadores suportam isso)
  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('gesturechange', e => e.preventDefault());
  document.addEventListener('gestureend', e => e.preventDefault());