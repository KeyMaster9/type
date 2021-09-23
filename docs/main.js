/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Calculations.js":
/*!********************************!*\
  !*** ./src/js/Calculations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    key: "getTotalChars",
    value: function getTotalChars() {
      return this.wordContainer.countTotalCharacters();
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
      return words * time;
    }
  }, {
    key: "runTrueWpmCalc",
    value: function runTrueWpmCalc() {
      console.log("".concat(this.relativeTime(), "seconds  ").concat(this.words(), "words"));
      return this.masterCalc(this.words(), this.relativeTime());
    }
  }, {
    key: "runAccuracyCalc",
    value: function runAccuracyCalc() {
      var accuracy = 100 / this.getTotalChars();
      return accuracy * this.getCorrectChars();
    } // runCalcRawWpm() {
    //     var words = 
    // }

  }]);

  return Calculations;
}();



/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    key: "isInvalid",
    value: function isInvalid() {
      return this.getCharacter() !== this.getUserCharacter();
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

/***/ "./src/js/MobileHandler.js":
/*!*********************************!*\
  !*** ./src/js/MobileHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileHandler)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileHandler = /*#__PURE__*/function () {
  function MobileHandler() {
    _classCallCheck(this, MobileHandler);
  }

  _createClass(MobileHandler, [{
    key: "mobileCheck",
    value: function mobileCheck() {
      var hasTouchScreen = false;

      if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
      } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
      } else {
        var mQ = window.matchMedia && matchMedia("(pointer:coarse)");

        if (mQ && mQ.media === "(pointer:coarse)") {
          hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
          hasTouchScreen = true; // deprecated, but good fallback
        } else {
          // Only as a last resort, fall back to user agent sniffing
          var UA = navigator.userAgent;
          hasTouchScreen = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }

      return hasTouchScreen;
    }
  }, {
    key: "mobileFocus",
    value: function mobileFocus() {
      var mobileInput = document.getElementById('mobileInput');
      mobileInput.focus();
      console.log('found input');
    }
  }, {
    key: "onMobileRefocus",
    value: function onMobileRefocus(callback) {
      var wordcontainer = document.getElementById('typing-area');
      wordcontainer.addEventListener('click', function () {
        var refocus = 'refocus';
        callback(refocus);
      });
    }
  }]);

  return MobileHandler;
}();



/***/ }),

/***/ "./src/js/RenderWords.js":
/*!*******************************!*\
  !*** ./src/js/RenderWords.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/js/ResetButton.js":
/*!*******************************!*\
  !*** ./src/js/ResetButton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetButton)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResetButton = /*#__PURE__*/function () {
  function ResetButton() {
    _classCallCheck(this, ResetButton);
  }

  _createClass(ResetButton, [{
    key: "onResetButtonPress",
    value: function onResetButtonPress(callback) {
      var resetButton = document.getElementById('reset-button');
      console.log(resetButton);
      resetButton.addEventListener('click', function () {
        var reset = 'reset';
        callback(reset);
      });
    }
  }]);

  return ResetButton;
}();



/***/ }),

/***/ "./src/js/ResultsRenderer.js":
/*!***********************************!*\
  !*** ./src/js/ResultsRenderer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultsRenderer)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResultsRenderer = /*#__PURE__*/function () {
  function ResultsRenderer(calculations) {
    _classCallCheck(this, ResultsRenderer);

    this.calculations = calculations;
  }

  _createClass(ResultsRenderer, [{
    key: "renderSequence",
    value: function renderSequence() {
      var wpm = this.calculations.runTrueWpmCalc();
      var totalTime = this.calculations.calcSeconds();
      var accuracy = this.calculations.runAccuracyCalc();
      var displaySheet = "\n        <div id=\"wpm\" class=\"results-rendered\">WPM: ".concat(Math.round(wpm), "</div>\n        <br/>\n        <div id=\"total-time\" class=\"results-rendered\">Time: ").concat(totalTime.toFixed(1), "s</div>\n        <br/>\n        <div id=\"accuracy\" class=\"results-rendered\">Accuracy: ").concat(accuracy.toFixed(1), "%</div>\n        ");
      return displaySheet;
    }
  }]);

  return ResultsRenderer;
}();



