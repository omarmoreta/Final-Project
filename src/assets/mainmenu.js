import Phaser from 'phaser'
import TweenHelper from './flashtext';

export default class MainmenuScene extends Phaser.Scene {
    constructor(){
    super('Mainmenu');
    }
    preload(){
    }
    create(){
    // SCREEN POSITIONING
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // VERSION
    const gameversion = this.add.text(5, 5, '', { font: '12px Courier', fill: '#ffffff' });
    gameversion.setText([
        game.config.gameVersion
    ]);
    // LOGO
    this.add.image(screenCenterX, screenCenterY -30, 'logo').setScale(0.3)
    // GAME TITLE
    const maintitle = this.add.text(screenCenterX /2 -45 , screenCenterY +50, game.config.gameTitle, { font: '24px Courier', fill: '#DD636E' });
    // START INSTRUCTIONS
    const instruction = this.add.text(screenCenterX /2, screenCenterY +80, 'Insert coin to start', { font: '16px Courier', fill: '#ffd700' });
    // INSTRUCTION FLASH
    TweenHelper.flashElement(this, instruction)
    // FADE IN
    this.cameras.main.fadeIn(1000, 0, 0, 0)
    // FADE OUT
    this.input.keyboard.once('keydown-SPACE', () => {
	this.cameras.main.fadeOut(1000, 0, 0, 0)
	})
	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
        this.time.delayedCall(1000, () => {
		this.scene.start('thisGame');
        this.scene.start('Interface');
        this.scene.start('Pause');
        })
	})
    }
    update(){
    };
}