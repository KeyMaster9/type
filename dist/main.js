/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Calculations.js":
/*!********************************!*\
  !*** ./src/js/Calculations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculations)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculations = /*#__PURE__*/function () {
  function Calculations(wordContainer, timer) {
    _classCallCheck(this, Calculations);

    this.wordContainer = wordContainer;
    this.timer = timer;
  }

  _createClass(Calculations, [{
    key: "getCorrectChars",
    value: function getCorrectChars() {
      return this.wordContainer.countValidCharacters();
    }
  }, {
    key: "calcSeconds",
    value: function calcSeconds() {
      return this.timer.duration() / 1000;
    }
  }, {
    key: "words",
    value: function words() {
      console.log(this.getCorrectChars() / 5);
      return this.getCorrectChars() / 5;
    }
  }, {
    key: "relativeTime",
    value: function relativeTime() {
      return 60 / this.calcSeconds();
    }
  }, {
    key: "masterCalc",
    value: function masterCalc(words, time) {
      alert("".concat(words * time, "wpm"));
      return;
    }
  }, {
    key: "runTrueWpmCalc",
    value: function runTrueWpmCalc() {
      console.log("".concat(this.relativeTime(), "seconds  ").concat(this.words(), "words"));
      this.masterCalc(this.words(), this.relativeTime());
    }
  }]);

  return Calculations;
}();



/***/ }),

/***/ "./src/js/CalculationsRenderer.js":
/*!****************************************!*\
  !*** ./src/js/CalculationsRenderer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalculationsRenderer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CalculationsRenderer = /*#__PURE__*/function () {
  function CalculationsRenderer(calculations) {
    _classCallCheck(this, CalculationsRenderer);

    this.calculations = calculations;
  }

  _createClass(CalculationsRenderer, [{
    key: "render",
    value: function render() {// calculations.getWordsPerMinute();
    }
  }]);

  return CalculationsRenderer;
}();



/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Character)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Character = /*#__PURE__*/function () {
  function Character(_char) {
    _classCallCheck(this, Character);

    _defineProperty(this, "userChar", null);

    _defineProperty(this, "active", false);

    this["char"] = _char;
  }

  _createClass(Character, [{
    key: "getCharacter",
    value: function getCharacter() {
      return this["char"];
    }
  }, {
    key: "getUserCharacter",
    value: function getUserCharacter() {
      return this.userChar;
    }
  }, {
    key: "hasUserCharacter",
    value: function hasUserCharacter() {
      return !!this.userChar;
    }
  }, {
    key: "setUserCharacter",
    value: function setUserCharacter(userChar) {
      this.userChar = userChar;
    }
  }, {
    key: "clearUserCharacter",
    value: function clearUserCharacter() {
      this.userChar = null;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.getCharacter() === this.getUserCharacter();
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.active = bool;
      return this;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "getDisplayCharacter",
    value: function getDisplayCharacter() {
      if (this.hasUserCharacter()) {
        return this.getUserCharacter();
      }

      return this.getCharacter();
    }
  }]);

  return Character;
}();



/***/ }),

/***/ "./src/js/RenderWords.js":
/*!*******************************!*\
  !*** ./src/js/RenderWords.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenderWords)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RenderWords = /*#__PURE__*/function () {
  function RenderWords(container) {
    _classCallCheck(this, RenderWords);

    this.container = container;
  }

  _createClass(RenderWords, [{
    key: "render",
    value: function render(wordContainer) {
      var _this = this;

      var newContent = '';
      wordContainer.getWords().forEach(function (word) {
        newContent += _this.renderWord(word);
      });
      this.container.innerHTML = newContent;
    }
  }, {
    key: "renderWord",
    value: function renderWord(word) {
      var _this2 = this;

      var classes = ['word'];

      if (word.isActive()) {
        classes.push('active');
      } else {
        classes.push('inactive');
      }

      if (word.isComplete()) {
        classes.push('complete');
      } else {
        classes.push('incomplete');
      }

      var newWord = "<div class=\"".concat(classes.join(' '), "\">");
      word.getCharacters().forEach(function (character) {
        newWord += _this2.renderCharacter(character);
      });
      newWord += '</div>';
      return newWord;
    }
  }, {
    key: "renderCharacter",
    value: function renderCharacter(character) {
      var classes = ['letter'];

      if (character.isActive()) {
        classes.push('active');
      } else {
        classes.push('inactive');
      }

      if (character.hasUserCharacter()) {
        if (character.isValid()) {
          classes.push('valid');
        } else {
          classes.push('invalid');
        }
      }

      return "<div class=\"".concat(classes.join(' '), "\" >").concat(character.getDisplayCharacter(), "</div>");
    }
  }]);

  return RenderWords;
}();



