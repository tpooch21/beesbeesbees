// Bee is a subclass of Grub
// Bee should call Grub, and should also set its prototype to Grub

// Bee should define unique properties within its body, after calling Grub
//   Make sure to set unique properties after calling Grub so that bee properties overwrite Grub properties

// Properties
// Age: 5
// Color: yellow
// Food: inherited from Grub (no change)
// Job: 'keep on growing'

// Methods
// Eat: same as Grub, will delegate to Grub constructor prototype

import { Grub } from './Grub';

var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Set Bee class prototype to Grub class prototype so that failed lookups on instances of Bee have access to Grub properties and methods
Bee.prototype = Object.create(Grub.prototype);

// Should have a prototype constructor property that points back to the constructor itself
Bee.prototype.constructor = Bee;

