

//function base(spec) {
//    var that = {};
//    that.key = spec.key;
//    return that;
//};

function child(spec) {
    var that = Phaser.Sprite.call(spec.this, spec.game, spec.x, spec.y, spec.key);
    that.sayHello = function() {
        return 'Hello, I am ' + that.name;
    };
    return that;
}

function test(game, x, y, key) {
    var that = Phaser.Sprite.call(this, game, x, y, key);
    //that.sayHello = function() {
    //    return 'Hello, I am ' + that.name;
    //};
    return that;
}

//var object = child({ name: 'functional object' });
//console.log(object.sayHello());