/***/ }),

/***/ "./src/js/TestConfig.js":
/*!******************************!*\
  !*** ./src/js/TestConfig.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestConfig)
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

var TestConfig = /*#__PURE__*/function () {
  function TestConfig() {
    _classCallCheck(this, TestConfig);

    _defineProperty(this, "testType", 'word-count');
  }

  _createClass(TestConfig, [{
    key: "onSettingsButtonPress",
    value: function onSettingsButtonPress(callback) {
      var settingButtons = _toConsumableArray(document.getElementsByClassName('test-setting'));

      settingButtons.forEach(function (settingButtons) {
        return settingButtons.addEventListener('click', function () {
          var value = +settingButtons.getAttribute('value');
          var type = settingButtons.getAttribute('testType');
          callback(type, value);
        });
      }); // settingButton.addEventListener('click', console.log('hi')/*getData(settingsButton)*/);
      // console.log('button press')
    }
  }]);

  return TestConfig;
}();



/***/ }),

/***/ "./src/js/Timer.js":
/*!*************************!*\
  !*** ./src/js/Timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
      this.clearTimerRender();
    }
  }, {
    key: "clearTimerRender",
    value: function clearTimerRender() {
      this._element.innerHTML = '';
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

/***/ "./src/js/UpdateScreen.js":
/*!********************************!*\
  !*** ./src/js/UpdateScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateScreen)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UpdateScreen = /*#__PURE__*/function () {
  function UpdateScreen() {
    _classCallCheck(this, UpdateScreen);
  }

  _createClass(UpdateScreen, [{
    key: "renderResultsDisplay",
    value: function renderResultsDisplay(results) {
      this.hideElements();
      var main2 = document.getElementById('main2');
      main2.style.animation = 'unhide 1s 1';
      main2.style.display = 'flex';
      main2.innerHTML = results;
      var buttonArea = document.getElementById('button-area');
      buttonArea.style.animation = 'unhide 1s 1';
      buttonArea.style.display = 'flex';
    }
  }, {
    key: "renderTestDisplay",
    value: function renderTestDisplay() {
      this.hideElements();
      setTimeout(function () {
        var main = document.getElementById('main');
        main.style.animation = 'unhide 1s 1';
        main.style.display = 'flex';
        var buttonArea = document.getElementById('button-area');
        buttonArea.style.animation = 'unhide 1s 1';
        buttonArea.style.display = 'flex';
      }, 0);
    }
  }, {
    key: "hideElements",
    value: function hideElements() {
      var main = document.getElementById('main');
      var main2 = document.getElementById('main2');
      var buttonArea = document.getElementById('button-area');
      buttonArea.style.display = 'none';
      main.style.display = 'none';
      main2.style.display = 'none';
    }
  }]);

  return UpdateScreen;
}();



/***/ }),

/***/ "./src/js/UserInput.js":
/*!*****************************!*\
  !*** ./src/js/UserInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
  }, {
    key: "countFilledChars",
    value: function countFilledChars() {
      return this.characters.filter(function (_char2) {
        return _char2.isValid() || _char2.isInvalid();
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WordContainer)
/* harmony export */ });
/* harmony import */ var _json_defaultWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/defaultWords */ "./src/json/defaultWords.json");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character */ "./src/js/Character.js");
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Word */ "./src/js/Word.js");
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
  function WordContainer() {
    _classCallCheck(this, WordContainer);
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
  }, {
    key: "countTotalCharacters",
    value: function countTotalCharacters() {
      var numOfWords = this.countCompleteWords() + 1;
      var wordsArray = this.words;
      var spaces = this.countCompleteWords();
      var totalChars = spaces;

      for (var i = 0; i < numOfWords; i++) {
        totalChars = totalChars + wordsArray[i].countFilledChars();
      }

      return totalChars;
    }
  }, {
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
    key: "build",
    value: function build() {
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

      this.words = words;

      if (words.length > 0) {
        words[0].setActive(true);
      }
    }
  }]);

  return WordContainer;
}();



