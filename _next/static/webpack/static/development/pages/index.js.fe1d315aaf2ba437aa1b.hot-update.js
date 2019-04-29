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
    id: "1844099719",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;width:80vw;height:1rem;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:1;padding:0.5rem;background-color:lightgray;text-align:center;}.controls input{margin:0;}.controls input[type=range]{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RytCLEFBS2dDLEFBVU8sQUFjVCxBQUlFLFNBSGYsRUF4QmdCLEFBNEJoQixPQWxCZSxLQVRGLE1BVUcsR0FURixTQVVELENBVE8sUUFVSixRQVRPLElBVU8sZUFUUixrQkFDdEIseURBU2MsVUFDSyxlQUVZLDJCQUNULGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvZGVyZWtodXJsZXkvY29kZXMvb3JiaWdhbWkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBseSwgQ2FudmFzLCB1c2VSZW5kZXIsIHVzZVRocmVlLCB1c2VVcGRhdGUgfSBmcm9tICdyZWFjdC10aHJlZS1maWJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9yZXNvdXJjZXMnO1xuXG5hcHBseSh7IE9yYml0Q29udHJvbHMgfSk7XG5cbmNvbnN0IGFmZmVjdFBvc2l0aW9uID0gKHgsIHksIHosIHRyYWl0KSA9PiB7XG4gICAgcmV0dXJuIFt4LCB5LCB6XS5tYXAocCA9PiB7XG4gICAgICAgIHJldHVybiBwICogTWF0aC5jb3MocCAqIHRyYWl0KSAqIE1hdGguYWJzKE1hdGguc2luKHAgKiB0cmFpdCkpICogMjtcbiAgICB9KTtcbn07XG5cbmNvbnN0IE9yYiA9ICh7IHVzZUNvbG9yLCB2YWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCF1c2VDb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuICcjRkZGRkZGJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKDB4RkZGRkZGIC8gdmFsdWUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGAjJHtoZXgubGVuZ3RoID09PSA1ID8gJzAnICsgaGV4IDogaGV4fWA7XG4gICAgfSwgW3VzZUNvbG9yLCB2YWx1ZV0pO1xuXG4gICAgY29uc3QgZ2VvUmVmID0gdXNlVXBkYXRlKGdlb21ldHJ5ID0+IHtcbiAgICAgICAgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gW107XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XG4gICAgICAgIGNvbnN0IHNjYWxlUG9zaXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcG9zaXRpb25zLmxlbmd0aDsgcCArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zaXRpb25zW3BdO1xuICAgICAgICAgICAgY29uc3QgeSA9IHBvc2l0aW9uc1twICsgMV07XG4gICAgICAgICAgICBjb25zdCB6ID0gcG9zaXRpb25zW3AgKyAyXTtcbiAgICAgICAgICAgIHZlcnRleC5zZXQoLi4uYWZmZWN0UG9zaXRpb24oeCwgeSwgeiwgdmFsdWUpKTtcbiAgICAgICAgICAgIHZlcnRleC50b0FycmF5KHNjYWxlUG9zaXRpb25zLCBzY2FsZVBvc2l0aW9ucy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvblswXSA9IG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHNjYWxlUG9zaXRpb25zLCAzKTtcbiAgICB9LCBbdmFsdWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgICBwb3NpdGlvbj17WzAsIDAsIDBdfVxuICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtbMV19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxpY29zYWhlZHJvbkJ1ZmZlckdlb21ldHJ5XG4gICAgICAgICAgICAgICAgYXJncz17WzUwLCAxXX1cbiAgICAgICAgICAgICAgICByZWY9e2dlb1JlZn1cbiAgICAgICAgICAgICAgICBhdHRhY2g9XCJnZW9tZXRyeVwiXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e2dlb21ldHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsXG4gICAgICAgICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxuICAgICAgICAgICAgICAgIGZsYXRTaGFkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L21lc2g+XG4gICAgKTtcbn07XG5cbmNvbnN0IENvbnRlbnQgPSAoeyB1c2VDb2xvciwgdmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGNvbnRyb2xzUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgeyBjYW52YXMsIHNpemUsIHNldERlZmF1bHRDYW1lcmEgfSA9IHVzZVRocmVlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gdm9pZCBzZXREZWZhdWx0Q2FtZXJhKGNhbWVyYVJlZi5jdXJyZW50KSwgW10pO1xuICAgIHVzZVJlbmRlcigoKSA9PiBjb250cm9sc1JlZi5jdXJyZW50LnVwZGF0ZSgpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGVyc3BlY3RpdmVDYW1lcmFcbiAgICAgICAgICAgICAgICByZWY9e2NhbWVyYVJlZn1cbiAgICAgICAgICAgICAgICBhc3BlY3Q9e3NpemUud2lkdGggLyBzaXplLmhlaWdodH1cbiAgICAgICAgICAgICAgICByYWRpdXM9eyhzaXplLndpZHRoICsgc2l6ZS5oZWlnaHQpIC8gNH1cbiAgICAgICAgICAgICAgICBmb3Y9ezU1fVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtbNzAsIDcwLCAyMDBdfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtzZWxmID0+IHNlbGYudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBhcmdzPXtbMHg0MDQwNDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17Wy00MDAsIDQwMCwgNTAwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1szMDAsIDEwMCwgLTUwMF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbNDAwLCAtNDAwLCA1MDBdfSAvPlxuXG4gICAgICAgICAgICB7Y2FtZXJhUmVmLmN1cnJlbnQgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxvcmJpdENvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbnRyb2xzUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncz17W2NhbWVyYVJlZi5jdXJyZW50LCBjYW52YXNdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8T3JiIHVzZUNvbG9yPXt1c2VDb2xvcn0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDEuNSk7XG4gICAgY29uc3QgW3VzZUNvbG9yLCBzZXRVc2VDb2xvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb250cm9scyBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udHJvbHMgaW5wdXRbdHlwZT1yYW5nZV0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFZhbHVlKHBhcnNlRmxvYXQoZXZ0LnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3VzZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFVzZUNvbG9yKGV2dC50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENhbnZhcz5cbiAgICAgICAgICAgICAgICA8Q29udGVudCB1c2VDb2xvcj17dXNlQ29sb3J9IHZhbHVlPXt2YWx1ZX0gc2V0VmFsdWU9e3NldFZhbHVlfSAvPlxuICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-1844099719" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
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
    className: "jsx-1844099719",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    type: "checkbox",
    checked: useColor,
    onChange: function onChange(evt) {
      return setUseColor(evt.target.checked);
    },
    className: "jsx-1844099719",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    useColor: useColor,
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.fe1d315aaf2ba437aa1b.hot-update.js.map