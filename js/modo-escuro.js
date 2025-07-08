function alternarModo() {
  document.body.classList.toggle("dark-mode");
  const modoAtual = document.body.classList.contains("dark-mode") ? "escuro" : "claro";
  localStorage.setItem("modo-tema", modoAtual);
}

document.addEventListener("DOMContentLoaded", () => {
  const modoSalvo = localStorage.getItem("modo-tema");
  const checkbox = document.getElementById("darkModeToggle");

  if (modoSalvo === "escuro") {
    document.body.classList.add("dark-mode");
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", alternarModo);
});