/***/ }),

/***/ "./node_modules/store/dist/store.legacy.js":
/*!*************************************************!*\
  !*** ./node_modules/store/dist/store.legacy.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var engine = __webpack_require__(/*! ../src/store-engine */ "./node_modules/store/src/store-engine.js")

var storages = __webpack_require__(/*! ../storages/all */ "./node_modules/store/storages/all.js")
var plugins = [__webpack_require__(/*! ../plugins/json2 */ "./node_modules/store/plugins/json2.js")]

module.exports = engine.createStore(storages, plugins)


/***/ }),

/***/ "./node_modules/store/plugins/json2.js":
/*!*********************************************!*\
  !*** ./node_modules/store/plugins/json2.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = json2Plugin

function json2Plugin() {
	__webpack_require__(/*! ./lib/json2 */ "./node_modules/store/plugins/lib/json2.js")
	return {}
}


/***/ }),

/***/ "./node_modules/store/plugins/lib/json2.js":
/*!*************************************************!*\
  !*** ./node_modules/store/plugins/lib/json2.js ***!
  \*************************************************/
/***/ (() => {

/* eslint-disable */

//  json2.js
//  2016-10-28
//  Public Domain.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://www.JSON.org/js.html
//  This code should be minified before deployment.
//  See http://javascript.crockford.com/jsmin.html

//  USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
//  NOT CONTROL.

//  This file creates a global JSON object containing two methods: stringify
//  and parse. This file provides the ES5 JSON capability to ES3 systems.
//  If a project might run on IE8 or earlier, then this file should be included.
//  This file does nothing on ES5 systems.

//      JSON.stringify(value, replacer, space)
//          value       any JavaScript value, usually an object or array.
//          replacer    an optional parameter that determines how object
//                      values are stringified for objects. It can be a
//                      function or an array of strings.
//          space       an optional parameter that specifies the indentation
//                      of nested structures. If it is omitted, the text will
//                      be packed without extra whitespace. If it is a number,
//                      it will specify the number of spaces to indent at each
//                      level. If it is a string (such as "\t" or "&nbsp;"),
//                      it contains the characters used to indent at each level.
//          This method produces a JSON text from a JavaScript value.
//          When an object value is found, if the object contains a toJSON
//          method, its toJSON method will be called and the result will be
//          stringified. A toJSON method does not serialize: it returns the
//          value represented by the name/value pair that should be serialized,
//          or undefined if nothing should be serialized. The toJSON method
//          will be passed the key associated with the value, and this will be
//          bound to the value.

//          For example, this would serialize Dates as ISO strings.

//              Date.prototype.toJSON = function (key) {
//                  function f(n) {
//                      // Format integers to have at least two digits.
//                      return (n < 10)
//                          ? "0" + n
//                          : n;
//                  }
//                  return this.getUTCFullYear()   + "-" +
//                       f(this.getUTCMonth() + 1) + "-" +
//                       f(this.getUTCDate())      + "T" +
//                       f(this.getUTCHours())     + ":" +
//                       f(this.getUTCMinutes())   + ":" +
//                       f(this.getUTCSeconds())   + "Z";
//              };

//          You can provide an optional replacer method. It will be passed the
//          key and value of each member, with this bound to the containing
//          object. The value that is returned from your method will be
//          serialized. If your method returns undefined, then the member will
//          be excluded from the serialization.

//          If the replacer parameter is an array of strings, then it will be
//          used to select the members to be serialized. It filters the results
//          such that only members with keys listed in the replacer array are
//          stringified.

//          Values that do not have JSON representations, such as undefined or
//          functions, will not be serialized. Such values in objects will be
//          dropped; in arrays they will be replaced with null. You can use
//          a replacer function to replace those with JSON values.

//          JSON.stringify(undefined) returns undefined.

//          The optional space parameter produces a stringification of the
//          value that is filled with line breaks and indentation to make it
//          easier to read.

//          If the space parameter is a non-empty string, then that string will
//          be used for indentation. If the space parameter is a number, then
//          the indentation will be that many spaces.

//          Example:

//          text = JSON.stringify(["e", {pluribus: "unum"}]);
//          // text is '["e",{"pluribus":"unum"}]'

//          text = JSON.stringify(["e", {pluribus: "unum"}], null, "\t");
//          // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

//          text = JSON.stringify([new Date()], function (key, value) {
//              return this[key] instanceof Date
//                  ? "Date(" + this[key] + ")"
//                  : value;
//          });
//          // text is '["Date(---current time---)"]'

//      JSON.parse(text, reviver)
//          This method parses a JSON text to produce an object or array.
//          It can throw a SyntaxError exception.

//          The optional reviver parameter is a function that can filter and
//          transform the results. It receives each of the keys and values,
//          and its return value is used instead of the original value.
//          If it returns what it received, then the structure is not modified.
//          If it returns undefined then the member is deleted.

//          Example:

//          // Parse the text. Values that look like ISO date strings will
//          // be converted to Date objects.

//          myData = JSON.parse(text, function (key, value) {
//              var a;
//              if (typeof value === "string") {
//                  a =
//   /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
//                  if (a) {
//                      return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
//                          +a[5], +a[6]));
//                  }
//              }
//              return value;
//          });

//          myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
//              var d;
//              if (typeof value === "string" &&
//                      value.slice(0, 5) === "Date(" &&
//                      value.slice(-1) === ")") {
//                  d = new Date(value.slice(5, -1));
//                  if (d) {
//                      return d;
//                  }
//              }
//              return value;
//          });

//  This is a reference implementation. You are free to copy, modify, or
//  redistribute.

/*jslint
    eval, for, this
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    "use strict";

    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
                        f(this.getUTCMonth() + 1) + "-" +
                        f(this.getUTCDate()) + "T" +
                        f(this.getUTCHours()) + ":" +
                        f(this.getUTCMinutes()) + ":" +
                        f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === "string"
                    ? c
                    : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
                typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case "string":
            return quote(value);

        case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value)
                ? String(value)
                : "null";

        case "boolean":
        case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

        case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

            if (!value) {
                return "null";
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null";
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? "[]"
                    : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ": "
                                    : ":"
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? "{}"
                : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                    (typeof replacer !== "object" ||
                    typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                            ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

/***/ }),

