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

// Example 1: Safely executing a callback function
const executeCallback = (callback) => {
  const safeCallback = safe.func(callback);

  // Safely execute the callback or provide a default behavior
  return safeCallback() ?? 'default behavior'
};

// Example 2: Safely processing an array of numbers
const processNumbers = (data) => {
  const safeNumbersArray = safe.array(data);

  // Safely calculate the sum of numbers or provide a default value
  const sum = safeNumbersArray.reduce((acc, num) => acc + num, 0);
  console.log('Sum of numbers:', sum);
};

// Example 3: Safely accessing properties in a nested object
const accessNestedProperties = (apiResponse) => {
  const safeResponseObject = safe.object(apiResponse);

  // Safely access nested properties or provide default values
  const username = safeResponseObject.user?.name || 'Guest';
  const email = safeResponseObject.user?.email || 'guest@example.com';

  console.log('Username:', username);
  console.log('Email:', email);
};

// You can now confidently use these functions without worrying about unexpected input types causing errors.

safe.func(() => console.log("test"))();
safe.func(null)();

console.log(safe.array("").map((item) => item));
console.log(safe.array([1, 2, 3]).map((item) => item));

console.log(Object.keys(safe.object(null)));
console.log(Object.keys(safe.object({ key: 1 })));

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
