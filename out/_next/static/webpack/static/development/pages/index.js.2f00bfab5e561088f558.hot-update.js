webpackHotUpdate("static/development/pages/index.js",{

/***/ "./resources/mic.js":
/*!**************************!*\
  !*** ./resources/mic.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");




var Mic =
/*#__PURE__*/
function () {
  function Mic() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Mic);

    this.source;
    this.context;
    this.analyser;
    this.frequency;
    this.callback;
    this.setValue; // 5 fps

    this.interval = 1000 / 5;
    this.then = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
    this.animate = this.animate.bind(this);
    this.set = this.set.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Mic, [{
    key: "animate",
    value: function animate() {
      if (this.callback === null) {
        return;
      }

      this.callback = requestAnimationFrame(this.animate);

      var now = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();

      var delta = now - this.then;

      if (delta <= this.interval) {
        return;
      }

      this.then = now - delta % this.interval;
      this.analyser.getByteFrequencyData(this.frequency);
      var value = this.frequency.reduce(function (avg, slot) {
        return avg + slot;
      }, 0) / this.frequency.length;
      var scaled = value / 128 + 1;
      this.setValue(scaled);
    }
  }, {
    key: "set",
    value: function set(stream) {
      this.context = new AudioContext();
      this.analyser = this.context.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.minDecibels = -90;
      this.analyser.maxDecibels = -10;
      this.analyser.smoothingTimeConstant = 0.5;
      this.frequency = new Uint8Array(this.analyser.frequencyBinCount);
      this.source = this.context.createMediaStreamSource(stream);
      this.source.connect(this.analyser);
      this.callback = requestAnimationFrame(this.animate);
    }
  }, {
    key: "on",
    value: function on(setValue) {
      if (this.source) {
        this.callback = requestAnimationFrame(this.animate);
        return;
      }

      this.setValue = setValue;
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(this.set);
    }
  }, {
    key: "off",
    value: function off() {
      cancelAnimationFrame(this.callback);
      this.callback = null;
    }
  }]);

  return Mic;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Mic());

/***/ })

})
//# sourceMappingURL=index.js.2f00bfab5e561088f558.hot-update.js.map