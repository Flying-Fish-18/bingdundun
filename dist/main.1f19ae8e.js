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
})({"main.js":[function(require,module,exports) {
var string = "\n#bingdundun {\n/*    border: 1px solid black; */\n    width: 700px;\n    height: 400px;\n    \n    position: relative;\n}\n#body {\n    background-color: #fff;\n    border:5px solid #000;\n    width: 210px;\n    height: 236px;\n    border-radius: 47% 47%  38% 38%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-105px,-118px);\n    z-index: 1;\n}\n\n#earLeft {\n    background-color: #000;\n    width: 60px;\n    height: 75px;\n    position: absolute;\n    left: 242px;\n    top: 67px;\n    border-radius: 50% 38% 0 0;\n    transform: rotate(-25deg) translate(5px,10px);\n}\n#earRight {\n    background-color: #000;\n    width: 60px;\n    height: 75px;\n    position: absolute;\n    right: 242px;\n    top: 67px;\n    border-radius: 38% 50% 0 0;\n    transform: rotate(25deg) translate(-5px,10px);\n}\n#armLeft {\n    background-color: #000;\n    width: 40px;\n    height: 70px;\n    transform: rotate(30deg);\n    position: absolute;\n    left: 230px;\n    top: 200px;\n}\n#handLeft {\n    background-color: #000;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    position: absolute;\n    top: 244px;\n    left: 213px;\n}\n#handRight {\n    width: 40px;\n    height: 70px;\n    background-color: #000;\n    transform: rotate(45deg);\n    border-radius: 35%;\n    position: absolute;\n    top: 178px;\n    right: 213px;\n}\n#handRight::after {\n    display: block;\n    content: '\u2764';\n    width: 35px;\n    height: 35px;\n    color: red;\n    font-size: 30px;\n    text-align: center;\n    background-color: #000;\n    border-radius: 40% 40% 50% 50%;\n    position: relative;\n    letter-spacing: -2px;\n    left: -6px;\n    top: -14px;\n    transform: rotate(-55deg);\n}\n#footLeft {\n    background-color: #000;\n    width: 40px;\n    height: 50px;\n    position: absolute;\n    top: 305px;\n    left: 290px;\n    border-radius: 0% 60% 0 0;\n    z-index: 2;\n}\n#footLeft::after {\n    content: \"\";\n    display: block;\n    width: 43px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 0% 70% 0% 60%; \n    position: relative;\n    top: 40px;\n}\n#footRight {\n    background-color: #000;\n    width: 40px;\n    height: 50px;\n    position: absolute;\n    top: 305px;\n    right: 290px;\n    border-radius: 0% 60% 0 0;\n    z-index: 2;\n    transform: rotateY(180deg);\n}\n#footRight::after {\n    content: \"\";\n    display: block;\n    width: 43px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 0% 70% 0% 60%; \n    position: relative;\n    top: 40px;\n}\n#face {\n    width: 165px;\n    height: 130px;\n    box-shadow: rgb(102, 201, 253) 0 0 0 3px, rgb(173, 35, 96) 0 0 0 5px, rgb(81, 122, 183) 0 0 0 7px, rgb(250, 198, 70) 0 0 0 9px, rgb(128, 201, 111) 0 0 0 12px;\n    /* background-color: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 85%, rgba(157,220,254,1) 85%, rgba(157,220,254,1) 88%, rgba(173,35,96,1) 88%, rgba(173,35,96,1) 91%, rgba(81,122,183,1) 91%, rgba(81,122,183,1) 94%, rgba(250,198,70,1) 94%, rgba(250,198,70,1) 97%, rgba(128,201,111,1) 97%); */\n    border-radius: 98px 124px 82px 84px/104px 93px 66px 70px;\n    position: absolute;\n    left: 50%;\n    top: 105px;\n    transform: translatex(-50%);\n    z-index: 2;\n}\n#nose {\n    width: 28px;\n    border: 10px solid red;\n    border-color: black white white white;\n    border-bottom: none;\n    position: absolute;\n    left: 50%;\n    top: 175px;\n    transform: translatex(-50%); \n    z-index: 5;\n}\n#nose::before {\n    content: '';\n    display: block;\n    width: 28px;\n    height: 2px;\n    background-color: #000;\n    transform: translate(-10px,-12px);\n}\n#eyeLeft {\n    background-color: rgb(57,51, 63);\n    width: 47px;\n    height: 65px;\n    transform: rotate(50deg) translate(-50%);\n    border-radius: 45%;\n    position: absolute;\n    right: 50%;\n    top: 130px;\n    z-index: 3;\n}\n#eyeLeft::before {\n    content: '';\n    display: block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid white;\n    border-radius: 50%;\n    position: relative;\n    top: 14px;\n    left: 12px;\n}\n#eyeLeft::after {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 7px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    top: -5px;\n    left: 22px;\n    /* z-index: 3; */\n}\n#eyeRight {\n    background-color: rgb(57,51, 63);\n    width: 47px;\n    height: 65px;\n    transform: rotate(-50deg) translate(50%);\n    border-radius: 45%;\n    position: absolute;\n    left: 50%;\n    top: 130px;\n    z-index: 3;\n}\n#eyeRight::before {\n    content: '';\n    display: block;\n    width: 20px;\n    height: 20px;\n    border: 3px solid white;\n    border-radius: 50%;\n    position: relative;\n    top: 14px;\n    left: 9px;\n}\n#eyeRight::after {\n    content: '';\n    display: block;\n    width: 7px;\n    height: 7px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    top: -6px;\n    left: 17px;\n    /* z-index: 4; */\n}\n\n#mouth {\n    width: 50px;\n    height: 35px;\n    background-color: rgb(57, 57, 57);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-10px);\n    border-radius: 42%;\n    z-index: 4;\n}\n#mouth::before {\n    content: '';\n    display: block;\n    width: 40px;\n    height: 20px;\n    background-color: white;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    top: -10px;\n    transform: translate(-50%);\n}\n#mouth::after {\n    content: '';\n    display: block;\n    width: 40px;\n    height: 15px;\n    background-color: rgb(163,51,51);\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%);\n    top: 50%;\n    border-radius: 40%;\n}\n";
var time = 50;
var n = 0;
var text = '';

function play(speed) {
  var statue = setInterval(function () {
    text += string[n];
    output.innerHTML = text;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    n++;

    if (n > string.length - 1) {
      stop();
      n = string.length - 1;
    } else if (string[n] === '\n') {
      text += '<br>';
    } else if (string[n] === ' ') {
      text += '&nbsp;';
    }
  }, speed);
  return statue;
}

function stop() {
  for (var i = 0; i <= id; i++) {
    window.clearInterval(i);
  }
}

var id = play(time);

b1.onclick = function () {
  stop();
  time = 100;
  id = play(100);
};

b2.onclick = function () {
  stop();
  time = 50;
  id = play(50);
};

b3.onclick = function () {
  stop();
  time = 5;
  id = play(5);
};

b4.onclick = function () {
  stop();
  console.log(id);
};

b5.onclick = function () {
  id = play(time);
};
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56068" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map