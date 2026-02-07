/* -------------------------
   NOTES DATA
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
  }
];

/* -------------------------
   GROUP BY DATE
   ------------------------- */
const grouped = {};
notesData.forEach(note => {
  if (!grouped[note.date]) grouped[note.date] = [];
  grouped[note.date].push(note);
});

/* -------------------------
   RENDER NOTES
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
          ${n.audio ? `<audio controls src="${n.audio}"></audio>` :