/***/ "./node_modules/store/src/store-engine.js":
/*!************************************************!*\
  !*** ./node_modules/store/src/store-engine.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(/*! ./util */ "./node_modules/store/src/util.js")
var slice = util.slice
var pluck = util.pluck
var each = util.each
var bind = util.bind
var create = util.create
var isList = util.isList
var isFunction = util.isFunction
var isObject = util.isObject

module.exports = {
	createStore: createStore
}

var storeAPI = {
	version: '2.0.12',
	enabled: false,
	
	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this.storage.read(this._namespacePrefix + key)
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this.storage.write(this._namespacePrefix + key, this._serialize(value))
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this.storage.remove(this._namespacePrefix + key)
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this
		this.storage.each(function(val, namespacedKey) {
			callback.call(self, self._deserialize(val), (namespacedKey || '').replace(self._namespaceRegexp, ''))
		})
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this.storage.clearAll()
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function() {
		return createStore.apply(this, arguments)
	},
	
	addPlugin: function(plugin) {
		this._addPlugin(plugin)
	},
	
	namespace: function(namespace) {
		return createStore(this.storage, this.plugins, namespace)
	}
}

function _warn() {
	var _console = (typeof console == 'undefined' ? null : console)
	if (!_console) { return }
	var fn = (_console.warn ? _console.warn : _console.log)
	fn.apply(_console, arguments)
}

