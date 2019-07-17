webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./pages/products/index.tsx":
/*!**********************************!*\
  !*** ./pages/products/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql */ "./pages/products/graphql.tsx");
/* harmony import */ var _libs_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/authentication */ "./libs/authentication/index.ts");
/* harmony import */ var _NewProductSection_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewProductSection/graphql */ "./pages/products/NewProductSection/graphql.tsx");
/* harmony import */ var _hocs_withModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../hocs/withModal */ "./hocs/withModal.tsx");
/* harmony import */ var _UpdateProductSection_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UpdateProductSection/graphql */ "./pages/products/UpdateProductSection/graphql.tsx");











var Products = function Products(props) {
  // @ts-ignore
  var Modal = props.Modal;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _graphql__WEBPACK_IMPORTED_MODULE_4__["PRODUCTS_QUERY"],
    variables: {
      own: false
    }
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: _graphql__WEBPACK_IMPORTED_MODULE_4__["CATEGORIES_QUERY"]
    }, function (_ref2) {
      var l2 = _ref2.loading,
          e2 = _ref2.error,
          d2 = _ref2.data;
      if (l2 || loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Loading!");
      if (error || e2) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error!", e2, " ", error);
      if (!data || !d2) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Error while getting data !");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: 10,
          marginLeft: 200,
          marginRight: 200
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        striped: true,
        bordered: true,
        hover: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "#"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.products.map(function (product, i) {
        var id = product.id,
            name = product.name,
            price = product.price,
            category = product.category;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: product.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, i + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          variant: "outline-primary",
          onClick: function onClick() {
            return (// @ts-ignore
              props.showModal({
                id: id,
                name: name,
                price: price,
                category: category
              })
            );
          }
        }, "Change info")));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewProductSection_graphql__WEBPACK_IMPORTED_MODULE_6__["default"], {
        categories: d2.categories
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, {
        dataFetched: d2.categories
      }));
    });
  });
};

Products.getInitialProps = function (context) {
  // check if the user is authenticated before page load.
  Object(_libs_authentication__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hocs_withModal__WEBPACK_IMPORTED_MODULE_7__["default"])({
  Component: Products,
  Form: _UpdateProductSection_graphql__WEBPACK_IMPORTED_MODULE_8__["default"],
  header: "Update Product"
}));

/***/ })

})
//# sourceMappingURL=products.js.9e3e16a93d7ae503ba11.hot-update.js.map