import Phaser from "phaser";
let music;

export default class gameUI extends Phaser.Scene {
  constructor() {
    super("interface");
  }
  preload() { }
  create() {
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    //  ----------------- SFX ------------------- //

    // INTERFACE
    this.data.set("lives", 1);
    this.data.set("level", 1);
    this.data.set("score", 0);
    let text = this.add.text(5, 165, "", {
      font: "12px Verdana",
      fill: "#FFFFFF",
    });
    text.alpha = 0.8;
    text.setText([
      "Round: " + this.data.get("level"),
      "Lives: " + this.data.get("lives"),
      "Score: " + this.data.get("score"),
    ]);
    let control = this.add.text(310, 210, "", {
      font: "8px Verdana",
      fill: "#FFFFFF",
    });
    text.alpha = 1.0;
  }
  update() {
  }
}
