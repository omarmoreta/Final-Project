import Phaser from "phaser";

let restartKey;
let lose;
export default class LoseScene extends Phaser.Scene {
    constructor() {
        super('Losing');
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
                const loseText = add.text(screenCenterX / 2 + 40, screenCenterY - 40, "YOU LOST!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ff0000' });
                const restartText = add.text(screenCenterX / 2 - 20, screenCenterY - 60, "Press X to restart!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ff0000' });
            }
        })
        lose = this.sound.add("losesfx", {
            volume: 0.05,
            loop: false,
          });
        lose.play();

    }
    update() {
        if (restartKey.isDown) {
            this.scene.start('Mainmenu');
            this.scene.stop('interface');
            this.scene.stop('Losing');

        }
    }
}
