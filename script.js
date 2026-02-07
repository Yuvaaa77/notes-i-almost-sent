// ---- NOTES DATA ----
// You will add a new object here every day
const notesData = [
  {
    id: 1,
    date: "Jan 20, 2026",
    text: "Today wasn’t special. But something about you crossed my mind quietly."
  }
];

// ---- RENDER NOTES ----
const notesContainer = document.getElementById("notes");

// Load saved notes from browser
const savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || [];

notesData.forEach(note => {
  const div = document.createElement("div");
  div.className = "note";

  const isSaved = savedNotes.includes(note.id);

  div.innerHTML = `
    <div class="note-date">${note.date}</div>
    <div>${note.text}</div>
    <button class="save-btn ${isSaved ? "saved" : ""}" 
      onclick="toggleSave(${note.id}, this)">
      ${isSaved ? "★ Saved" : "☆ Save"}
    </button>
  `;

  notesContainer.appendChild(div);
});

// ---- SAVE TO BROWSER ----
function toggleSave(id, btn) {
  let saved = JSON.parse(localStorage.getItem("savedNotes")) || [];

  if (saved.includes(id)) {
    saved = saved.filter(n => n !== id);
    btn.classList.remove("saved");
    btn.textContent = "☆ Save";
  } else {
    saved.push(id);
    btn.classList.add("saved");
    btn.textContent = "★ Saved";
  }

  localStorage.setItem("savedNotes", JSON.stringify(saved));
}

// ---- POPUP ----
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

window.onload = () => {
  document.getElementById("popup").classList.remove("hidden");
};
