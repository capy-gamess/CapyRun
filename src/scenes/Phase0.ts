import { Scene, GameObjects } from 'phaser';

export class Phase0 extends Scene {
    constructor() {
        super({ key: 'Phase0' });
    }

    preload() {
        this.load.spritesheet('jurema', 'assets/jurema.png', {
            frameWidth: 64,
            frameHeight: 64,
        });
    }

    create() {
        this.jurema = this.physics.add.sprite(400, 225, 'jurema');
        
        this.anims.create({
            key: "andar-direita",
            frames: this.anims.generateFrameNumbers("jurema", { start: 87, end: 95 }),
            frameRate: 10,
            repeat: -1,
        });

        this.jurema.play("andar-direita");
        this.jurema.setVelocityX(100);
    }
}