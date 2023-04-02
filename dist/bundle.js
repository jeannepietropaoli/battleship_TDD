/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/fleetManager.js":
/*!*************************************!*\
  !*** ./src/modules/fleetManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FleetManager)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FleetManager = /*#__PURE__*/function () {
  function FleetManager() {
    _classCallCheck(this, FleetManager);
    this.ships = [];
  }
  _createClass(FleetManager, [{
    key: "addAShipToFleet",
    value: function addAShipToFleet(newShip) {
      this.ships.push(newShip);
    }
  }, {
    key: "removeShipFromFleet",
    value: function removeShipFromFleet(ship) {
      var index = this.ships.indexOf(ship);
      this.ships.splice(index, 1);
    }
  }, {
    key: "manageAttackOnShip",
    value: function manageAttackOnShip(attackedShip) {
      attackedShip.hit();
      if (attackedShip.isSunk()) this.removeShipFromFleet(attackedShip);
    }
  }, {
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return this.ships.length === 0;
    }
  }]);
  return FleetManager;
}();


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardRendering */ "./src/modules/gameboardRendering.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    // create both gameboards
    this.gameboardPlayer1 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.gameboardPlayer2 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // create both players
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameboardPlayer1, this.gameboardPlayer2, 'Player 1');
    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameboardPlayer2, this.gameboardPlayer1, 'Player 2');

    // create both gameboard renderers
    this.rendererPlayer1 = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer1);
    this.rendererPlayer2 = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer2);
    this.player1.gameboardRenderer = this.rendererPlayer1;
    this.player2.gameboardRenderer = this.rendererPlayer2;

    // create both DOM grids
    this.rendererPlayer1.displayGrid();
    this.rendererPlayer2.displayGrid();

    // populate player1 Gameboard with predetermined coordinates
    this.gameboardPlayer1.placeShip([[1, 1], [2, 1]]);
    this.gameboardPlayer1.placeShip([[5, 5], [6, 5], [7, 5]]);
    this.gameboardPlayer1.placeShip([[8, 8]]);

    // populate player2 Gameboard with predetermined coordinates
    this.gameboardPlayer2.placeShip([[4, 4], [5, 4]]);
    this.gameboardPlayer2.placeShip([[5, 5], [4, 5], [3, 5]]);
    this.gameboardPlayer2.placeShip([[7, 7]]);

    // choose first player
    this.player1.turn = true;

    // display ships on both grids  (for testing purposes)
    this.rendererPlayer1.displayShips();
    this.rendererPlayer2.displayShips();
  }
  _createClass(Game, [{
    key: "switchPlayersTurn",
    value: function switchPlayersTurn(currentPlayer, ennemyPlayer) {
      currentPlayer.turn = false;
      ennemyPlayer.turn = true;
    }
  }, {
    key: "identifyWinner",
    value: function identifyWinner() {
      return this.gameboardPlayer1.fleetManager.allShipsSunk() ? this.player2 : this.player1;
    }
  }, {
    key: "announceWinner",
    value: function announceWinner() {
      var winner = this.identifyWinner();
      alert("The winner is ".concat(winner.name, "!"));
    }
  }, {
    key: "bothPlayersHaveShips",
    value: function bothPlayersHaveShips() {
      return !this.gameboardPlayer1.fleetManager.allShipsSunk() && !this.gameboardPlayer2.fleetManager.allShipsSunk();
    }
  }, {
    key: "setPlayersRoles",
    value: function setPlayersRoles() {
      return this.player1.turn ? [this.player1, this.player2] : [this.player2, this.player1];
    }
  }, {
    key: "displaySquareResult",
    value: function displaySquareResult(ennemyPlayer, targetSquareElement, hitSquare) {
      if (hitSquare === 'hit') {
        ennemyPlayer.gameboardRenderer.displayHitSquare(targetSquareElement);
      } else if (hitSquare === 'missed') {
        ennemyPlayer.gameboardRenderer.displayMissedSquare(targetSquareElement);
      }
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$setPlayersRoles, _this$setPlayersRoles2, currentPlayer, ennemyPlayer, targetSquareElement, hitSquare;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.bothPlayersHaveShips()) {
                _context.next = 10;
                break;
              }
              _this$setPlayersRoles = this.setPlayersRoles(), _this$setPlayersRoles2 = _slicedToArray(_this$setPlayersRoles, 2), currentPlayer = _this$setPlayersRoles2[0], ennemyPlayer = _this$setPlayersRoles2[1];
              _context.next = 4;
              return ennemyPlayer.gameboardRenderer.chooseSquareToAttack();
            case 4:
              targetSquareElement = _context.sent;
              hitSquare = currentPlayer.ennemyGameboard.receiveAttack(JSON.parse(targetSquareElement.getAttribute('data-position')));
              this.displaySquareResult(ennemyPlayer, targetSquareElement, hitSquare);
              if (hitSquare === 'missed') this.switchPlayersTurn(currentPlayer, ennemyPlayer);
              _context.next = 0;
              break;
            case 10:
              this.announceWinner();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function start() {
        return _start.apply(this, arguments);
      }
      return start;
    }()
  }]);
  return Game;
}();


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "./src/modules/square.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _fleetManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fleetManager */ "./src/modules/fleetManager.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var gameboardXMax = 10;
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    var _this = this;
    _classCallCheck(this, Gameboard);
    this.xMax = gameboardXMax;
    this.yMax = this.xMax;
    this.board = function () {
      var board = [];
      for (var i = 0; i < _this.xMax; i++) {
        var row = [];
        board.push(row);
        for (var j = 0; j < _this.yMax; j++) {
          row.push(new _square__WEBPACK_IMPORTED_MODULE_0__["default"](j, i));
        }
      }
      return board;
    }();
    this.fleetManager = new _fleetManager__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
  _createClass(Gameboard, [{
    key: "isPositionValid",
    value: function isPositionValid(position) {
      var _this2 = this;
      return position.every(function (coordonates) {
        return _this2.isInsideGameboardLimits(coordonates) && _this2.isWater(coordonates);
      });
    }
  }, {
    key: "isInsideGameboardLimits",
    value: function isInsideGameboardLimits(coordonates) {
      var _coordonates = _slicedToArray(coordonates, 2),
        x = _coordonates[0],
        y = _coordonates[1];
      return x >= 0 && x < this.xMax && y >= 0 && y < this.yMax;
    }
  }, {
    key: "isWater",
    value: function isWater(coordonates) {
      var _coordonates2 = _slicedToArray(coordonates, 2),
        x = _coordonates2[0],
        y = _coordonates2[1];
      return this.board[x][y].shipReference === null;
    }
  }, {
    key: "turnWaterToShip",
    value: function turnWaterToShip(position, ship) {
      var _this3 = this;
      position.forEach(function (coordonates) {
        var _coordonates3 = _slicedToArray(coordonates, 2),
          x = _coordonates3[0],
          y = _coordonates3[1];
        _this3.board[x][y].shipReference = ship;
      });
    }
  }, {
    key: "placeShip",
    value: function placeShip(position) {
      if (this.isPositionValid(position)) {
        var ship = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](position);
        this.turnWaterToShip(position, ship);
        this.fleetManager.addAShipToFleet(ship);
        return ship;
      }
      throw new Error('invalid coordonates');
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coordonates) {
      var _coordonates4 = _slicedToArray(coordonates, 2),
        x = _coordonates4[0],
        y = _coordonates4[1];
      var targetSquare = this.board[x][y];
      if (!targetSquare.attacked) {
        targetSquare.attack();
        if (!this.isWater(coordonates)) {
          this.fleetManager.manageAttackOnShip(targetSquare.shipReference);
          return 'hit';
        }
        return 'missed';
      }
      return null;
    }
  }]);
  return Gameboard;
}();


