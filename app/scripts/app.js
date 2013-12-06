/* global Model*/
var App = new Model({
  init: function (string, element) {
    this.attributes = {};
    string = string.split(';');
    string.forEach(function (value) {
      if (!value) {
        return;
      }

      this.parseString(value);
    }, this);
    this.element = element;
    this.element.innerHTML = '';
  },
  parseString: function (string) {
    var thisDices = string.match(/([A-Za-z]*\:)?(\d(?=w))?((?:[wW])(\d{1,3}))(\+\d{1,3})?(\-\d{1,3})?/);
    if (!thisDices) { return this.multiplyAttribute(string); }
    return this.rollAttribute(thisDices);
  },
  multiplyAttribute: function (string) {
    var thisDices = string.match(/([A-Za-z]*\:)?([A-Za-z]*(?=x))?([A-Za-z]*\+[A-Za-z]*)?(x\d)?(\/\d)?/);
    var attribute = thisDices[1] || '',
      source = thisDices[2] || thisDices[3].split('+'),
      multiplier = thisDices[4] ? thisDices[4].replace('x', '') : false,
      divider = thisDices[5] ? thisDices[5].replace('/', '') : false,
      total = 0;

    attribute = attribute.replace(':', '');
    if (multiplier) {
      total = this.attributes[source] * multiplier;
      this.attributes[attribute] = total;

      return thisDices;
    }
    source.forEach(function (value) {
      total += this.attributes[value] || 0;
    }, this);
    if (divider) {
      total = total / divider;
      total = Math.round(total);
    }
    this.attributes[attribute] = total;

    return thisDices;
  },
  rollAttribute: function (dices) {
    var  dice = new Dice(parseInt(dices[4])),
      attribute = dices[1] || '',
      count = dices[2] || 1,
      i = 0,
      mod = parseInt(dices[5] || dices[6]) || 0,
      total = 0;
    attribute = attribute.replace(':', '');

    for (i = 0; i < count; i++) {
      total += dice.shuffle();
    }
    total += mod;
    this.attributes[attribute] = total;

    return dices;
  },
  toString: function () {
    var item;
    for (item in this.attributes) {
      this.element.innerHTML += (item + ': ' +  this.attributes[item] + '<br/>');
    }
  }
});
