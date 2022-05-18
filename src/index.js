import Phaser from "phaser";
import { config } from "./config.js";
import MyGame from "./assets/game";
import BootScene from "./assets/bootscene";
import MainmenuScene from "./assets/mainmenu";
import PauseUI from "./assets/pauseui";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("thisGame", MyGame);
    this.scene.add("Boot", BootScene);
    this.scene.add("Mainmenu", MainmenuScene);
    this.scene.add("pause", PauseUI);
    this.scene.start("Boot");
  }
}
window.onload = function () {
  window.game = new Game();
};
