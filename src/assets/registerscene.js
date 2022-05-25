import Phaser from "phaser";

let registered = false;
export default class RegisterScene extends Phaser.Scene {
    constructor() {
        super('Register');
    }
    preload() {

    }
    create() {

        let width = this.cameras.main.worldView.x + this.cameras.main.width;
        let height = this.cameras.main.worldView.y + this.cameras.main.height;
        let text = this.add.text(10, 10, 'Please Register to play', { color: 'red', fontFamily: 'Arial', fontSize: '14px ' });
        let element = this.add.dom(width / 2, height / 2 + 100).createFromCache('regform').setScale(0.4);

        element.setPerspective(200);

        element.addListener('click');

        element.on('click', function (event) {

            if (event.target.name === 'regButton') {
                let inputUsername = this.getChildByName('username');
                let inputPassword = this.getChildByName('password');
                //  Have they entered anything?
                if (inputUsername.value !== '' && inputPassword.value !== '') {
                    //  Turn off the click events
                    this.removeListener('click');

                    //  Tween the login form out
                    this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                    this.scene.tweens.add({
                        targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                        onComplete: function () {
                            element.setVisible(false);
                        }
                    });
                    //  Populate the text with whatever they typed in as the username!
                    text.setText('Welcome ' + inputUsername.value);
                    registered = true
                }
            }

        });

        this.tweens.add({
            targets: element,
            y: height / 2,
            duration: 3000,
            ease: 'Power3'
        });

    }

    update() {
        if (registered) {
            this.scene.stop("Register")
            this.scene.start("Mainmenu")
        }
    }
}
