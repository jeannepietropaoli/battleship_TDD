/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/computer.js":
/*!*********************************!*\
  !*** ./src/modules/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Computer = /*#__PURE__*/function (_Player) {
  _inherits(Computer, _Player);
  var _super = _createSuper(Computer);
  function Computer(gameboard) {
    var _this;
    _classCallCheck(this, Computer);
    _this = _super.call(this, gameboard, 'Computer');
    _this.delayBeforePlaying = 1000;
    return _this;
  }
  _createClass(Computer, [{
    key: "chooseTarget",
    value: function chooseTarget() {
      var _this2 = this;
      var squares = this.ennemy.gameboardRenderer.squares;
      var randomIndex = Math.floor(Math.random() * squares.length);
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(squares[randomIndex]);
        }, _this2.delayBeforePlaying);
      });
    }
  }]);
  return Computer;
}(_player__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

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
    this.gameboardRendererPlayer1 = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer1);
    this.gameboardRendererPlayer2 = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer2);
    this.player1.gameboardRenderer = this.gameboardRendererPlayer1;
    this.player2.gameboardRenderer = this.gameboardRendererPlayer2;

    // create both DOM grids
    this.player1.gameboardRenderer.displayGrid();
    this.player2.gameboardRenderer.displayGrid();

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
              hitSquare = ennemyPlayer.gameboard.receiveAttack(JSON.parse(targetSquareElement.getAttribute('data-position')));
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

/***/ "./src/modules/gameAgainstComputer.js":
/*!********************************************!*\
  !*** ./src/modules/gameAgainstComputer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameAgainstComputer)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ "./src/modules/computer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var GameAgainstComputer = /*#__PURE__*/function (_Game) {
  _inherits(GameAgainstComputer, _Game);
  var _super = _createSuper(GameAgainstComputer);
  function GameAgainstComputer() {
    var _this;
    _classCallCheck(this, GameAgainstComputer);
    _this = _super.call(this);
    _this.player2 = new _computer__WEBPACK_IMPORTED_MODULE_1__["default"](_this.gameboardPlayer2);
    _this.player1.ennemy = _this.player2;
    _this.player2.ennemy = _this.player1;
    _this.player2.gameboardRenderer = _this.gameboardRendererPlayer2;
    return _this;
  }
  return _createClass(GameAgainstComputer);
}(_game__WEBPACK_IMPORTED_MODULE_0__["default"]);


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
/* harmony import */ var _gameAgainstComputer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameAgainstComputer */ "./src/modules/gameAgainstComputer.js");



