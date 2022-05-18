import Phaser from "phaser";
import Entity from "./entity.js";

export default class Player extends Entity {
    constructor(scene, x, y, textureKey, health) {
        super(scene, x, y, textureKey, "Player");
        this.facingLeft = false;
        this.health = health;


        const anims = scene.anims;
        anims.create({
            key: "idleright",
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_idle_r",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: "idleleft",
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_idle_l",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: "runright",
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_run_r",
            }),
            frameRate: 7,
            repeat: -1,
        });
        anims.create({
            key: "runleft",
            frames: anims.generateFrameNames(this.textureKey, {
                start: 0,
                end: 3,
                prefix: "knight_run_l",
            }),
            frameRate: 7,
            repeat: -1,
        });
        const { LEFT, RIGHT, UP, DOWN, W, A, S, D } =
            Phaser.Input.Keyboard.KeyCodes;
        this.keys = scene.input.keyboard.addKeys({
            left: LEFT,
            right: RIGHT,
            up: UP,
            down: DOWN,
            w: W,
            a: A,
            s: S,
            d: D,
        });
    }

    preload() {
        this.player;
    }

    create() {
        this.player.setDepth(10);
    }

    update() {
        const { keys } = this;
        const speed = 100;
        this.body.setVelocity(0);

        // GO LEFT OR RIGHT INPUT
        if (keys.left.isDown || keys.a.isDown) {
            this.body.setVelocityX(-speed);
            // console.log('Hi')
        } else if (keys.right.isDown || keys.d.isDown) {
            this.body.setVelocityX(speed);
        }

        // GO UP OR DOWN INPUT
        if (keys.up.isDown || keys.w.isDown) {
            this.body.setVelocityY(-speed);
        } else if (keys.down.isDown || keys.s.isDown) {
            this.body.setVelocityY(speed);
        }

        // ADJUSTS SIDEWAY SPEED
        this.body.velocity.normalize().scale(speed);

        // ANIMATION ORIENTATION !
        // IF THE CHARACTER IS GOING LEFT OR RIGHT
        if (keys.left.isDown || keys.a.isDown) {
            this.facingLeft = true;
            this.anims.play("runleft", true);
        } else if (keys.right.isDown || keys.d.isDown) {
            this.facingLeft = false;
            this.anims.play("runright", true);
        }
        // IF THE CHARACTER IS GOING UP OR DOWN
        if (this.body.velocity.y !== 0) {
            if (this.facingLeft) {
                this.anims.play("runleft", true);
            } else {
                this.anims.play("runright", true);
            }
        }
        // IF THE CHARACTER IS NOT MOVING, GO BACK TO IDLE
        if (this.body.velocity.y === 0 && this.body.velocity.x === 0) {
            if (this.facingLeft) {
                this.anims.play("idleleft", true);
            } else {
                this.anims.play("idleright", true);
            }
        }
    }
}
