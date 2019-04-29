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
      return '#D7D7D7';
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
    id: "2599761888",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;width:80vw;height:1rem;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:1;padding:0.5rem;background-color:lightgray;text-align:center;}.controls input{margin:0;}.controls input[type=range]{width:100%;}.controls input[type=checkbox]{margin-top:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RytCLEFBS2dDLEFBVU8sQUFjVCxBQUlFLEFBSUssU0FQcEIsRUF4QmdCLEFBNEJoQixLQUlBLEVBdEJlLEtBVEYsTUFVRyxHQVRGLFNBVUQsQ0FUTyxRQVVKLFFBVE8sSUFVTyxlQVRSLGtCQUN0Qix5REFTYyxVQUNLLGVBRVksMkJBQ1Qsa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwcGx5LCBDYW52YXMsIHVzZVJlbmRlciwgdXNlVGhyZWUsIHVzZVVwZGF0ZSB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uL3Jlc291cmNlcyc7XG5cbmFwcGx5KHsgT3JiaXRDb250cm9scyB9KTtcblxuY29uc3QgYWZmZWN0UG9zaXRpb24gPSAoeCwgeSwgeiwgdHJhaXQpID0+IHtcbiAgICByZXR1cm4gW3gsIHksIHpdLm1hcChwID0+IHtcbiAgICAgICAgcmV0dXJuIHAgKiBNYXRoLmNvcyhwICogdHJhaXQpICogTWF0aC5hYnMoTWF0aC5zaW4ocCAqIHRyYWl0KSkgKiAyO1xuICAgIH0pO1xufTtcblxuY29uc3QgT3JiID0gKHsgdXNlQ29sb3IsIHZhbHVlIH0pID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXVzZUNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gJyNEN0Q3RDcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhleCA9IE1hdGgucm91bmQoMHhGRkZGRkYgLyB2YWx1ZSkudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gYCMke2hleC5sZW5ndGggPT09IDUgPyAnMCcgKyBoZXggOiBoZXh9YDtcbiAgICB9LCBbdXNlQ29sb3IsIHZhbHVlXSk7XG5cbiAgICBjb25zdCBnZW9SZWYgPSB1c2VVcGRhdGUoZ2VvbWV0cnkgPT4ge1xuICAgICAgICBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBbXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcbiAgICAgICAgY29uc3Qgc2NhbGVQb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwb3NpdGlvbnMubGVuZ3RoOyBwICs9IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwb3NpdGlvbnNbcF07XG4gICAgICAgICAgICBjb25zdCB5ID0gcG9zaXRpb25zW3AgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBwb3NpdGlvbnNbcCArIDJdO1xuICAgICAgICAgICAgdmVydGV4LnNldCguLi5hZmZlY3RQb3NpdGlvbih4LCB5LCB6LCB2YWx1ZSkpO1xuICAgICAgICAgICAgdmVydGV4LnRvQXJyYXkoc2NhbGVQb3NpdGlvbnMsIHNjYWxlUG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uWzBdID0gbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoc2NhbGVQb3NpdGlvbnMsIDMpO1xuICAgIH0sIFt2YWx1ZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1lc2hcbiAgICAgICAgICAgIHBvc2l0aW9uPXtbMCwgMCwgMF19XG4gICAgICAgICAgICBtb3JwaFRhcmdldEluZmx1ZW5jZXM9e1sxXX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGljb3NhaGVkcm9uQnVmZmVyR2VvbWV0cnlcbiAgICAgICAgICAgICAgICBhcmdzPXtbNTAsIDFdfVxuICAgICAgICAgICAgICAgIHJlZj17Z2VvUmVmfVxuICAgICAgICAgICAgICAgIGF0dGFjaD1cImdlb21ldHJ5XCJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZT17Z2VvbWV0cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWVzaFBob25nTWF0ZXJpYWxcbiAgICAgICAgICAgICAgICBhdHRhY2g9XCJtYXRlcmlhbFwiXG4gICAgICAgICAgICAgICAgZmxhdFNoYWRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgbW9ycGhUYXJnZXRzPXt0cnVlfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvbWVzaD5cbiAgICApO1xufTtcblxuY29uc3QgQ29udGVudCA9ICh7IHVzZUNvbG9yLCB2YWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgY2FtZXJhUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgY29udHJvbHNSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCB7IGNhbnZhcywgc2l6ZSwgc2V0RGVmYXVsdENhbWVyYSB9ID0gdXNlVGhyZWUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB2b2lkIHNldERlZmF1bHRDYW1lcmEoY2FtZXJhUmVmLmN1cnJlbnQpLCBbXSk7XG4gICAgdXNlUmVuZGVyKCgpID0+IGNvbnRyb2xzUmVmLmN1cnJlbnQudXBkYXRlKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwZXJzcGVjdGl2ZUNhbWVyYVxuICAgICAgICAgICAgICAgIHJlZj17Y2FtZXJhUmVmfVxuICAgICAgICAgICAgICAgIGFzcGVjdD17c2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHJhZGl1cz17KHNpemUud2lkdGggKyBzaXplLmhlaWdodCkgLyA0fVxuICAgICAgICAgICAgICAgIGZvdj17NTV9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e1s3MCwgNzAsIDIwMF19XG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e3NlbGYgPT4gc2VsZi51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGFyZ3M9e1sweDQwNDA0MF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbLTQwMCwgNDAwLCA1MDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17WzMwMCwgMTAwLCAtNTAwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1s0MDAsIC00MDAsIDUwMF19IC8+XG5cbiAgICAgICAgICAgIHtjYW1lcmFSZWYuY3VycmVudCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPG9yYml0Q29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y29udHJvbHNSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzPXtbY2FtZXJhUmVmLmN1cnJlbnQsIGNhbnZhc119XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxPcmIgdXNlQ29sb3I9e3VzZUNvbG9yfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMS41KTtcbiAgICBjb25zdCBbdXNlQ29sb3IsIHNldFVzZUNvbG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDVyZW07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRyb2xzIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAwMVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRWYWx1ZShwYXJzZUZsb2F0KGV2dC50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF2ZS1tb2RlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJhdmUtbW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dXNlQ29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFVzZUNvbG9yKGV2dC50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHJhdmUgbW9kZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYW52YXM+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQgdXNlQ29sb3I9e3VzZUNvbG9yfSB2YWx1ZT17dmFsdWV9IHNldFZhbHVlPXtzZXRWYWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQ2FudmFzPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2599761888" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
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
    className: "jsx-2599761888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: "rave-mode",
    className: "jsx-2599761888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    name: "rave-mode",
    type: "checkbox",
    checked: useColor,
    onChange: function onChange(evt) {
      return setUseColor(evt.target.checked);
    },
    className: "jsx-2599761888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), "rave mode")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    useColor: useColor,
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.c4fbb49b83de10fe93cb.hot-update.js.map