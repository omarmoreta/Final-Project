import Phaser from "phaser";
let music;
let footstepsfx;
let walkDown;
let walkUp;
let walkLeft;
let walkRight;
export default class gameUI extends Phaser.Scene {
  constructor() {
    super("interface");
  }
  preload() {}
  create() {
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    // MUSIC
    music = this.sound.add("backgroundMusic", {
      volume: 0.01,
      loop: true,
    });
    music.play();
    // MUSIC BUTTON
    this.add
      .image(380, 15, "pauseButton")
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        if (!this.paused) {
          this.paused = true;
          music.pause();
        } else {
          this.paused = false;
          music.resume();
        }
      });
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
      "Temporary place holders:",
      "Round: " + this.data.get("level"),
      "Lives: " + this.data.get("lives"),
      "Score: " + this.data.get("score"),
    ]);
    let control = this.add.text(310, 210, "", {
      font: "8px Verdana",
      fill: "#FFFFFF",
    });
    text.alpha = 1.0;
    // FOOTSTEP
    footstepsfx = this.sound.add("footstepSFX", {
      volume: 0.25,
      loop: true,
    });
    footstepsfx.play();
    walkDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    walkUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    walkLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    walkRight = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
  }
  update() {
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
  }
}
