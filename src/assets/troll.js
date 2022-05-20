import Phaser from "phaser";
import Entity from "./entity";

export default class Troll extends Entity {
  constructor(scene, x, y, textureKey, damage, type, speed) {
    super(scene, x, y, textureKey, "Troll", type);

    const anims = scene.anims;
    this.textureKey = textureKey;
    this.damage = damage;
    this.type = type;
    this.speed = speed;
    anims.create({
      key: "trollwalk",
      frames: anims.generateFrameNames("troll-enemy", {
        start: 1,
        end: 4,
        prefix: "troll_walk_",
      }),
      frameRate: 8,
      repeat: -1,
    });
    anims.create({
      key: "trollidle",
      frames: anims.generateFrameNames("troll-enemy", {
        start: 1,
        end: 4,
        prefix: "troll_idle_",
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.play("trollidle");
  }
  update() {}
}
