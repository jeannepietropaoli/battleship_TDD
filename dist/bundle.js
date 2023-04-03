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

    // create both players and set player1 as first player
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameboardPlayer1, 'Player 1');
    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameboardPlayer2, 'Player 2');
    this.player1.turn = true;
    this.player1.ennemy = this.player2;
    this.player2.ennemy = this.player1;

    // create both gameboard renderers
    this.player1.gameboardRenderer = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer1);
    this.player2.gameboardRenderer = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer2);

    // create both DOM grids
    this.player1.gameboardRenderer.displayGrid();
    this.player2.gameboardRenderer.displayGrid();
    console.log(this.player1.gameboard);
    // populate player1 Gameboard with predetermined coordinates
    this.gameboardPlayer1.placeShip([[1, 1], [2, 1]]);
    this.gameboardPlayer1.placeShip([[5, 5], [6, 5], [7, 5]]);
    this.gameboardPlayer1.placeShip([[8, 8]]);

    // populate player2 Gameboard with predetermined coordinates
    this.gameboardPlayer2.placeShip([[4, 4], [5, 4]]);
    this.gameboardPlayer2.placeShip([[5, 5], [4, 5], [3, 5]]);
    this.gameboardPlayer2.placeShip([[7, 7]]);

    // display ships on both grids  (for testing purposes)
    this.player1.gameboardRenderer.displayShips();
    this.player2.gameboardRenderer.displayShips();
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
              return currentPlayer.chooseTarget();
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
      return 'already attacked square';
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

    // for testing purposes
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
    key: "clickOnSquare",
    value: function clickOnSquare() {
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Player = /*#__PURE__*/function () {
  function Player(gameboard, name) {
    _classCallCheck(this, Player);
    this.gameboard = gameboard;
    this.name = name;
    this.turn = false;
  }
  _createClass(Player, [{
    key: "chooseTarget",
    value: function () {
      var _chooseTarget = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var square;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.ennemy.gameboardRenderer.clickOnSquare();
            case 2:
              square = _context.sent;
              return _context.abrupt("return", square);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function chooseTarget() {
        return _chooseTarget.apply(this, arguments);
      }
      return chooseTarget;
    }()
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

// fleetManager
// square
// ship
// player
// gameboard Renderer
// gameboard
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0Y7QUFFMUIsSUFBTXFELElBQUksR0FBRyxJQUFJaEcsNkNBQUksRUFBRTtBQUN2QmdHLElBQUksQ0FBQ3RELEtBQUssRUFBRTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZmxlZXRNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZFJlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGbGVldE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBhZGRBU2hpcFRvRmxlZXQobmV3U2hpcCkge1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgfVxuXG4gIHJlbW92ZVNoaXBGcm9tRmxlZXQoc2hpcCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zaGlwcy5pbmRleE9mKHNoaXApO1xuICAgIHRoaXMuc2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIG1hbmFnZUF0dGFja09uU2hpcChhdHRhY2tlZFNoaXApIHtcbiAgICBhdHRhY2tlZFNoaXAuaGl0KCk7XG4gICAgaWYgKGF0dGFja2VkU2hpcC5pc1N1bmsoKSkgdGhpcy5yZW1vdmVTaGlwRnJvbUZsZWV0KGF0dGFja2VkU2hpcCk7XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMubGVuZ3RoID09PSAwO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBHYW1lYm9hcmRSZW5kZXJlciBmcm9tICcuL2dhbWVib2FyZFJlbmRlcmluZyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNyZWF0ZSBib3RoIGdhbWVib2FyZHNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggcGxheWVycyBhbmQgc2V0IHBsYXllcjEgYXMgZmlyc3QgcGxheWVyXG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcih0aGlzLmdhbWVib2FyZFBsYXllcjEsICdQbGF5ZXIgMScpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIyLCAnUGxheWVyIDInKTtcbiAgICB0aGlzLnBsYXllcjEudHVybiA9IHRydWU7XG5cbiAgICB0aGlzLnBsYXllcjEuZW5uZW15ID0gdGhpcy5wbGF5ZXIyO1xuICAgIHRoaXMucGxheWVyMi5lbm5lbXkgPSB0aGlzLnBsYXllcjE7XG5cbiAgICAvLyBjcmVhdGUgYm90aCBnYW1lYm9hcmQgcmVuZGVyZXJzXG4gICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZFJlbmRlcmVyID0gbmV3IEdhbWVib2FyZFJlbmRlcmVyKFxuICAgICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxXG4gICAgKTtcbiAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkUmVuZGVyZXIgPSBuZXcgR2FtZWJvYXJkUmVuZGVyZXIoXG4gICAgICB0aGlzLmdhbWVib2FyZFBsYXllcjJcbiAgICApO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggRE9NIGdyaWRzXG4gICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlHcmlkKCk7XG4gICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlHcmlkKCk7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkKTtcbiAgICAvLyBwb3B1bGF0ZSBwbGF5ZXIxIEdhbWVib2FyZCB3aXRoIHByZWRldGVybWluZWQgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEucGxhY2VTaGlwKFtcbiAgICAgIFsxLCAxXSxcbiAgICAgIFsyLCAxXSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEucGxhY2VTaGlwKFtcbiAgICAgIFs1LCA1XSxcbiAgICAgIFs2LCA1XSxcbiAgICAgIFs3LCA1XSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEucGxhY2VTaGlwKFtbOCwgOF1dKTtcblxuICAgIC8vIHBvcHVsYXRlIHBsYXllcjIgR2FtZWJvYXJkIHdpdGggcHJlZGV0ZXJtaW5lZCBjb29yZGluYXRlc1xuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMi5wbGFjZVNoaXAoW1xuICAgICAgWzQsIDRdLFxuICAgICAgWzUsIDRdLFxuICAgIF0pO1xuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMi5wbGFjZVNoaXAoW1xuICAgICAgWzUsIDVdLFxuICAgICAgWzQsIDVdLFxuICAgICAgWzMsIDVdLFxuICAgIF0pO1xuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMi5wbGFjZVNoaXAoW1s3LCA3XV0pO1xuXG4gICAgLy8gZGlzcGxheSBzaGlwcyBvbiBib3RoIGdyaWRzICAoZm9yIHRlc3RpbmcgcHVycG9zZXMpXG4gICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlTaGlwcygpO1xuICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5U2hpcHMoKTtcbiAgfVxuXG4gIHN3aXRjaFBsYXllcnNUdXJuKGN1cnJlbnRQbGF5ZXIsIGVubmVteVBsYXllcikge1xuICAgIGN1cnJlbnRQbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgIGVubmVteVBsYXllci50dXJuID0gdHJ1ZTtcbiAgfVxuXG4gIGlkZW50aWZ5V2lubmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZFBsYXllcjEuZmxlZXRNYW5hZ2VyLmFsbFNoaXBzU3VuaygpXG4gICAgICA/IHRoaXMucGxheWVyMlxuICAgICAgOiB0aGlzLnBsYXllcjE7XG4gIH1cblxuICBhbm5vdW5jZVdpbm5lcigpIHtcbiAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmlkZW50aWZ5V2lubmVyKCk7XG4gICAgYWxlcnQoYFRoZSB3aW5uZXIgaXMgJHt3aW5uZXIubmFtZX0hYCk7XG4gIH1cblxuICBib3RoUGxheWVyc0hhdmVTaGlwcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuZ2FtZWJvYXJkUGxheWVyMS5mbGVldE1hbmFnZXIuYWxsU2hpcHNTdW5rKCkgJiZcbiAgICAgICF0aGlzLmdhbWVib2FyZFBsYXllcjIuZmxlZXRNYW5hZ2VyLmFsbFNoaXBzU3VuaygpXG4gICAgKTtcbiAgfVxuXG4gIHNldFBsYXllcnNSb2xlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIxLnR1cm5cbiAgICAgID8gW3RoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIyXVxuICAgICAgOiBbdGhpcy5wbGF5ZXIyLCB0aGlzLnBsYXllcjFdO1xuICB9XG5cbiAgZGlzcGxheVNxdWFyZVJlc3VsdChlbm5lbXlQbGF5ZXIsIHRhcmdldFNxdWFyZUVsZW1lbnQsIGhpdFNxdWFyZSkge1xuICAgIGlmIChoaXRTcXVhcmUgPT09ICdoaXQnKSB7XG4gICAgICBlbm5lbXlQbGF5ZXIuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheUhpdFNxdWFyZSh0YXJnZXRTcXVhcmVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGhpdFNxdWFyZSA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGVubmVteVBsYXllci5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5TWlzc2VkU3F1YXJlKHRhcmdldFNxdWFyZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIHdoaWxlICh0aGlzLmJvdGhQbGF5ZXJzSGF2ZVNoaXBzKCkpIHtcbiAgICAgIGNvbnN0IFtjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXJdID0gdGhpcy5zZXRQbGF5ZXJzUm9sZXMoKTtcbiAgICAgIGNvbnN0IHRhcmdldFNxdWFyZUVsZW1lbnQgPSBhd2FpdCBjdXJyZW50UGxheWVyLmNob29zZVRhcmdldCgpO1xuICAgICAgY29uc3QgaGl0U3F1YXJlID0gY3VycmVudFBsYXllci5lbm5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgSlNPTi5wYXJzZSh0YXJnZXRTcXVhcmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZGlzcGxheVNxdWFyZVJlc3VsdChlbm5lbXlQbGF5ZXIsIHRhcmdldFNxdWFyZUVsZW1lbnQsIGhpdFNxdWFyZSk7XG4gICAgICBpZiAoaGl0U3F1YXJlID09PSAnbWlzc2VkJylcbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXJzVHVybihjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLmFubm91bmNlV2lubmVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCBTcXVhcmUgZnJvbSAnLi9zcXVhcmUnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBGbGVldE1hbmFnZXIgZnJvbSAnLi9mbGVldE1hbmFnZXInO1xuXG5jb25zdCBnYW1lYm9hcmRYTWF4ID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueE1heCA9IGdhbWVib2FyZFhNYXg7XG4gICAgdGhpcy55TWF4ID0gdGhpcy54TWF4O1xuICAgIHRoaXMuYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54TWF4OyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnlNYXg7IGorKykge1xuICAgICAgICAgIHJvdy5wdXNoKG5ldyBTcXVhcmUoaiwgaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSkoKTtcbiAgICB0aGlzLmZsZWV0TWFuYWdlciA9IG5ldyBGbGVldE1hbmFnZXIoKTtcbiAgfVxuXG4gIGlzUG9zaXRpb25WYWxpZChwb3NpdGlvbikge1xuICAgIHJldHVybiBwb3NpdGlvbi5ldmVyeShcbiAgICAgIChjb29yZG9uYXRlcykgPT5cbiAgICAgICAgdGhpcy5pc0luc2lkZUdhbWVib2FyZExpbWl0cyhjb29yZG9uYXRlcykgJiYgdGhpcy5pc1dhdGVyKGNvb3Jkb25hdGVzKVxuICAgICk7XG4gIH1cblxuICBpc0luc2lkZUdhbWVib2FyZExpbWl0cyhjb29yZG9uYXRlcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMueE1heCAmJiB5ID49IDAgJiYgeSA8IHRoaXMueU1heDtcbiAgfVxuXG4gIGlzV2F0ZXIoY29vcmRvbmF0ZXMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZG9uYXRlcztcbiAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlID09PSBudWxsO1xuICB9XG5cbiAgdHVybldhdGVyVG9TaGlwKHBvc2l0aW9uLCBzaGlwKSB7XG4gICAgcG9zaXRpb24uZm9yRWFjaCgoY29vcmRvbmF0ZXMpID0+IHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlID0gc2hpcDtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYWNlU2hpcChwb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzUG9zaXRpb25WYWxpZChwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChwb3NpdGlvbik7XG4gICAgICB0aGlzLnR1cm5XYXRlclRvU2hpcChwb3NpdGlvbiwgc2hpcCk7XG4gICAgICB0aGlzLmZsZWV0TWFuYWdlci5hZGRBU2hpcFRvRmxlZXQoc2hpcCk7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvb3Jkb25hdGVzJyk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3Jkb25hdGVzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZiAoIXRhcmdldFNxdWFyZS5hdHRhY2tlZCkge1xuICAgICAgdGFyZ2V0U3F1YXJlLmF0dGFjaygpO1xuICAgICAgaWYgKCF0aGlzLmlzV2F0ZXIoY29vcmRvbmF0ZXMpKSB7XG4gICAgICAgIHRoaXMuZmxlZXRNYW5hZ2VyLm1hbmFnZUF0dGFja09uU2hpcCh0YXJnZXRTcXVhcmUuc2hpcFJlZmVyZW5jZSk7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgcmV0dXJuICdhbHJlYWR5IGF0dGFja2VkIHNxdWFyZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy54TWF4ID0gZ2FtZWJvYXJkLnhNYXg7XG4gICAgdGhpcy55TWF4ID0gZ2FtZWJvYXJkLnlNYXg7XG4gICAgdGhpcy5ET01HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICBkaXNwbGF5U3F1YXJlKGNvbHVtbiwgeCwgeSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJywgYFske3h9LCR7eX1dYCk7XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIGRpc3BsYXlDb2x1bW4oY29sdW1uTnVtYmVyKSB7XG4gICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGNvbHVtbiR7Y29sdW1uTnVtYmVyfWAsICdjb2x1bW4nKTtcbiAgICB0aGlzLkRPTUdyaWQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG5cbiAgZGlzcGxheUdyaWQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMuRE9NR3JpZCk7XG4gICAgdGhpcy5ET01HcmlkLmNsYXNzTGlzdCA9ICdncmlkJztcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMueU1heDsgeSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmRpc3BsYXlDb2x1bW4oeSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMueE1heDsgeCsrKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZShjb2x1bW4sIHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBzcXVhcmVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuRE9NR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9XG5cbiAgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgZGlzcGxheVNoaXBzKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkLmZsZWV0TWFuYWdlci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvb3Jkb25hdGVzKSA9PiB7XG4gICAgICAgIHRoaXMuRE9NR3JpZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1wb3NpdGlvbj0nJHtKU09OLnN0cmluZ2lmeShjb29yZG9uYXRlcyl9J11gXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrT25TcXVhcmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLkRPTUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICAgIHJlc29sdmUodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5TWlzc2VkU3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gIH1cblxuICBkaXNwbGF5SGl0U3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgbmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBjaG9vc2VUYXJnZXQoKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gYXdhaXQgdGhpcy5lbm5lbXkuZ2FtZWJvYXJkUmVuZGVyZXIuY2xpY2tPblNxdWFyZSgpO1xuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAvLyBhcnJheSBvZiBjb29yZG9uYXRlcyBwYWlyIHJlcHJlc2VudGluZyB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gICAgdGhpcy5sZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29vcmRvbmF0ZXMgPSBbeCwgeV07XG4gICAgdGhpcy5zaGlwUmVmZXJlbmNlID0gbnVsbDtcbiAgICB0aGlzLmF0dGFja2VkID0gZmFsc2U7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5hdHRhY2tlZCA9IHRydWU7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1gnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBjb250ZW50OiAnWCc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydCgpO1xuXG4vLyBmbGVldE1hbmFnZXJcbi8vIHNxdWFyZVxuLy8gc2hpcFxuLy8gcGxheWVyXG4vLyBnYW1lYm9hcmQgUmVuZGVyZXJcbi8vIGdhbWVib2FyZFxuIl0sIm5hbWVzIjpbIkZsZWV0TWFuYWdlciIsIl9jbGFzc0NhbGxDaGVjayIsInNoaXBzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRBU2hpcFRvRmxlZXQiLCJuZXdTaGlwIiwicHVzaCIsInJlbW92ZVNoaXBGcm9tRmxlZXQiLCJzaGlwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibWFuYWdlQXR0YWNrT25TaGlwIiwiYXR0YWNrZWRTaGlwIiwiaGl0IiwiaXNTdW5rIiwiYWxsU2hpcHNTdW5rIiwibGVuZ3RoIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwiZGVzYyIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiR2FtZWJvYXJkIiwiR2FtZWJvYXJkUmVuZGVyZXIiLCJQbGF5ZXIiLCJHYW1lIiwiZ2FtZWJvYXJkUGxheWVyMSIsImdhbWVib2FyZFBsYXllcjIiLCJwbGF5ZXIxIiwicGxheWVyMiIsInR1cm4iLCJlbm5lbXkiLCJnYW1lYm9hcmRSZW5kZXJlciIsImRpc3BsYXlHcmlkIiwiY29uc29sZSIsImxvZyIsImdhbWVib2FyZCIsInBsYWNlU2hpcCIsImRpc3BsYXlTaGlwcyIsInN3aXRjaFBsYXllcnNUdXJuIiwiY3VycmVudFBsYXllciIsImVubmVteVBsYXllciIsImlkZW50aWZ5V2lubmVyIiwiZmxlZXRNYW5hZ2VyIiwiYW5ub3VuY2VXaW5uZXIiLCJ3aW5uZXIiLCJhbGVydCIsImNvbmNhdCIsImJvdGhQbGF5ZXJzSGF2ZVNoaXBzIiwic2V0UGxheWVyc1JvbGVzIiwiZGlzcGxheVNxdWFyZVJlc3VsdCIsInRhcmdldFNxdWFyZUVsZW1lbnQiLCJoaXRTcXVhcmUiLCJkaXNwbGF5SGl0U3F1YXJlIiwiZGlzcGxheU1pc3NlZFNxdWFyZSIsIl9zdGFydCIsIl9jYWxsZWUiLCJfdGhpcyRzZXRQbGF5ZXJzUm9sZXMiLCJfdGhpcyRzZXRQbGF5ZXJzUm9sZXMyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNob29zZVRhcmdldCIsImVubmVteUdhbWVib2FyZCIsInJlY2VpdmVBdHRhY2siLCJKU09OIiwicGFyc2UiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydCIsIlNxdWFyZSIsIlNoaXAiLCJnYW1lYm9hcmRYTWF4IiwiX3RoaXMiLCJ4TWF4IiwieU1heCIsImJvYXJkIiwicm93IiwiaiIsImlzUG9zaXRpb25WYWxpZCIsInBvc2l0aW9uIiwiX3RoaXMyIiwiZXZlcnkiLCJjb29yZG9uYXRlcyIsImlzSW5zaWRlR2FtZWJvYXJkTGltaXRzIiwiaXNXYXRlciIsIl9jb29yZG9uYXRlcyIsIngiLCJ5IiwiX2Nvb3Jkb25hdGVzMiIsInNoaXBSZWZlcmVuY2UiLCJ0dXJuV2F0ZXJUb1NoaXAiLCJfdGhpczMiLCJfY29vcmRvbmF0ZXMzIiwiX2Nvb3Jkb25hdGVzNCIsInRhcmdldFNxdWFyZSIsImF0dGFja2VkIiwiYXR0YWNrIiwiRE9NR3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXlTcXVhcmUiLCJjb2x1bW4iLCJzcXVhcmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXlDb2x1bW4iLCJjb2x1bW5OdW1iZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0cmluZ2lmeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2tPblNxdWFyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uY2UiLCJfY2hvb3NlVGFyZ2V0IiwiaGl0cyIsInN1bmsiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==