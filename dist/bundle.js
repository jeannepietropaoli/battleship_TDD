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
    var delayBeforePlaying = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    _classCallCheck(this, Computer);
    _this = _super.call(this, gameboard, 'Computer');
    _this.delayBeforePlaying = delayBeforePlaying;
    return _this;
  }
  _createClass(Computer, [{
    key: "chooseTarget",
    value: function chooseTarget() {
      var _this2 = this;
      var squares = this.ennemy.gameboard.renderer.squares;
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

/***/ "./src/modules/dragAndDrop.js":
/*!************************************!*\
  !*** ./src/modules/dragAndDrop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragAndDropEvents": () => (/* binding */ DragAndDropEvents),
/* harmony export */   "dragAndDropEvents": () => (/* binding */ dragAndDropEvents)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DragAndDropEvents = /*#__PURE__*/function () {
  function DragAndDropEvents() {
    _classCallCheck(this, DragAndDropEvents);
  }
  _createClass(DragAndDropEvents, [{
    key: "dragStart",
    value: function dragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id); // id attribute ensure that the element is unique
      setTimeout(function () {
        e.target.classList.add('hide');
      }, 0);
    }
  }, {
    key: "dragEnter",
    value: function dragEnter(e) {
      e.preventDefault(); // override the default behavior of both dragenter and dragover events to make sure that the drop event is fired (make the drop target valid)
      // e.target.classList.add('drag-over');
    }
  }, {
    key: "dragOver",
    value: function dragOver(e) {
      e.preventDefault();
      // e.target.classList.add('drag-over');
    }
  }, {
    key: "dragLeave",
    value: function dragLeave(e) {
      // e.target.classList.remove('drag-over');
    }
  }, {
    key: "dragDrop",
    value: function dragDrop(e) {
      var id = e.dataTransfer.getData('text/plain');
      var start = JSON.parse(e.target.getAttribute('data-position'));
      var draggable = document.getElementById(id);
      return [start, id, draggable];
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(e) {
      e.target.classList.remove('hide');
    }
  }]);
  return DragAndDropEvents;
}();
var dragAndDropEvents = new DragAndDropEvents();

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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var FleetManager = /*#__PURE__*/function () {
  function FleetManager() {
    _classCallCheck(this, FleetManager);
    this.ships = [new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, 'horizontal', 'ship1'), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'horizontal', 'ship2'), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, 'vertical', 'ship3'), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, 'vertical', 'ship4'), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, 'vertical', 'ship5')];
  }
  _createClass(FleetManager, [{
    key: "allShipsSunk",
    value: function allShipsSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk();
      });
    }
  }, {
    key: "allShipsPlaced",
    value: function allShipsPlaced() {
      return this.ships.every(function (ship) {
        return ship.isPlaced();
      });
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
/* harmony export */   "default": () => (/* binding */ GameAgainstComputer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboardRendering */ "./src/modules/gameboardRendering.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computer */ "./src/modules/computer.js");
/* harmony import */ var _placing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placing */ "./src/modules/placing.js");
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





var GameAgainstComputer = /*#__PURE__*/function () {
  function GameAgainstComputer() {
    _classCallCheck(this, GameAgainstComputer);
    // create both gameboards
    this.gameboardPlayer1 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.gameboardPlayer2 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // create both gameboard renderers
    this.gameboardPlayer1.renderer = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer1);
    this.gameboardPlayer2.renderer = new _gameboardRendering__WEBPACK_IMPORTED_MODULE_1__["default"](this.gameboardPlayer2);

    // create both players and set player1 as first player
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](this.gameboardPlayer1, 'Player 1');
    this.player2 = new _computer__WEBPACK_IMPORTED_MODULE_3__["default"](this.gameboardPlayer2);
    this.player1.turn = true;
    this.player1.ennemy = this.player2;
    this.player2.ennemy = this.player1;

    // create both DOM grids
    this.gameboardPlayer1.renderer.displayGrid();
    this.gameboardPlayer2.renderer.displayGrid();

    // place ships randomly on computer gameboard
    this.gameboardPlayer2.placeShipsRandomly();

    // display ships on both grids  (for testing purposes)
    this.gameboardPlayer2.renderer.displayShips();
    (0,_placing__WEBPACK_IMPORTED_MODULE_4__["default"])(this.gameboardPlayer1, this.player1);
  }
  _createClass(GameAgainstComputer, [{
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
        ennemyPlayer.gameboard.renderer.displayHitSquare(targetSquareElement);
      } else if (hitSquare === 'missed') {
        ennemyPlayer.gameboard.renderer.displayMissedSquare(targetSquareElement);
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
  return GameAgainstComputer;
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
/* harmony import */ var _fleetManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fleetManager */ "./src/modules/fleetManager.js");
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
    this.fleetManager = new _fleetManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
    value: function placeShip(ship, start) {
      var position = ship.calculatePosition(start);
      if (this.isPositionValid(position)) {
        ship.setPosition(position);
        this.turnWaterToShip(ship.position, ship);
      }
      return ship;
    }
  }, {
    key: "placeShipsRandomly",
    value: function placeShipsRandomly() {
      var _this4 = this;
      var ships = this.fleetManager.ships;
      ships.forEach(function (ship) {
        while (!ship.isPlaced()) {
          var start = [Math.floor(Math.random() * _this4.xMax), Math.floor(Math.random() * _this4.yMax)];
          ship.setOrientationRandomly();
          _this4.placeShip(ship, start);
        }
      });
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
          var ship = targetSquare.shipReference;
          ship.hit();
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
    key: "displayShip",
    value: function displayShip(ship) {
      var _this2 = this;
      ship.position.forEach(function (coordonates) {
        _this2.DOMGrid.querySelector("[data-position='".concat(JSON.stringify(coordonates), "']")).style.backgroundColor = 'red';
      });
    }
  }, {
    key: "clickOnSquare",
    value: function clickOnSquare() {
      var _this3 = this;
      return new Promise(function (resolve) {
        _this3.DOMGrid.addEventListener('click', function (event) {
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

/***/ "./src/modules/placing.js":
/*!********************************!*\
  !*** ./src/modules/placing.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activateDragAndDrop)
/* harmony export */ });
/* harmony import */ var _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop */ "./src/modules/dragAndDrop.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getHeightGameboardSquareElement() {
  var gameboardSquare = document.querySelector('.square');
  return gameboardSquare.offsetHeight;
}
function setShipElementSize(ship, shipElement) {
  var reference = getHeightGameboardSquareElement();
  if (ship.orientation === 'horizontal') {
    shipElement.style.width = "".concat(ship.length * reference, "px");
    shipElement.style.height = "".concat(reference, "px");
  } else {
    shipElement.style.width = "".concat(reference, "px");
    shipElement.style.height = "".concat(ship.length * reference, "px");
  }
}
function setShipElementAttributes(ship, shipElement) {
  shipElement.classList.add('ship');
  shipElement.setAttribute('draggable', true);
  shipElement.id = ship.name;
}
function setShipElementStyle(shipElement) {
  shipElement.style.backgroundColor = 'red';
}
function triggerShipElementDragEvents(shipElement) {
  shipElement.addEventListener('dragstart', _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragStart);
  shipElement.addEventListener('dragend', _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragEnd);
}
function triggerShipElementFlip(ship, shipElement) {
  shipElement.addEventListener('click', function () {
    ship.orientation === 'horizontal' ? ship.orientation = 'vertical' : ship.orientation = 'horizontal';
    setShipElementSize(ship, shipElement);
  });
}
function createDraggableShipElement(ship) {
  var draggable = document.createElement('div');
  document.querySelector('body').appendChild(draggable);
  setShipElementAttributes(ship, draggable);
  setShipElementSize(ship, draggable);
  setShipElementStyle(draggable);
  triggerShipElementDragEvents(draggable);
  triggerShipElementFlip(ship, draggable);
  return draggable;
}
function getShipsToDrag(gameboard) {
  return gameboard.fleetManager.ships;
}
function getdropTargets(player) {
  return player.gameboard.renderer.squares;
}
function findDraggedShip(gameboard, id) {
  return gameboard.fleetManager.ships.find(function (ship) {
    return ship.name === id;
  });
}
function enableStartButton() {
  var startButton = document.querySelector('#start-button');
  startButton.disabled = false;
}
function dropHandler(gameboard, player) {
  return function (e) {
    var _dragAndDropEvents$dr = _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragDrop(e),
      _dragAndDropEvents$dr2 = _slicedToArray(_dragAndDropEvents$dr, 3),
      start = _dragAndDropEvents$dr2[0],
      id = _dragAndDropEvents$dr2[1],
      draggable = _dragAndDropEvents$dr2[2];
    var ship = findDraggedShip(gameboard, id);
    gameboard.placeShip(ship, start);
    if (ship.isPlaced()) {
      draggable.remove();
      player.gameboard.renderer.displayShip(ship);
    }
    if (gameboard.fleetManager.allShipsPlaced()) {
      enableStartButton();
    }
  };
}
function triggerTargetDrop(dropTarget, gameboard, player) {
  dropTarget.addEventListener('dragenter', _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragEnter);
  dropTarget.addEventListener('dragover', _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragOver);
  dropTarget.addEventListener('dragleave', _dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDropEvents.dragLeave);
  var dropHandlerFn = dropHandler(gameboard, player);
  dropTarget.addEventListener('drop', dropHandlerFn);
}
function activateDragAndDrop(gameboard, player) {
  getShipsToDrag(gameboard).forEach(function (ship) {
    createDraggableShipElement(ship);
  });
  getdropTargets(player).forEach(function (dropTarget) {
    triggerTargetDrop(dropTarget, gameboard, player);
  });
}

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
              return this.ennemy.gameboard.renderer.clickOnSquare();
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
var Ship = /*#__PURE__*/function () {
  function Ship(length, orientation, name) {
    _classCallCheck(this, Ship);
    this.hits = 0;
    this.position = []; // array of coordonates pair representing the ship on the gameboard
    this.length = length;
    this.orientation = orientation;
    this.name = name;
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits >= this.length;
    }
  }, {
    key: "isPlaced",
    value: function isPlaced() {
      return this.position.length > 0;
    }
  }, {
    key: "calculatePosition",
    value: function calculatePosition(start) {
      var _start = _slicedToArray(start, 2),
        x = _start[0],
        y = _start[1];
      var position = [];
      for (var i = 0; i < this.length; i++) {
        if (this.orientation === 'horizontal') {
          position.push([x + i, y]);
        } else {
          position.push([x, y + i]);
        }
      }
      return position;
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.position = position;
    }
  }, {
    key: "setOrientationRandomly",
    value: function setOrientationRandomly() {
      var randomBinary = Math.round(Math.random());
      randomBinary === 0 ? this.orientation = 'horizontal' : this.orientation = 'vertical';
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.hit {\n  position: relative;\n}\n\n.hit::after {\n  content: 'X';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,OAAO;AACT;;AAEA;EACE,uBAAuB;EACvB,OAAO;EACP,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n\n.grid {\n  display: flex;\n  flex-direction: column-reverse;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n}\n\n.column {\n  display: flex;\n  flex: 1;\n}\n\n.square {\n  background-color: white;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.square:hover {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.hit {\n  position: relative;\n}\n\n.hit::after {\n  content: 'X';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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


var startButton = document.querySelector('#start-button');
var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
startButton.addEventListener('click', function () {
  game.start();
}, {
  once: true
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2E7QUFFekMsSUFBTXNFLFdBQVcsR0FBRzdTLFFBQVEsQ0FBQzhRLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFFM0QsSUFBTTJDLElBQUksR0FBRyxJQUFJbEgsNkNBQW1CLEVBQUU7QUFFdENzRyxXQUFXLENBQUN2QixnQkFBZ0IsQ0FDMUIsT0FBTyxFQUNQLFlBQU07RUFDSm1DLElBQUksQ0FBQzlULEtBQUssRUFBRTtBQUNkLENBQUMsRUFDRDtFQUFFNlIsSUFBSSxFQUFFO0FBQUssQ0FBQyxDQUNmLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZHJhZ0FuZERyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9mbGVldE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkUmVuZGVyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL21vZHVsZXMvcGxhY2luZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vc3JjL3N0eWxlcy9tYWluLmNzcz9lODBhIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBfdGRkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX3RkZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF90ZGQvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQsIGRlbGF5QmVmb3JlUGxheWluZyA9IDEwMDApIHtcbiAgICBzdXBlcihnYW1lYm9hcmQsICdDb21wdXRlcicpO1xuICAgIHRoaXMuZGVsYXlCZWZvcmVQbGF5aW5nID0gZGVsYXlCZWZvcmVQbGF5aW5nO1xuICB9XG5cbiAgY2hvb3NlVGFyZ2V0KCkge1xuICAgIGNvbnN0IHsgc3F1YXJlcyB9ID0gdGhpcy5lbm5lbXkuZ2FtZWJvYXJkLnJlbmRlcmVyO1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3F1YXJlcy5sZW5ndGgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoc3F1YXJlc1tyYW5kb21JbmRleF0pO1xuICAgICAgfSwgdGhpcy5kZWxheUJlZm9yZVBsYXlpbmcpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BFdmVudHMge1xuICBkcmFnU3RhcnQoZSkge1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLnRhcmdldC5pZCk7IC8vIGlkIGF0dHJpYnV0ZSBlbnN1cmUgdGhhdCB0aGUgZWxlbWVudCBpcyB1bmlxdWVcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGRyYWdFbnRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBvdmVycmlkZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBvZiBib3RoIGRyYWdlbnRlciBhbmQgZHJhZ292ZXIgZXZlbnRzIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkcm9wIGV2ZW50IGlzIGZpcmVkIChtYWtlIHRoZSBkcm9wIHRhcmdldCB2YWxpZClcbiAgICAvLyBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLW92ZXInKTtcbiAgfVxuXG4gIGRyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gIH1cblxuICBkcmFnTGVhdmUoZSkge1xuICAgIC8vIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICB9XG5cbiAgZHJhZ0Ryb3AoZSkge1xuICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIGNvbnN0IHN0YXJ0ID0gSlNPTi5wYXJzZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKSk7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIHJldHVybiBbc3RhcnQsIGlkLCBkcmFnZ2FibGVdO1xuICB9XG5cbiAgZHJhZ0VuZChlKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkcmFnQW5kRHJvcEV2ZW50cyA9IG5ldyBEcmFnQW5kRHJvcEV2ZW50cygpO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxlZXRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtcbiAgICAgIG5ldyBTaGlwKDEsICdob3Jpem9udGFsJywgJ3NoaXAxJyksXG4gICAgICBuZXcgU2hpcCgyLCAnaG9yaXpvbnRhbCcsICdzaGlwMicpLFxuICAgICAgbmV3IFNoaXAoMywgJ3ZlcnRpY2FsJywgJ3NoaXAzJyksXG4gICAgICBuZXcgU2hpcCg0LCAndmVydGljYWwnLCAnc2hpcDQnKSxcbiAgICAgIG5ldyBTaGlwKDIsICd2ZXJ0aWNhbCcsICdzaGlwNScpLFxuICAgIF07XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG5cbiAgYWxsU2hpcHNQbGFjZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNQbGFjZWQoKSk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IEdhbWVib2FyZFJlbmRlcmVyIGZyb20gJy4vZ2FtZWJvYXJkUmVuZGVyaW5nJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IENvbXB1dGVyIGZyb20gJy4vY29tcHV0ZXInO1xuaW1wb3J0IGFjdGl2YXRlRHJhZ0FuZERyb3AgZnJvbSAnLi9wbGFjaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUFnYWluc3RDb21wdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIGNyZWF0ZSBib3RoIGdhbWVib2FyZHNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgLy8gY3JlYXRlIGJvdGggZ2FtZWJvYXJkIHJlbmRlcmVyc1xuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMS5yZW5kZXJlciA9IG5ldyBHYW1lYm9hcmRSZW5kZXJlcihcbiAgICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMVxuICAgICk7XG4gICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyLnJlbmRlcmVyID0gbmV3IEdhbWVib2FyZFJlbmRlcmVyKFxuICAgICAgdGhpcy5nYW1lYm9hcmRQbGF5ZXIyXG4gICAgKTtcblxuICAgIC8vIGNyZWF0ZSBib3RoIHBsYXllcnMgYW5kIHNldCBwbGF5ZXIxIGFzIGZpcnN0IHBsYXllclxuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIxLCAnUGxheWVyIDEnKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgQ29tcHV0ZXIodGhpcy5nYW1lYm9hcmRQbGF5ZXIyKTtcbiAgICB0aGlzLnBsYXllcjEudHVybiA9IHRydWU7XG5cbiAgICB0aGlzLnBsYXllcjEuZW5uZW15ID0gdGhpcy5wbGF5ZXIyO1xuICAgIHRoaXMucGxheWVyMi5lbm5lbXkgPSB0aGlzLnBsYXllcjE7XG5cbiAgICAvLyBjcmVhdGUgYm90aCBET00gZ3JpZHNcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjEucmVuZGVyZXIuZGlzcGxheUdyaWQoKTtcbiAgICB0aGlzLmdhbWVib2FyZFBsYXllcjIucmVuZGVyZXIuZGlzcGxheUdyaWQoKTtcblxuICAgIC8vIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIGNvbXB1dGVyIGdhbWVib2FyZFxuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMi5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcblxuICAgIC8vIGRpc3BsYXkgc2hpcHMgb24gYm90aCBncmlkcyAgKGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuICAgIHRoaXMuZ2FtZWJvYXJkUGxheWVyMi5yZW5kZXJlci5kaXNwbGF5U2hpcHMoKTtcblxuICAgIGFjdGl2YXRlRHJhZ0FuZERyb3AodGhpcy5nYW1lYm9hcmRQbGF5ZXIxLCB0aGlzLnBsYXllcjEpO1xuICB9XG5cbiAgc3dpdGNoUGxheWVyc1R1cm4oY3VycmVudFBsYXllciwgZW5uZW15UGxheWVyKSB7XG4gICAgY3VycmVudFBsYXllci50dXJuID0gZmFsc2U7XG4gICAgZW5uZW15UGxheWVyLnR1cm4gPSB0cnVlO1xuICB9XG5cbiAgaWRlbnRpZnlXaW5uZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkUGxheWVyMS5mbGVldE1hbmFnZXIuYWxsU2hpcHNTdW5rKClcbiAgICAgID8gdGhpcy5wbGF5ZXIyXG4gICAgICA6IHRoaXMucGxheWVyMTtcbiAgfVxuXG4gIGFubm91bmNlV2lubmVyKCkge1xuICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuaWRlbnRpZnlXaW5uZXIoKTtcbiAgICBhbGVydChgVGhlIHdpbm5lciBpcyAke3dpbm5lci5uYW1lfSFgKTtcbiAgfVxuXG4gIGJvdGhQbGF5ZXJzSGF2ZVNoaXBzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5nYW1lYm9hcmRQbGF5ZXIxLmZsZWV0TWFuYWdlci5hbGxTaGlwc1N1bmsoKSAmJlxuICAgICAgIXRoaXMuZ2FtZWJvYXJkUGxheWVyMi5mbGVldE1hbmFnZXIuYWxsU2hpcHNTdW5rKClcbiAgICApO1xuICB9XG5cbiAgc2V0UGxheWVyc1JvbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcjEudHVyblxuICAgICAgPyBbdGhpcy5wbGF5ZXIxLCB0aGlzLnBsYXllcjJdXG4gICAgICA6IFt0aGlzLnBsYXllcjIsIHRoaXMucGxheWVyMV07XG4gIH1cblxuICBkaXNwbGF5U3F1YXJlUmVzdWx0KGVubmVteVBsYXllciwgdGFyZ2V0U3F1YXJlRWxlbWVudCwgaGl0U3F1YXJlKSB7XG4gICAgaWYgKGhpdFNxdWFyZSA9PT0gJ2hpdCcpIHtcbiAgICAgIGVubmVteVBsYXllci5nYW1lYm9hcmQucmVuZGVyZXIuZGlzcGxheUhpdFNxdWFyZSh0YXJnZXRTcXVhcmVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGhpdFNxdWFyZSA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGVubmVteVBsYXllci5nYW1lYm9hcmQucmVuZGVyZXIuZGlzcGxheU1pc3NlZFNxdWFyZSh0YXJnZXRTcXVhcmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdGFydCgpIHtcbiAgICB3aGlsZSAodGhpcy5ib3RoUGxheWVyc0hhdmVTaGlwcygpKSB7XG4gICAgICBjb25zdCBbY3VycmVudFBsYXllciwgZW5uZW15UGxheWVyXSA9IHRoaXMuc2V0UGxheWVyc1JvbGVzKCk7XG4gICAgICBjb25zdCB0YXJnZXRTcXVhcmVFbGVtZW50ID0gYXdhaXQgY3VycmVudFBsYXllci5jaG9vc2VUYXJnZXQoKTtcbiAgICAgIGNvbnN0IGhpdFNxdWFyZSA9IGVubmVteVBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgSlNPTi5wYXJzZSh0YXJnZXRTcXVhcmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpKVxuICAgICAgKTtcbiAgICAgIHRoaXMuZGlzcGxheVNxdWFyZVJlc3VsdChlbm5lbXlQbGF5ZXIsIHRhcmdldFNxdWFyZUVsZW1lbnQsIGhpdFNxdWFyZSk7XG4gICAgICBpZiAoaGl0U3F1YXJlID09PSAnbWlzc2VkJylcbiAgICAgICAgdGhpcy5zd2l0Y2hQbGF5ZXJzVHVybihjdXJyZW50UGxheWVyLCBlbm5lbXlQbGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLmFubm91bmNlV2lubmVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCBTcXVhcmUgZnJvbSAnLi9zcXVhcmUnO1xuaW1wb3J0IEZsZWV0TWFuYWdlciBmcm9tICcuL2ZsZWV0TWFuYWdlcic7XG5cbmNvbnN0IGdhbWVib2FyZFhNYXggPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54TWF4ID0gZ2FtZWJvYXJkWE1heDtcbiAgICB0aGlzLnlNYXggPSB0aGlzLnhNYXg7XG4gICAgdGhpcy5ib2FyZCA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnhNYXg7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueU1heDsgaisrKSB7XG4gICAgICAgICAgcm93LnB1c2gobmV3IFNxdWFyZShqLCBpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBib2FyZDtcbiAgICB9KSgpO1xuICAgIHRoaXMuZmxlZXRNYW5hZ2VyID0gbmV3IEZsZWV0TWFuYWdlcigpO1xuICB9XG5cbiAgaXNQb3NpdGlvblZhbGlkKHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uLmV2ZXJ5KFxuICAgICAgKGNvb3Jkb25hdGVzKSA9PlxuICAgICAgICB0aGlzLmlzSW5zaWRlR2FtZWJvYXJkTGltaXRzKGNvb3Jkb25hdGVzKSAmJiB0aGlzLmlzV2F0ZXIoY29vcmRvbmF0ZXMpXG4gICAgKTtcbiAgfVxuXG4gIGlzSW5zaWRlR2FtZWJvYXJkTGltaXRzKGNvb3Jkb25hdGVzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy54TWF4ICYmIHkgPj0gMCAmJiB5IDwgdGhpcy55TWF4O1xuICB9XG5cbiAgaXNXYXRlcihjb29yZG9uYXRlcykge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3Jkb25hdGVzO1xuICAgIHJldHVybiB0aGlzLmJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2UgPT09IG51bGw7XG4gIH1cblxuICB0dXJuV2F0ZXJUb1NoaXAocG9zaXRpb24sIHNoaXApIHtcbiAgICBwb3NpdGlvbi5mb3JFYWNoKChjb29yZG9uYXRlcykgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXBSZWZlcmVuY2UgPSBzaGlwO1xuICAgIH0pO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIHN0YXJ0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzaGlwLmNhbGN1bGF0ZVBvc2l0aW9uKHN0YXJ0KTtcbiAgICBpZiAodGhpcy5pc1Bvc2l0aW9uVmFsaWQocG9zaXRpb24pKSB7XG4gICAgICBzaGlwLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgIHRoaXMudHVybldhdGVyVG9TaGlwKHNoaXAucG9zaXRpb24sIHNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcbiAgICBjb25zdCB7IHNoaXBzIH0gPSB0aGlzLmZsZWV0TWFuYWdlcjtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICB3aGlsZSAoIXNoaXAuaXNQbGFjZWQoKSkge1xuICAgICAgICBjb25zdCBzdGFydCA9IFtcbiAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnhNYXgpLFxuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMueU1heCksXG4gICAgICAgIF07XG4gICAgICAgIHNoaXAuc2V0T3JpZW50YXRpb25SYW5kb21seSgpO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCBzdGFydCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3Jkb25hdGVzKSB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRvbmF0ZXM7XG4gICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZiAoIXRhcmdldFNxdWFyZS5hdHRhY2tlZCkge1xuICAgICAgdGFyZ2V0U3F1YXJlLmF0dGFjaygpO1xuICAgICAgaWYgKCF0aGlzLmlzV2F0ZXIoY29vcmRvbmF0ZXMpKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0YXJnZXRTcXVhcmUuc2hpcFJlZmVyZW5jZTtcbiAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdtaXNzZWQnO1xuICAgIH1cbiAgICByZXR1cm4gJ2FscmVhZHkgYXR0YWNrZWQgc3F1YXJlJztcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLnhNYXggPSBnYW1lYm9hcmQueE1heDtcbiAgICB0aGlzLnlNYXggPSBnYW1lYm9hcmQueU1heDtcbiAgICB0aGlzLkRPTUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuXG4gIGRpc3BsYXlTcXVhcmUoY29sdW1uLCB4LCB5KSB7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xuICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nLCBgWyR7eH0sJHt5fV1gKTtcbiAgICByZXR1cm4gc3F1YXJlO1xuICB9XG5cbiAgZGlzcGxheUNvbHVtbihjb2x1bW5OdW1iZXIpIHtcbiAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgY29sdW1uJHtjb2x1bW5OdW1iZXJ9YCwgJ2NvbHVtbicpO1xuICAgIHRoaXMuRE9NR3JpZC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBkaXNwbGF5R3JpZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQodGhpcy5ET01HcmlkKTtcbiAgICB0aGlzLkRPTUdyaWQuY2xhc3NMaXN0ID0gJ2dyaWQnO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy55TWF4OyB5KyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZGlzcGxheUNvbHVtbih5KTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy54TWF4OyB4KyspIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlKGNvbHVtbiwgeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNxdWFyZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5ET01HcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKSk7XG4gIH1cblxuICAvLyBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuICBkaXNwbGF5U2hpcHMoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQuZmxlZXRNYW5hZ2VyLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAucG9zaXRpb24uZm9yRWFjaCgoY29vcmRvbmF0ZXMpID0+IHtcbiAgICAgICAgdGhpcy5ET01HcmlkLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXBvc2l0aW9uPScke0pTT04uc3RyaW5naWZ5KGNvb3Jkb25hdGVzKX0nXWBcbiAgICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzcGxheVNoaXAoc2hpcCkge1xuICAgIHNoaXAucG9zaXRpb24uZm9yRWFjaCgoY29vcmRvbmF0ZXMpID0+IHtcbiAgICAgIHRoaXMuRE9NR3JpZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtcG9zaXRpb249JyR7SlNPTi5zdHJpbmdpZnkoY29vcmRvbmF0ZXMpfSddYFxuICAgICAgKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrT25TcXVhcmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLkRPTUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICAgICAgICAgIHJlc29sdmUodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5TWlzc2VkU3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gIH1cblxuICBkaXNwbGF5SGl0U3F1YXJlKHNxdWFyZSkge1xuICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcbiAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGRyYWdBbmREcm9wRXZlbnRzIH0gZnJvbSAnLi9kcmFnQW5kRHJvcCc7XG5cbmZ1bmN0aW9uIGdldEhlaWdodEdhbWVib2FyZFNxdWFyZUVsZW1lbnQoKSB7XG4gIGNvbnN0IGdhbWVib2FyZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcXVhcmUnKTtcbiAgcmV0dXJuIGdhbWVib2FyZFNxdWFyZS5vZmZzZXRIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIHNldFNoaXBFbGVtZW50U2l6ZShzaGlwLCBzaGlwRWxlbWVudCkge1xuICBjb25zdCByZWZlcmVuY2UgPSBnZXRIZWlnaHRHYW1lYm9hcmRTcXVhcmVFbGVtZW50KCk7XG4gIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3NoaXAubGVuZ3RoICogcmVmZXJlbmNlfXB4YDtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtyZWZlcmVuY2V9cHhgO1xuICB9IGVsc2Uge1xuICAgIHNoaXBFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7cmVmZXJlbmNlfXB4YDtcbiAgICBzaGlwRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtzaGlwLmxlbmd0aCAqIHJlZmVyZW5jZX1weGA7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0U2hpcEVsZW1lbnRBdHRyaWJ1dGVzKHNoaXAsIHNoaXBFbGVtZW50KSB7XG4gIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgc2hpcEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgc2hpcEVsZW1lbnQuaWQgPSBzaGlwLm5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldFNoaXBFbGVtZW50U3R5bGUoc2hpcEVsZW1lbnQpIHtcbiAgc2hpcEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJTaGlwRWxlbWVudERyYWdFdmVudHMoc2hpcEVsZW1lbnQpIHtcbiAgc2hpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ0FuZERyb3BFdmVudHMuZHJhZ1N0YXJ0KTtcbiAgc2hpcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdBbmREcm9wRXZlbnRzLmRyYWdFbmQpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyU2hpcEVsZW1lbnRGbGlwKHNoaXAsIHNoaXBFbGVtZW50KSB7XG4gIHNoaXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyAoc2hpcC5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCcpXG4gICAgICA6IChzaGlwLm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnKTtcbiAgICBzZXRTaGlwRWxlbWVudFNpemUoc2hpcCwgc2hpcEVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlU2hpcEVsZW1lbnQoc2hpcCkge1xuICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gIHNldFNoaXBFbGVtZW50QXR0cmlidXRlcyhzaGlwLCBkcmFnZ2FibGUpO1xuICBzZXRTaGlwRWxlbWVudFNpemUoc2hpcCwgZHJhZ2dhYmxlKTtcbiAgc2V0U2hpcEVsZW1lbnRTdHlsZShkcmFnZ2FibGUpO1xuICB0cmlnZ2VyU2hpcEVsZW1lbnREcmFnRXZlbnRzKGRyYWdnYWJsZSk7XG4gIHRyaWdnZXJTaGlwRWxlbWVudEZsaXAoc2hpcCwgZHJhZ2dhYmxlKTtcbiAgcmV0dXJuIGRyYWdnYWJsZTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hpcHNUb0RyYWcoZ2FtZWJvYXJkKSB7XG4gIHJldHVybiBnYW1lYm9hcmQuZmxlZXRNYW5hZ2VyLnNoaXBzO1xufVxuXG5mdW5jdGlvbiBnZXRkcm9wVGFyZ2V0cyhwbGF5ZXIpIHtcbiAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQucmVuZGVyZXIuc3F1YXJlcztcbn1cblxuZnVuY3Rpb24gZmluZERyYWdnZWRTaGlwKGdhbWVib2FyZCwgaWQpIHtcbiAgcmV0dXJuIGdhbWVib2FyZC5mbGVldE1hbmFnZXIuc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBpZCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVN0YXJ0QnV0dG9uKCkge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydC1idXR0b24nKTtcbiAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZHJvcEhhbmRsZXIoZ2FtZWJvYXJkLCBwbGF5ZXIpIHtcbiAgcmV0dXJuIChlKSA9PiB7XG4gICAgY29uc3QgW3N0YXJ0LCBpZCwgZHJhZ2dhYmxlXSA9IGRyYWdBbmREcm9wRXZlbnRzLmRyYWdEcm9wKGUpO1xuICAgIGNvbnN0IHNoaXAgPSBmaW5kRHJhZ2dlZFNoaXAoZ2FtZWJvYXJkLCBpZCk7XG4gICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBzdGFydCk7XG4gICAgaWYgKHNoaXAuaXNQbGFjZWQoKSkge1xuICAgICAgZHJhZ2dhYmxlLnJlbW92ZSgpO1xuICAgICAgcGxheWVyLmdhbWVib2FyZC5yZW5kZXJlci5kaXNwbGF5U2hpcChzaGlwKTtcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZC5mbGVldE1hbmFnZXIuYWxsU2hpcHNQbGFjZWQoKSkge1xuICAgICAgZW5hYmxlU3RhcnRCdXR0b24oKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJUYXJnZXREcm9wKGRyb3BUYXJnZXQsIGdhbWVib2FyZCwgcGxheWVyKSB7XG4gIGRyb3BUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0FuZERyb3BFdmVudHMuZHJhZ0VudGVyKTtcbiAgZHJvcFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdBbmREcm9wRXZlbnRzLmRyYWdPdmVyKTtcbiAgZHJvcFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnQW5kRHJvcEV2ZW50cy5kcmFnTGVhdmUpO1xuICBjb25zdCBkcm9wSGFuZGxlckZuID0gZHJvcEhhbmRsZXIoZ2FtZWJvYXJkLCBwbGF5ZXIpO1xuICBkcm9wVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wSGFuZGxlckZuKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGVEcmFnQW5kRHJvcChnYW1lYm9hcmQsIHBsYXllcikge1xuICBnZXRTaGlwc1RvRHJhZyhnYW1lYm9hcmQpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudChzaGlwKTtcbiAgfSk7XG5cbiAgZ2V0ZHJvcFRhcmdldHMocGxheWVyKS5mb3JFYWNoKChkcm9wVGFyZ2V0KSA9PiB7XG4gICAgdHJpZ2dlclRhcmdldERyb3AoZHJvcFRhcmdldCwgZ2FtZWJvYXJkLCBwbGF5ZXIpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCwgbmFtZSkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gIH1cblxuICBhc3luYyBjaG9vc2VUYXJnZXQoKSB7XG4gICAgY29uc3Qgc3F1YXJlID0gYXdhaXQgdGhpcy5lbm5lbXkuZ2FtZWJvYXJkLnJlbmRlcmVyLmNsaWNrT25TcXVhcmUoKTtcbiAgICByZXR1cm4gc3F1YXJlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBvcmllbnRhdGlvbiwgbmFtZSkge1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5wb3NpdGlvbiA9IFtdOyAvLyBhcnJheSBvZiBjb29yZG9uYXRlcyBwYWlyIHJlcHJlc2VudGluZyB0aGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGlzUGxhY2VkKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjYWxjdWxhdGVQb3NpdGlvbihzdGFydCkge1xuICAgIGNvbnN0IFt4LCB5XSA9IHN0YXJ0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHBvc2l0aW9uLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbi5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIHNldE9yaWVudGF0aW9uUmFuZG9tbHkoKSB7XG4gICAgY29uc3QgcmFuZG9tQmluYXJ5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICByYW5kb21CaW5hcnkgPT09IDBcbiAgICAgID8gKHRoaXMub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCcpXG4gICAgICA6ICh0aGlzLm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jb29yZG9uYXRlcyA9IFt4LCB5XTtcbiAgICB0aGlzLnNoaXBSZWZlcmVuY2UgPSBudWxsO1xuICAgIHRoaXMuYXR0YWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICB0aGlzLmF0dGFja2VkID0gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNxdWFyZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5oaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGl0OjphZnRlciB7XFxuICBjb250ZW50OiAnWCc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixPQUFPO0VBQ1AsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3F1YXJlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmhpdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaXQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdYJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IEdhbWVBZ2FpbnN0Q29tcHV0ZXIgZnJvbSAnLi9nYW1lJztcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtYnV0dG9uJyk7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZUFnYWluc3RDb21wdXRlcigpO1xuXG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAnY2xpY2snLFxuICAoKSA9PiB7XG4gICAgZ2FtZS5zdGFydCgpO1xuICB9LFxuICB7IG9uY2U6IHRydWUgfVxuKTtcbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJDb21wdXRlciIsIl9QbGF5ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJnYW1lYm9hcmQiLCJfdGhpcyIsImRlbGF5QmVmb3JlUGxheWluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImNhbGwiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNob29zZVRhcmdldCIsIl90aGlzMiIsInNxdWFyZXMiLCJlbm5lbXkiLCJyZW5kZXJlciIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVmYXVsdCIsIkRyYWdBbmREcm9wRXZlbnRzIiwiZHJhZ1N0YXJ0IiwiZSIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwiZHJhZ092ZXIiLCJkcmFnTGVhdmUiLCJkcmFnRHJvcCIsImdldERhdGEiLCJzdGFydCIsIkpTT04iLCJwYXJzZSIsImdldEF0dHJpYnV0ZSIsImRyYWdnYWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmFnRW5kIiwicmVtb3ZlIiwiZHJhZ0FuZERyb3BFdmVudHMiLCJTaGlwIiwiRmxlZXRNYW5hZ2VyIiwic2hpcHMiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsInNoaXAiLCJpc1N1bmsiLCJhbGxTaGlwc1BsYWNlZCIsImlzUGxhY2VkIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZXNjIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJfaSIsIl9zIiwiX2UiLCJfeCIsIl9yIiwiX2FyciIsIl9uIiwiX2QiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcHBseSIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX3RvUHJpbWl0aXZlIiwiU3RyaW5nIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiR2FtZWJvYXJkIiwiR2FtZWJvYXJkUmVuZGVyZXIiLCJhY3RpdmF0ZURyYWdBbmREcm9wIiwiR2FtZUFnYWluc3RDb21wdXRlciIsImdhbWVib2FyZFBsYXllcjEiLCJnYW1lYm9hcmRQbGF5ZXIyIiwicGxheWVyMSIsInBsYXllcjIiLCJ0dXJuIiwiZGlzcGxheUdyaWQiLCJwbGFjZVNoaXBzUmFuZG9tbHkiLCJkaXNwbGF5U2hpcHMiLCJzd2l0Y2hQbGF5ZXJzVHVybiIsImN1cnJlbnRQbGF5ZXIiLCJlbm5lbXlQbGF5ZXIiLCJpZGVudGlmeVdpbm5lciIsImZsZWV0TWFuYWdlciIsImFubm91bmNlV2lubmVyIiwid2lubmVyIiwiYWxlcnQiLCJjb25jYXQiLCJib3RoUGxheWVyc0hhdmVTaGlwcyIsInNldFBsYXllcnNSb2xlcyIsImRpc3BsYXlTcXVhcmVSZXN1bHQiLCJ0YXJnZXRTcXVhcmVFbGVtZW50IiwiaGl0U3F1YXJlIiwiZGlzcGxheUhpdFNxdWFyZSIsImRpc3BsYXlNaXNzZWRTcXVhcmUiLCJfc3RhcnQiLCJfY2FsbGVlIiwiX3RoaXMkc2V0UGxheWVyc1JvbGVzIiwiX3RoaXMkc2V0UGxheWVyc1JvbGVzMiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJyZWNlaXZlQXR0YWNrIiwiU3F1YXJlIiwiZ2FtZWJvYXJkWE1heCIsInhNYXgiLCJ5TWF4IiwiYm9hcmQiLCJyb3ciLCJqIiwiaXNQb3NpdGlvblZhbGlkIiwicG9zaXRpb24iLCJjb29yZG9uYXRlcyIsImlzSW5zaWRlR2FtZWJvYXJkTGltaXRzIiwiaXNXYXRlciIsIl9jb29yZG9uYXRlcyIsIngiLCJ5IiwiX2Nvb3Jkb25hdGVzMiIsInNoaXBSZWZlcmVuY2UiLCJ0dXJuV2F0ZXJUb1NoaXAiLCJfdGhpczMiLCJfY29vcmRvbmF0ZXMzIiwicGxhY2VTaGlwIiwiY2FsY3VsYXRlUG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsIl90aGlzNCIsInNldE9yaWVudGF0aW9uUmFuZG9tbHkiLCJfY29vcmRvbmF0ZXM0IiwidGFyZ2V0U3F1YXJlIiwiYXR0YWNrZWQiLCJhdHRhY2siLCJoaXQiLCJET01HcmlkIiwiY3JlYXRlRWxlbWVudCIsImRpc3BsYXlTcXVhcmUiLCJjb2x1bW4iLCJzcXVhcmUiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXlDb2x1bW4iLCJjb2x1bW5OdW1iZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0cmluZ2lmeSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheVNoaXAiLCJjbGlja09uU3F1YXJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25jZSIsImdldEhlaWdodEdhbWVib2FyZFNxdWFyZUVsZW1lbnQiLCJnYW1lYm9hcmRTcXVhcmUiLCJvZmZzZXRIZWlnaHQiLCJzZXRTaGlwRWxlbWVudFNpemUiLCJzaGlwRWxlbWVudCIsInJlZmVyZW5jZSIsIm9yaWVudGF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRTaGlwRWxlbWVudEF0dHJpYnV0ZXMiLCJzZXRTaGlwRWxlbWVudFN0eWxlIiwidHJpZ2dlclNoaXBFbGVtZW50RHJhZ0V2ZW50cyIsInRyaWdnZXJTaGlwRWxlbWVudEZsaXAiLCJjcmVhdGVEcmFnZ2FibGVTaGlwRWxlbWVudCIsImdldFNoaXBzVG9EcmFnIiwiZ2V0ZHJvcFRhcmdldHMiLCJwbGF5ZXIiLCJmaW5kRHJhZ2dlZFNoaXAiLCJmaW5kIiwiZW5hYmxlU3RhcnRCdXR0b24iLCJzdGFydEJ1dHRvbiIsImRpc2FibGVkIiwiZHJvcEhhbmRsZXIiLCJfZHJhZ0FuZERyb3BFdmVudHMkZHIiLCJfZHJhZ0FuZERyb3BFdmVudHMkZHIyIiwidHJpZ2dlclRhcmdldERyb3AiLCJkcm9wVGFyZ2V0IiwiZHJvcEhhbmRsZXJGbiIsIl9jaG9vc2VUYXJnZXQiLCJoaXRzIiwicmFuZG9tQmluYXJ5Iiwicm91bmQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==