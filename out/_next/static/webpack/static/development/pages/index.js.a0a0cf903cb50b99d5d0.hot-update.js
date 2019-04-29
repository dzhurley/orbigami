webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/dist/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources */ "./resources/index.js");



var _jsxFileName = "/Users/derekhurley/codes/orbigami/pages/index.js";






Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["apply"])({
  OrbitControls: _resources__WEBPACK_IMPORTED_MODULE_7__["OrbitControls"]
});

var affectPosition = function affectPosition(x, y, z, trait) {
  return [x, y, z].map(function (p) {
    return p * Math.cos(p * trait) * Math.abs(Math.sin(p * trait)) * 2;
  });
};

var Orb = function Orb(_ref) {
  var value = _ref.value;
  var color = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    var hex = Math.round(0xFFFFFF / value).toString(16);
    return "#".concat(hex.length === 5 ? '0' + hex : hex);
  }, [value]);
  var geoRef = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useUpdate"])(function (geometry) {
    geometry.morphAttributes.position = [];
    var positions = geometry.attributes.position.array;
    var scalePositions = [];
    var vertex = new three__WEBPACK_IMPORTED_MODULE_6__["Vector3"]();

    for (var p = 0; p < positions.length; p += 3) {
      var x = positions[p];
      var y = positions[p + 1];
      var z = positions[p + 2];
      vertex.set.apply(vertex, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(affectPosition(x, y, z, value)));
      vertex.toArray(scalePositions, scalePositions.length);
    }

    geometry.morphAttributes.position[0] = new three__WEBPACK_IMPORTED_MODULE_6__["Float32BufferAttribute"](scalePositions, 3);
  }, [value]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("mesh", {
    position: [0, 0, 0],
    morphTargetInfluences: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("icosahedronBufferGeometry", {
    args: [50, 1],
    ref: geoRef,
    attach: "geometry",
    onUpdate: function onUpdate(geometry) {
      geometry.attributes.position.needsUpdate = true;
      geometry.computeBoundingSphere();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meshPhongMaterial", {
    attach: "material",
    flatShading: true,
    morphTargets: true,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

var Content = function Content(_ref2) {
  var value = _ref2.value;
  var cameraRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var controlsRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useThree"])(),
      canvas = _useThree.canvas,
      size = _useThree.size,
      setDefaultCamera = _useThree.setDefaultCamera;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return void setDefaultCamera(cameraRef.current);
  }, []);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["useRender"])(function () {
    return controlsRef.current.update();
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("perspectiveCamera", {
    ref: cameraRef,
    aspect: size.width / size.height,
    radius: (size.width + size.height) / 4,
    fov: 55,
    position: [70, 70, 200],
    onUpdate: function onUpdate(self) {
      return self.updateProjectionMatrix();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ambientLight", {
    args: [0x404040],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [-400, 400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [300, 100, -500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [400, -400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), cameraRef.current && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("orbitControls", {
    ref: controlsRef,
    args: [cameraRef.current, canvas],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Orb, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1.5),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3420297455",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;width:80vw;height:1rem;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:1;background-color:lightgray;padding:0.5rem;}.controls input{width:100%;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRytCLEFBS2dDLEFBVU8sQUFZUCxXQXJCQyxBQXNCSCxPQVpFLEVBYWYsR0F0QmEsTUFVRyxHQVRGLFNBVUQsQ0FUTyxRQVVKLFFBVE8sSUFVTyxlQVRSLGtCQUN0Qix5REFTYyxVQUNpQiwyQkFDWixlQUNuQiIsImZpbGUiOiIvVXNlcnMvZGVyZWtodXJsZXkvY29kZXMvb3JiaWdhbWkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBseSwgQ2FudmFzLCB1c2VSZW5kZXIsIHVzZVRocmVlLCB1c2VVcGRhdGUgfSBmcm9tICdyZWFjdC10aHJlZS1maWJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9yZXNvdXJjZXMnO1xuXG5hcHBseSh7IE9yYml0Q29udHJvbHMgfSk7XG5cbmNvbnN0IGFmZmVjdFBvc2l0aW9uID0gKHgsIHksIHosIHRyYWl0KSA9PiB7XG4gICAgcmV0dXJuIFt4LCB5LCB6XS5tYXAocCA9PiB7XG4gICAgICAgIHJldHVybiBwICogTWF0aC5jb3MocCAqIHRyYWl0KSAqIE1hdGguYWJzKE1hdGguc2luKHAgKiB0cmFpdCkpICogMjtcbiAgICB9KTtcbn07XG5cbmNvbnN0IE9yYiA9ICh7IHZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKDB4RkZGRkZGIC8gdmFsdWUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGAjJHtoZXgubGVuZ3RoID09PSA1ID8gJzAnICsgaGV4IDogaGV4fWA7XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICBjb25zdCBnZW9SZWYgPSB1c2VVcGRhdGUoZ2VvbWV0cnkgPT4ge1xuICAgICAgICBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBbXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcbiAgICAgICAgY29uc3Qgc2NhbGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwb3NpdGlvbnMubGVuZ3RoOyBwICs9IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwb3NpdGlvbnNbcF07XG4gICAgICAgICAgICBjb25zdCB5ID0gcG9zaXRpb25zW3AgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBwb3NpdGlvbnNbcCArIDJdO1xuICAgICAgICAgICAgdmVydGV4LnNldCguLi5hZmZlY3RQb3NpdGlvbih4LCB5LCB6LCB2YWx1ZSkpO1xuICAgICAgICAgICAgdmVydGV4LnRvQXJyYXkoc2NhbGVQb3NpdGlvbnMsIHNjYWxlUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uWzBdID0gbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoc2NhbGVQb3NpdGlvbnMsIDMpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1lc2hcbiAgICAgICAgICAgIHBvc2l0aW9uPXtbMCwgMCwgMF19XG4gICAgICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e1sxXX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGljb3NhaGVkcm9uQnVmZmVyR2VvbWV0cnlcbiAgICAgICAgICAgICAgICBhcmdzPXtbNTAsIDFdfVxuICAgICAgICAgICAgICAgIHJlZj17Z2VvUmVmfVxuICAgICAgICAgICAgICAgIGF0dGFjaD1cImdlb21ldHJ5XCJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZT17Z2VvbWV0cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWxcbiAgICAgICAgICAgICAgICBhdHRhY2g9XCJtYXRlcmlhbFwiXG4gICAgICAgICAgICAgICAgZmxhdFNoYWRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRzPXt0cnVlfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICApO1xufTtcblxuY29uc3QgQ29udGVudCA9ICh7IHZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBjYW1lcmFSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBjb250cm9sc1JlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHsgY2FudmFzLCBzaXplLCBzZXREZWZhdWx0Q2FtZXJhIH0gPSB1c2VUaHJlZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHZvaWQgc2V0RGVmYXVsdENhbWVyYShjYW1lcmFSZWYuY3VycmVudCksIFtdKTtcbiAgICB1c2VSZW5kZXIoKCkgPT4gY29udHJvbHNSZWYuY3VycmVudC51cGRhdGUoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBlcnNwZWN0aXZlQ2FtZXJhXG4gICAgICAgICAgICAgICAgcmVmPXtjYW1lcmFSZWZ9XG4gICAgICAgICAgICAgICAgYXNwZWN0PXtzaXplLndpZHRoIC8gc2l6ZS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgcmFkaXVzPXsoc2l6ZS53aWR0aCArIHNpemUuaGVpZ2h0KSAvIDR9XG4gICAgICAgICAgICAgICAgZm92PXs1NX1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17WzcwLCA3MCwgMjAwXX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZT17c2VsZiA9PiBzZWxmLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxhbWJpZW50TGlnaHQgYXJncz17WzB4NDA0MDQwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1stNDAwLCA0MDAsIDUwMF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbMzAwLCAxMDAsIC01MDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17WzQwMCwgLTQwMCwgNTAwXX0gLz5cblxuICAgICAgICAgICAge2NhbWVyYVJlZi5jdXJyZW50ICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8b3JiaXRDb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjb250cm9sc1JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M9e1tjYW1lcmFSZWYuY3VycmVudCwgY2FudmFzXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPE9yYiB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMS41KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDVyZW07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udHJvbHMgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMDFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0VmFsdWUocGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENhbnZhcz5cbiAgICAgICAgICAgICAgICA8Q29udGVudCB2YWx1ZT17dmFsdWV9IHNldFZhbHVlPXtzZXRWYWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQ2FudmFzPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3420297455" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "range",
    min: "1",
    max: "2",
    step: "0.001",
    value: value,
    onChange: function onChange(evt) {
      return setValue(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(evt.target.value));
    },
    className: "jsx-3420297455",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.a0a0cf903cb50b99d5d0.hot-update.js.map