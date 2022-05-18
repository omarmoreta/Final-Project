import Phaser from "phaser";

let resumeKey;

export default class PauseUI extends Phaser.Scene {
    constructor() {
        super('pause');
        Phaser.Scene.call(this,{key:'pause'})
    }
    preload() {
    }
    create() {
        resumeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        // PAUSE UI
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // FONT
        let add = this.add;
        WebFont.load({
            google: {
                families: ['Rubik Glitch', 'Finger Paint']
            },
            active: function () {
                const pauseText = add.text(screenCenterX / 2 +50, screenCenterY -40, "PAUSED", { fontFamily: 'Rubik Glitch', fontSize: 24, fill: '#ffffff' });
            }
        })
    
            
    }
    update() {
        if (resumeKey.isDown){
            this.scene.stop()
            this.scene.resume('thisGame')
        }
    }
}
