// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/primitives.js":[function(require,module,exports) {
// Six data types => Primitives
// undefined, Boolean, Number, String, BigInt, Symbol
//All types except objects define immutable values (that is, values which can't be changed)
//Structural types => Object, Function
//Structural Root primitive => null
//NaN => Propery on global object
//----------Undefined--------//
// undefined is a property of the global object. That is, it is a variable in global scope.
// In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a non-configurable, non-writable property, per the ECMAScript 5 specification. (Even when this is not the case, avoid overriding it.)
// A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
//Don't do this
// (function(undefined){
//     console.log(undefined, typeof undefined);
// })('foo');
// var x;
// if(x === undefined){
//     console.log('x is undefined');
// }else{
//     console.log('x is defined');
// }
// var x;
// if (typeof x === 'undefined') {
//    // these statements execute
// }
//  x has not been declared before
// if (typeof x === 'undefined') { //  evaluates to true without errors
//     //  these statements execute
//  }
//  if (x === undefined) { //  throws a ReferenceError
//  }
// var  x;
// if (x in window) {
//     //  these statements execute only if x is defined globally
//     console.log('x is defined');
//   }
//Using void Operator
// var x;
// if(x === void 0){
//     //these statements execute
// }
// //y has not been declared before
// if(y === void 0){
//     // throws Uncaught ReferenceError : y is not defined
// }
//--------End-----------------//
//-------Null-----------------//
// The value null represents the intentional absence of any object value.
// treated as falsy for Boolean operations
// function getVowels(str) {
//     const m = str.match(/[aeiou]/gi);
//     if (m === null) {
//       return 0;
//     }
//     return m.length;
//   }
//   console.log(getVowels('sky'));
// expected output: 0
//null is not an identifier for a property of the global object, like undefined can be.
//Instead, null expresses a lack of identification, indicating that a variable points to no object.
//In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 
//   foo; //ReferenceError: foo is not defined
// foo is known to exist now but it has no type or value:
// var foo = null;
// foo; //null
// Difference between null an undefined
// typeof null          // "object" (not "null" for legacy reasons)
// typeof undefined     // "undefined"
// null === undefined   // false
// null  == undefined   // true
// null === null        // true
// null == null         // true
// !null                // true // null is falsy
// isNaN(1 + null)      // false
// isNaN(1 + undefined) // true
//-------End-----------------//
//----Boolean--------------//
// In computer science, a Boolean is a logical data type that can have only the values true or false. For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute
// for example in if statements and for loops
// Boolean primitive values => true and false
//The Boolean object is an object wrapper for a boolean value.
// var x = new Boolean(undefined);
// if(x){
//     // this code is executed
//     console.log('hello');
// }
// Any object of which the value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true:
// var x = new Boolean(false);
// if (x) {
//   // this code is executed
// }
// This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:
// var x = false;
// if (x) {
//   // this code is not executed
// }
// Do not use a Boolean object to convert a non-boolean value to a boolean value. To perform this task, instead, use Boolean as a function, or a double NOT operator:
// var x = Boolean(expression);     // use this...
// var x = !!(expression);          // ...or this
// var x = new Boolean(expression); // don't use this!
// If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.
// var myFalse = new Boolean(false);   // initial value of false
// var g = Boolean(myFalse);       // initial value of true
// var myString = new String('Hello'); // string object
// var s = Boolean(myString);      // initial value of true
// Do not use a Boolean object in place of a Boolean primitive.

/*---Boolean Objects with initial value of false-----*/
// var bNoParam = new Boolean();
// var bZero = new Boolean(0);
// var bNull = new Boolean(null);
// var bEmptyString = new Boolean('');
// var bfalse = new Boolean(false);

/*------------ Boolean Objects with inital value of true----------*/
// var btrue = new Boolean(true);
// var btrueString = new Boolean('true');
// var bfalseString = new Boolean('false');
// var bSuLin = new Boolean('Su Lin');
// var bArrayProto = new Boolean([]);
// var bObjProto = new Boolean({});
// let names = bfalseString;
// if(names){
//     console.log('names exists');
// }
//---------------truthy values in js----------------------//
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)
//--------falsy values in js--------------//
//false
//0
// -0
// 0n
// "", '', ``
// null
// undefined
// NaN
// dcoument.all
// false && "dog"
// 0 && "dog"
//----End------------------//

/*-----------------NaN-------global property----it is a variable in global scope.-----------------*/
// It represents not a number
//propert attributes => Writable: no, Enumerable: no, Configurable: no
// function sanitise(x) {
//     if (isNaN(x)) {
//       return NaN;
//     }
//     return x;
//   }
//   console.log(sanitise('1'));
//   // expected output: "1"
//   console.log(sanitise('NotANumber'));
//   // expected output: NaN
//The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it. It is rather rare to use NaN in a program.
// There are five different types of operations that return NaN:
//Number cannot be parsed 
// console.log(parseInt('Unilog'));
//Math operation where the result is not a real number
// console.log(Math.sqrt(-25));
//Operand of an argument is NaN
// console.log(0 + NaN)
//Indeterminate form 
// console.log(0 *Infinity)
// console.log(undefined + undefined);
// Any operation that involves a string and is not an addition operation 
// console.log("foo"/3);
//What if you add
// console.log("foo" + 3);
//Testing NaN will return unequal to any other value inclusing NaN
// console.log(NaN === NaN);
// Number.NaN === NaN; // false
// isNaN(NaN);         // true
// isNaN(Number.NaN);  // true
// Number.isNaN(NaN);  // true
//Difference between isNaN() and Number.isNaN(): Diffeence is coercion
// isNaN('hello world');        // true
// Number.isNaN('hello world'); // false
//Additionally, some array methods cannot find NaN, while others can.
// let arr = [2, 4, NaN, 12];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));
// console.log(arr.findIndex(n => Number.isNaN(n)));

/*---------End----------------------------------------------------*/

/*--------Number-------------------------------------*/
// ECMAScript has two built-in numeric types: Number and BigInt
// a double-precision 64-bit binary format IEEE 754 value
// -(253 − 1) and (253 − 1)
// Symbolic values: +Infinity, -Infinity, NaN
//Number.MAX_VALUE and Number.MIN_VALUE
// 0 => +0. -0
// -0 === +0
//Trick: coerce number string to number => +"number string"
// 42/+0 => exception
// 42/-0  => exception
//The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.
// A BigInt is created by appending n to the end of an integer or by calling the constructor.
//example: const x = 2n ** 53n;

/*--------End----------------------------------------*/

/*-------String-----------*/
// Represent texual data
// Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.
// JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it.
// const str = 'Mozilla';
// console.log(str.substr(1, 2));
// // expected output: "oz"
// console.log(str.substr(2));
// // expected output: "zilla"
// console.log(str);
// //substr creates a new string
// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2));
// // expected output: "Hello World"
// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"
// For performance use +, += instead of concat()
// Use strings for textual data. When representing complex data, parse strings, and use the appropriate abstraction.
//Use array for a list of items

/*-------End-------------- */

/*---------------Symbol------------------*/
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

/*-------------End-----------------------*/
},{}],"../../../../.nvm/versions/node/v14.6.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37595" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvm/versions/node/v14.6.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/primitives.js"], null)
//# sourceMappingURL=/primitives.f6664690.js.map