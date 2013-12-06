Model=function a(b,c,d,e){function f(){var a=this,f={};a.on=function(a,b){(f[a]||(f[a]=[])).push(b)},a.trigger=function(a,b){for(var c=f[a],d=0;c&&d<c.length;)c[d++](b)},a.off=function(a,b){for(d=f[a]||[];b&&(c=d.indexOf(b))>-1;)d.splice(c,1);f[a]=b?d:[]};for(c in b)d=b[c],a[c]="function"==typeof d?function(){return(d=this.apply(a,arguments))===e?a:d}.bind(d):d;a.init&&a.init.apply(a,arguments)}return f.extend=function(f){d={};for(c in b)d[c]=b[c];for(c in f)d[c]=f[c],b[c]!==e&&(d["__"+c]=b[c]);return a(d)},f},"object"==typeof module&&(module.exports=Model);var Dice=new Model({init:function(a){this.dice=new Array(a)},shuffle:function(){var a=parseInt(this.dice.length*Math.random());return++a}}),App=new Model({init:function(a,b){this.attributes={},a=a.split(";"),a.forEach(function(a){a&&this.parseString(a)},this),this.element=b,this.element.innerHTML=""},parseString:function(a){var b=a.match(/([A-Za-z]*\:)?(\d(?=w))?((?:[wW])(\d{1,3}))(\+\d{1,3})?(\-\d{1,3})?/);return b?this.rollAttribute(b):this.multiplyAttribute(a)},multiplyAttribute:function(a){var b=a.match(/([A-Za-z]*\:)?([A-Za-z]*(?=x))?([A-Za-z]*\+[A-Za-z]*)?(x\d)?(\/\d)?/),c=b[1]||"",d=b[2]||b[3].split("+"),e=b[4]?b[4].replace("x",""):!1,f=b[5]?b[5].replace("/",""):!1,g=0;return c=c.replace(":",""),e?(g=this.attributes[d]*e,this.attributes[c]=g,b):(d.forEach(function(a){g+=this.attributes[a]||0},this),f&&(g/=f,g=Math.round(g)),this.attributes[c]=g,b)},rollAttribute:function(a){var b=new Dice(parseInt(a[4])),c=a[1]||"",d=a[2]||1,e=0,f=parseInt(a[5]||a[6])||0,g=0;for(c=c.replace(":",""),e=0;d>e;e++)g+=b.shuffle();return g+=f,this.attributes[c]=g,a},toString:function(){var a;for(a in this.attributes)this.element.innerHTML+=a+": "+this.attributes[a]+"<br/>"}}),$element=document.querySelector(".console"),generate=function(){var a=document.querySelector("textarea"),b=new App(a.value,$element);b.toString()},button=document.querySelector("#generate");button.addEventListener("click",generate);