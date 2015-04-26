/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Viruses = function (game, sprite, speed) {

    var padding = 50;
    var bottomMargin = 100;
    var x = (game.width - padding*2) * Math.random() + padding;
    var y = (game.height - bottomMargin - padding*2) * Math.random() + padding;
    Phaser.Sprite.call(this, game, x, y, sprite);
    
    var angleOnCircle = 2 * Math.PI * Math.random();
    
    this.game.physics.arcade.enableBody(this);
    this.anchor.setTo(0.5, 0.5);
    this.inputEnabled = true;
    this.rotation_speed = 4 * Math.random() - 1;
    this.body.velocity.x = Math.cos(angleOnCircle) * speed;
    this.body.velocity.y = Math.sin(angleOnCircle) * speed;
    this.body.bounce.set(1);
    
};

Viruses.prototype = Object.create(Phaser.Sprite.prototype);
Viruses.prototype.constructor = Viruses;

/**
 * Automatically called by World.update
 */
Viruses.prototype.update = function() {

};