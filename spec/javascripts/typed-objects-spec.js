// Here is your first test rewritten to expect a constructor function.

describe ("Tree", function(){
  it("should return a tree object", function(){
    var tree= new Tree()
    expect(tree).toBeDefined();
  });
});


// Copy the rest of the specs from plain-old-js-objects-spec.js one at a time and modify them to use constructor function OO.
describe ("createTree", function() {
  var tree;

  beforeEach(function() {
    tree = new Tree();
  })

  it("should return tree with age 0 when created", function() {
    expect(tree.age).toEqual(0);
  });
  it("should have height 0 when created", function() {
    expect(tree.height).toEqual(0);
  });
  it("should have 0 oranges when created", function() {
    expect(tree.orangeCount).toEqual(0);
  });

  describe("grow", function() {
    var tree;

    beforeEach(function() {
      tree = new Tree();
    });

    it("should increase the age of the tree by 1 year", function() {
      tree.grow();
      expect(tree.age).toEqual(1);
    });

    it("should increase the height of the tree by 10 inches", function() {
      tree.grow();
      expect(tree.height).toEqual(10);
    });

    it("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
      while (tree.age < FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.orangeCount).toBeGreaterThan(0);
    });

    it("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
       var tree = new Tree();
      while (tree.age < (FRUIT_BEARING_AGE-1)) {
        tree.grow();
      }
      expect(tree.orangeCount).toEqual(0);
    });
  });

  describe ("die",function() {
    it("should be alive when age <= MAX_AGE",function() {
      while (tree.age < (MAX_AGE-1)) {
        tree.grow();
      }
      expect(tree.isAlive).toEqual(true);
    });

    it("should die when age > MAX_AGE",function() {
      while (tree.age <= MAX_AGE) {
        tree.grow();
      }
      expect(tree.isAlive).toEqual(false);
    });
  });

  describe("dropOrange", function() {
    it("should return the orange that is removed from oranges", function() {
      while (tree.age < FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.dropOrange()).toBeDefined();
    });
  });

  describe ("pickOrange", function() {
    beforeEach(function() {
      while (tree.orangeCount == 0) {
        tree.grow();
      }
    });

    it("should return a orange object", function() {
      expect(pickOrange(tree)).toBeDefined();
    });

    it("should return an orange with a random diameter > 0", function() {
      var orange = pickOrange(tree);
      expect(orange.diameter).toBeGreaterThan(0);
    });
  });
});
