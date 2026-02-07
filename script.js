let roses = 1;

const roseBtn = document.getElementById("roseToggle");
const roseCount = document.getElementById("roseCount");

roseBtn.addEventListener("click", () => {
  roses++;
  roseCount.textContent = roses;

  roseBtn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.3)" },
      { transform: "scale(1)" }
    ],
    { duration: 300, easing: "ease-out" }
  );
});
