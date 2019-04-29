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

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3420297455",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;width:80vw;height:1rem;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:1;background-color:lightgray;padding:0.5rem;}.controls input{width:100%;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RytCLEFBS2dDLEFBVU8sQUFZUCxXQXJCQyxBQXNCSCxPQVpFLEVBYWYsR0F0QmEsTUFVRyxHQVRGLFNBVUQsQ0FUTyxRQVVKLFFBVE8sSUFVTyxlQVRSLGtCQUN0Qix5REFTYyxVQUNpQiwyQkFDWixlQUNuQiIsImZpbGUiOiIvVXNlcnMvZGVyZWtodXJsZXkvY29kZXMvb3JiaWdhbWkvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBseSwgQ2FudmFzLCB1c2VSZW5kZXIsIHVzZVRocmVlLCB1c2VVcGRhdGUgfSBmcm9tICdyZWFjdC10aHJlZS1maWJlcic7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9yZXNvdXJjZXMnO1xuXG5hcHBseSh7IE9yYml0Q29udHJvbHMgfSk7XG5cbmNvbnN0IGFmZmVjdFBvc2l0aW9uID0gKHgsIHksIHosIHRyYWl0KSA9PiB7XG4gICAgcmV0dXJuIFt4LCB5LCB6XS5tYXAocCA9PiB7XG4gICAgICAgIHJldHVybiBwICogTWF0aC5jb3MocCAqIHRyYWl0KSAqIE1hdGguYWJzKE1hdGguc2luKHAgKiB0cmFpdCkpICogMjtcbiAgICB9KTtcbn07XG5cbmNvbnN0IE9yYiA9ICh7IHVzZUNvbG9yLCB2YWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKCF1c2VDb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuICcjRkZGRkZGJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZXggPSBNYXRoLnJvdW5kKDB4RkZGRkZGIC8gdmFsdWUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGAjJHtoZXgubGVuZ3RoID09PSA1ID8gJzAnICsgaGV4IDogaGV4fWA7XG4gICAgfSwgW3VzZUNvbG9yLCB2YWx1ZV0pO1xuXG4gICAgY29uc3QgZ2VvUmVmID0gdXNlVXBkYXRlKGdlb21ldHJ5ID0+IHtcbiAgICAgICAgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLnBvc2l0aW9uID0gW107XG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XG4gICAgICAgIGNvbnN0IHNjYWxlUG9zaXRpb25zID0gW107XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcG9zaXRpb25zLmxlbmd0aDsgcCArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zaXRpb25zW3BdO1xuICAgICAgICAgICAgY29uc3QgeSA9IHBvc2l0aW9uc1twICsgMV07XG4gICAgICAgICAgICBjb25zdCB6ID0gcG9zaXRpb25zW3AgKyAyXTtcbiAgICAgICAgICAgIHZlcnRleC5zZXQoLi4uYWZmZWN0UG9zaXRpb24oeCwgeSwgeiwgdmFsdWUpKTtcbiAgICAgICAgICAgIHZlcnRleC50b0FycmF5KHNjYWxlUG9zaXRpb25zLCBzY2FsZVBvc2l0aW9ucy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvblswXSA9IG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHNjYWxlUG9zaXRpb25zLCAzKTtcbiAgICB9LCBbdmFsdWVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtZXNoXG4gICAgICAgICAgICBwb3NpdGlvbj17WzAsIDAsIDBdfVxuICAgICAgICAgICAgbW9ycGhUYXJnZXRJbmZsdWVuY2VzPXtbMV19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxpY29zYWhlZHJvbkJ1ZmZlckdlb21ldHJ5XG4gICAgICAgICAgICAgICAgYXJncz17WzUwLCAxXX1cbiAgICAgICAgICAgICAgICByZWY9e2dlb1JlZn1cbiAgICAgICAgICAgICAgICBhdHRhY2g9XCJnZW9tZXRyeVwiXG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e2dlb21ldHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1lc2hQaG9uZ01hdGVyaWFsXG4gICAgICAgICAgICAgICAgYXR0YWNoPVwibWF0ZXJpYWxcIlxuICAgICAgICAgICAgICAgIGZsYXRTaGFkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIG1vcnBoVGFyZ2V0cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L21lc2g+XG4gICAgKTtcbn07XG5cbmNvbnN0IENvbnRlbnQgPSAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgY2FtZXJhUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgY29udHJvbHNSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCB7IGNhbnZhcywgc2l6ZSwgc2V0RGVmYXVsdENhbWVyYSB9ID0gdXNlVGhyZWUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB2b2lkIHNldERlZmF1bHRDYW1lcmEoY2FtZXJhUmVmLmN1cnJlbnQpLCBbXSk7XG4gICAgdXNlUmVuZGVyKCgpID0+IGNvbnRyb2xzUmVmLmN1cnJlbnQudXBkYXRlKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxwZXJzcGVjdGl2ZUNhbWVyYVxuICAgICAgICAgICAgICAgIHJlZj17Y2FtZXJhUmVmfVxuICAgICAgICAgICAgICAgIGFzcGVjdD17c2l6ZS53aWR0aCAvIHNpemUuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIHJhZGl1cz17KHNpemUud2lkdGggKyBzaXplLmhlaWdodCkgLyA0fVxuICAgICAgICAgICAgICAgIGZvdj17NTV9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e1s3MCwgNzAsIDIwMF19XG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e3NlbGYgPT4gc2VsZi51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGFyZ3M9e1sweDQwNDA0MF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbLTQwMCwgNDAwLCA1MDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17WzMwMCwgMTAwLCAtNTAwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1s0MDAsIC00MDAsIDUwMF19IC8+XG5cbiAgICAgICAgICAgIHtjYW1lcmFSZWYuY3VycmVudCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPG9yYml0Q29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y29udHJvbHNSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzPXtbY2FtZXJhUmVmLmN1cnJlbnQsIGNhbnZhc119XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxPcmIgdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDEuNSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRyb2xzIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDAxXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldFZhbHVlKHBhcnNlRmxvYXQoZXZ0LnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYW52YXM+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQgdmFsdWU9e3ZhbHVlfSBzZXRWYWx1ZT17c2V0VmFsdWV9IC8+XG4gICAgICAgICAgICA8L0NhbnZhcz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-3420297455" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
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
      lineNumber: 135
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_5__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Content, {
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.f6fd0b0ad1c4bb5450e8.hot-update.js.map