var game = new _gameAgainstComputer__WEBPACK_IMPORTED_MODULE_2__["default"]();
console.log(game.player1);
console.log(game.player2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNGO0FBQzhCO0FBRXhELElBQU1tRCxJQUFJLEdBQUcsSUFBSXJELDREQUFtQixFQUFFO0FBQ3RDc0QsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ3hGLE9BQU8sQ0FBQztBQUN6QnlGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUN2RixPQUFPLENBQUM7QUFDekJ1RixJQUFJLENBQUN0RCxLQUFLLEVBQUU7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZmxlZXRNYW5hZ2VyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2dhbWVBZ2FpbnN0Q29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmRSZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvc3F1YXJlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkKSB7XG4gICAgc3VwZXIoZ2FtZWJvYXJkLCAnQ29tcHV0ZXInKTtcbiAgICB0aGlzLmRlbGF5QmVmb3JlUGxheWluZyA9IDEwMDA7XG4gIH1cblxuICBjaG9vc2VUYXJnZXQoKSB7XG4gICAgY29uc3QgeyBzcXVhcmVzIH0gPSB0aGlzLmVubmVteS5nYW1lYm9hcmRSZW5kZXJlcjtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNxdWFyZXMubGVuZ3RoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKHNxdWFyZXNbcmFuZG9tSW5kZXhdKTtcbiAgICAgIH0sIHRoaXMuZGVsYXlCZWZvcmVQbGF5aW5nKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxlZXRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgYWRkQVNoaXBUb0ZsZWV0KG5ld1NoaXApIHtcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gIH1cblxuICByZW1vdmVTaGlwRnJvbUZsZWV0KHNoaXApIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICB0aGlzLnNoaXBzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBtYW5hZ2VBdHRhY2tPblNoaXAoYXR0YWNrZWRTaGlwKSB7XG4gICAgYXR0YWNrZWRTaGlwLmhpdCgpO1xuICAgIGlmIChhdHRhY2tlZFNoaXAuaXNTdW5rKCkpIHRoaXMucmVtb3ZlU2hpcEZyb21GbGVldChhdHRhY2tlZFNoaXApO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgR2FtZWJvYXJkUmVuZGVyZXIgZnJvbSAnLi9nYW1lYm9hcmRSZW5kZXJpbmcnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBjcmVhdGUgYm90aCBnYW1lYm9hcmRzXG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMiA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIC8vIGNyZWF0ZSBib3RoIHBsYXllcnMgYW5kIHNldCBwbGF5ZXIxIGFzIGZpcnN0IHBsYXllclxuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIxLCAnUGxheWVyIDEnKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZWJvYXJkUGxheWVyMiwgJ1BsYXllciAyJyk7XG4gICAgdGhpcy5wbGF5ZXIxLnR1cm4gPSB0cnVlO1xuXG4gICAgdGhpcy5wbGF5ZXIxLmVubmVteSA9IHRoaXMucGxheWVyMjtcbiAgICB0aGlzLnBsYXllcjIuZW5uZW15ID0gdGhpcy5wbGF5ZXIxO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggZ2FtZWJvYXJkIHJlbmRlcmVyc1xuICAgIHRoaXMuZ2FtZWJvYXJkUmVuZGVyZXJQbGF5ZXIxID0gbmV3IEdhbWVib2FyZFJlbmRlcmVyKFxuICAgICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxXG4gICAgKTtcbiAgICB0aGlzLmdhbWVib2FyZFJlbmRlcmVyUGxheWVyMiA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcihcbiAgICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMlxuICAgICk7XG5cbiAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkUmVuZGVyZXIgPSB0aGlzLmdhbWVib2FyZFJlbmRlcmVyUGxheWVyMTtcbiAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkUmVuZGVyZXIgPSB0aGlzLmdhbWVib2FyZFJlbmRlcmVyUGxheWVyMjtcblxuICAgIC8vIGNyZWF0ZSBib3RoIERPTSBncmlkc1xuICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5R3JpZCgpO1xuICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5R3JpZCgpO1xuXG4gICAgLy8gcG9wdWxhdGUgcGxheWVyMSBHYW1lYm9hcmQgd2l0aCBwcmVkZXRlcm1pbmVkIGNvb3JkaW5hdGVzXG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbXG4gICAgICBbMSwgMV0sXG4gICAgICBbMiwgMV0sXG4gICAgXSk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbXG4gICAgICBbNSwgNV0sXG4gICAgICBbNiwgNV0sXG4gICAgICBbNywgNV0sXG4gICAgXSk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLnBsYWNlU2hpcChbWzgsIDhdXSk7XG5cbiAgICAvLyBwb3B1bGF0ZSBwbGF5ZXIyIEdhbWVib2FyZCB3aXRoIHByZWRldGVybWluZWQgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtcbiAgICAgIFs0LCA0XSxcbiAgICAgIFs1LCA0XSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtcbiAgICAgIFs1LCA1XSxcbiAgICAgIFs0LCA1XSxcbiAgICAgIFszLCA1XSxcbiAgICBdKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucGxhY2VTaGlwKFtbNywgN11dKTtcblxuICAgIC8vIGRpc3BsYXkgc2hpcHMgb24gYm90aCBncmlkcyAgKGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmRSZW5kZXJlci5kaXNwbGF5U2hpcHMoKTtcbiAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheVNoaXBzKCk7XG4gIH1cblxuICBzd2l0Y2hQbGF5ZXJzVHVybihjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXIpIHtcbiAgICBjdXJyZW50UGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICBlbm5lbXlQbGF5ZXIudHVybiA9IHRydWU7XG4gIH1cblxuICBpZGVudGlmeVdpbm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLmZsZWV0TWFuYWdlci5hbGxTaGlwc1N1bmsoKVxuICAgICAgPyB0aGlzLnBsYXllcjJcbiAgICAgIDogdGhpcy5wbGF5ZXIxO1xuICB9XG5cbiAgYW5ub3VuY2VXaW5uZXIoKSB7XG4gICAgY29uc3Qgd2lubmVyID0gdGhpcy5pZGVudGlmeVdpbm5lcigpO1xuICAgIGFsZXJ0KGBUaGUgd2lubmVyIGlzICR7d2lubmVyLm5hbWV9IWApO1xuICB9XG5cbiAgYm90aFBsYXllcnNIYXZlU2hpcHMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmdhbWVib2FyZFBsYXllcjEuZmxlZXRNYW5hZ2VyLmFsbFNoaXBzU3VuaygpICYmXG4gICAgICAhdGhpcy5nYW1lYm9hcmRQbGF5ZXIyLmZsZWV0TWFuYWdlci5hbGxTaGlwc1N1bmsoKVxuICAgICk7XG4gIH1cblxuICBzZXRQbGF5ZXJzUm9sZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyMS50dXJuXG4gICAgICA/IFt0aGlzLnBsYXllcjEsIHRoaXMucGxheWVyMl1cbiAgICAgIDogW3RoaXMucGxheWVyMiwgdGhpcy5wbGF5ZXIxXTtcbiAgfVxuXG4gIGRpc3BsYXlTcXVhcmVSZXN1bHQoZW5uZW15UGxheWVyLCB0YXJnZXRTcXVhcmVFbGVtZW50LCBoaXRTcXVhcmUpIHtcbiAgICBpZiAoaGl0U3F1YXJlID09PSAnaGl0Jykge1xuICAgICAgZW5uZW15UGxheWVyLmdhbWVib2FyZFJlbmRlcmVyLmRpc3BsYXlIaXRTcXVhcmUodGFyZ2V0U3F1YXJlRWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChoaXRTcXVhcmUgPT09ICdtaXNzZWQnKSB7XG4gICAgICBlbm5lbXlQbGF5ZXIuZ2FtZWJvYXJkUmVuZGVyZXIuZGlzcGxheU1pc3NlZFNxdWFyZSh0YXJnZXRTcXVhcmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICB3aGlsZSAodGhpcy5ib3RoUGxheWVyc0hhdmVTaGlwcygpKSB7XG4gICAgICBjb25zdCBbY3VycmVudFBsYXllciwgZW5uZW15UGxheWVyXSA9IHRoaXMuc2V0UGxheWVyc1JvbGVzKCk7XG4gICAgICBjb25zdCB0YXJnZXRTcXVhcmVFbGVtZW50ID0gYXdhaXQgY3VycmVudFBsYXllci5jaG9vc2VUYXJnZXQoKTtcbiAgICAgIGNvbnN0IGhpdFNxdWFyZSA9IGVubmVteVBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgSlNPTi5wYXJzZSh0YXJnZXRTcXVhcmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZGlzcGxheVNxdWFyZVJlc3VsdChlbm5lbXlQbGF5ZXIsIHRhcmdldFNxdWFyZUVsZW1lbnQsIGhpdFNxdWFyZSk7XG4gICAgICBpZiAoaGl0U3F1YXJlID09PSAnbWlzc2VkJylcbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXJzVHVybihjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLmFubm91bmNlV2lubmVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVBZ2FpbnN0Q29tcHV0ZXIgZXh0ZW5kcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQ29tcHV0ZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIyKTtcbiAgICB0aGlzLnBsYXllcjEuZW5uZW15ID0gdGhpcy5wbGF5ZXIyO1xuICAgIHRoaXMucGxheWVyMi5lbm5lbXkgPSB0aGlzLnBsYXllcjE7XG4gICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZFJlbmRlcmVyID0gdGhpcy5nYW1lYm9hcmRSZW5kZXJlclBsYXllcjI7XG4gIH1cbn1cbiIsImltcG9ydCBTcXVhcmUgZnJvbSAnLi9zcXVhcmUnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBGbGVldE1hbmFnZXIgZnJvbSAnLi9mbGVldE1hbmFnZXInO1xuXG5jb25zdCBnYW1lYm9hcmRYTWF4ID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueE1heCA9IGdhbWVib2FyZFhNYXg7XG4gICAgdGhpcy55TWF4ID0gdGhpcy54TWF4O1xuICAgIHRoaXMuYm9hcmQgPSAoKCkgPT4ge1xuICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54TWF4OyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnlNYXg7IGorKykge1xuICAgICAgICAgIHJvdy5wdXNoKG5ldyBTcXVhcmUoaiwgaSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSkoKTtcbiAgICB0aGlzLmZsZWV0TWFuYWdlciA9IG5ldyBGbGVldE1hbmFnZXIoKTtcbiAgfVxuXG4gIGlzUG9zaXRpb25WYWxpZChwb3NpdGlvbikge1xuICAgIHJldHVybiBwb3NpdGlvbi5ldmVyeShcbiAgICAgIChjb29yZG9uYXRlcykgPT5cbiAgICAgICAgdGhpcy5pc0luc2lkZUdhbWVib2FyZExpbWl0cyhjb29yZG9uYXRlcykgJiYgdGhpcy5pc1dhdGVyKGNvb3Jkb25hdGVzKVxuICAgICk7XG4gIH1cblxuICBpc0luc2lkZUdhbWVib2FyZExpbWl0cyhjb29yZG9uYXRlcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMueE1heCAmJiB5ID49IDAgJiYgeSA8IHRoaXMueU1heDtcbiAgfVxuXG4gIGlzV2F0ZXIoY29vcmRvbmF0ZXMpIHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZG9uYXRlcztcbiAgICByZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlID09PSBudWxsO1xuICB9XG5cbiAgdHVybldhdGVyVG9TaGlwKHBvc2l0aW9uLCBzaGlwKSB7XG4gICAgcG9zaXRpb24uZm9yRWFjaCgoY29vcmRvbmF0ZXMpID0+IHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5zaGlwUmVmZXJlbmNlID0gc2hpcDtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYWNlU2hpcChwb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmlzUG9zaXRpb25WYWxpZChwb3NpdGlvbikpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChwb3NpdGlvbik7XG4gICAgICB0aGlzLnR1cm5XYXRlclRvU2hpcChwb3NpdGlvbiwgc2hpcCk7XG4gICAgICB0aGlzLmZsZWV0TWFuYWdlci5hZGRBU2hpcFRvRmxlZXQoc2hpcCk7XG4gICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvb3Jkb25hdGVzJyk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3Jkb25hdGVzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZiAoIXRhcmdldFNxdWFyZS5hdHRhY2tlZCkge1xuICAgICAgdGFyZ2V0U3F1YXJlLmF0dGFjaygpO1xuICAgICAgaWYgKCF0aGlzLmlzV2F0ZXIoY29vcmRvbmF0ZXMpKSB7XG4gICAgICAgIHRoaXMuZmxlZXRNYW5hZ2VyLm1hbmFnZUF0dGFja09uU2hpcCh0YXJnZXRTcXVhcmUuc2hpcFJlZmVyZW5jZSk7XG4gICAgICAgIHJldHVybiAnaGl0JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgcmV0dXJuICdhbHJlYWR5IGF0dGFja2VkIHNxdWFyZSc7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy54TWF4ID0gZ2FtZWJvYXJkLnhNYXg7XG4gICAgdGhpcy55TWF4ID0gZ2FtZWJvYXJkLnlNYXg7XG4gICAgdGhpcy5ET01HcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICBkaXNwbGF5U3F1YXJlKGNvbHVtbiwgeCwgeSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJywgYFske3h9LCR7eX1dYCk7XG4gICAgcmV0dXJuIHNxdWFyZTtcbiAgfVxuXG4gIGRpc3BsYXlDb2x1bW4oY29sdW1uTnVtYmVyKSB7XG4gICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGNvbHVtbiR7Y29sdW1uTnVtYmVyfWAsICdjb2x1bW4nKTtcbiAgICB0aGlzLkRPTUdyaWQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG5cbiAgZGlzcGxheUdyaWQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHRoaXMuRE9NR3JpZCk7XG4gICAgdGhpcy5ET01HcmlkLmNsYXNzTGlzdCA9ICdncmlkJztcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMueU1heDsgeSsrKSB7XG4gICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmRpc3BsYXlDb2x1bW4oeSk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMueE1heDsgeCsrKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZShjb2x1bW4sIHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBzcXVhcmVzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuRE9NR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJykpO1xuICB9XG5cbiAgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbiAgZGlzcGxheVNoaXBzKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkLmZsZWV0TWFuYWdlci5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvb3Jkb25hdGVzKSA9PiB7XG4gICAgICAgIHRoaXMuRE9NR3JpZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1wb3NpdGlvbj0nJHtKU09OLnN0cmluZ2lmeShjb29yZG9uYXRlcyl9J11gXG4gICAgICAgICkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrT25TcXVhcmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLkRPTUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICAgIHJlc29sdmUodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5TWlzc2VkU3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gIH1cblxuICBkaXNwbGF5SGl0U3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgbmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBjaG9vc2VUYXJnZXQoKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gYXdhaXQgdGhpcy5lbm5lbXkuZ2FtZWJvYXJkUmVuZGVyZXIuY2xpY2tPblNxdWFyZSgpO1xuICAgIHJldHVybiBzcXVhcmU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAvLyBhcnJheSBvZiBjb29yZG9uYXRlcyBwYWlyIHJlcHJlc2VudGluZyB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gICAgdGhpcy5sZW5ndGggPSBwb3NpdGlvbi5sZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aCkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcXVhcmUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuY29vcmRvbmF0ZXMgPSBbeCwgeV07XG4gICAgdGhpcy5zaGlwUmVmZXJlbmNlID0gbnVsbDtcbiAgICB0aGlzLmF0dGFja2VkID0gZmFsc2U7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5hdHRhY2tlZCA9IHRydWU7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zcXVhcmU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpdDo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1gnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBjb250ZW50OiAnWCc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgR2FtZUFnYWluc3RDb21wdXRlciBmcm9tICcuL2dhbWVBZ2FpbnN0Q29tcHV0ZXInO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWVBZ2FpbnN0Q29tcHV0ZXIoKTtcbmNvbnNvbGUubG9nKGdhbWUucGxheWVyMSk7XG5jb25zb2xlLmxvZyhnYW1lLnBsYXllcjIpO1xuZ2FtZS5zdGFydCgpO1xuXG4vLyBmbGVldE1hbmFnZXJcbi8vIHNxdWFyZVxuLy8gc2hpcFxuLy8gcGxheWVyXG4vLyBnYW1lYm9hcmQgUmVuZGVyZXJcbi8vIGdhbWVib2FyZFxuIl0sIm5hbWVzIjpbIlBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImdhbWVib2FyZCIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsImRlbGF5QmVmb3JlUGxheWluZyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY2hvb3NlVGFyZ2V0IiwiX3RoaXMyIiwic3F1YXJlcyIsImVubmVteSIsImdhbWVib2FyZFJlbmRlcmVyIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWZhdWx0IiwiRmxlZXRNYW5hZ2VyIiwic2hpcHMiLCJhZGRBU2hpcFRvRmxlZXQiLCJuZXdTaGlwIiwicHVzaCIsInJlbW92ZVNoaXBGcm9tRmxlZXQiLCJzaGlwIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwibWFuYWdlQXR0YWNrT25TaGlwIiwiYXR0YWNrZWRTaGlwIiwiaGl0IiwiaXNTdW5rIiwiYWxsU2hpcHNTdW5rIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJuIiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9pIiwiX3MiLCJfZSIsIl94IiwiX3IiLCJfYXJyIiwiX24iLCJfZCIsImlzQXJyYXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJHYW1lYm9hcmQiLCJHYW1lYm9hcmRSZW5kZXJlciIsIkdhbWUiLCJnYW1lYm9hcmRQbGF5ZXIxIiwiZ2FtZWJvYXJkUGxheWVyMiIsInBsYXllcjEiLCJwbGF5ZXIyIiwidHVybiIsImdhbWVib2FyZFJlbmRlcmVyUGxheWVyMSIsImdhbWVib2FyZFJlbmRlcmVyUGxheWVyMiIsImRpc3BsYXlHcmlkIiwicGxhY2VTaGlwIiwiZGlzcGxheVNoaXBzIiwic3dpdGNoUGxheWVyc1R1cm4iLCJjdXJyZW50UGxheWVyIiwiZW5uZW15UGxheWVyIiwiaWRlbnRpZnlXaW5uZXIiLCJmbGVldE1hbmFnZXIiLCJhbm5vdW5jZVdpbm5lciIsIndpbm5lciIsImFsZXJ0IiwiY29uY2F0IiwiYm90aFBsYXllcnNIYXZlU2hpcHMiLCJzZXRQbGF5ZXJzUm9sZXMiLCJkaXNwbGF5U3F1YXJlUmVzdWx0IiwidGFyZ2V0U3F1YXJlRWxlbWVudCIsImhpdFNxdWFyZSIsImRpc3BsYXlIaXRTcXVhcmUiLCJkaXNwbGF5TWlzc2VkU3F1YXJlIiwiX3N0YXJ0IiwiX2NhbGxlZSIsIl90aGlzJHNldFBsYXllcnNSb2xlcyIsIl90aGlzJHNldFBsYXllcnNSb2xlczIiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicmVjZWl2ZUF0dGFjayIsIkpTT04iLCJwYXJzZSIsImdldEF0dHJpYnV0ZSIsInN0YXJ0IiwiR2FtZUFnYWluc3RDb21wdXRlciIsIl9HYW1lIiwiU3F1YXJlIiwiU2hpcCIsImdhbWVib2FyZFhNYXgiLCJ4TWF4IiwieU1heCIsImJvYXJkIiwicm93IiwiaiIsImlzUG9zaXRpb25WYWxpZCIsInBvc2l0aW9uIiwiZXZlcnkiLCJjb29yZG9uYXRlcyIsImlzSW5zaWRlR2FtZWJvYXJkTGltaXRzIiwiaXNXYXRlciIsIl9jb29yZG9uYXRlcyIsIngiLCJ5IiwiX2Nvb3Jkb25hdGVzMiIsInNoaXBSZWZlcmVuY2UiLCJ0dXJuV2F0ZXJUb1NoaXAiLCJfdGhpczMiLCJfY29vcmRvbmF0ZXMzIiwiX2Nvb3Jkb25hdGVzNCIsInRhcmdldFNxdWFyZSIsImF0dGFja2VkIiwiYXR0YWNrIiwiRE9NR3JpZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXlTcXVhcmUiLCJjb2x1bW4iLCJzcXVhcmUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXlDb2x1bW4iLCJjb2x1bW5OdW1iZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0cmluZ2lmeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2tPblNxdWFyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uY2UiLCJfY2hvb3NlVGFyZ2V0IiwiaGl0cyIsInN1bmsiLCJnYW1lIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=