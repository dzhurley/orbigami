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
  var useColor = _ref.useColor,
      value = _ref.value;
  var color = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    if (!useColor) {
      return '#FFFFFF';
    }

    var hex = Math.round(0xFFFFFF / value).toString(16);
    return "#".concat(hex.length === 5 ? '0' + hex : hex);
  }, [useColor, value]);
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
      lineNumber: 40
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
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meshPhongMaterial", {
    attach: "material",
    flatShading: true,
    morphTargets: true,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};

var Content = function Content(_ref2) {
  var useColor = _ref2.useColor,
      value = _ref2.value;
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
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ambientLight", {
    args: [0x404040],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [-400, 400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [300, 100, -500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [400, -400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), cameraRef.current && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("orbitControls", {
    ref: controlsRef,
    args: [cameraRef.current, canvas],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Orb, {
    useColor: useColor,
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1.5),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      useColor = _useState4[0],
      setUseColor = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3753581096",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;width:80vw;height:1rem;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:1;background-color:lightgray;padding:0.5rem;}.controls input{margin:0;text-align:center;}.controls input[type=range]{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RytCLEFBS2dDLEFBVU8sQUFZVCxBQUtFLFNBSk8sRUF0Qk4sQUEyQmhCLE9BakJlLEtBVEYsSUFzQmIsRUFaZ0IsR0FURixTQVVELENBVE8sUUFVSixRQVRPLElBVU8sZUFUUixrQkFDdEIseURBU2MsVUFDaUIsMkJBQ1osZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2RlcmVraHVybGV5L2NvZGVzL29yYmlnYW1pL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYXBwbHksIENhbnZhcywgdXNlUmVuZGVyLCB1c2VUaHJlZSwgdXNlVXBkYXRlIH0gZnJvbSAncmVhY3QtdGhyZWUtZmliZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnLi4vcmVzb3VyY2VzJztcblxuYXBwbHkoeyBPcmJpdENvbnRyb2xzIH0pO1xuXG5jb25zdCBhZmZlY3RQb3NpdGlvbiA9ICh4LCB5LCB6LCB0cmFpdCkgPT4ge1xuICAgIHJldHVybiBbeCwgeSwgel0ubWFwKHAgPT4ge1xuICAgICAgICByZXR1cm4gcCAqIE1hdGguY29zKHAgKiB0cmFpdCkgKiBNYXRoLmFicyhNYXRoLnNpbihwICogdHJhaXQpKSAqIDI7XG4gICAgfSk7XG59O1xuXG5jb25zdCBPcmIgPSAoeyB1c2VDb2xvciwgdmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghdXNlQ29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiAnI0ZGRkZGRic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGV4ID0gTWF0aC5yb3VuZCgweEZGRkZGRiAvIHZhbHVlKS50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBgIyR7aGV4Lmxlbmd0aCA9PT0gNSA/ICcwJyArIGhleCA6IGhleH1gO1xuICAgIH0sIFt1c2VDb2xvciwgdmFsdWVdKTtcblxuICAgIGNvbnN0IGdlb1JlZiA9IHVzZVVwZGF0ZShnZW9tZXRyeSA9PiB7XG4gICAgICAgIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xuICAgICAgICBjb25zdCBzY2FsZVBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHBvc2l0aW9ucy5sZW5ndGg7IHAgKz0gMykge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBvc2l0aW9uc1twXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbnNbcCArIDFdO1xuICAgICAgICAgICAgY29uc3QgeiA9IHBvc2l0aW9uc1twICsgMl07XG4gICAgICAgICAgICB2ZXJ0ZXguc2V0KC4uLmFmZmVjdFBvc2l0aW9uKHgsIHksIHosIHZhbHVlKSk7XG4gICAgICAgICAgICB2ZXJ0ZXgudG9BcnJheShzY2FsZVBvc2l0aW9ucywgc2NhbGVQb3NpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb25bMF0gPSBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShzY2FsZVBvc2l0aW9ucywgMyk7XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWVzaFxuICAgICAgICAgICAgcG9zaXRpb249e1swLCAwLCAwXX1cbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17WzFdfVxuICAgICAgICA+XG4gICAgICAgICAgICA8aWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeVxuICAgICAgICAgICAgICAgIGFyZ3M9e1s1MCwgMV19XG4gICAgICAgICAgICAgICAgcmVmPXtnZW9SZWZ9XG4gICAgICAgICAgICAgICAgYXR0YWNoPVwiZ2VvbWV0cnlcIlxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtnZW9tZXRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbFxuICAgICAgICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICAgICAgICBmbGF0U2hhZGluZz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBtb3JwaFRhcmdldHM9e3RydWV9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9tZXNoPlxuICAgICk7XG59O1xuXG5jb25zdCBDb250ZW50ID0gKHsgdXNlQ29sb3IsIHZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBjYW1lcmFSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBjb250cm9sc1JlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IHsgY2FudmFzLCBzaXplLCBzZXREZWZhdWx0Q2FtZXJhIH0gPSB1c2VUaHJlZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHZvaWQgc2V0RGVmYXVsdENhbWVyYShjYW1lcmFSZWYuY3VycmVudCksIFtdKTtcbiAgICB1c2VSZW5kZXIoKCkgPT4gY29udHJvbHNSZWYuY3VycmVudC51cGRhdGUoKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBlcnNwZWN0aXZlQ2FtZXJhXG4gICAgICAgICAgICAgICAgcmVmPXtjYW1lcmFSZWZ9XG4gICAgICAgICAgICAgICAgYXNwZWN0PXtzaXplLndpZHRoIC8gc2l6ZS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgcmFkaXVzPXsoc2l6ZS53aWR0aCArIHNpemUuaGVpZ2h0KSAvIDR9XG4gICAgICAgICAgICAgICAgZm92PXs1NX1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17WzcwLCA3MCwgMjAwXX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZT17c2VsZiA9PiBzZWxmLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxhbWJpZW50TGlnaHQgYXJncz17WzB4NDA0MDQwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1stNDAwLCA0MDAsIDUwMF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbMzAwLCAxMDAsIC01MDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17WzQwMCwgLTQwMCwgNTAwXX0gLz5cblxuICAgICAgICAgICAge2NhbWVyYVJlZi5jdXJyZW50ICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8b3JiaXRDb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjb250cm9sc1JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M9e1tjYW1lcmFSZWYuY3VycmVudCwgY2FudmFzXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPE9yYiB1c2VDb2xvcj17dXNlQ29sb3J9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxLjUpO1xuICAgIGNvbnN0IFt1c2VDb2xvciwgc2V0VXNlQ29sb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMDFcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0VmFsdWUocGFyc2VGbG9hdChldnQudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0VXNlQ29sb3IoZXZ0LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2FudmFzPlxuICAgICAgICAgICAgICAgIDxDb250ZW50IHZhbHVlPXt2YWx1ZX0gc2V0VmFsdWU9e3NldFZhbHVlfSAvPlxuICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3753581096" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
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
    className: "jsx-3753581096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    checked: useColor,
    onChange: function onChange(evt) {
      return setUseColor(evt.target.checked);
    },
    className: "jsx-3753581096",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.92a0cdeaaaeee6f35dcc.hot-update.js.map