const roseCountEl = document.getElementById("roseCount");

if (roseCountEl) {
  roseCountEl.textContent = document.querySelectorAll(".note").length;
}
