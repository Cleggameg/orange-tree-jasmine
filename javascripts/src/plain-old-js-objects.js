var FRUIT_BEARING_AGE = 5
var MAX_AGE = 50

var createTree = function(){
  tree = {
    age:0,
    height:0,
    orangeCount:0,
    isAlive:true,
    grow: function() {
      this.age += 1,
      this.height += 10
      if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += Math.floor((Math.random() * 10) + 1);
      };
      if (this.age > MAX_AGE) {
        this.isAlive = false;
      };
    },
    dropOrange: function() {
      return orange = {diameter: 5}
    },
  };
  return tree
};
