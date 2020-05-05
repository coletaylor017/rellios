webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/cole/dev-workspace/rellios-frontend/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Header() {
  var _this = this;

  var navLinks = [{
    text: "𝖕𝖔𝖗𝖙𝖋𝖔𝖑𝖎𝖔",
    link: "/"
  }, {
    text: "𝖒𝖎𝖘𝖈",
    link: "/misc"
  }, {
    text: "𝖑𝖎𝖋𝖊",
    link: "/blog"
  }, {
    text: "𝖆𝖇𝖔𝖚𝖙",
    link: "/about"
  }, {
    text: "𝖈𝖔𝖓𝖙𝖆𝖈𝖙",
    link: "/contact"
  }];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  console.log(router.pathname);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 12
    }
  }, __jsx("h1", {
    className: "text-center font-weight-bold mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "\uD835\uDD97\uD835\uDD8A\uD835\uDD91\uD835\uDD91\uD835\uDD8E\uD835\uDD94\uD835\uDD98"), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    expand: "lg",
    className: "navbar-light bg-transparent mt-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Collapse, {
    className: "text-center",
    id: "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "justify-content-center",
    activekey: router.pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, navLinks.map(function (navItem) {
    return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
      key: navItem.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 32
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: navItem.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, navItem.text)));
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.93a3b1f69c649877d004.hot-update.js.map