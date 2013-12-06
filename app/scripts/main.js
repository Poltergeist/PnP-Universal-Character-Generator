/* global document, App*/
var $element = document.querySelector('.console'),
  generate = function () {
    var $textarea = document.querySelector('textarea'),
      app = new App($textarea.value, $element);
    app.toString();
  },
  button = document.querySelector('#generate');

button.addEventListener('click', generate);