/***/ }),

/***/ "./src/modules/gameboardRendering.js":
/*!*******************************************!*\
  !*** ./src/modules/gameboardRendering.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameboardRenderer)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GameboardRenderer = /*#__PURE__*/function () {
  function GameboardRenderer(gameboard) {
    _classCallCheck(this, GameboardRenderer);
    this.gameboard = gameboard;
    this.xMax = gameboard.xMax;
    this.yMax = gameboard.yMax;
    this.DOMGrid = document.createElement('div');
  }
  _createClass(GameboardRenderer, [{
    key: "displaySquare",
    value: function displaySquare(column, x, y) {
      var square = document.createElement('div');
      square.classList.add('square');
      column.appendChild(square);
      square.setAttribute('data-position', "[".concat(x, ",").concat(y, "]"));
      return square;
    }
  }, {
    key: "displayColumn",
    value: function displayColumn(columnNumber) {
      var column = document.createElement('div');
      column.classList.add("column".concat(columnNumber), 'column');
      this.DOMGrid.appendChild(column);
      return column;
    }
  }, {
    key: "displayGrid",
    value: function displayGrid() {
      document.querySelector('body').appendChild(this.DOMGrid);
      this.DOMGrid.classList = 'grid';
      for (var y = 0; y < this.yMax; y++) {
        var column = this.displayColumn(y);
        for (var x = 0; x < this.xMax; x++) {
          this.displaySquare(column, x, y);
        }
      }
    }
  }, {
    key: "squares",
    get: function get() {
      return Array.from(this.DOMGrid.querySelectorAll('.square'));
    }
  }, {
    key: "displayShips",
    value: function displayShips() {
      var _this = this;
      this.gameboard.fleetManager.ships.forEach(function (ship) {
        ship.position.forEach(function (coordonates) {
          _this.DOMGrid.querySelector("[data-position='".concat(JSON.stringify(coordonates), "']")).style.backgroundColor = 'red';
        });
      });
    }
  }, {
    key: "chooseSquareToAttack",
    value: function chooseSquareToAttack() {
      var _this2 = this;
      return new Promise(function (resolve) {
        _this2.DOMGrid.addEventListener('click', function (event) {
          var target = event.target;
          resolve(target);
        }, {
          once: true
        });
      });
    }
  }, {
    key: "getSquarePosition",
    value: function getSquarePosition(square) {
      return JSON.parse(square.getAttribute('data-position'));
    }
  }, {
    key: "displayMissedSquare",
    value: function displayMissedSquare(square) {
      square.style.backgroundColor = 'grey';
    }
  }, {
    key: "displayHitSquare",
    value: function displayHitSquare(square) {
      square.style.backgroundColor = 'lightgrey';
      square.classList.add('hit');
    }
  }]);
  return GameboardRenderer;
}();


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Player = /*#__PURE__*/function () {
  function Player(gameboard, ennemyGameboard, name) {
    _classCallCheck(this, Player);
    this.gameboard = gameboard;
    this.ennemyGameboard = ennemyGameboard;
    this.turn = false;
    this.name = name;
  }
  _createClass(Player, [{
    key: "chooseSquareToAttack",
    value: function chooseSquareToAttack() {}
  }, {
    key: "play",
    value: function play(targetPosition) {
      if (this.turn) {
        this.ennemyGameboard.receiveAttack(targetPosition);
        this.turn = false;
      }
    }
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(position) {
    _classCallCheck(this, Ship);
    this.hits = 0;
    this.sunk = false;
    this.position = position; // array of coordonates pair representing the ship on the gameboard
    this.length = position.length;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits >= this.length) this.sunk = true;
      return this.sunk;
    }
  }]);
  return Ship;
}();


