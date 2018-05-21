GamePlayManager = {

    init: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.flagFirstMouseDown = false;
    },
    preload: function () {
        game.load.image("background", "assets/images/background.png");
        game.load.spritesheet("horse", "assets/images/horse.png", 84, 156, 2);
    },
    create: function () {
        game.add.sprite(0, 0, "background");
        this.horse = game.add.sprite(0, 0, "horse");
        this.horse.frame = 1;
        this.horse.x = game.width / 2;
        this.horse.y = game.height / 2;
        this.horse.anchor.setTo(0.5);

        game.input.onDown.add(this.onTap, this);
    },

    onTap: function () {
        this.flagFirstMouseDown = true;
    },

    update: function () {
        if (this.flagFirstMouseDown) {
            var pointerX = game.input.x;
            var pointerY = game.input.y;

            var distanceX = pointerX - this.horse.x;
            var distanceY = pointerY - this.horse.y;

            if (distanceX > 0) {
                this.horse.scale.setTo(1, 1);
            }
            if (distanceX < 0) {
                this.horse.scale.setTo(-1, 1);
            }

            this.horse.x += distanceX * 0.02;
            this.horse.y += distanceY * 0.02;
        }

    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);

game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
