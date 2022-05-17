import Phaser from "phaser";
import { config } from "./config.js";
import MyGame from "./assets/game.js";
import BootScene from "./assets/bootscene.js";
import MainmenuScene from "./assets/mainmenu.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("thisGame", MyGame);
    this.scene.add("Boot", BootScene);
    this.scene.add("Mainmenu", MainmenuScene);
    this.scene.start("Boot");
  }
}
window.onload = function () {
  window.game = new Game();
};

