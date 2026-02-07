/* ===============================
   DIGITAL ROSES SYSTEM
================================ */

const roseBtn = document.querySelector(".rose-btn");
let roseCount = parseInt(localStorage.getItem("roseCount")) || 0;

// Update rose UI (number inside button if you add span later)
function updateRose() {
  localStorage.setItem("roseCount", roseCount);
}

// On rose tap
if (roseBtn) {
  roseBtn.addEventListener("click", () => {
    roseCount++;
    updateRose();

    // Pulse animation
    roseBtn.classList.remove("pulse");
    void roseBtn.offsetWidth; // restart animation
    roseBtn.classList.add("pulse");
  });
}

/* ===============================
   SCROLL REVEAL (NOTES)
================================ */

const revealElements = document.querySelectorAll(".note, .date-group, .description");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
  }
);

revealElements.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ===============================
   SMOOTH HOVER POLISH (OPTIONAL)
================================ */

// Prevent hover jitter on mobile
let lastTouch = 0;
document.addEventListener("touchstart", () => {
  lastTouch = Date.now();
});

document.addEventListener("mousemove", () => {
  if (Date.now() - lastTouch < 500) return;
});
