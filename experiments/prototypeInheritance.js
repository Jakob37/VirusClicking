// Baseplayer

BasePlayer = function (game, x, y, key) {
    this.key = key;
    Phaser.Sprite.call(this, game, x, y, key);
};

BasePlayer.prototype = Object.create(Phaser.Sprite.prototype);
BasePlayer.prototype.constructor = BasePlayer;

BasePlayer.prototype.sayHi = function() {
    console.log('hi');
    
};

// Human

Human = function (game, x, y) {
    BasePlayer.call(this, game, x, y, 'button');
};

Human.prototype = Object.create(BasePlayer.prototype);
Human.prototype.constructor = Human;

Human.prototype.laugh = function() {
    var logstring = this.key + ' - human';
    console.log(logstring);
};

// Enemy

Enemy = function (game, x, y) {
    BasePlayer.call(this, game, x, y, 'virus');
};

Enemy.prototype = Object.create(BasePlayer.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.laugh = function () {
    var logstring = this.key + ' - enemy';
    console.log(logstring);
};