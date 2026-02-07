/* =====================================================
   DIGITAL ROSES SYSTEM
===================================================== */

const roseToggle = document.querySelector(".rose-toggle");
const roseCountEl = document.querySelector(".rose-count");

let roseCount = parseInt(localStorage.getItem("digitalRoses")) || 0;

// initial render
if (roseCountEl) {
  roseCountEl.textContent = roseCount;
}

function saveRoses() {
  localStorage.setItem("digitalRoses", roseCount);
}

// rose click
if (roseToggle) {
  roseToggle.addEventListener("click", () => {
    roseCount++;
    saveRoses();

    // update UI
    if (roseCountEl) {
      roseCountEl.textContent = roseCount;
    }

    // pulse animation
    roseToggle.classList.remove("pulse");
    void roseToggle.offsetWidth;
    roseToggle.classList.add("pulse");

    // micro float effect
    roseToggle.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-6px)" },
        { transform: "translateY(0)" }
      ],
      {
        duration: 500,
        easing: "ease-out"
      }
    );
  });
}

/* =====================================================
   SCROLL REVEAL — NOTES / SECTIONS
===================================================== */

const revealTargets = document.querySelectorAll(
  ".note-card, .description, .date-group"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
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

revealTargets.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* =====================================================
   +7 MORE NOTES — SIDE STACK TOGGLE
===================================================== */

const moreButtons = document.querySelectorAll(".more-notes-trigger");

moreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const group = btn.closest(".date-group");
    const sideStack = group.querySelector(".side-stack");

    if (!sideStack) return;

    const isOpen = sideStack.classList.contains("open");

    if (isOpen) {
      sideStack.classList.remove("open");
      btn.textContent = btn.textContent.replace("Hide", "+");
    } else {
      sideStack.classList.add("open");
      btn.textContent = "Hide extra notes";
    }
  });
});

/* =====================================================
   MOBILE HOVER SAFETY
===================================================== */

let lastTouchTime = 0;

document.addEventListener("touchstart", () => {
  lastTouchTime = Date.now();
});

document.addEventListener("mousemove", () => {
  if (Date.now() - lastTouchTime < 600) return;
});

/* =====================================================
   FUTURE EXTENSION HOOKS (DO NOT DELETE)
===================================================== */

// music sync hook
window.syncNoteMedia = function(noteEl, mediaEl) {
  // placeholder for future audio/image pairing
};

// rose meaning hook
window.onRoseAdded = function(count) {
  // future emotional logic
};
