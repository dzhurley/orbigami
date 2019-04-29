webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-three-fiber */ "./node_modules/react-three-fiber/dist/index.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resources */ "./resources/index.js");


var _jsxFileName = "/Users/derekhurley/codes/orbigami/pages/index.js";






Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["apply"])({
  OrbitControls: _resources__WEBPACK_IMPORTED_MODULE_6__["OrbitControls"]
});

var affectPosition = function affectPosition(x, y, z, trait) {
  return [x, y, z].map(function (p) {
    return p * Math.cos(p * trait) * Math.abs(Math.sin(p * trait)) * 2;
  });
};

var Orb = function Orb(_ref) {
  var value = _ref.value;
  var color = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return "#".concat(Math.round(0xFFFFFF / value).toString(16));
  }, [value]);
  var geoRef = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useUpdate"])(function (geometry) {
    geometry.morphAttributes.position = [];
    var positions = geometry.attributes.position.array;
    var scalePositions = [];
    var vertex = new three__WEBPACK_IMPORTED_MODULE_5__["Vector3"]();

    for (var p = 0; p < positions.length; p += 3) {
      var x = positions[p];
      var y = positions[p + 1];
      var z = positions[p + 2];
      vertex.set.apply(vertex, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(affectPosition(x, y, z, value)));
      vertex.toArray(scalePositions, scalePositions.length);
    }

    geometry.morphAttributes.position[0] = new three__WEBPACK_IMPORTED_MODULE_5__["Float32BufferAttribute"](scalePositions, 3);
  }, [value]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("mesh", {
    position: [0, 0, 0],
    morphTargetInfluences: [1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("icosahedronBufferGeometry", {
    args: [50, 1],
    ref: geoRef,
    attach: "geometry",
    onUpdate: function onUpdate(geometry) {
      geometry.attributes.position.needsUpdate = true;
      geometry.computeBoundingSphere();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meshPhongMaterial", {
    attach: "material",
    flatShading: true,
    morphTargets: true,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
};

var Content = function Content(_ref2) {
  var value = _ref2.value;
  var cameraRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var controlsRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useThree = Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useThree"])(),
      canvas = _useThree.canvas,
      size = _useThree.size,
      setDefaultCamera = _useThree.setDefaultCamera;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    return void setDefaultCamera(cameraRef.current);
  }, []);
  Object(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["useRender"])(function () {
    return controlsRef.current.update();
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("perspectiveCamera", {
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
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ambientLight", {
    args: [0x404040],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [-400, 400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [300, 100, -500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("pointLight", {
    args: [0xCCCCCC, 0.8],
    position: [400, -400, 500],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), cameraRef.current && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("orbitControls", {
    ref: controlsRef,
    args: [cameraRef.current, canvas],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Orb, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(10),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4220779456",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;overflow:hidden;background:#272727;position:relative;}.controls{position:absolute;left:50%;bottom:5rem;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRytCLEFBS2dDLEFBVU8sV0FUTixPQVVILEtBVEEsSUFVRyxLQVRGLE9BVWdCLEdBVFYsZ0JBQ0csbUJBQ0Qsa0JBQ3RCLGtDQU9BIiwiZmlsZSI6Ii9Vc2Vycy9kZXJla2h1cmxleS9jb2Rlcy9vcmJpZ2FtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFwcGx5LCBDYW52YXMsIHVzZVJlbmRlciwgdXNlVGhyZWUsIHVzZVVwZGF0ZSB9IGZyb20gJ3JlYWN0LXRocmVlLWZpYmVyJztcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4uL3Jlc291cmNlcyc7XG5cbmFwcGx5KHsgT3JiaXRDb250cm9scyB9KTtcblxuY29uc3QgYWZmZWN0UG9zaXRpb24gPSAoeCwgeSwgeiwgdHJhaXQpID0+IHtcbiAgICByZXR1cm4gW3gsIHksIHpdLm1hcChwID0+IHtcbiAgICAgICAgcmV0dXJuIHAgKiBNYXRoLmNvcyhwICogdHJhaXQpICogTWF0aC5hYnMoTWF0aC5zaW4ocCAqIHRyYWl0KSkgKiAyO1xuICAgIH0pO1xufTtcblxuY29uc3QgT3JiID0gKHsgdmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBgIyR7TWF0aC5yb3VuZCgweEZGRkZGRiAvIHZhbHVlKS50b1N0cmluZygxNil9YDtcbiAgICB9LCBbdmFsdWVdKTtcblxuICAgIGNvbnN0IGdlb1JlZiA9IHVzZVVwZGF0ZShnZW9tZXRyeSA9PiB7XG4gICAgICAgIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbiA9IFtdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xuICAgICAgICBjb25zdCBzY2FsZVBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHBvc2l0aW9ucy5sZW5ndGg7IHAgKz0gMykge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBvc2l0aW9uc1twXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbnNbcCArIDFdO1xuICAgICAgICAgICAgY29uc3QgeiA9IHBvc2l0aW9uc1twICsgMl07XG4gICAgICAgICAgICB2ZXJ0ZXguc2V0KC4uLmFmZmVjdFBvc2l0aW9uKHgsIHksIHosIHZhbHVlKSk7XG4gICAgICAgICAgICB2ZXJ0ZXgudG9BcnJheShzY2FsZVBvc2l0aW9ucywgc2NhbGVQb3NpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb25bMF0gPSBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShzY2FsZVBvc2l0aW9ucywgMyk7XG4gICAgfSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWVzaFxuICAgICAgICAgICAgcG9zaXRpb249e1swLCAwLCAwXX1cbiAgICAgICAgICAgIG1vcnBoVGFyZ2V0SW5mbHVlbmNlcz17WzFdfVxuICAgICAgICA+XG4gICAgICAgICAgICA8aWNvc2FoZWRyb25CdWZmZXJHZW9tZXRyeVxuICAgICAgICAgICAgICAgIGFyZ3M9e1s1MCwgMV19XG4gICAgICAgICAgICAgICAgcmVmPXtnZW9SZWZ9XG4gICAgICAgICAgICAgICAgYXR0YWNoPVwiZ2VvbWV0cnlcIlxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtnZW9tZXRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeS5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXNoUGhvbmdNYXRlcmlhbFxuICAgICAgICAgICAgICAgIGF0dGFjaD1cIm1hdGVyaWFsXCJcbiAgICAgICAgICAgICAgICBmbGF0U2hhZGluZz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBtb3JwaFRhcmdldHM9e3RydWV9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9tZXNoPlxuICAgICk7XG59O1xuXG5jb25zdCBDb250ZW50ID0gKHsgdmFsdWUgfSkgPT4ge1xuICAgIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGNvbnRyb2xzUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgeyBjYW52YXMsIHNpemUsIHNldERlZmF1bHRDYW1lcmEgfSA9IHVzZVRocmVlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gdm9pZCBzZXREZWZhdWx0Q2FtZXJhKGNhbWVyYVJlZi5jdXJyZW50KSwgW10pO1xuICAgIHVzZVJlbmRlcigoKSA9PiBjb250cm9sc1JlZi5jdXJyZW50LnVwZGF0ZSgpKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGVyc3BlY3RpdmVDYW1lcmFcbiAgICAgICAgICAgICAgICByZWY9e2NhbWVyYVJlZn1cbiAgICAgICAgICAgICAgICBhc3BlY3Q9e3NpemUud2lkdGggLyBzaXplLmhlaWdodH1cbiAgICAgICAgICAgICAgICByYWRpdXM9eyhzaXplLndpZHRoICsgc2l6ZS5oZWlnaHQpIC8gNH1cbiAgICAgICAgICAgICAgICBmb3Y9ezU1fVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtbNzAsIDcwLCAyMDBdfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtzZWxmID0+IHNlbGYudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBhcmdzPXtbMHg0MDQwNDBdfSAvPlxuICAgICAgICAgICAgPHBvaW50TGlnaHQgYXJncz17WzB4Q0NDQ0NDLCAwLjhdfSBwb3NpdGlvbj17Wy00MDAsIDQwMCwgNTAwXX0gLz5cbiAgICAgICAgICAgIDxwb2ludExpZ2h0IGFyZ3M9e1sweENDQ0NDQywgMC44XX0gcG9zaXRpb249e1szMDAsIDEwMCwgLTUwMF19IC8+XG4gICAgICAgICAgICA8cG9pbnRMaWdodCBhcmdzPXtbMHhDQ0NDQ0MsIDAuOF19IHBvc2l0aW9uPXtbNDAwLCAtNDAwLCA1MDBdfSAvPlxuXG4gICAgICAgICAgICB7Y2FtZXJhUmVmLmN1cnJlbnQgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxvcmJpdENvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbnRyb2xzUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncz17W2NhbWVyYVJlZi5jdXJyZW50LCBjYW52YXNdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8T3JiIHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxMCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiA1cmVtO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjFcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIG9uQ2hhbmdlPXtldnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2FudmFzPlxuICAgICAgICAgICAgICAgIDxDb250ZW50IHZhbHVlPXt2YWx1ZX0gc2V0VmFsdWU9e3NldFZhbHVlfSAvPlxuICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/derekhurley/codes/orbigami/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4220779456" + " " + "controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "range",
    min: "1",
    max: "100",
    step: "1",
    onChange: function onChange(evt) {
      debugger;
      setValue();
    },
    className: "jsx-4220779456",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_three_fiber__WEBPACK_IMPORTED_MODULE_4__["Canvas"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content, {
    value: value,
    setValue: setValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.4871181b3a91d249e0eb.hot-update.js.map