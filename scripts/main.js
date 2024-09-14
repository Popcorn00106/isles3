const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets
    this.load.image('background', 'assets/background.png');
    this.load.image('town', 'assets/town.png');
    this.load.spritesheet('character', 'assets/character.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('shop', 'assets/shop.png');
}

function create() {
    // Initial scene: player washed up on shore
    this.add.image(400, 300, 'background');
    
    // Create player
    this.player = this.physics.add.sprite(100, 100, 'character');
    this.player.setCollideWorldBounds(true);

    // Create a clickable town area to enter
    const town = this.add.image(600, 300, 'town').setInteractive();

    // Interact with the town to enter
    town.on('pointerdown', () => {
        enterTown.call(this);
    });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
        this.player.setVelocityX(160);
    } else {
        this.player.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
        this.player.setVelocityY(160);
    } else {
        this.player.setVelocityY(0);
    }
}

function enterTown() {
    this.scene.pause();
    alert("Welcome to Cornucopia! Explore the shops and complete tasks.");
    // Here you can load a new Phaser scene for the town interaction
}
