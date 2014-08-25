var dragndrop = require('dragndrop')

module.exports = ['$parse', function ($parse) {
  return {
    compile: function ($el, attr) {
      var json = attr.ngDragndrop
        , options = null;

      return function (scope, $el) {
        if (json) {
          options = $parse(json)(scope);
        } else {
          options = { dropzone: false }
        }

        dragndrop($el, options)

      }
    }
  }
}];
