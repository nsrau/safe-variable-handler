// safe.js

/**
 * A utility library for handling different types of variables safely.
 * @module safe
 */
const isNode = typeof module !== 'undefined' && module.exports;

// Determine the global context based on the environment
const globalContext = isNode ? global : window;

const isDebug = typeof globalContext !== 'undefined' && globalContext.DEBUG;

/**
 * Safely returns an array. If the input is not an array, an empty array is returned.
 * @function array
 * @param {*} variable - The variable to be checked.
 * @returns {Array} - The input array or an empty array if the input is not an array.
 */
function array(variable) {
  if (Array.isArray(variable)) {
    return variable;
  }
  if (isDebug) {
    console.warn('Variable is not an array. Type:', typeof variable);
  }
  return [];
}

/**
 * Safely returns an object. If the input is not an object, an empty object is returned.
 * @function object
 * @param {*} variable - The variable to be checked.
 * @returns {Object} - The input object or an empty object if the input is not an object.
 */
function object(variable) {
  if (typeof variable === 'object' && variable !== null) {
    return variable;
  }
  if (isDebug) {
    console.warn('Variable is not an object. Type:', typeof variable);
  }
  return {};
}

/**
 * Safely returns a function. If the input is not a function, a dummy function is returned.
 * @function func
 * @param {*} variable - The variable to be checked.
 * @returns {Function} - The input function or a dummy function if the input is not a function.
 */
function func(variable) {
  if (typeof variable === 'function') {
    return variable;
  }
  if (isDebug) {
    console.warn('Variable is not a function. Type:', typeof variable);
  }
  return () => {};
}

const safe = { array, object, func };

// Export for Node.js
if (isNode) {
  module.exports = safe;
}

// Export for browsers
if (!isNode) {
  window.safe = safe;
}
