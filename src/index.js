import Phaser from "phaser";
import { config } from "./config.js";
import MyGame from "./assets/game";
import BootScene from "./assets/bootscene";
import MainmenuScene from "./assets/mainmenu";
import PauseUI from "./assets/pauseui";
import GameUI from "./assets/gameui";
import WinScene from "./assets/winscene.js";
import LoseScene from "./assets/losescene.js";
import LoginScene from "./assets/loginscene.js";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("thisGame", MyGame);
    this.scene.add("Boot", BootScene);
    this.scene.add("Login", LoginScene);
    this.scene.add("Mainmenu", MainmenuScene);
    this.scene.add("pause", PauseUI);
    this.scene.add("interface", GameUI);
    this.scene.add("Losing", LoseScene);
    this.scene.add("Winning", WinScene);
    this.scene.start("Boot");
  }
}
window.onload = function () {
  window.game = new Game();
};
