export class Playfield {
  constructor(row) {
    this.row = row;
  }
  createField() {
    const playfield = document.createElement("div");
    playfield.classList.add("field");
    document.body.append(playfield);
    for (let i = 0; i < Math.pow(this.row, 2); i++) {
      let cellfield = document.createElement("div");
      cellfield.classList.add("cell_field");
      playfield.appendChild(cellfield);
    }
  }
}
