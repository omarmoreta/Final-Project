import Phaser from "phaser";
import TweenHelper from "./flashtext";
let music;
let laugh;

export default class MainmenuScene extends Phaser.Scene {
    constructor() {
        super('Mainmenu');
    }
    preload() {
    }
    create() {
        // MUSIC
        music = this.sound.add("mainMusic", {
            volume: 0.06,
            loop: true,
        });
        music.play();
        // EVIL LAUGH SFX
        laugh = this.sound.add("elaugh", {
            volume: 0.6,
            loop: false,
        });
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
        // SCREEN POSITIONING
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // LOGO
        this.add.image(screenCenterX, screenCenterY - 30, 'logo').setScale(0.3)
        // GAME TITLE
        let add = this.add;
        WebFont.load({
            google: {
                families: ['Rubik Glitch', 'Finger Paint']
            },
            active: function () {
                const maintitle = add.text(screenCenterX / 2 - 30, screenCenterY + 50, game.config.gameTitle, { fontFamily: 'Rubik Glitch', fontSize: 24, fill: '#DD636E' });
                const gameversion = add.text(5, 5, '', { fontFamily: 'Finger Paint', fontSize: 12, fill: '#ffffff' });
                gameversion.setText([
                    game.config.gameVersion
                ]);
            }
        })
        // START INSTRUCTIONS
        const instruction = add.text(screenCenterX / 2 + 40, screenCenterY + 80, 'Insert coin to start', { fontFamily: 'Finger Paint', fontSize: 16, fill: '#ffd700' });
        // INSTRUCTION FLASH
        TweenHelper.flashElement(this, instruction)
        // FADE IN
        this.cameras.main.fadeIn(1000, 0, 0, 0)
        // FADE OUT
        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(1000, 0, 0, 0)
            music.pause();
            laugh.play();
        })
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(1000, () => {
                this.scene.start('thisGame');
                this.scene.start('interface');
                this.scene.start('Pause');
            })
        })
    }
    update() { }
}
