/* =====================================================
   DIGITAL ROSE COUNTER (SINGLE TOGGLE)
===================================================== */

const roseToggle = document.querySelector(".rose-toggle");
const roseCountEl = document.querySelector(".rose-count");

let roseCount = parseInt(localStorage.getItem("roseCount")) || 0;
roseCountEl.textContent = roseCount;

roseToggle.addEventListener("click", () => {
  roseCount++;
  roseCountEl.textContent = roseCount;
  localStorage.setItem("roseCount", roseCount);

  // subtle pulse (no jump)
  roseToggle.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.15)" },
      { transform: "scale(1)" }
    ],
    { duration: 300, easing: "ease-out" }
  );
});

/* =====================================================
   +X MORE NOTES LOGIC (PER DATE GROUP)
===================================================== */

document.querySelectorAll(".date-group").forEach(group => {
  const sideStack = group.querySelector(".side-stack");
  const moreNotesBtn = group.querySelector(".more-notes");

  if (!sideStack || !moreNotesBtn) return;

  const extraNotes = sideStack.querySelectorAll(".note-card");
  const extraCount = extraNotes.length;

  // If no extra notes → remove button completely
  if (extraCount === 0) {
    moreNotesBtn.style.display = "none";
    return;
  }

  // Set dynamic +x count
  moreNotesBtn.querySelector(".more-count").textContent = extraCount;

  // Side stack hidden initially
  sideStack.style.display = "none";

  let isOpen = false;

  moreNotesBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    sideStack.style.display = isOpen ? "flex" : "none";

    // Change text slightly (optional but clean)
    moreNotesBtn.innerHTML = isOpen
      ? "Hide notes"
      : `+<span class="more-count">${extraCount}</span> more notes written this day`;
  });
});

/* =====================================================
   SAFETY: NO HOVER BUGS ON TOUCH
===================================================== */

let lastTouch = 0;

document.addEventListener("touchstart", () => {
  lastTouch = Date.now();
});

document.addEventListener("mousemove", () => {
  if (Date.now() - lastTouch < 500) return;
});
