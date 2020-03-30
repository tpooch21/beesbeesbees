// ForagerBee is a subclass of Bee superclass

// Properties
// Age: 10 (update)
// Job: find pollen (update)
// Color: yellow, inherited from Bee
// Food: inherited from Grub via Bee
// canFly: true (new)
// treasureChest: [] (new)

// Methods
// Eat: inherited from Grub via Bee
// Forage: takes treasure as an input, and adds to treasureChest (new)

var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

ForagerBee.prototype.constructor = ForagerBee;

