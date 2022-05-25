import Phaser from "phaser";
import Player from "./player.js";
import Troll from "./troll";
import Bullets from "./bullets";

let pauseKey;
let trollGrowl;
let footstepsfx;
let walkDown;
let walkUp;
let walkLeft;
let walkRight;
let spaceBar;
let music;
let winKey;


export default class MyGame extends Phaser.Scene {
  constructor() {
    super("thisGame");
  }

  preload() {
    this.cameras;
    this.player;
    this.keys;
    this.trolls;
    this.bullets;
  }

  hurtPlayer() {
    this.cameras.main.shake(100, 0.01);
    this.player.setTint(0xff0000);
    this.time.addEvent({
      delay: 500,
      callback: () => {
        this.player.clearTint();
        footstepsfx.stop();
        trollGrowl.stop();
        music.stop();
        this.scene.stop("thisGame");
        this.scene.start("Losing")
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
    this.player = new Player(this, 200, 343, "knight").setScale(1);
    this.player.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
    // TROLLS
    this.trolls = this.add.group()
    for (let i = 0; i < 5; i++) {
      const t = new Troll(this, 60 + 100 * i, 50, 'troll-enemy')
      t.body.setCollideWorldBounds(true)
      this.trolls.add(t)
    }
    this.physics.add.collider(this.trolls, blockedLayer)
    // PHYSICS & COLLISION
    blockedLayer.setCollisionByProperty({ collide: true });
    // PLAYER PHYSICS
    this.physics.add.collider(this.player, blockedLayer);
    // COLLISIONS
    this.physics.add.collider(
      this.player,
      this.trolls,
      this.hurtPlayer,
      null,
      this
    );
    // PAUSE SCENE
    pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    // PLAYER MOVEMENT
    walkDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    walkUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    walkLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    walkRight = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
    // FOOTSTEP SFX
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
    // MUSIC
    music = this.sound.add("backgroundMusic", {
      volume: 0.05,
      loop: true,
    });
    music.play();
    // BULLETS
    this.bullets = new Bullets(this);
    spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    winKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

  }

  update(time, delta) {
    if (pauseKey.isDown) {
      trollGrowl.pause();
      footstepsfx.pause();
      music.pause();
      this.scene.pause();
      this.scene.launch("pause");
    } else {
      music.resume();
      trollGrowl.resume();
      footstepsfx.resume();
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
    if (spaceBar.isDown) {
      this.bullets.fireBullet(this.player.x, this.player.y - 10);
    }
    this.player.update();
    this.trolls.children.iterate((child) => {
      if(this.player.x != this.trolls.children){
        this.physics.moveToObject(child, this.player, 70)
      }
      // doesn't work idk why 
      if(this.player.x < this.trolls.children){
        child.flipX = true;
      }  else{
        child.flipX = false;
      }
    })

    if(winKey.isDown){
      footstepsfx.stop();
      trollGrowl.stop();
      music.stop();
      this.scene.start('Winning');
      this.scene.stop("thisGame");
    }

  }
}
