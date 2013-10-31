/*
var w6 = new Dice(6),
    w20 = new Dice(20),
    attributes = {};


function parseString(string){
  // /(\d(?=w))((?:[wW])(\d{1,3}))(\+\d)?(\-\d)?/
  // REGEX
  var thisDices= string.match(/([A-Za-z]*\:)?(\d(?=w))?((?:[wW])(\d{1,3}))(\+\d{1,3})?(\-\d{1,3})?/);
  if(!thisDices){ return multiplyAttribute(string); }
  return rollAttribute(thisDices);
}
function multiplyAttribute(string){
  var thisDices= string.match(/([A-Za-z]*\:)?([A-Za-z]*(?=x))?([A-Za-z]*\+[A-Za-z]*)?(x\d)?(\/\d)?/);
  console.log(thisDices, string);
  var attribute = thisDices[1] || "",
    source = thisDices[2] || thisDices[3].split("+"),
    multiplier = thisDices[4] ? thisDices[4].replace("x", "") : false,
    divider = thisDices[5] ? thisDices[5].replace("/", "") : false,
    total = 0;

  attribute = attribute.replace(':','');
  if(multiplier){
    total = attributes[source] * multiplier;
    attributes[attribute] = total;
    console.log(attribute, total);

    return thisDices;
  }
  source.forEach(function(value){
    total += attributes[value] || 0;
  });
  if(divider){
    total = total / divider;
    total = Math.round(total);
  }
  attributes[attribute] = total;
  console.log(attribute, total);

  return thisDices;
}
function rollAttribute(dices){
  var  dice = new Dice(parseInt(dices[4])),
    attribute = dices[1] || "",
    count = dices[2] || 1,
    i = 0,
    mod = parseInt(dices[5] || dices[6]) || 0,
    total = 0;
  attribute = attribute.replace(':','');

  for(i = 0; i < count; i++){
    total += dice.shuffle();
  }
  total+=mod;
  attributes[attribute] = total;

  console.log(attribute, total);
  return dices;
}

function importRules(string){
  string = string.split(";");
  console.log(string);
  string.forEach(function(value){
    if(!value){
      return;
    }

    console.log(parseString(value));
  })
}
*/
//console.log(parseString("w20"));
//console.log(parseString("1w20"));
//console.log(parseString("2w20"));
//console.log(parseString("3w20"));
//console.log(parseString("0w20"));
//console.log(parseString("1w6"));
//console.log(parseString("2w6"));
//console.log(parseString("3w6"));
//console.log(parseString("1w6+6"));
//console.log(parseString("2w6+15"));
//console.log(parseString("3w6+200"));
//console.log(parseString("1w6-6"));
//console.log(parseString("2w6-15"));
//console.log(parseString("3w6-200"));
//console.log(parseString("ST:3w6"));
//console.log(parseString("KO:3w6"));
//console.log(parseString("MA:3w6"));

//console.log("parser");
//importRules("ST:3w6;KO:3w6;MA:3w6;GE:3w6;ER:3w6;GR:2w6+6;IN:2w6+6;BI:3w6+3;gS:MAx5;Idee:INx5;Glueck:MAx5;Schadensbonus:ST+GR;Magiepunkte:MAx1;Trefferpunkte:KO+GR/2;Stabilitaetspunkte:MAx5");


//importRules("ST:3w6;KO:3w6;MA:3w6;GE:3w6;ER:3w6;GR:2w6+6;IN:2w6+6;BI:3w6+3;gS:MAx5;Idee:INx5;Glueck:MAx5;Schadensbonus:ST+GR;Magiepunkte:MAx1;Trefferpunkte:KO+GR/2;Stabilitaetspunkte:MAx5");

var element = document.querySelector(".console"),
  generate = function(){
    var app = new App("ST:3w6;KO:3w6;MA:3w6;GE:3w6;ER:3w6;GR:2w6+6;IN:2w6+6;BI:3w6+3;gS:MAx5;Idee:INx5;Glueck:MAx5;Schadensbonus:ST+GR;Magiepunkte:MAx1;Trefferpunkte:KO+GR/2;Stabilitaetspunkte:MAx5", element);
    app.toString();
  },
  button = document.querySelector('#generate');

button.addEventListener('click', generate);