/***/ }),

/***/ "./src/js/Timer.js":
/*!*************************!*\
  !*** ./src/js/Timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Timer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timer = /*#__PURE__*/function () {
  function Timer() {
    _classCallCheck(this, Timer);

    _defineProperty(this, "_start", void 0);

    _defineProperty(this, "_end", void 0);
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      this._start = new Date();
    }
  }, {
    key: "hasStarted",
    value: function hasStarted() {
      return !!this._start;
    }
  }, {
    key: "end",
    value: function end() {
      this._end = new Date();
    }
  }, {
    key: "reset",
    value: function reset() {
      this._start = null;
      this._end = null;
    }
  }, {
    key: "duration",
    value: function duration() {
      if (!this._start) {
        throw new Error('Timer not started');
      }

      var end = this._end || new Date();
      return end.getTime() - this._start.getTime();
    }
  }]);

  return Timer;
}();



/***/ }),

/***/ "./src/js/TimerRenderer.js":
/*!*********************************!*\
  !*** ./src/js/TimerRenderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimerRenderer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimerRenderer = /*#__PURE__*/function () {
  function TimerRenderer(element, timer) {
    _classCallCheck(this, TimerRenderer);

    _defineProperty(this, "_timeout", void 0);

    _defineProperty(this, "_element", void 0);

    this._element = element;
    this._timer = timer;
  }

  _createClass(TimerRenderer, [{
    key: "startRenderering",
    value: function startRenderering() {
      var _this = this;

      var renderFunc = function renderFunc() {
        _this.render();

        _this._timeout = setTimeout(renderFunc, 100);
      };

      this._timeout = setTimeout(renderFunc, 100);
    }
  }, {
    key: "stopRenderering",
    value: function stopRenderering() {
      clearTimeout(this._timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var duration = this._timer.duration();

      this._element.innerHTML = Math.round(duration / 1000);
    }
  }]);

  return TimerRenderer;
}();



/***/ }),

/***/ "./src/js/UserInput.js":
/*!*****************************!*\
  !*** ./src/js/UserInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInput)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserInput = /*#__PURE__*/function () {
  function UserInput(wordContainer) {
    var _this = this;

    _classCallCheck(this, UserInput);

    _defineProperty(this, "listeners", []);

    _defineProperty(this, "completeListeners", []);

    _defineProperty(this, "settingsButton", void 0);

    _defineProperty(this, "_start", function (e) {
      _this.eventHandler(e);

      _this._runInputCallbacks();
    });

    _defineProperty(this, "eventHandler", function (e) {
      if (e.code === 'Space') {
        e.preventDefault();

        _this.wordContainer.setWordComplete();

        _this.wordContainer.activateNextWord();
      } else if (e.code === 'Backspace') {
        var word = _this.wordContainer.getActiveWord();

        var currentChar = word.getActiveCharacter();
        var isLastChar = word.isLastCharacter(currentChar);

        if (isLastChar && currentChar.hasUserCharacter()) {
          currentChar.clearUserCharacter();
        } else if (!isLastChar || isLastChar && !currentChar.hasUserCharacter()) {
          var newActiveCharacter = word.activatePreviousCharacter();

          if (newActiveCharacter) {
            newActiveCharacter.clearUserCharacter();
          }

          if (!newActiveCharacter) {
            _this.wordContainer.activatePreviousWord();
          }
        }
      } else if (e.code.substring(0, 3) == 'Key') {
        _this.inputBuilder(e.key);
      }
    });

    this.wordContainer = wordContainer;
  }

  _createClass(UserInput, [{
    key: "activeWord",
    value: function activeWord() {
      var active = document.getElementsByClassName('active');
      return active;
    }
  }, {
    key: "start",
    value: function start() {
      document.body.addEventListener('keydown', this._start);
    }
  }, {
    key: "onInput",
    value: function onInput(callback) {
      this.listeners.push(callback);
    }
  }, {
    key: "_runInputCallbacks",
    value: function _runInputCallbacks(e) {
      this.listeners.forEach(function (l) {
        return l(e);
      });
    }
  }, {
    key: "onComplete",
    value: function onComplete(callback) {
      this.completeListeners.push(callback);
    }
  }, {
    key: "_complete",
    value: function _complete() {
      document.body.removeEventListener('keydown', this._start);

      this._runCompleteCallbacks();
    }
  }, {
    key: "_runCompleteCallbacks",
    value: function _runCompleteCallbacks(e) {
      this.completeListeners.forEach(function (l) {
        return l(e);
      });
    }
  }, {
    key: "inputBuilder",
    value: function inputBuilder(_char) {
      var word = this.wordContainer.getActiveWord();
      var character = word.getActiveCharacter();
      character.setUserCharacter(_char);
      var nextChar = word.activateNextCharacter();

      if (this.wordContainer.isLastWord(word) && !nextChar) {
        this._complete();
      }
    }
  }]);

  return UserInput;
}();



