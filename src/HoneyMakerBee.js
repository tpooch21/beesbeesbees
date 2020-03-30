// HoneyMakerBee class is a subclass of Bee class
// Should call the Bee class function

// Properties:
// Age: 10
// Job: Make honey
// Color: yellow, inherited from Bee
// Food: inherited from Grub
// honeyPot: new property, set to 0

// Methods:
// Eat: inherited from Grub
// makeHoney: new method (add to HoneyMakerBee.prototype AFTER Object.create)
//    adds 1 to honeyPot
// giveHoney: new method (add to HoneyMakerBee.prototype AFTER Object.create)
//    subtracts 1 from honeyPot

var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

// Set HoneyMakerBee constructor property to point to HoneyMakerBee constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;