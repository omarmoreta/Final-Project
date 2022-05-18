import Phaser from "phaser";
import Player from "./player.js";

export default class MyGame extends Phaser.Scene {
    constructor() {
        super("thisGame");
    }

    preload() {
        this.cameras;
        this.player;
        this.keys;
    }

    create() {
        // FADE IN
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        // CAMERA
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.setRoundPixels(true);
        // PLAYER
        this.player = new Player(this, 225, 343, "knight").setScale(1);
        this.player.body.setCollideWorldBounds(true);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
        // PHYSICS
        blockedLayer.setCollisionByProperty({ collide: true });
        this.physics.add.collider(this.player, blockedLayer);
    }

    update(time, delta) {
        this.player.update();
    }
}
