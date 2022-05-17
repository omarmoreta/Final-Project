import Phaser from "phaser";
import { config } from "./config.js";
import MyGame from "../public/game";
import BootScene from "../public/bootscene";
import MainmenuScene from "../public/mainmenu";

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
