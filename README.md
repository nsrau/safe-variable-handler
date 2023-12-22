# Safe Variable Handler

A utility library for handling different types of variables safely.

## Installation

```bash
npm install safe-variable-handler
```

# Usage
```javascript
// Import the library
const safe = require('safe-variable-handler');

// Example with arrays
const inputArray = [1, 2, 3];
const safeArray = safe.array(inputArray);
console.log(safeArray); // [1, 2, 3]

// Example with objects
const inputObject = { key: 'value' };
const safeObject = safe.object(inputObject);
console.log(safeObject); // { key: 'value' }

// Example with functions
const inputFunction = () => {};
const safeFunction = safe.func(inputFunction);
console.log(safeFunction); // [Function: inputFunction]
```

## Functions

## array(variable)
> Safely returns an array. If the input is not an array, an empty array is returned.

## object(variable)
> Safely returns an object. If the input is not an object, an empty object is returned.

## func(variable)
> Safely returns a function. If the input is not a function, a dummy function is returned.

# Global Debugging
To enable debug warnings, set the global variable DEBUG before using the library.

Example:

```javascript
// Enable debug mode
global.DEBUG = true;

// Now use the library
const safeArray = safe.array('not an array');
// Debug warning will be printed
```