function createStore(storages, plugins, namespace) {
	if (!namespace) {
		namespace = ''
	}
	if (storages && !isList(storages)) {
		storages = [storages]
	}
	if (plugins && !isList(plugins)) {
		plugins = [plugins]
	}

	var namespacePrefix = (namespace ? '__storejs_'+namespace+'_' : '')
	var namespaceRegexp = (namespace ? new RegExp('^'+namespacePrefix) : null)
	var legalNamespaces = /^[a-zA-Z0-9_\-]*$/ // alpha-numeric + underscore and dash
	if (!legalNamespaces.test(namespace)) {
		throw new Error('store.js namespaces can only have alphanumerics + underscores and dashes')
	}
	
	var _privateStoreProps = {
		_namespacePrefix: namespacePrefix,
		_namespaceRegexp: namespaceRegexp,

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__'
				storage.write(testStr, testStr)
				var ok = (storage.read(testStr) === testStr)
				storage.remove(testStr)
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName]
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0)
				var self = this

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each(arguments, function(arg, i) {
						args[i] = arg
					})
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args)

				return pluginFnProp.apply(self, newFnArgs)
			}
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = ''
			try { val = JSON.parse(strVal) }
			catch(e) { val = strVal }

			return (val !== undefined ? val : defaultVal)
		},
		
		_addStorage: function(storage) {
			if (this.enabled) { return }
			if (this._testStorage(storage)) {
				this.storage = storage
				this.enabled = true
			}
		},

		_addPlugin: function(plugin) {
			var self = this

			// If the plugin is an array, then add all plugins in the array.
			// This allows for a plugin to depend on other plugins.
			if (isList(plugin)) {
				each(plugin, function(plugin) {
					self._addPlugin(plugin)
				})
				return
			}

			// Keep track of all plugins we've seen so far, so that we
			// don't add any of them twice.
			var seenPlugin = pluck(this.plugins, function(seenPlugin) {
				return (plugin === seenPlugin)
			})
			if (seenPlugin) {
				return
			}
			this.plugins.push(plugin)

			// Check that the plugin is properly formed
			if (!isFunction(plugin)) {
				throw new Error('Plugins must be function values that return objects')
			}

			var pluginProperties = plugin.call(this)
			if (!isObject(pluginProperties)) {
				throw new Error('Plugins must return an object of function properties')
			}

			// Add the plugin function properties to this store instance.
			each(pluginProperties, function(pluginFnProp, propName) {
				if (!isFunction(pluginFnProp)) {
					throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
				}
				self._assignPluginFnProp(pluginFnProp, propName)
			})
		},
		
		// Put deprecated properties in the private API, so as to not expose it to accidential
		// discovery through inspection of the store object.
		
		// Deprecated: addStorage
		addStorage: function(storage) {
			_warn('store.addStorage(storage) is deprecated. Use createStore([storages])')
			this._addStorage(storage)
		}
	}

	var store = create(_privateStoreProps, storeAPI, {
		plugins: []
	})
	store.raw = {}
	each(store, function(prop, propName) {
		if (isFunction(prop)) {
			store.raw[propName] = bind(store, prop)			
		}
	})
	each(storages, function(storage) {
		store._addStorage(storage)
	})
	each(plugins, function(plugin) {
		store._addPlugin(plugin)
	})
	return store
}


/***/ }),

/***/ "./node_modules/store/src/util.js":
/*!****************************************!*\
  !*** ./node_modules/store/src/util.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assign = make_assign()
var create = make_create()
var trim = make_trim()
var Global = (typeof window !== 'undefined' ? window : __webpack_require__.g)

module.exports = {
	assign: assign,
	create: create,
	trim: trim,
	bind: bind,
	slice: slice,
	each: each,
	map: map,
	pluck: pluck,
	isList: isList,
	isFunction: isFunction,
	isObject: isObject,
	Global: Global
}

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each(Object(arguments[i]), function(val, key) {
					obj[key] = val
				})
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice(arguments, 1)
			F.prototype = obj
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each(obj, fn) {
	pluck(obj, function(val, key) {
		fn(val, key)
		return false
	})
}

function map(obj, fn) {
	var res = (isList(obj) ? [] : {})
	pluck(obj, function(v, k) {
		res[k] = fn(v, k)
		return false
	})
	return res
}

function pluck(obj, fn) {
	if (isList(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject(val) {
	return val && {}.toString.call(val) === '[object Object]'
}


/***/ }),

