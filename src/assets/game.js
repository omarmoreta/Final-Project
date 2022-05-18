import Phaser from "phaser";

export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }

  preload() {
    this.cameras;
  }

  create() {
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0)

    // CAMERA
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setRoundPixels(true);
  }

  update(time, delta) {
    this.player.update();
  }
}
