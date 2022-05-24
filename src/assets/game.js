import Phaser from "phaser";
import Player from "./player.js";
import Troll from "./troll";
import Bullets from "./bullets";
import gameUI from "./gameui.js";

let pauseKey;
let trollGrowl;
let footstepsfx;
let walkDown;
let walkUp;
let walkLeft;
let walkRight;
let spaceBar;


export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }

  preload() {
    this.cameras;
    this.player;
    this.keys;
    this.troll;
    this.bullets;
  }

  hurtPlayer() {
    this.cameras.main.shake(100, 0.01);
    this.player.setTint(0xff0000);
    this.time.addEvent({
      delay: 500,
      callback: () => {
        this.player.clearTint();
        this.scene.stop("thisGame");
        this.scene.start("Losing")
      },
      callbackScope: this,
      loop: false,
    });
  }

  hurtEnemy() {
    this.trollBig.setTint(0xff0000);
    this.time.addEvent({
      delay: 500,
      callback: () => {
        this.trollBig.clearTint();
      },
      callbackScope: this,
      loop: false,
    });
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
    // COLLISIONS
    this.physics.add.collider(
      this.player,
      this.trollBig,
      this.hurtPlayer,
      null,
      this
    );
    this.physics.add.collider(
      this.player,
      this.trollLeft,
      this.hurtPlayer,
      null,
      this
    );
    this.physics.add.collider(
      this.player,
      this.trollRight,
      this.hurtPlayer,
      null,
      this
    );
    // TROLL PHYSICS
    this.trollBig.body.setCollideWorldBounds(true);
    this.trollLeft.body.setCollideWorldBounds(true);
    this.trollRight.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.trollBig, blockedLayer);
    this.physics.add.collider(this.trollRight, blockedLayer);
    this.physics.add.collider(this.trollLeft, blockedLayer);
    // PAUSE SCENE
    pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    // PLAYER MOVEMENT
    walkDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    walkUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    walkLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    walkRight = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
    // FOOTSTEP
    footstepsfx = this.sound.add("footstepSFX", {
      volume: 0.25,
      loop: true,
    });
    footstepsfx.play();
    // TROLL GROWLS
    trollGrowl = this.sound.add("trollGrowlSFX", {
      volume: 0.05,
      loop: true,
    });
    trollGrowl.play();
    // BULLETS
    this.bullets = new Bullets(this);
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // this.physics.add.collider(
    //   this.bullets,
    //   this.trollBig,
    //   this.hurtEnemy(),
    //   null,
    //   this
    // );
    // this.physics.add.collider(
    //   this.bullets,
    //   this.trollLeft,
    //   this.hurtEnemy(),
    //   null,
    //   this
    // );
    // this.physics.add.collider(
    //   this.bullets,
    //   this.trollRight,
    //   this.hurtEnemy(),
    //   null,
    //   this
    // );
  
    
  }

  update(time, delta) {
    if (pauseKey.isDown) {
      trollGrowl.pause();
      this.scene.pause();
      this.scene.launch("pause");
    } else {
      trollGrowl.resume();
    }
    // PLAYER WALK
    if (
      walkDown.isDown ||
      walkUp.isDown ||
      walkLeft.isDown ||
      walkRight.isDown
    ) {
      footstepsfx.resume();
    } else {
      footstepsfx.pause();
    }
    // ENEMY FOLLOW
    if (this.player.x != this.trollBig.x) {
      this.physics.moveToObject(this.trollBig, this.player, 60);
      this.physics.moveToObject(this.trollLeft, this.player, 75);
      this.physics.moveToObject(this.trollRight, this.player, 75);
    }
    // ENEMY FACE PLAYER
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
    if (spaceBar.isDown) {
      this.bullets.fireBullet(this.player.x, this.player.y - 10);
    }
    this.player.update();

  }
}