/***/ "./node_modules/store/storages/all.js":
/*!********************************************!*\
  !*** ./node_modules/store/storages/all.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = [
	// Listed in order of usage preference
	__webpack_require__(/*! ./localStorage */ "./node_modules/store/storages/localStorage.js"),
	__webpack_require__(/*! ./oldFF-globalStorage */ "./node_modules/store/storages/oldFF-globalStorage.js"),
	__webpack_require__(/*! ./oldIE-userDataStorage */ "./node_modules/store/storages/oldIE-userDataStorage.js"),
	__webpack_require__(/*! ./cookieStorage */ "./node_modules/store/storages/cookieStorage.js"),
	__webpack_require__(/*! ./sessionStorage */ "./node_modules/store/storages/sessionStorage.js"),
	__webpack_require__(/*! ./memoryStorage */ "./node_modules/store/storages/memoryStorage.js")
]


/***/ }),

/***/ "./node_modules/store/storages/cookieStorage.js":
/*!******************************************************!*\
  !*** ./node_modules/store/storages/cookieStorage.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global
var trim = util.trim

module.exports = {
	name: 'cookieStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var doc = Global.document

function read(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each(callback) {
	var cookies = doc.cookie.split(/; ?/g)
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=')
		var key = unescape(kvp[0])
		var val = unescape(kvp[1])
		callback(val, key)
	}
}

function write(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
}

function remove(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
}

function clearAll() {
	each(function(_, key) {
		remove(key)
	})
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}


/***/ }),

/***/ "./node_modules/store/storages/localStorage.js":
/*!*****************************************************!*\
  !*** ./node_modules/store/storages/localStorage.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'localStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function localStorage() {
	return Global.localStorage
}

function read(key) {
	return localStorage().getItem(key)
}

function write(key, data) {
	return localStorage().setItem(key, data)
}

function each(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return localStorage().removeItem(key)
}

function clearAll() {
	return localStorage().clear()
}


/***/ }),

/***/ "./node_modules/store/storages/memoryStorage.js":
/*!******************************************************!*\
  !*** ./node_modules/store/storages/memoryStorage.js ***!
  \******************************************************/
/***/ ((module) => {

// memoryStorage is a useful last fallback to ensure that the store
// is functions (meaning store.get(), store.set(), etc will all function).
// However, stored values will not persist when the browser navigates to
// a new page or reloads the current page.

module.exports = {
	name: 'memoryStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var memoryStorage = {}

function read(key) {
	return memoryStorage[key]
}

function write(key, data) {
	memoryStorage[key] = data
}

function each(callback) {
	for (var key in memoryStorage) {
		if (memoryStorage.hasOwnProperty(key)) {
			callback(memoryStorage[key], key)
		}
	}
}

function remove(key) {
	delete memoryStorage[key]
}

function clearAll(key) {
	memoryStorage = {}
}


/***/ }),

/***/ "./node_modules/store/storages/oldFF-globalStorage.js":
/*!************************************************************!*\
  !*** ./node_modules/store/storages/oldFF-globalStorage.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// oldFF-globalStorage provides storage for Firefox
// versions 6 and 7, where no localStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldFF-globalStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var globalStorage = Global.globalStorage

function read(key) {
	return globalStorage[key]
}

function write(key, data) {
	globalStorage[key] = data
}

function each(fn) {
	for (var i = globalStorage.length - 1; i >= 0; i--) {
		var key = globalStorage.key(i)
		fn(globalStorage[key], key)
	}
}

function remove(key) {
	return globalStorage.removeItem(key)
}

function clearAll() {
	each(function(key, _) {
		delete globalStorage[key]
	})
}


/***/ }),

/***/ "./node_modules/store/storages/oldIE-userDataStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/store/storages/oldIE-userDataStorage.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// oldIE-userDataStorage provides storage for Internet Explorer
// versions 6 and 7, where no localStorage, sessionStorage, etc
// is available.

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'oldIE-userDataStorage',
	write: write,
	read: read,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

