import Phaser from "phaser";

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
                const winText = add.text(screenCenterX / 2 + 50, screenCenterY - 40, "YOU WON!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ffd700' });
                const restartText = add.text(screenCenterX / 2 + 50, screenCenterY - 60, "Press X to restart!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ffd700' });
            }
        })


    }
    update() {
        if (restartKey.isDown){
            this.scene.stop();
            this.scene.play('Mainmenu')
        }
    }
}
