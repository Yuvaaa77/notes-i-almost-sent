/* -------------------------
   NOTES DATA (EDIT HERE)
   ------------------------- */
const notesData = [
  {
    date: "Jan 20, 2026",
    text: "Today wasn’t special. But something about you crossed my mind quietly.",
    image: "",
    audio: ""
  },
  {
    date: "Jan 20, 2026",
    text: "I almost typed your name today. Almost.",
    image: "",
    audio: ""
  },
  {
    date: "Jan 18, 2026",
    text: "Some days are louder inside than outside.",
    image: "",
    audio: ""
  }
];

/* -------------------------
   GROUP NOTES BY DATE
   ------------------------- */
const grouped = {};
notesData.forEach(note => {
  if (!grouped[note.date]) grouped[note.date] = [];
  grouped[note.date].push(note);
});

/* -------------------------
   RENDER TIMELINE
   ------------------------- */
const timeline = document.getElementById("timeline");

Object.keys(grouped).forEach(date => {
  const group = document.createElement("div");
  group.className = "date-group";

  group.innerHTML = `
    <div class="date-title">${date}</div>
    <div class="notes-row">
      ${grouped[date].map(n => `
        <div class="note">
          <div class="note-text">${n.text}</div>
          ${n.image ? `<img src="${n.image}">` : ""}
          ${n.audio ? `<audio controls src="${n.audio}"></audio>` : ""}
        </div>
      `).join("")}
    </div>
  `;

  timeline.appendChild(group);
});

/* -------------------------
   DIGITAL ROSES (MANUAL)
   ------------------------- */
let roses = localStorage.getItem("roses");
if (!roses) roses = 0;

const roseCount = document.getElementById("roseCount");
roseCount.textContent = roses;

function addRose() {
  roses++;
  localStorage.setItem("roses", roses);
  roseCount.textContent = roses;
}
