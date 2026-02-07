let roses = Number(localStorage.getItem("roses") || 0);

const roseCountEl = document.querySelector(".rose-count");

updateRose();

function addRose() {
  roses++;
  localStorage.setItem("roses", roses);
  updateRose();
}

function updateRose() {
  roseCountEl.textContent = roses;
}
