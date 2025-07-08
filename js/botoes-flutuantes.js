const btnTopo = document.getElementById("btn-topo");
const btnPrint = document.getElementById("btn-imprimir");

window.onscroll = function () {
  const scrollY = document.body.scrollTop || document.documentElement.scrollTop;
  btnPrint.style.display = scrollY > 200 ? "block" : "none";
  btnTopo.style.display = scrollY > 200 ? "block" : "none";
};

btnTopo.addEventListener("click", () => {
  btnTopo.classList.add("botao-animado");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    btnTopo.classList.remove("botao-animado");
  }, 300);
});