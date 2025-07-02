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
    window.location.href = "index.html"}

      if (credenciais[usuario] && credenciais[usuario] === senha) {
    window.location.href = "index.html"; 
  } else {
    mensagemErro.textContent = "Usuário ou senha incorretos.";
    mensagemErro.style.display = "block";
  }
});