/***/ }),

/***/ "./src/modules/square.js":
/*!*******************************!*\
  !*** ./src/modules/square.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Square)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Square = /*#__PURE__*/function () {
  function Square(x, y) {
    _classCallCheck(this, Square);
    this.x = x;
    this.y = y;
    this.coordonates = [x, y];
    this.shipReference = null;
    this.attacked = false;
  }
  _createClass(Square, [{
    key: "attack",
    value: function attack() {
      this.attacked = true;
    }
  }, {
    key: "isShip",
    value: function isShip() {
      return this.shipReference !== null;
    }
  }]);
  return Square;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.hit {\n  position: relative;\n}\n\n.hit::after {\n  content: 'X';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,uBAAuB;EACvB,OAAO;EACP,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC","sourcesContent":["body {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.hit {\n  position: relative;\n}\n\n.hit::after {\n  content: 'X';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
game.start();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNGO0FBRTFCLElBQU13RCxJQUFJLEdBQUcsSUFBSWpHLDZDQUFJLEVBQUU7QUFDdkJpRyxJQUFJLENBQUN6RCxLQUFLLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZmxlZXRNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZFJlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGbGVldE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBhZGRBU2hpcFRvRmxlZXQobmV3U2hpcCkge1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgfVxuXG4gIHJlbW92ZVNoaXBGcm9tRmxlZXQoc2hpcCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaGlwcy5pbmRleE9mKHNoaXApO1xuICAgIHRoaXMuc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIG1hbmFnZUF0dGFja09uU2hpcChhdHRhY2tlZFNoaXApIHtcbiAgICBhdHRhY2tlZFNoaXAuaGl0KCk7XG4gICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkgdGhpcy5yZW1vdmVTaGlwRnJvbUZsZWV0KGF0dGFja2VkU2hpcCk7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMubGVuZ3RoID09PSAwO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBHYW1lYm9hcmRSZW5kZXJlciBmcm9tICcuL2dhbWVib2FyZFJlbmRlcmluZyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNyZWF0ZSBib3RoIGdhbWVib2FyZHNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggcGxheWVyc1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoXG4gICAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEsXG4gICAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIsXG4gICAgICAnUGxheWVyIDEnXG4gICAgKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKFxuICAgICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyLFxuICAgICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLFxuICAgICAgJ1BsYXllciAyJ1xuICAgICk7XG5cbiAgICAvLyBjcmVhdGUgYm90aCBnYW1lYm9hcmQgcmVuZGVyZXJzXG4gICAgdGhpcy5yZW5kZXJlclBsYXllcjEgPSBuZXcgR2FtZWJvYXJkUmVuZGVyZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIxKTtcbiAgICB0aGlzLnJlbmRlcmVyUGxheWVyMiA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcih0aGlzLmdhbWVib2FyZFBsYXllcjIpO1xuICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmRSZW5kZXJlciA9IHRoaXMucmVuZGVyZXJQbGF5ZXIxO1xuICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmRSZW5kZXJlciA9IHRoaXMucmVuZGVyZXJQbGF5ZXIyO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggRE9NIGdyaWRzXG4gICAgdGhpcy5yZW5kZXJlclBsYXllcjEuZGlzcGxheUdyaWQoKTtcbiAgICB0aGlzLnJlbmRlcmVyUGxheWVyMi5kaXNwbGF5R3JpZCgpO1xuXG4gICAgLy8gcG9wdWxhdGUgcGxheWVyMSBHYW1lYm9hcmQgd2l0aCBwcmVkZXRlcm1pbmVkIGNvb3JkaW5hdGVzXG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMiwgMV0sXG4gICAgXSk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbXG4gICAgICBbNSwgNV0sXG4gICAgICBbNiwgNV0sXG4gICAgICBbNywgNV0sXG4gICAgXSk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbWzgsIDhdXSk7XG5cbiAgICAvLyBwb3B1bGF0ZSBwbGF5ZXIyIEdhbWVib2FyZCB3aXRoIHByZWRldGVybWluZWQgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtcbiAgICAgIFs0LCA0XSxcbiAgICAgIFs1LCA0XSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtcbiAgICAgIFs1LCA1XSxcbiAgICAgIFs0LCA1XSxcbiAgICAgIFszLCA1XSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtbNywgN11dKTtcblxuICAgIC8vIGNob29zZSBmaXJzdCBwbGF5ZXJcbiAgICB0aGlzLnBsYXllcjEudHVybiA9IHRydWU7XG5cbiAgICAvLyBkaXNwbGF5IHNoaXBzIG9uIGJvdGggZ3JpZHMgIChmb3IgdGVzdGluZyBwdXJwb3NlcylcbiAgICB0aGlzLnJlbmRlcmVyUGxheWVyMS5kaXNwbGF5U2hpcHMoKTtcbiAgICB0aGlzLnJlbmRlcmVyUGxheWVyMi5kaXNwbGF5U2hpcHMoKTtcbiAgfVxuXG4gIHN3aXRjaFBsYXllcnNUdXJuKGN1cnJlbnRQbGF5ZXIsIGVubmVteVBsYXllcikge1xuICAgIGN1cnJlbnRQbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgIGVubmVteVBsYXllci50dXJuID0gdHJ1ZTtcbiAgfVxuXG4gIGlkZW50aWZ5V2lubmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZFBsYXllcjEuZmxlZXRNYW5hZ2VyLmFsbFNoaXBzU3VuaygpXG4gICAgICA/IHRoaXMucGxheWVyMlxuICAgICAgOiB0aGlzLnBsYXllcjE7XG4gIH1cblxuICBhbm5vdW5jZVdpbm5lcigpIHtcbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmlkZW50aWZ5V2lubmVyKCk7XG4gICAgYWxlcnQoYFRoZSB3aW5uZXIgaXMgJHt3aW5uZXIubmFtZX0hYCk7XG4gIH1cblxuICBib3RoUGxheWVyc0hhdmVTaGlwcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuZ2FtZWJvYXJkUGxheWVyMS5mbGVldE1hbmFnZXIuYWxsU2hpcHNTdW5rKCkgJiZcbiAgICAgICF0aGlzLmdhbWVib2FyZFBsYXllcjIuZmxlZXRNYW5hZ2VyLmFsbFNoaXBzU3VuaygpXG4gICAgKTtcbiAgfVxuXG4gIHNldFBsYXllcnNSb2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIxLnR1cm5cbiAgICAgID8gW3RoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyXVxuICAgICAgOiBbdGhpcy5wbGF5ZXIyLCB0aGlzLnBsYXllcjFdO1xuICB9XG5cbiAgZGlzcGxheVNxdWFyZVJlc3VsdChlbm5lbXlQbGF5ZXIsIHRhcmdldFNxdWFyZUVsZW1lbnQsIGhpdFNxdWFyZSkge1xuICAgIGlmIChoaXRTcXVhcmUgPT09ICdoaXQnKSB7XG4gICAgICBlbm5lbXlQbGF5ZXIuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheUhpdFNxdWFyZSh0YXJnZXRTcXVhcmVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGhpdFNxdWFyZSA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGVubmVteVBsYXllci5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5TWlzc2VkU3F1YXJlKHRhcmdldFNxdWFyZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIHdoaWxlICh0aGlzLmJvdGhQbGF5ZXJzSGF2ZVNoaXBzKCkpIHtcbiAgICAgIGNvbnN0IFtjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXJdID0gdGhpcy5zZXRQbGF5ZXJzUm9sZXMoKTtcbiAgICAgIGNvbnN0IHRhcmdldFNxdWFyZUVsZW1lbnQgPVxuICAgICAgICBhd2FpdCBlbm5lbXlQbGF5ZXIuZ2FtZWJvYXJkUmVuZGVyZXIuY2hvb3NlU3F1YXJlVG9BdHRhY2soKTtcbiAgICAgIGNvbnN0IGhpdFNxdWFyZSA9IGN1cnJlbnRQbGF5ZXIuZW5uZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgIEpTT04ucGFyc2UodGFyZ2V0U3F1YXJlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSlcbiAgICAgICk7XG4gICAgICB0aGlzLmRpc3BsYXlTcXVhcmVSZXN1bHQoZW5uZW15UGxheWVyLCB0YXJnZXRTcXVhcmVFbGVtZW50LCBoaXRTcXVhcmUpO1xuICAgICAgaWYgKGhpdFNxdWFyZSA9PT0gJ21pc3NlZCcpXG4gICAgICAgIHRoaXMuc3dpdGNoUGxheWVyc1R1cm4oY3VycmVudFBsYXllciwgZW5uZW15UGxheWVyKTtcbiAgICB9XG4gICAgdGhpcy5hbm5vdW5jZVdpbm5lcigpO1xuICB9XG59XG4iLCJpbXBvcnQgU3F1YXJlIGZyb20gJy4vc3F1YXJlJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgRmxlZXRNYW5hZ2VyIGZyb20gJy4vZmxlZXRNYW5hZ2VyJztcblxuY29uc3QgZ2FtZWJvYXJkWE1heCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnhNYXggPSBnYW1lYm9hcmRYTWF4O1xuICAgIHRoaXMueU1heCA9IHRoaXMueE1heDtcbiAgICB0aGlzLmJvYXJkID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueE1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55TWF4OyBqKyspIHtcbiAgICAgICAgICByb3cucHVzaChuZXcgU3F1YXJlKGosIGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0pKCk7XG4gICAgdGhpcy5mbGVldE1hbmFnZXIgPSBuZXcgRmxlZXRNYW5hZ2VyKCk7XG4gIH1cblxuICBpc1Bvc2l0aW9uVmFsaWQocG9zaXRpb24pIHtcbiAgICByZXR1cm4gcG9zaXRpb24uZXZlcnkoXG4gICAgICAoY29vcmRvbmF0ZXMpID0+XG4gICAgICAgIHRoaXMuaXNJbnNpZGVHYW1lYm9hcmRMaW1pdHMoY29vcmRvbmF0ZXMpICYmIHRoaXMuaXNXYXRlcihjb29yZG9uYXRlcylcbiAgICApO1xuICB9XG5cbiAgaXNJbnNpZGVHYW1lYm9hcmRMaW1pdHMoY29vcmRvbmF0ZXMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZG9uYXRlcztcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLnhNYXggJiYgeSA+PSAwICYmIHkgPCB0aGlzLnlNYXg7XG4gIH1cblxuICBpc1dhdGVyKGNvb3Jkb25hdGVzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmRbeF1beV0uc2hpcFJlZmVyZW5jZSA9PT0gbnVsbDtcbiAgfVxuXG4gIHR1cm5XYXRlclRvU2hpcChwb3NpdGlvbiwgc2hpcCkge1xuICAgIHBvc2l0aW9uLmZvckVhY2goKGNvb3Jkb25hdGVzKSA9PiB7XG4gICAgICBjb25zdCBbeCwgeV0gPSBjb29yZG9uYXRlcztcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcFJlZmVyZW5jZSA9IHNoaXA7XG4gICAgfSk7XG4gIH1cblxuICBwbGFjZVNoaXAocG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5pc1Bvc2l0aW9uVmFsaWQocG9zaXRpb24pKSB7XG4gICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAocG9zaXRpb24pO1xuICAgICAgdGhpcy50dXJuV2F0ZXJUb1NoaXAocG9zaXRpb24sIHNoaXApO1xuICAgICAgdGhpcy5mbGVldE1hbmFnZXIuYWRkQVNoaXBUb0ZsZWV0KHNoaXApO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjb29yZG9uYXRlcycpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZG9uYXRlcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgIGNvbnN0IHRhcmdldFNxdWFyZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgaWYgKCF0YXJnZXRTcXVhcmUuYXR0YWNrZWQpIHtcbiAgICAgIHRhcmdldFNxdWFyZS5hdHRhY2soKTtcbiAgICAgIGlmICghdGhpcy5pc1dhdGVyKGNvb3Jkb25hdGVzKSkge1xuICAgICAgICB0aGlzLmZsZWV0TWFuYWdlci5tYW5hZ2VBdHRhY2tPblNoaXAodGFyZ2V0U3F1YXJlLnNoaXBSZWZlcmVuY2UpO1xuICAgICAgICByZXR1cm4gJ2hpdCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ21pc3NlZCc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmRSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMueE1heCA9IGdhbWVib2FyZC54TWF4O1xuICAgIHRoaXMueU1heCA9IGdhbWVib2FyZC55TWF4O1xuICAgIHRoaXMuRE9NR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB9XG5cbiAgZGlzcGxheVNxdWFyZShjb2x1bW4sIHgsIHkpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XG4gICAgY29sdW1uLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicsIGBbJHt4fSwke3l9XWApO1xuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cblxuICBkaXNwbGF5Q29sdW1uKGNvbHVtbk51bWJlcikge1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBjb2x1bW4ke2NvbHVtbk51bWJlcn1gLCAnY29sdW1uJyk7XG4gICAgdGhpcy5ET01HcmlkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGRpc3BsYXlHcmlkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZCh0aGlzLkRPTUdyaWQpO1xuICAgIHRoaXMuRE9NR3JpZC5jbGFzc0xpc3QgPSAnZ3JpZCc7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnlNYXg7IHkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5kaXNwbGF5Q29sdW1uKHkpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnhNYXg7IHgrKykge1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmUoY29sdW1uLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgc3F1YXJlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLkRPTUdyaWQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpKTtcbiAgfVxuXG4gIGRpc3BsYXlTaGlwcygpIHtcbiAgICB0aGlzLmdhbWVib2FyZC5mbGVldE1hbmFnZXIuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb29yZG9uYXRlcykgPT4ge1xuICAgICAgICB0aGlzLkRPTUdyaWQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcG9zaXRpb249JyR7SlNPTi5zdHJpbmdpZnkoY29vcmRvbmF0ZXMpfSddYFxuICAgICAgICApLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjaG9vc2VTcXVhcmVUb0F0dGFjaygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuRE9NR3JpZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG4gICAgICAgICAgcmVzb2x2ZSh0YXJnZXQpO1xuICAgICAgICB9LFxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNxdWFyZVBvc2l0aW9uKHNxdWFyZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSk7XG4gIH1cblxuICBkaXNwbGF5TWlzc2VkU3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gIH1cblxuICBkaXNwbGF5SGl0U3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgZW5uZW15R2FtZWJvYXJkLCBuYW1lKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5lbm5lbXlHYW1lYm9hcmQgPSBlbm5lbXlHYW1lYm9hcmQ7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGNob29zZVNxdWFyZVRvQXR0YWNrKCkge31cblxuICBwbGF5KHRhcmdldFBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMudHVybikge1xuICAgICAgdGhpcy5lbm5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXRQb3NpdGlvbik7XG4gICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAvLyBhcnJheSBvZiBjb29yZG9uYXRlcyBwYWlyIHJlcHJlc2VudGluZyB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gICAgdGhpcy5sZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29vcmRvbmF0ZXMgPSBbeCwgeV07XG4gICAgdGhpcy5zaGlwUmVmZXJlbmNlID0gbnVsbDtcbiAgICB0aGlzLmF0dGFja2VkID0gZmFsc2U7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5hdHRhY2tlZCA9IHRydWU7XG4gIH1cblxuICBpc1NoaXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcFJlZmVyZW5jZSAhPT0gbnVsbDtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBjb250ZW50OiAnWCc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmhpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdYJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0KCk7XG4iXSwibmFtZXMiOlsiRmxlZXRNYW5hZ2VyIiwiX2NsYXNzQ2FsbENoZWNrIiwic2hpcHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImFkZEFTaGlwVG9GbGVldCIsIm5ld1NoaXAiLCJwdXNoIiwicmVtb3ZlU2hpcEZyb21GbGVldCIsInNoaXAiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJtYW5hZ2VBdHRhY2tPblNoaXAiLCJhdHRhY2tlZFNoaXAiLCJoaXQiLCJpc1N1bmsiLCJhbGxTaGlwc1N1bmsiLCJsZW5ndGgiLCJkZWZhdWx0IiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9pIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJHYW1lYm9hcmQiLCJHYW1lYm9hcmRSZW5kZXJlciIsIlBsYXllciIsIkdhbWUiLCJnYW1lYm9hcmRQbGF5ZXIxIiwiZ2FtZWJvYXJkUGxheWVyMiIsInBsYXllcjEiLCJwbGF5ZXIyIiwicmVuZGVyZXJQbGF5ZXIxIiwicmVuZGVyZXJQbGF5ZXIyIiwiZ2FtZWJvYXJkUmVuZGVyZXIiLCJkaXNwbGF5R3JpZCIsInBsYWNlU2hpcCIsInR1cm4iLCJkaXNwbGF5U2hpcHMiLCJzd2l0Y2hQbGF5ZXJzVHVybiIsImN1cnJlbnRQbGF5ZXIiLCJlbm5lbXlQbGF5ZXIiLCJpZGVudGlmeVdpbm5lciIsImZsZWV0TWFuYWdlciIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwiYWxlcnQiLCJjb25jYXQiLCJib3RoUGxheWVyc0hhdmVTaGlwcyIsInNldFBsYXllcnNSb2xlcyIsImRpc3BsYXlTcXVhcmVSZXN1bHQiLCJ0YXJnZXRTcXVhcmVFbGVtZW50IiwiaGl0U3F1YXJlIiwiZGlzcGxheUhpdFNxdWFyZSIsImRpc3BsYXlNaXNzZWRTcXVhcmUiLCJfc3RhcnQiLCJfY2FsbGVlIiwiX3RoaXMkc2V0UGxheWVyc1JvbGVzIiwiX3RoaXMkc2V0UGxheWVyc1JvbGVzMiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjaG9vc2VTcXVhcmVUb0F0dGFjayIsImVubmVteUdhbWVib2FyZCIsInJlY2VpdmVBdHRhY2siLCJKU09OIiwicGFyc2UiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydCIsIlNxdWFyZSIsIlNoaXAiLCJnYW1lYm9hcmRYTWF4IiwiX3RoaXMiLCJ4TWF4IiwieU1heCIsImJvYXJkIiwicm93IiwiaiIsImlzUG9zaXRpb25WYWxpZCIsInBvc2l0aW9uIiwiX3RoaXMyIiwiZXZlcnkiLCJjb29yZG9uYXRlcyIsImlzSW5zaWRlR2FtZWJvYXJkTGltaXRzIiwiaXNXYXRlciIsIl9jb29yZG9uYXRlcyIsIngiLCJ5IiwiX2Nvb3Jkb25hdGVzMiIsInNoaXBSZWZlcmVuY2UiLCJ0dXJuV2F0ZXJUb1NoaXAiLCJfdGhpczMiLCJfY29vcmRvbmF0ZXMzIiwiX2Nvb3Jkb25hdGVzNCIsInRhcmdldFNxdWFyZSIsImF0dGFja2VkIiwiYXR0YWNrIiwiZ2FtZWJvYXJkIiwiRE9NR3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXlTcXVhcmUiLCJjb2x1bW4iLCJzcXVhcmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXlDb2x1bW4iLCJjb2x1bW5OdW1iZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0cmluZ2lmeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25jZSIsImdldFNxdWFyZVBvc2l0aW9uIiwicGxheSIsInRhcmdldFBvc2l0aW9uIiwiaGl0cyIsInN1bmsiLCJpc1NoaXAiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==