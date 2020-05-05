webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/cole/dev-workspace/rellios-frontend/components/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
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
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 16
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        expand: "lg",
        className: "navbar-light bg-transparent mt-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
        "aria-controls": "basic-navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }), __jsx("h1", {
        className: "text-center font-weight-bold",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }
      }, "\uD835\uDD97\uD835\uDD8A\uD835\uDD91\uD835\uDD91\uD835\uDD8E\uD835\uDD94\uD835\uDD98"), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"].Collapse, {
        className: "text-center",
        id: "basic-navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "navbar-nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, navLinks.map(function (navItem) {
        return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
          key: navItem.text,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 36
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: navItem.link,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 33
          }
        }, __jsx("a", {
          className: "nav-link",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 37
          }
        }, navItem.text)));
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.1fa24382a2e09b5eef45.hot-update.js.map