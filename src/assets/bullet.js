import Phaser from "phaser";

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "bullet");
  }

  fire(x, y) {
    this.body.reset(x, y);

    this.setActive(true);
    this.setVisible(true);

    this.setVelocityY(-300);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    // if (this.y <= -32) {
    //   this.setActive(false);
    //   this.setVisible(false);
    // }
    this.y -= this.speed * delta;
    if (this.y < -50) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}
