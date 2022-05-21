import Phaser from "phaser";
import Player from "./player.js";
import Troll from "./troll";
let pauseKey;

export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }

  preload() {
    this.cameras;
    this.player;
    this.keys;
    this.troll;
  }

  create() {
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    // MAP
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tf_jungle_tileset", "tiles");
    const backgroundLayer = map.createLayer("Background", tileset, 0, 0);
    const blockedLayer = map.createLayer("Blocked", tileset, 0, 0);
    const overheadLayer = map.createLayer("Overhead", tileset, 0, 0);
    overheadLayer.setDepth(20);
    // CAMERA
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setRoundPixels(true);
    // PLAYER
    this.player = new Player(this, 225, 343, "knight").setScale(1);
    this.player.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    // TROLLS
    this.trollRight = new Troll(this, 360, 50, "troll-enemy").setScale(1);
    this.trollLeft = new Troll(this, 90, 50, "troll-enemy").setScale(1);
    this.trollBig = new Troll(this, 240, 50, "troll-enemy").setScale(1.5);

    // PHYSICS & COLLISION
    blockedLayer.setCollisionByProperty({ collide: true });
    // PLAYER PHYSICS
    this.physics.add.collider(this.player, blockedLayer);
    this.physics.add.collider(this.player, this.trollRight);
    this.physics.add.collider(this.player, this.trollLeft);
    this.physics.add.collider(this.player, this.trollBig);
    // TROLL PHYSICS
    this.trollBig.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollLeft.body.setCollideWorldBounds(true).setImmovable(true);
    this.trollRight.body.setCollideWorldBounds(true).setImmovable(true);
    this.physics.add.collider(this.trollBig, blockedLayer);
    this.physics.add.collider(this.trollRight, blockedLayer);
    this.physics.add.collider(this.trollLeft, blockedLayer);
    // PAUSE SCENE
    pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    console.log(this);
  }

  update(time, delta) {
    if (pauseKey.isDown) {
      this.scene.pause();
      this.scene.launch("pause");
    }
    if (this.player.x != this.trollBig.x) {
      this.physics.moveToObject(this.trollBig, this.player, 20);
      this.physics.moveToObject(this.trollLeft, this.player, 40);
      this.physics.moveToObject(this.trollRight, this.player, 30);
    }
    if (this.player.x < this.trollBig.x) {
      this.trollBig.flipX = true;
    } else {
      this.trollBig.flipX = false;
    }
    if (this.player.x < this.trollLeft.x) {
      this.trollLeft.flipX = true;
    } else {
      this.trollLeft.flipX = false;
    }
    if (this.player.x < this.trollRight.x) {
      this.trollRight.flipX = true;
    } else {
      this.trollRight.flipX = false;
    }
    this.player.update();
  }
}
