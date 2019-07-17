webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./libs/authentication/index.ts":
/*!**************************************!*\
  !*** ./libs/authentication/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getUserIdFromToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUserIdFromToken */ "./libs/authentication/getUserIdFromToken.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);




var authentication = function authentication(context) {
  // reads the token in cookie (checks if res in context exists) according to the res, runs for client or server side.
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_0___default()(context),
      auth_token = _nextCookie.auth_token; // we check if the cookie is valid here. If token cannot be decoded, then it's invalid.


  var user = Object(_getUserIdFromToken__WEBPACK_IMPORTED_MODULE_1__["default"])(auth_token); // if called on server

  if (context.res && !user) {
    context.res.writeHead(302, {
      Location: "/login/graphql"
    });
    context.res.end();
    return;
  } // if called on client


  if (!user) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login/graphql", "/login");
};

/* harmony default export */ __webpack_exports__["default"] = (authentication);

/***/ })

})
//# sourceMappingURL=products.js.b8ad4776ef921e358584.hot-update.js.map