var storageName = 'storejs'
var doc = Global.document
var _withStorageEl = _makeIEStorageElFunction()
var disable = (Global.navigator ? Global.navigator.userAgent : '').match(/ (MSIE 8|MSIE 9|MSIE 10)\./) // MSIE 9.x, MSIE 10.x

function write(unfixedKey, data) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.setAttribute(fixedKey, data)
		storageEl.save(storageName)
	})
}

function read(unfixedKey) {
	if (disable) { return }
	var fixedKey = fixKey(unfixedKey)
	var res = null
	_withStorageEl(function(storageEl) {
		res = storageEl.getAttribute(fixedKey)
	})
	return res
}

function each(callback) {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		for (var i=attributes.length-1; i>=0; i--) {
			var attr = attributes[i]
			callback(storageEl.getAttribute(attr.name), attr.name)
		}
	})
}

function remove(unfixedKey) {
	var fixedKey = fixKey(unfixedKey)
	_withStorageEl(function(storageEl) {
		storageEl.removeAttribute(fixedKey)
		storageEl.save(storageName)
	})
}

function clearAll() {
	_withStorageEl(function(storageEl) {
		var attributes = storageEl.XMLDocument.documentElement.attributes
		storageEl.load(storageName)
		for (var i=attributes.length-1; i>=0; i--) {
			storageEl.removeAttribute(attributes[i].name)
		}
		storageEl.save(storageName)
	})
}

// Helpers
//////////

// In IE7, keys cannot start with a digit or contain certain chars.
// See https://github.com/marcuswestin/store.js/issues/40
// See https://github.com/marcuswestin/store.js/issues/83
var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
function fixKey(key) {
	return key.replace(/^\d/, '___$&').replace(forbiddenCharsRegex, '___')
}

function _makeIEStorageElFunction() {
	if (!doc || !doc.documentElement || !doc.documentElement.addBehavior) {
		return null
	}
	var scriptTag = 'script',
		storageOwner,
		storageContainer,
		storageEl

	// Since #userData storage applies only to specific paths, we need to
	// somehow link our data to a specific path.  We choose /favicon.ico
	// as a pretty safe option, since all browsers already make a request to
	// this URL anyway and being a 404 will not hurt us here.  We wrap an
	// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
	// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
	// since the iframe access rules appear to allow direct access and
	// manipulation of the document element, even for a 404 page.  This
	// document can be used instead of the current document (which would
	// have been limited to the current path) to perform #userData storage.
	try {
		/* global ActiveXObject */
		storageContainer = new ActiveXObject('htmlfile')
		storageContainer.open()
		storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
		storageContainer.close()
		storageOwner = storageContainer.w.frames[0].document
		storageEl = storageOwner.createElement('div')
	} catch(e) {
		// somehow ActiveXObject instantiation failed (perhaps some special
		// security settings or otherwse), fall back to per-path storage
		storageEl = doc.createElement('div')
		storageOwner = doc.body
	}

	return function(storeFunction) {
		var args = [].slice.call(arguments, 0)
		args.unshift(storageEl)
		// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
		// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
		storageOwner.appendChild(storageEl)
		storageEl.addBehavior('#default#userData')
		storageEl.load(storageName)
		storeFunction.apply(this, args)
		storageOwner.removeChild(storageEl)
		return
	}
}


/***/ }),

/***/ "./node_modules/store/storages/sessionStorage.js":
/*!*******************************************************!*\
  !*** ./node_modules/store/storages/sessionStorage.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var util = __webpack_require__(/*! ../src/util */ "./node_modules/store/src/util.js")
var Global = util.Global

module.exports = {
	name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll
}

function sessionStorage() {
	return Global.sessionStorage
}

function read(key) {
	return sessionStorage().getItem(key)
}

function write(key, data) {
	return sessionStorage().setItem(key, data)
}

