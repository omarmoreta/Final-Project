import Phaser from "phaser";

let restartKey;
let win;
export default class WinScene extends Phaser.Scene {
    constructor() {
        super('Winning');
    }
    preload() {
    }
    create() {
        restartKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        // WIN UI
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // FONT
        let add = this.add;
        WebFont.load({
            google: {
                families: ['Finger Paint']
            },
            active: function () {
                const winText = add.text(screenCenterX / 2 + 40, screenCenterY - 40, "YOU WON!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ffd700' });
                const restartText = add.text(screenCenterX / 2 - 20, screenCenterY - 60, "Press X to restart!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ffd700' });
            }
        })
        win = this.sound.add("winsfx", {
            volume: 0.05,
            loop: false,
          });
          win.play();


    }
    update() {
        if (restartKey.isDown) {
            this.scene.play('Mainmenu');
            this.scene.stop('interface');
            this.scene.stop();
        }
    }
}
