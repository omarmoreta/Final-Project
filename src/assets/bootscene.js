import Phaser from 'phaser'
import logoImg from "../../public/logo.png";

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }

    preload(){
        // LOAD PROGRESS
        var width = this.cameras.main.worldView.x + this.cameras.main.width ;
        var height = this.cameras.main.worldView.y + this.cameras.main.height ;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 20,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 + 10,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
        this.load.image("logo", logoImg);
    }
    create(){
    this.cameras.main.fadeOut(1000, 0, 0, 0);
	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
		this.scene.start('Mainmenu');
	})
    }
}