document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("usuario");
  const senhaInput = document.getElementById("senha");
  const erro = document.getElementById("mensagem-erro");

  const credenciais = {
    "luiz.carvalho@kontrow.com.br": "968539183",
    "david.bandeira@kontrow.com.br": "970717341",
    "gilberto.rodrigues@kontrow.com.br": "967745830"
  };

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuario = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (credenciais[usuario] && credenciais[usuario] === senha) {
      localStorage.setItem("logado", "true");
      window.location.href = "instrucao.html"; // evite usar ç em URLs
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