function each(fn) {
	for (var i = sessionStorage().length - 1; i >= 0; i--) {
		var key = sessionStorage().key(i)
		fn(read(key), key)
	}
}

function remove(key) {
	return sessionStorage().removeItem(key)
}

function clearAll() {
	return sessionStorage().clear()
}


/***/ }),

/***/ "./src/json/defaultWords.json":
/*!************************************!*\
  !*** ./src/json/defaultWords.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RenderWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderWords */ "./src/js/RenderWords.js");
/* harmony import */ var _TimerRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimerRenderer */ "./src/js/TimerRenderer.js");
/* harmony import */ var _UserInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInput */ "./src/js/UserInput.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer */ "./src/js/Timer.js");
/* harmony import */ var _Calculations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calculations */ "./src/js/Calculations.js");
/* harmony import */ var _ResultsRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResultsRenderer */ "./src/js/ResultsRenderer.js");
/* harmony import */ var _TestConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TestConfig */ "./src/js/TestConfig.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _WordContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WordContainer */ "./src/js/WordContainer.js");
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ResetButton */ "./src/js/ResetButton.js");
/* harmony import */ var _UpdateScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UpdateScreen */ "./src/js/UpdateScreen.js");
/* harmony import */ var _MobileHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MobileHandler */ "./src/js/MobileHandler.js");













(function () {
  var mobileHandler = new _MobileHandler__WEBPACK_IMPORTED_MODULE_11__["default"]();
  var isMobileUser = mobileHandler.mobileCheck();

  if (isMobileUser) {
    mobileHandler.mobileFocus();
  }

  mobileHandler.onMobileRefocus(function (refocus) {
    if (isMobileUser && refocus) {
      mobileHandler.mobileFocus();
      console.log('refocused');
    }
  });
  var updateScreen = new _UpdateScreen__WEBPACK_IMPORTED_MODULE_10__["default"]();
  var renderer = new _RenderWords__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('typing-area'));
  var wordContainer = new _WordContainer__WEBPACK_IMPORTED_MODULE_8__["default"]();
  wordContainer.build(store__WEBPACK_IMPORTED_MODULE_7___default().get('word-count'));
  var testConfig = new _TestConfig__WEBPACK_IMPORTED_MODULE_6__["default"]();
  var timer = new _Timer__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var resetButton = new _ResetButton__WEBPACK_IMPORTED_MODULE_9__["default"]();
  resetButton.onResetButtonPress(function (reset) {
    if (reset == 'reset') {
      timer.end();
      timer.reset();
      wordContainer.build(store__WEBPACK_IMPORTED_MODULE_7___default().get('word-count'));
      timerRenderer.stopRenderering();
      renderer.render(wordContainer);
      updateScreen.renderTestDisplay();
      userInput.start();
    }
  });
  testConfig.onSettingsButtonPress(function (type, value) {
    store__WEBPACK_IMPORTED_MODULE_7___default().set('word-count', value);
    wordContainer.build(value);
    timer.end();
    timer.reset();
    timerRenderer.stopRenderering();
    renderer.render(wordContainer);
    updateScreen.renderTestDisplay();
  });
  var calculator = new _Calculations__WEBPACK_IMPORTED_MODULE_4__["default"](wordContainer, timer);
  var timerRenderer = new _TimerRenderer__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById('timer-display'), timer);
  var userInput = new _UserInput__WEBPACK_IMPORTED_MODULE_2__["default"](wordContainer);
  var resultsRenderer = new _ResultsRenderer__WEBPACK_IMPORTED_MODULE_5__["default"](calculator);
  userInput.onInput(function () {
    if (!timer.hasStarted()) {
      timer.start();
      timerRenderer.startRenderering();
    }

    renderer.render(wordContainer);
  });
  userInput.onComplete(function () {
    timer.end();
    timerRenderer.stopRenderering();
    var results = resultsRenderer.renderSequence();
    updateScreen.renderResultsDisplay(results);
  });
  updateScreen.renderTestDisplay();
  userInput.start();
  renderer.render(wordContainer);
})();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map