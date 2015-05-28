// Write your Orange Tree code here - you may use constructor functions
var FRUIT_BEARING_AGE = 5
var MAX_AGE = 50

var Tree = function(){
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.oranges = [];
  this.isAlive = true;
};

Tree.prototype.addOranges = function() {
  if (this.age >= FRUIT_BEARING_AGE) {
    return this.orangeCount = Math.floor((Math.random() * 10) + 1);
  }
}

Tree.prototype.grow = function(){
  this.age += 1;
  this.height += 10;
  this.addOranges();
  if (this.age > MAX_AGE) {
    this.isAlive = false;
  };
};

var Orange = function() {
  this.diameter = 5;
}

Tree.prototype.dropOrange = function() {
  if (this.orangeCount > 0) {
    this.orangeCount -= 1
    return new Orange();
  }
}

var pickOrange = function(tree) {
  return tree.dropOrange();
}
