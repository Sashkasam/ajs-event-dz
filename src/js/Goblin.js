export class Goblin {
  constructor() {}
  createGoblin() {
    document.addEventListener("DOMContentLoaded", () => {
      this.imageDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = "img/goblin.png";
      img.alt = "Goblin image";
      this.imageDiv.appendChild(img);
    });
  }
  moveGoblin() {
    setInterval(() => {
      const fields = document.querySelectorAll(".cell_field");
      const newPosition = Math.floor(Math.random() * fields.length);
      fields[newPosition].appendChild(this.imageDiv);
      fields[newPosition].classList.add("goblin_is_here");
      if (fields[newPosition].classList.contains("goblin_is_here")) {
        for (let i = 0; i < fields.length; i++) {
          fields[i].classList.remove("goblin_is_here");
        }
        fields[newPosition].classList.add("goblin_is_here");
      }
    }, 800);
  }
}
