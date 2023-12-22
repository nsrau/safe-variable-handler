# Safe Variable Handler

A utility library for handling different types of variables safely.

Have you ever encountered the frustrating "Uncaught TypeError: "".map is not a function" error while working with APIs? This often happens when the API response is expected to be an array, but due to various reasons, it turns out to be a non-array (e.g., an empty string).

This simple JavaScript library, Safe Variable Handler, is designed to tackle precisely this issue. It helps prevent common errors like "Uncaught TypeError" by safely checking if a variable is an array before performing operations like `.map()`. If the variable is not an array, the library provides a fallback, preventing your code from breaking.

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
const safe = require('safe-variable-handler')
safe.array('not an array').map(item => item);
// Debug warning will be printed Variable is not an array. Type: string
```