/***/ }),

/***/ "./src/js/Word.js":
/*!************************!*\
  !*** ./src/js/Word.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Word)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Word = /*#__PURE__*/function () {
  function Word() {
    var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Word);

    _defineProperty(this, "active", false);

    _defineProperty(this, "complete", false);

    this.characters = characters;

    if (characters.length > 0) {
      characters[0].setActive(true);
    }
  }

  _createClass(Word, [{
    key: "getCharacters",
    value: function getCharacters() {
      return _toConsumableArray(this.characters);
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.active = bool;
      return this;
    }
  }, {
    key: "setComplete",
    value: function setComplete() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.complete = bool;
      console.log('word is complete');
      return this;
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.active;
    }
  }, {
    key: "isComplete",
    value: function isComplete() {
      return this.complete;
    }
  }, {
    key: "getActiveCharacter",
    value: function getActiveCharacter() {
      var active = this.characters.find(function (character) {
        return character.isActive();
      });
      return active;
    }
  }, {
    key: "activateNextCharacter",
    value: function activateNextCharacter() {
      var currentActive = this.getActiveCharacter();
      var index = this.characters.indexOf(currentActive);
      var newActive = this.characters[index + 1];

      if (newActive) {
        currentActive.setActive(false);
        newActive.setActive(true);
      }

      return newActive;
    }
  }, {
    key: "activatePreviousCharacter",
    value: function activatePreviousCharacter() {
      var currentActive = this.getActiveCharacter();
      var index = this.characters.indexOf(currentActive);
      var newActive = null;

      if (index > 0) {
        newActive = this.characters[index - 1];
        currentActive.setActive(false);
        newActive.setActive(true);
      }

      return newActive;
    }
  }, {
    key: "isLastCharacter",
    value: function isLastCharacter(character) {
      var index = this.characters.indexOf(character);
      return index > -1 && this.characters.length === index + 1;
    }
  }, {
    key: "countValidChars",
    value: function countValidChars() {
      return this.characters.filter(function (_char) {
        return _char.isValid();
      }).length;
    }
  }]);

  return Word;
}();



/***/ }),

/***/ "./src/js/WordContainer.js":
/*!*********************************!*\
  !*** ./src/js/WordContainer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordContainer)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WordContainer = /*#__PURE__*/function () {
  function WordContainer(words) {
    _classCallCheck(this, WordContainer);

    this.words = words;

    if (words.length > 0) {
      words[0].setActive(true);
    }
  }

  _createClass(WordContainer, [{
    key: "getActiveWord",
    value: function getActiveWord() {
      var active = this.words.find(function (word) {
        return word.isActive();
      });
      return active;
    } /////////////////////////////////////////////////////////////////////////

  }, {
    key: "activatePreviousWord",
    value: function activatePreviousWord() {
      var currentActive = this.getActiveWord();
      var index = this.words.indexOf(currentActive);
      var newActive = null;

      if (index > 0) {
        newActive = this.words[index - 1];
        currentActive.setActive(false);
        newActive.setActive(true);
      }

      return newActive;
    } //////////////////////////////////////////////

  }, {
    key: "activateNextWord",
    value: function activateNextWord() {
      var currentActive = this.getActiveWord();
      var index = this.words.indexOf(currentActive);
      var newActive = this.words[index + 1];

      if (newActive) {
        currentActive.setActive(false);
        newActive.setActive(true);
      }

      return newActive;
    }
  }, {
    key: "getWords",
    value: function getWords() {
      return _toConsumableArray(this.words);
    }
  }, {
    key: "isLastWord",
    value: function isLastWord(word) {
      var index = this.words.indexOf(word);
      return index > -1 && this.words.length === index + 1;
    }
  }, {
    key: "setWordComplete",
    value: function setWordComplete() {
      var current = this.getActiveWord();
      current.setComplete();
      return current;
    }
  }, {
    key: "isComplete",
    value: function isComplete(word) {
      console.log('cunt');
      return word.complete;
    }
  }, {
    key: "countCompleteWords",
    value: function countCompleteWords() {
      var wordCount = this.words.length;
      var count = 0;

      for (var i = 0; i < wordCount; i++) {
        var currentWord = this.words[i];

        if (currentWord.isComplete()) {
          count++;
        }
      }

      return count;
    }
  }, {
    key: "countValidCharacters",
    value: function countValidCharacters() {
      var numOfWords = this.countCompleteWords() + 1;
      var wordsArray = this.words;
      var spaces = this.countCompleteWords();
      var correctChar = spaces;

      for (var i = 0; i < numOfWords; i++) {
        correctChar = correctChar + wordsArray[i].countValidChars();
      }

      return correctChar;
    }
  }]);

  return WordContainer;
}();



