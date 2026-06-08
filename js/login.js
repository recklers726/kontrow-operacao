document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("usuario");
  const senhaInput = document.getElementById("senha");
  const erro = document.getElementById("mensagem-erro");

const credenciais = [
  { email: "luiz.carvalho@kontrow.com.br",
    senha: "968539183" },
  { email: "david.bandeira@kontrow.com.br",
    senha: "970717341" },
  { email: "milton.shiro@kontrow.com.br",
     senha: "1234",},
  { email: "assaf@kontrow.com.br",
     senha: "999082266",}
];

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuario = emailInput.value.trim();
    const senha = senhaInput.value.trim();

const usuarioValido = credenciais.find(cred => cred.email === usuario && cred.senha === senha);

if (usuarioValido) {
  localStorage.setItem("logado", "true");
  window.location.href = "instrucao.html";
} else {
  mostrarErro("Usuário ou senha incorretos.");
}
  });

  function mostrarErro(mensagem) {
    erro.textContent = mensagem;
    erro.classList.add("mostrar");

    // Reinicia a animação
    void erro.offsetWidth;

    // Remove erro depois de 4 segundos
    setTimeout(() => {
      erro.classList.remove("mostrar");
    }, 4000);
  }

  // Bloquear zoom via Ctrl+Scroll
  document.addEventListener('wheel', function(e) {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });

  // Bloquear gestos de zoom
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
    document.addEventListener(evt, e => e.preventDefault());
  });
});