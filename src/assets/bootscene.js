import Phaser from "phaser";
import logoImg from "../../public/logoxd.png";
import mainMusic from "../../public/maintitlemusic.mp3";
import gameMusic from "../../public/backgroundMusic.mp3";
import eLaugh from "../../public/evil.mp3";
import knightpng from "../../public/knight.png";
import knightatlas from "../../public/knight_atlas.json";
import mappng from "../../public/tf_jungle_tileset.png";
import mapjson from "../../public/Map.json";
import trollpng from "../../public/troll-enemy.png";
import trolljson from "../../public/troll-enemy_atlas.json";
import pausebutton from "../../public/pause-play.png";
import footstep from "../../public/footstep.mp3";
import trollGrowl from "../../public/troll-sounds.mp3";
import bullet from "../../public/bullet_3.png";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    // LOAD PROGRESS
    let width = this.cameras.main.worldView.x + this.cameras.main.width;
    let height = this.cameras.main.worldView.y + this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2 - 40,
      y: height / 2 - 60,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5);
    let percentText = this.make.text({
      x: width / 2 - 50,
      y: height / 2 - 30,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5);
    let assetText = this.make.text({
      x: width / 2 - 50,
      y: height / 2 + 10,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5);
    this.load.on("progress", function (value) {
      percentText.setText(parseInt(value * 100) + "%");
    });

    this.load.on("fileprogress", function (file) {
      assetText.setText("Loading asset: " + file.key);
    });
    this.load.on("complete", function () {
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
    // CAMERA ASSETS
    this.cameras.main.setBackgroundColor(0x00000);
    this.cameras.main.height = 256;
    this.cameras.main.width = 336;
    this.cameras.main.setPosition(32, 32);
    // MAIN MENU
    this.load.audio("elaugh", eLaugh);
    this.load.audio("mainMusic", mainMusic);
    this.load.image("logo", logoImg);
    this.load.script(
      "webfont",
      "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
    );
    // MAIN CHARACTER ASSETS
    this.load.atlas("knight", knightpng, knightatlas);
    // MAP ASSETS
    this.load.image("tiles", mappng);
    this.load.tilemapTiledJSON("map", mapjson);
    // ENEMY ASSETS
    this.load.atlas("troll-enemy", trollpng, trolljson);
    // GAME SFX / MUSIC
    this.load.audio("backgroundMusic", gameMusic);
    this.load.audio("footstepSFX", footstep);
    this.load.audio("trollGrowlSFX", trollGrowl);
    // PAUSE BUTTON
    this.load.image("pauseButton", pausebutton);
    // LASER
    this.load.image("bullet", bullet);
  }
  create() {
    this.input.setDefaultCursor(`crosshair`);
    this.cameras.main.fadeOut(1000, 0, 0, 0);
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
      (cam, effect) => {
        this.scene.start("Mainmenu");
      }
    );
  }
}
