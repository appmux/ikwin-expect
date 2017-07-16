# ikwin-expect

Implements a waiting mechanism for DOM elements and objects.

An asynchronous loading of components of your page you often don't know in which order they will load and when one
becomes available. Scripts loaded on the page may create new objects or elements in the DOM and we often
just don't know when it happens and have to continuously check.

`expect` helps with that and promotes loose coupling of objects and DOM elements on a page.

## Description
```
expect(expression, options)
```
##### Parameters
**expression** - The expresion may be wither a query selector or a test function.

**options** - configuration options

_wait_ - interval in milliseconds, determines how often to persorm the test. Default 100ms.

##### Return value
A promise that resolves when a DOM element become available on a page or a test function returns truthy result.

## Examples

Using a query selector. Expects an element on a page with `.exampleSelector` class. 
```
expect('.exampleSelector')
  .then(console.log('Element is now available.'))
```

Using a test function. Expects an object in the global space.
```
expect(function () { return window.exampleObject })
  .then(console.log('window.exampleObject is now available.'))
```

Using a risky test function. Expects a nested object in the global space.
```
expect(function () {
  try {
    return window.exampleObject.deep.deep.sea
  } catch (err) {}
})
  .then(console.log('window.exampleObject.deep.deep.sea is now available.'))
```

## Install
```
npm install ikwin-expect
```

## Use
ES5
```
var expect = require('ikwin-expect').default
```

ES6
```
import expect from 'ikwin-expect'
```

# IKWIN

`ikwin-object` is a utility function to support IKWIN pattern. Learn more about IKWIN:

https://github.com/appmux/ikwin

