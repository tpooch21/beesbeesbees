// Create a Grub Class, serves as the superclass for all related bee subclasses
// Superclass and subclasses to utilize pseudoclassical instantiation patterns
// Should not require an input value

// Grub will include the following differentiating properties:
//  Age: set to zero
//  Color: set to pink
//  Food: set to jelly
//  Eat method: Defined on Grub constructor prototype since it's considered instance similarity code

var Grub = function() {

  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';

};

Grub.prototype.eat = function() {};


