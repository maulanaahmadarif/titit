/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Titit = function () {
  function Titit(options) {
    _classCallCheck(this, Titit);

    this.options = options;
    this.tweet = '';
  }

  _createClass(Titit, [{
    key: 'init',
    value: function init() {
      this.createPop();
      this.selectIt();
      this.tweetIt();
    }
  }, {
    key: 'createPop',
    value: function createPop() {
      var tititPop = document.createElement('div');
      var innerPop = document.createElement('div');
      var arrowPop = document.createElement('div');
      innerPop.setAttribute('class', 'inner-pop');
      innerPop.style.fill = this.options.color;
      tititPop.style.backgroundColor = this.options.containerColor;
      tititPop.setAttribute('class', 'titit__pop');
      arrowPop.setAttribute('class', 'arrow-pop');
      innerPop.innerHTML = '<div class="tw-share"><svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M21.725 5.338c-.744.47-1.605.804-2.513 1.006a3.978 3.978 0 0 0-2.942-1.293c-2.22 0-4.02 1.81-4.02 4.02 0 .32.034.63.07.94-3.31-.18-6.27-1.78-8.255-4.23a4.544 4.544 0 0 0-.574 2.01c.04 1.43.74 2.66 1.8 3.38-.63-.01-1.25-.19-1.79-.5v.08c0 1.93 1.38 3.56 3.23 3.95-.34.07-.7.12-1.07.14-.25-.02-.5-.04-.72-.07.49 1.58 1.97 2.74 3.74 2.8a8.49 8.49 0 0 1-5.02 1.72c-.3-.03-.62-.04-.93-.07A11.447 11.447 0 0 0 8.88 21c7.386 0 11.43-6.13 11.414-11.414.015-.21.01-.38 0-.578a7.604 7.604 0 0 0 2.01-2.08 7.27 7.27 0 0 1-2.297.645 3.856 3.856 0 0 0 1.72-2.23"></path></svg></div>';
      tititPop.appendChild(innerPop);
      tititPop.appendChild(arrowPop);
      document.body.appendChild(tititPop);
    }
  }, {
    key: 'selectIt',
    value: function selectIt() {
      var _this = this;

      var elem = document.querySelectorAll('' + this.options.parentElem);
      elem.forEach(function (el) {
        return el.addEventListener('mouseup', function () {
          return _this.showPop();
        });
      });
    }
  }, {
    key: 'tweetIt',
    value: function tweetIt() {
      var _this2 = this;

      var twBtn = document.querySelector('.tw-share');
      console.log(this.tweet);
      twBtn.addEventListener('click', function () {
        _this2.popUp(_this2.tweet, 'Share', 600, 300);
      });
    }
  }, {
    key: 'popUp',
    value: function popUp(url, title, w, h) {
      var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
      var left = width / 2 - w / 2 + dualScreenLeft;
      var top = height / 2 - h / 2 + dualScreenTop;
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
      if (window.focus) {
        newWindow.focus();
      }
    }
  }, {
    key: 'showPop',
    value: function showPop() {
      var selection = window.getSelection();
      var textSelection = selection.toString().trim();
      console.log(textSelection);
      var tititPop = document.querySelector('.titit__pop');
      if (textSelection < 1) {
        tititPop.classList.remove('titit__pop--show');
        return;
      }
      var textPosition = selection.getRangeAt(0).getBoundingClientRect();
      tititPop.classList.add('titit__pop--show');
      var textCoord = {
        x: textPosition.x,
        y: textPosition.y - (tititPop.offsetHeight + 5),
        w: Math.floor(textPosition.width / 2)
      };
      tititPop.style.top = textCoord.y + window.scrollY + 'px';
      tititPop.style.left = textCoord.x + window.scrollX + textCoord.w + 'px';
      var wordArr = textSelection.split(' ');
      var wordArrFilter = [];
      wordArr.forEach(function (word) {
        var wCount = wordArrFilter.join(' ').length + word.length;
        if (wCount < 274 - window.location.href.length) wordArrFilter.push(word);
      });
      var tweet = encodeURI('\u201C' + wordArrFilter.join(' ') + '\u201D');
      var postLink = encodeURI(window.location.href);
      var tw = 'https://twitter.com/intent/tweet/?text=' + tweet + '&url=' + postLink;
      this.tweet = tw;
    }
  }]);

  return Titit;
}();

/***/ })
/******/ ]);