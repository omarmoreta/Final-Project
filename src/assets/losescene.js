import Phaser from "phaser";

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
                const loseText = add.text(screenCenterX / 2 + 50, screenCenterY - 40, "YOU LOST!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ff0000' });
                const restartText = add.text(screenCenterX / 2 + 50, screenCenterY - 60, "Press X to restart!", { fontFamily: 'Finger Paint', fontSize: 24, fill: '#ff0000' });
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
