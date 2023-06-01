console.log("Hallo Welt");

const notzesContainer = document.querySelector(".notz-container");
const cerateBtn = document.querySelector(".btn");
const notes = document.querySelector("input-box");

function upadteStorge() {
  localStorage.setItem("notes", notzesContainer.innerHTML);
}

cerateBtn.addEventListener("click", () => {
  const inputBoxes = document.createElement("p");
  const img = document.createElement("img");
  inputBoxes.className = "input-box";
  inputBoxes.setAttribute("contenteditable", "true");
  img.src = "/imgages/aboodi-vesakaran-z4WbbUR3UI0-unsplash.jpg";
  notzesContainer.appendChild(inputBoxes).appendChild(img);
});

notzesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    upadteStorge();
  }
});
