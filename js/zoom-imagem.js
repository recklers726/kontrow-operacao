document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".zoom-img");

  if (!img) return;

  img.addEventListener("click", function () {
    this.classList.toggle("zoomed");

    if (!this.classList.contains("zoomed")) {
      this.style.transformOrigin = "center center";
      this.style.transform = "";
    }
  });

  img.addEventListener("mousemove", function (e) {
    if (!this.classList.contains("zoomed")) return;

    const { left, top, width, height } = this.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    this.style.transformOrigin = `${x}% ${y}%`;
  });
});