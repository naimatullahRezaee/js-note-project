const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
  attachEvents();
}

// Function to update notes in localStorage
function updateNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for creating a new note
createBtn.addEventListener("click", () => {
  const note = document.createElement("p");
  note.className = "input-box";
  note.setAttribute("contenteditable", "true");

  const deleteBtn = document.createElement("img");
  deleteBtn.src = "images/delete.png";
  deleteBtn.style.cursor = "pointer";

  note.appendChild(deleteBtn);
  notesContainer.appendChild(note);

  updateNotes();
  attachEvents();
});

// Function to attach events to notes
function attachEvents() {
  notesContainer.querySelectorAll(".input-box").forEach((note) => {
    note.querySelector("img").onclick = () => {
      note.remove();
      updateNotes();
    };
    note.oninput = updateNotes;
  });
}

// Prevent default behavior of Enter key to insert line break
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

// Load notes when the page loads
showNotes();
