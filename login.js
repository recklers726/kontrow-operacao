document.getElementById("loginForm").addEventListener("submit", function(evento) {
  evento.preventDefault();

const usuario = document.getElementById("usuario").value.trim();
const senha = document.getElementById("senha").value.trim();

const credenciais = {
    "luiz.carvalho@kontrow.com.br": "1234",
    "david.bandeira@kontrow.com.br": "1234",
    "gilberto.rodrigues@kontrow.com.br": "1234"}

    const mensagemErro = document.getElementById("mensagem-erro")

    if (credenciais[usuario] && credenciais[usuario] === senha) {
        localStorage.setItem("logado", "true")
    window.location.href = "site.html"}

      if (credenciais[usuario] && credenciais[usuario] === senha) {
    window.location.href = "site.html"; 
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos.";
    mensagemErro.style.display = "block";
  }
});

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
