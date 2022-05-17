import Phaser from "phaser";
import Troll from "./troll.js";

export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }

  preload() {
    this.troll;
  }

  create() {
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    const overheadLayer = map.createLayer("Overhead", tileset, 0, 0);
    overheadLayer.setDepth(20);

    // TROLLS
    this.trollRight = new Troll(this, 360, 50, "troll-enemy").setScale(1);
    this.trollRight.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollLeft = new Troll(this, 90, 50, "troll-enemy").setScale(1);
    this.trollLeft.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollBig = new Troll(this, 240, 50, "troll-enemy").setScale(1.5);
    this.trollBig.body.setCollideWorldBounds(true).setImmovable(true);
  }
  update() {}
}
