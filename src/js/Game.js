export class Game {
  constructor() {}
  playGame() {
    document.addEventListener("DOMContentLoaded", () => {
      const hitCount = document.getElementById("hit");
      const missCount = document.getElementById("miss");
      const allCellFields = document.getElementsByClassName("cell_field");

      for (let cellField of allCellFields) {
        cellField.onclick = () => {
          if (cellField.classList.contains("goblin_is_here")) {
            hitCount.textContent = Number(hitCount.textContent) + 1;
          } else {
            missCount.textContent = Number(missCount.textContent) + 1;
          }

          if (hitCount.textContent == 5) {
            alert("Победа!");
            hitCount.textContent = 0;
            missCount.textContent = 0;
          } else if (missCount.textContent == 5) {
            alert("Вы проиграли!");
            hitCount.textContent = 0;
            missCount.textContent = 0;
          }
        };
      }
    });
  }
}
