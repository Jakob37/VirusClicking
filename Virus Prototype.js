/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Viruses = function (game, sprite) {

    //var X = 600 * Math.random() + 100;
    //var Y = 400 * Math.random() + 100;
    
    Phaser.Sprite.call(this, game, 100, 100, sprite);
    
//    var angleOnCircle = 2 * Math.PI * Math.random();
//    
    this.game.physics.arcade.enableBody(this);
//    this.anchor.setTo(0.5, 0.5);
//    this.inputEnabled = true;
//    this.rotation_speed = 4 * Math.random() - 1;
//    this.body.velocity.x = Math.cos(angleOnCircle) * 300;
//    this.body.velocity.y = Math.sin(angleOnCircle) * 300;
//    this.body.bounce.set(1);
};

Viruses.prototype = Object.create(Phaser.Sprite.prototype);
Viruses.prototype.constructor = Viruses;

/**
 * Automatically called by World.update
 */
Viruses.prototype.update = function() {

    this.angle += this.rotateSpeed;

};