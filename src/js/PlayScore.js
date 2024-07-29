export class PlayScore {
  constructor() {}
  createPlayScore() {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game_card");
    document.body.append(gameCard);
    const gameStatus = document.createElement("div");
    gameStatus.classList.add("game_status");
    gameStatus.innerHTML =
      'Попадание: <span id="hit">0</span><br>Промахов: <span id="miss">0</span><br>';
    gameCard.appendChild(gameStatus);
  }
}
