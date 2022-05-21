import Phaser from "phaser";

export const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 225,
  parent: "phaser-game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
  title: "The Game of Nothing",
  version: "Beta 1.0",
  audio: {
    disableWebAudio: false,
  },
  
};