/***/ }),

/***/ "./src/js/WordGenerator.js":
/*!*********************************!*\
  !*** ./src/js/WordGenerator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordGenerator)
/* harmony export */ });
/* harmony import */ var _json_defaultWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/defaultWords */ "./src/json/defaultWords.json");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character */ "./src/js/Character.js");
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ "./src/js/Word.js");
/* harmony import */ var _WordContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WordContainer */ "./src/js/WordContainer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var WordGenerator = /*#__PURE__*/function () {
  function WordGenerator() {
    _classCallCheck(this, WordGenerator);
  }

  _createClass(WordGenerator, [{
    key: "wordPicker",
    value: function wordPicker() {
      var wordChoice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _json_defaultWords__WEBPACK_IMPORTED_MODULE_0__;
      var maxVar = wordChoice.length;
      var selectedWord = Math.floor(Math.random() * maxVar);
      return wordChoice[selectedWord];
    }
  }, {
    key: "splitter",
    value: function splitter(word) {
      var letters = [];

      for (var i = 0; i !== word.length; i++) {
        letters.push(word.charAt(i));
      }

      return letters;
    }
  }, {
    key: "generateWords",
    value: function generateWords() {
      var _this = this;

      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
      var words = [];
      var newWord = null;
      var prevWord = null;

      var _loop = function _loop(i) {
        var characters = [];

        do {
          newWord = _this.wordPicker();

          if (newWord === prevWord) {
            console.log('gotta do it again');
          }
        } while (newWord === prevWord);

        _this.splitter(newWord).forEach(function (character) {
          var _char = new _Character__WEBPACK_IMPORTED_MODULE_1__["default"](character);

          characters.push(_char);
        });

        var word = new _Word__WEBPACK_IMPORTED_MODULE_2__["default"](characters);
        words.push(word);
        prevWord = newWord;
      };

      for (var i = 0; i < count; i++) {
        _loop(i);
      }

      return new _WordContainer__WEBPACK_IMPORTED_MODULE_3__["default"](words);
    }
  }]);

  return WordGenerator;
}();



/***/ }),

/***/ "./src/json/defaultWords.json":
/*!************************************!*\
  !*** ./src/json/defaultWords.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('["time","person","year","way","day","thing","man","world","life","hand","part","child","eye","woman","place","work","week","case","point","government","company","number","cock","group","problem","fact","of","and","a","in","that","have","it","for","not","on","with","he","as","you","do","at","this","but","from","they","we","say","her","she","or","an","will","my","balls","one","all","would","there","their","what","so","up","out","if","about","which","go","me","no","just","him","know","take","people","into","year","your","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us"]');

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderWords */ "./src/js/RenderWords.js");
/* harmony import */ var _TimerRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimerRenderer */ "./src/js/TimerRenderer.js");
/* harmony import */ var _WordGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordGenerator */ "./src/js/WordGenerator.js");
/* harmony import */ var _UserInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserInput */ "./src/js/UserInput.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Timer */ "./src/js/Timer.js");
/* harmony import */ var _Calculations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calculations */ "./src/js/Calculations.js");
/* harmony import */ var _CalculationsRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CalculationsRenderer */ "./src/js/CalculationsRenderer.js");






 //import TestConfig from './TestConfig';

(function () {
  var wordGenerator = new _WordGenerator__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var renderer = new _RenderWords__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('typing-area'));
  var wordContainer = wordGenerator.generateWords(); // const settingsConfig = new TestConfig(wordContainer);

  var timer = new _Timer__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var calculator = new _Calculations__WEBPACK_IMPORTED_MODULE_5__["default"](wordContainer, timer);
  var timerRenderer = new _TimerRenderer__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById('timer-display'), timer);
  var userInput = new _UserInput__WEBPACK_IMPORTED_MODULE_3__["default"](wordContainer);
  var calculationsRenderer = new _CalculationsRenderer__WEBPACK_IMPORTED_MODULE_6__["default"](calculator); // settingsConfig.settingsButtonPress();

  userInput.onInput(function () {
    if (!timer.hasStarted()) {
      timer.start();
      timerRenderer.startRenderering();
    }

    renderer.render(wordContainer);
  });
  userInput.onComplete(function () {
    timer.end();
    calculator.runTrueWpmCalc();
    timerRenderer.stopRenderering();
    calculationsRenderer.render();
  });
  userInput.start();
  renderer.render(wordContainer);
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map