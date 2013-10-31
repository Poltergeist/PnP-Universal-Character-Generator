var Dice = new Model({
  init: function(sides){
    this.dice= new Array(sides);
  },
  shuffle: function(){
    var value = parseInt(this.dice.length * Math.random());
    return ++value;
  }
});
