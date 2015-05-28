/* Write your JS to modify the view here */
// plant a tree, bring up tree image provided
// age a tree
// grow an orange
// pick an orange
// drop all oranges

$(function(){

  var plantTreeButton = $(".plant");
  var ageTreeButton = $("button.age");
  var pickButton = $("button.pick");
  var orangeTreeTemplate = $("#orange-tree-template");
  var treeAgeElement = $("p.age");
  var treeFruitCountElement = $("p.fruit-count");
  var orangePicture = $("<img class='orange-image' src='images/orange.gif'>");
  var orangeTreeElement = $(".display-tree-big");
  var tree;

  plantTreeButton.on("click", function(event){
    $(this).attr("disabled", "disabled");
    orangeTreeTemplate.show();
    tree = new Tree();
  });

  ageTreeButton.on("click", function(event){
    tree.grow();
    treeAgeElement.text(tree.age);
    treeFruitCountElement.text(tree.orangeCount);
    showOrange(tree);
  });

  pickButton.on("click", function(event){
    tree.dropOrange();
    treeFruitCountElement.text(tree.orangeCount);
    showOrange(tree);
  });

  var showOrange = function(tree){
    var totalOrangesOnTree = $(".orange-image").length
    if (tree.orangeCount > totalOrangesOnTree){
      for(var i = totalOrangesOnTree; i < tree.orangeCount; i++){
        orangeTreeElement.append(orangePicture.clone());
      }
    } else {
      for(var i = tree.orangeCount; i < totalOrangesOnTree; i++){
        $(".orange-image").last().remove();
      }
    }
  }

});



