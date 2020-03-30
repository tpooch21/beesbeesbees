// RetiredForagerBee is a subclass of ForagerBee

// Properties
// Age: 40 (update)
// Job: 'gamble' (update)
// canFly: false (update)
// Color: grey (update)
// Food: inherited from Grub via ForagerBee via Bee
// treasureChest: inherited from ForagerBee

// Methods
// Forage: returns 'I am too old, let me play cards instead' (update)
// Eat: inherited from Grub via ForagerBee via Bee
// Gamble: Adds treasure to treasureChest

var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};

RetiredForagerBee.prototype.constructor = RetiredForagerBee;


