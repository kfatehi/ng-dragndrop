ng-dragndrop
===================

AngularJS Directive for HTML5 Drag and Drop

Designed for use with browserify.

Depends on https://github.com/keyvanfatehi/dragndrop

## Warning

`ng-dragndrop` does not have `ng-model` support.

If you intend to use this for an `ng-repeat` you will probably run into issues as I did.

For all my draggable UI stuff I've been using [dragndrop](https://github.com/keyvanfatehi/dragndrop) directly with ReactJS components to get around strange angular `ng-repeat` oddities.


## Install

`npm install ng-dragndrop --save`

```js
app.directive('ngDragndrop', require('ng-dragndrop'))
```

## Usage

### Markup

```
<ul ng-dragndrop='{ dropzone: controller.dropzone }'>
  <li ng-dragndrop> bla bla bla </li>
  <li ng-dragndrop> i can be swapped or moved </li>
</ul>

<ul ng-dragndrop='{ dropzone: controller2.dropzone }'>
  <li ng-dragndrop> hey hey hey </li>
</ul>

<ul ng-dragndrop='{ dropzone: controller3.dropzone }'>
</ul>
```

### Controller

```js
MyController = function() {
  this.dropzone = {
    start: function (e) {
      console.log('started dragging', {
        card: $(e.item).data('id'),
        index: $(e.item).index(),
      })
    }
    swapped: function ($1, $2) {
      console.log('col '+this._id+' swap', $1.text().trim(), $2.text().trim());
    },
    appended: function ($el) {
      console.log('col '+this._id+'add', $el.text());
    },
    removed: function ($el) {
      console.log('col '+this._id+'remove', $el.text());
    }
    end: function (e) {
      console.log('finished dragging', {
        card: $(e.item).data('id'),
        index: $(e.item).index(),
      })
    }
  }
}
```
