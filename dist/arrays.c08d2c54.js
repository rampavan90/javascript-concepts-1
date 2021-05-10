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
})({"js/arrays.js":[function(require,module,exports) {
//api
var postsObj = {};
var postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
  return response.json();
});
var posts = postsPromise.then(function (json) {
  return json;
});
posts.then(function (results) {
  var postsArray = [];
  postsArray = Object.entries(results);
  console.log(postsArray[0]); //Iterate Foreach => llows to run a function for every element of the array.
  //return function is ignored
  // postsArray.forEach((post,postIndex, postArray) => { 
  //     // console.log(post[1].userId);
  //     // console.log(postIndex);
  //     // console.log(postArray);
  // });
  //Searching in array
  // arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
  // arr.lastIndexOf(item, from) – same, but looks for from right to left.
  // arr.includes(item, from) – looks for item starting from index from, returns true if found.
  // If we want to check for inclusion, and don’t want to know the exact index, then arr.includes is preferred.
  // let fruits = ['Apple', 'Pear', 'Banana'];
  // console.log(fruits.includes('Apple')); //case sensitive
  //find and findIndex How do we find an object with the specific condition?
  //The find method looks for a single (first) element that makes the function return true.
  // let result = postsArray.find(post => post[1].userId === 2);
  // console.log(result);
  //findindex returns index where element is found
  // filter
  //same as find but for many items
  // let result = postsArray.filter(post => post[1].userId === 2);
  // console.log(result);

  /*--Transform an araay and reorder an array--*/
  // map => very useful returns new array after transforming
  // let postsStartTexts = postsArray.map(post => post[1].title.slice(0,10));
  // console.log(postsStartTexts);
  //Sort => sorts array in place || coverted to string and sort by default
  // so we have to write sort function
  // let arr = [ 15, 1, 2 ];
  // function compare(a, b) {
  //     if (a > b) return 1; // if the first value is greater than the second
  //     if (a == b) return 0; // if values are equal
  //     if (a < b) return -1; // if the first value is less than the second
  //   }
  //   arr.sort(compare);
  //   console.log(arr);
  //reverse => reverses the order of elements in arr. || returns new array
  //Split and join ?
  //reduce
  // When we need to iterate over an array – we can use forEach, for or for..of.
  // When we need to iterate and return the data for each element – we can use map.
  //reduce is used for calculating a single value based on the array
  // arguments: accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
  // item – is the current array item.
  // index – is its position.
  // array – is the array.
  // let arr = [1, 2, 3, 4 , 5];
  // let result = arr.reduce((sum, current) => sum + current, 0)
  // console.log(result);
}); // Arrays usage
//ordered collection || indexed data structure
//list of something: users, goods, HTML elements etc.
// insert between two elements, Objects don't provide those functionality
//Declaration
// let arr = new Array();
// let arr = []; // mostly used
// Indexed from 0 || access elements || replace el || add more items to array
// length property
//can store any type of elements || nested
// queue || Push, push appends an element to the end || shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st. || FIFO
// stack || push adds an element to the end.
// pop takes an element from the end. || LIFO
// let fruits = ["Apple", "Orange", "Pear"];
// let fruitPopped = fruits.pop();
// console.log(fruitPopped);
// fruits.push("Pear");
// console.log(fruits);
//Shift => Extracts the first element of the array and returns it:
//Unshift => Add the element to the beginning of the array:
//Array => special kind of obj || Object with addditional methods
// it is copied by ref
// contiguous ordered data => use arrays
// arbitrary keys => use Objects
//Don't do this even if you can like an object
// let fruits = []; // make an array
// fruits[99999] = 5; // assign a property with the index far greater than its length
// console.log(fruits);
// fruits.age = 25; // create a property with an arbitrary name
// /But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.
//ways to misuse an array
//Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.
//Performance
//Methods push/pop run fast, while shift/unshift are slow.
//Loops
// let arr = ["Apple", "Orange", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }
// let fruits = ["Apple", "Orange", "Plum"];
// // iterates over array elements => only value
// for (let fruit of fruits) {
//   alert( fruit );
// }
//as arrays for objects
// let arr = ["Apple", "Orange", "Pear"];
// // have internal properties
// for (let key in arr) { 
//   alert(key); // Apple, Orange, Pear
// }
//The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.
// Generally, we shouldn’t use for..in for arrays.
//length is writable => Don't do this
//clear array length = 0
// let arr = [1, 2];
// arr.length = 0;
// console.log(arr[0]);
//Don't compare arrays with ===
// Let’s recall the rules:
// Two objects are equal == only if they’re references to the same object.
// If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
// …With an exception of null and undefined that equal == each other and nothing else.
// The strict comparison === is even simpler, as it doesn’t convert types.
// So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.
// alert( [] == [] ); // false
// alert( [0] == [0] ); // false
// So, how to compare arrays?
// That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods 

/*-----------Array methods---------------*/
//Add remove items
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.
//splice => insert remove and replace elements
//slice create arrays => It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
//concat: new array hat includes values from other arrays and additional items.
// let arr = [1, 2];
// arr = arr.concat([3,4],[5,6], 7, 8);
// console.log(arr);
//Practical examples => top => Transform an array and search arrays
//for comparing type of arrays
//Array.isArray
// alert(Array.isArray({})); // false
// alert(Array.isArray([])); // true
// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg. => Not used that often
//we can cover probably while covering objects

/*----------End--------------------------*/
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42647" + '/');

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
},{}]},{},["../../../../.nvm/versions/node/v14.6.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/arrays.js"], null)
//# sourceMappingURL=/arrays.c08d2c54.js.map