import { Playfield } from "./Playfield.js";
import { PlayScore } from "./PlayScore.js";
import { Goblin } from "./Goblin.js";
import { Game } from "./Game.js";

const playscore = new PlayScore();
playscore.createPlayScore();

const playfield = new Playfield(4);
playfield.createField();

const goblin = new Goblin();
goblin.createGoblin();
goblin.moveGoblin();

const game = new Game();
game.playGame();
