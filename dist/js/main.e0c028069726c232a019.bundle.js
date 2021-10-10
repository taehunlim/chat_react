(self["webpackChunkadmin_template"] = self["webpackChunkadmin_template"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-99289b21.browser.esm.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _utils_useAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/useAxios */ "./src/utils/useAxios.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store.tsx");
/* harmony import */ var _assets_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/GlobalStyles */ "./src/assets/styles/GlobalStyles.tsx");
/* harmony import */ var _assets_styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles/theme */ "./src/assets/styles/theme.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages */ "./src/pages/index.tsx");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




/** @jsx jsx */









var App = function App() {
  var _a = (0,_utils_useAxios__WEBPACK_IMPORTED_MODULE_3__.useAxios)(),
      api = _a.api,
      loading = _a.loading;

  var swrConfig = {
    // useSWR에 url만 적어도 axios의 response.data 값이 return
    fetcher: function fetcher(url, params) {
      api.get(url, {
        params: params
      }).then(function (response) {
        return response.data;
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_store__WEBPACK_IMPORTED_MODULE_4__.Store, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(swr__WEBPACK_IMPORTED_MODULE_1__.SWRConfig, {
    value: swrConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.a, {
    theme: _assets_styles_theme__WEBPACK_IMPORTED_MODULE_6__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_assets_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    exact: true,
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_7__.Home, __assign({}, props));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/:roomId",
    exact: true,
    render: function render(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages__WEBPACK_IMPORTED_MODULE_7__.ChatRoom, __assign({}, props));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Redirect, {
    to: "/"
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/actions/types.ts":
/*!******************************!*\
  !*** ./src/actions/types.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INCREASE": () => (/* binding */ INCREASE),
/* harmony export */   "DECREASE": () => (/* binding */ DECREASE)
/* harmony export */ });
var INCREASE = 'INCREASE';
var DECREASE = 'DECREASE';

/***/ }),

/***/ "./src/assets/styles/GlobalStyles.tsx":
/*!********************************************!*\
  !*** ./src/assets/styles/GlobalStyles.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/assets/styles/theme.ts");
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};




var styles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    position: relative;\n    background-color: ", ";\n    transition: background-color 0.3s ease;\n    a,\n    label {\n      text-decoration: none;\n      color: ", "\n    }\n\n    &.dark-mode {\n      background-color: ", ";\n      color: ", ";\n      \n      a,\n      label {\n        color: ", ";;\n      }\n    }\n  }\n\n  p:last-child {\n    margin-bottom: 0;\n  }\n\n  a,\n  button {\n    display: inline-block;\n    cursor: pointer;\n  }\n\n  *:focus {\n    outline: none;\n  }\n  \n  a:focus {\n    outline: none;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n\n    list-style: outside none none;\n  }\n\n  input::-ms-clear,\n  input::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  input::-webkit-search-decoration,\n  input::-webkit-search-cancel-button,\n  input::-webkit-search-results-button,\n  input::-webkit-search-results-decoration {\n    display: none;\n  }\n  \n  input:focus::-webkit-input-placeholder,\n  textarea:focus::-webkit-input-placeholder {\n    color: transparent !important;\n  }\n\n  input:focus:-moz-placeholder,\n  textarea:focus:-moz-placeholder {\n    color: transparent !important;\n  } /* FF 4-18 */\n\n  input:focus::-moz-placeholder,\n  textarea:focus::-moz-placeholder {\n    color: transparent !important;\n  } /* FF 19+ */\n\n  input:focus:-ms-input-placeholder,\n  textarea:focus:-ms-input-placeholder {\n    color: transparent !important;\n  } /* IE 10+ */\n\n" + ( false ? 0 : ";label:styles-GlobalStyles-styles;") + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW10YWUvRGVza3RvcC9taW5lL2NoYXRfcmVhY3Qvc3JjL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPYSIsImZpbGUiOiIvVXNlcnMvbGltdGFlL0Rlc2t0b3AvbWluZS9jaGF0X3JlYWN0L3NyYy9hc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XG52YXIgc3R5bGVzID0gY3NzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICosXFxuICAqOjphZnRlcixcXG4gICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgIGEsXFxuICAgIGxhYmVsIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IFwiLCBcIlxcbiAgICB9XFxuXFxuICAgICYuZGFyay1tb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgICBcXG4gICAgICBhLFxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiBcIiwgXCI7O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIGEsXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICBhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcXG4gIH1cXG5cXG4gIGlucHV0OjotbXMtY2xlYXIsXFxuICBpbnB1dDo6LW1zLXJldmVhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG4gIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB9IC8qIEZGIDQtMTggKi9cXG5cXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogRkYgMTkrICovXFxuXFxuICBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogSUUgMTArICovXFxuXFxuXCJdLCBbXCJcXG4gICosXFxuICAqOjphZnRlcixcXG4gICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgIGEsXFxuICAgIGxhYmVsIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IFwiLCBcIlxcbiAgICB9XFxuXFxuICAgICYuZGFyay1tb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgICBcXG4gICAgICBhLFxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiBcIiwgXCI7O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIGEsXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICBhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcXG4gIH1cXG5cXG4gIGlucHV0OjotbXMtY2xlYXIsXFxuICBpbnB1dDo6LW1zLXJldmVhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG4gIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB9IC8qIEZGIDQtMTggKi9cXG5cXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogRkYgMTkrICovXFxuXFxuICBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogSUUgMTArICovXFxuXFxuXCJdKSksIHRoZW1lLmJnQ29sb3IubGlnaHRNb2RlLCB0aGVtZS5mb250Q29sb3IubGlnaHRNb2RlLCB0aGVtZS5iZ0NvbG9yLmRhcmtNb2RlLCB0aGVtZS5mb250Q29sb3IuZGFya01vZGUsIHRoZW1lLmZvbnRDb2xvci5kYXJrTW9kZSk7XG52YXIgR2xvYmFsU3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHbG9iYWwsIHsgc3R5bGVzOiBzdHlsZXMgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIl19 */")], ["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    height: 100%;\n    margin: 0;\n    position: relative;\n    background-color: ", ";\n    transition: background-color 0.3s ease;\n    a,\n    label {\n      text-decoration: none;\n      color: ", "\n    }\n\n    &.dark-mode {\n      background-color: ", ";\n      color: ", ";\n      \n      a,\n      label {\n        color: ", ";;\n      }\n    }\n  }\n\n  p:last-child {\n    margin-bottom: 0;\n  }\n\n  a,\n  button {\n    display: inline-block;\n    cursor: pointer;\n  }\n\n  *:focus {\n    outline: none;\n  }\n  \n  a:focus {\n    outline: none;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n\n    list-style: outside none none;\n  }\n\n  input::-ms-clear,\n  input::-ms-reveal {\n    display: none;\n    width: 0;\n    height: 0;\n  }\n\n  input::-webkit-search-decoration,\n  input::-webkit-search-cancel-button,\n  input::-webkit-search-results-button,\n  input::-webkit-search-results-decoration {\n    display: none;\n  }\n  \n  input:focus::-webkit-input-placeholder,\n  textarea:focus::-webkit-input-placeholder {\n    color: transparent !important;\n  }\n\n  input:focus:-moz-placeholder,\n  textarea:focus:-moz-placeholder {\n    color: transparent !important;\n  } /* FF 4-18 */\n\n  input:focus::-moz-placeholder,\n  textarea:focus::-moz-placeholder {\n    color: transparent !important;\n  } /* FF 19+ */\n\n  input:focus:-ms-input-placeholder,\n  textarea:focus:-ms-input-placeholder {\n    color: transparent !important;\n  } /* IE 10+ */\n\n" + ( false ? 0 : ";label:styles-GlobalStyles-styles;") + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW10YWUvRGVza3RvcC9taW5lL2NoYXRfcmVhY3Qvc3JjL2Fzc2V0cy9zdHlsZXMvR2xvYmFsU3R5bGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPYSIsImZpbGUiOiIvVXNlcnMvbGltdGFlL0Rlc2t0b3AvbWluZS9jaGF0X3JlYWN0L3NyYy9hc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XG52YXIgc3R5bGVzID0gY3NzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICosXFxuICAqOjphZnRlcixcXG4gICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgIGEsXFxuICAgIGxhYmVsIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IFwiLCBcIlxcbiAgICB9XFxuXFxuICAgICYuZGFyay1tb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgICBcXG4gICAgICBhLFxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiBcIiwgXCI7O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIGEsXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICBhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcXG4gIH1cXG5cXG4gIGlucHV0OjotbXMtY2xlYXIsXFxuICBpbnB1dDo6LW1zLXJldmVhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG4gIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB9IC8qIEZGIDQtMTggKi9cXG5cXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogRkYgMTkrICovXFxuXFxuICBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogSUUgMTArICovXFxuXFxuXCJdLCBbXCJcXG4gICosXFxuICAqOjphZnRlcixcXG4gICo6OmJlZm9yZSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICBodG1sLFxcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFwiLCBcIjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAgIGEsXFxuICAgIGxhYmVsIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IFwiLCBcIlxcbiAgICB9XFxuXFxuICAgICYuZGFyay1tb2RlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgY29sb3I6IFwiLCBcIjtcXG4gICAgICBcXG4gICAgICBhLFxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGNvbG9yOiBcIiwgXCI7O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIGEsXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gICo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgfVxcbiAgXFxuICBhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcXG4gIH1cXG5cXG4gIGlucHV0OjotbXMtY2xlYXIsXFxuICBpbnB1dDo6LW1zLXJldmVhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICB9XFxuXFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbixcXG4gIGlucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtZGVjb3JhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICB9IC8qIEZGIDQtMTggKi9cXG5cXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLFxcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogRkYgMTkrICovXFxuXFxuICBpbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIH0gLyogSUUgMTArICovXFxuXFxuXCJdKSksIHRoZW1lLmJnQ29sb3IubGlnaHRNb2RlLCB0aGVtZS5mb250Q29sb3IubGlnaHRNb2RlLCB0aGVtZS5iZ0NvbG9yLmRhcmtNb2RlLCB0aGVtZS5mb250Q29sb3IuZGFya01vZGUsIHRoZW1lLmZvbnRDb2xvci5kYXJrTW9kZSk7XG52YXIgR2xvYmFsU3R5bGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChHbG9iYWwsIHsgc3R5bGVzOiBzdHlsZXMgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlcztcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIl19 */")])), _theme__WEBPACK_IMPORTED_MODULE_1__.default.bgColor.lightMode, _theme__WEBPACK_IMPORTED_MODULE_1__.default.fontColor.lightMode, _theme__WEBPACK_IMPORTED_MODULE_1__.default.bgColor.darkMode, _theme__WEBPACK_IMPORTED_MODULE_1__.default.fontColor.darkMode, _theme__WEBPACK_IMPORTED_MODULE_1__.default.fontColor.darkMode);

var GlobalStyles = function GlobalStyles() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.Global, {
    styles: styles
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);
var templateObject_1;

/***/ }),

/***/ "./src/assets/styles/theme.ts":
/*!************************************!*\
  !*** ./src/assets/styles/theme.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_minWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/minWidth */ "./src/utils/minWidth.ts");

var deviceSize = {
  desktop: '1280px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '480px'
};
var device = {
  desktop: "@media (min-width: " + (0,_utils_minWidth__WEBPACK_IMPORTED_MODULE_0__.minWidth)(deviceSize.laptop) + ")",
  laptop: "@media (min-width: " + (0,_utils_minWidth__WEBPACK_IMPORTED_MODULE_0__.minWidth)(deviceSize.tablet) + ") and (max-width: " + deviceSize.laptop + ")",
  tablet: "@media (min-width: " + (0,_utils_minWidth__WEBPACK_IMPORTED_MODULE_0__.minWidth)(deviceSize.mobile) + ") and (max-width: " + deviceSize.tablet + ")",
  mobile: "@media (max-width: " + deviceSize.mobile + ")"
};
var bgColor = {
  lightMode: 'white',
  darkMode: '#232323'
};
var fontColor = {
  lightMode: 'black',
  darkMode: '#dfdfdf'
};
var color = {
  primary: "#4e98ed",
  danger: "#fb4d44",
  white: "#ffffff",
  black: "#434446",
  black_bold: "#0f0f0f",
  gray: "#9d9fa2",
  gray_two: "#77797c"
};
var theme = {
  deviceSize: deviceSize,
  device: device,
  bgColor: bgColor,
  fontColor: fontColor,
  color: color
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "ChatRoom": () => (/* binding */ ChatRoom)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");

var Home = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
  return Promise.all(/*! import() | Home */[__webpack_require__.e("vendors"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Home */ "./src/pages/Home.tsx"));
});
var ChatRoom = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)(function () {
  return Promise.all(/*! import() | ChatRoom */[__webpack_require__.e("vendors"), __webpack_require__.e("ChatRoom")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ChatRoom */ "./src/pages/ChatRoom.tsx"));
});

/***/ }),

/***/ "./src/reducers/countReducer.tsx":
/*!***************************************!*\
  !*** ./src/reducers/countReducer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countReducer": () => (/* binding */ countReducer)
/* harmony export */ });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var ActionKind;

(function (ActionKind) {
  ActionKind["INCREASE"] = "INCREASE";
  ActionKind["DECREASE"] = "DECREASE";
})(ActionKind || (ActionKind = {}));

function countReducer(state, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.INCREASE:
      return __assign(__assign({}, state), {
        number: state.number + 1
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.DECREASE:
      return __assign(__assign({}, state), {
        number: state.number - 1
      });

    default:
      return state;
  }
}
;

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _countReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countReducer */ "./src/reducers/countReducer.tsx");


var combineReducers = function combineReducers(reducers) {
  return function (state, action) {
    if (state === void 0) {
      state = {};
    }

    var newState = {};

    for (var key in reducers) {
      newState[key] = reducers[key](state[key], action);
      console.log(newState);
    }

    return newState;
  };
};

var initialState = {
  count: {
    number: 0
  }
};
var rootReducer = combineReducers({
  count: _countReducer__WEBPACK_IMPORTED_MODULE_0__.countReducer
});

/***/ }),

/***/ "./src/store.tsx":
/*!***********************!*\
  !*** ./src/store.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "useRootState": () => (/* binding */ useRootState),
/* harmony export */   "useRootDispatch": () => (/* binding */ useRootDispatch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.ts");


var StateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var DispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var Store = function Store(_a) {
  var children = _a.children;

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducers__WEBPACK_IMPORTED_MODULE_1__.rootReducer, _reducers__WEBPACK_IMPORTED_MODULE_1__.initialState),
      state = _b[0],
      dispatch = _b[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(StateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DispatchContext.Provider, {
    value: dispatch
  }, children));
};
var useRootState = function useRootState() {
  var state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StateContext);

  if (!state) {
    throw new Error('Cannot find Provider');
  }

  return state;
};
var useRootDispatch = function useRootDispatch() {
  var dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchContext);

  if (!dispatch) {
    throw new Error('Cannot find Provider');
  }

  return dispatch;
};

/***/ }),

/***/ "./src/utils/minWidth.ts":
/*!*******************************!*\
  !*** ./src/utils/minWidth.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minWidth": () => (/* binding */ minWidth)
/* harmony export */ });
var minWidth = function minWidth(deviceSize) {
  return (Number(deviceSize.split('px')[0]) + 1).toString() + 'px';
};

/***/ }),

/***/ "./src/utils/useAxios.ts":
/*!*******************************!*\
  !*** ./src/utils/useAxios.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAxios": () => (/* binding */ useAxios)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:5000"
});
var useAxios = function useAxios() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      loading = _a[0],
      setLoading = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      accessToken = _b[0],
      setAccessToken = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      refreshToken = _c[0],
      setRefreshToken = _c[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var interceptor = api.interceptors.request.use(function (config) {
      return __assign(__assign({}, config), {
        headers: __assign({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken
        }, config.headers)
      });
    });
    return function () {
      api.interceptors.request.eject(interceptor);
    };
  }, [accessToken]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var interceptor = api.interceptors.response.use(null, function (err) {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (!(((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) === 401)) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , axios__WEBPACK_IMPORTED_MODULE_0___default().post('/auth/refresh', {
                refreshToken: refreshToken
              }).then(function (res) {
                setAccessToken(res.data.access_token);
                setLoading(false);
                err.config.headers['Authorization'] = "Bearer " + res.data.access_token;
                return axios__WEBPACK_IMPORTED_MODULE_0___default()(err.config);
              })["catch"](function (error) {
                // log out
                return Promise.reject(error);
              })];

            case 1:
              _b.sent();

              return [2
              /*return*/
              , Promise.reject(err)];

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
    return function () {
      api.interceptors.response.eject(interceptor);
    };
  }, [refreshToken, setAccessToken]);
  return {
    loading: loading,
    api: api
  };
};

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = axios;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./node_modules/error-overlay-webpack-plugin/dist/entries/basic.js"), __webpack_exec__("./node_modules/babel-polyfill/lib/index.js"), __webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2FkbWluX3RlbXBsYXRlLy4vc3JjL2FjdGlvbnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vYWRtaW5fdGVtcGxhdGUvLi9zcmMvYXNzZXRzL3N0eWxlcy9HbG9iYWxTdHlsZXMudHN4Iiwid2VicGFjazovL2FkbWluX3RlbXBsYXRlLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vYWRtaW5fdGVtcGxhdGUvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2FkbWluX3RlbXBsYXRlLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS8uL3NyYy9yZWR1Y2Vycy9jb3VudFJlZHVjZXIudHN4Iiwid2VicGFjazovL2FkbWluX3RlbXBsYXRlLy4vc3JjL3JlZHVjZXJzL2luZGV4LnRzIiwid2VicGFjazovL2FkbWluX3RlbXBsYXRlLy4vc3JjL3N0b3JlLnRzeCIsIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS8uL3NyYy91dGlscy9taW5XaWR0aC50cyIsIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS8uL3NyYy91dGlscy91c2VBeGlvcy50cyIsIndlYnBhY2s6Ly9hZG1pbl90ZW1wbGF0ZS9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU0sR0FBRyxHQUFhLFNBQWhCLEdBQWdCO0FBQ1osV0FBbUIseURBQVEsRUFBM0I7QUFBQSxNQUFFLEdBQUcsU0FBTDtBQUFBLE1BQU8sT0FBTyxhQUFkOztBQUNOLE1BQU0sU0FBUyxHQUFHO0FBQ2Q7QUFDQSxXQUFPLEVBQUUsaUJBQUMsR0FBRCxFQUFj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NENBQUssQ0FBQyxHQUFHLENBQUMsTUFBTCxDQUFaO0FBQ0gsZUFUQyxXQVVLLGlCQUFLO0FBQ1I7QUFDQSx1QkFBTyxPQUFPLENBQUMsTUFBUixDQUFlLEtBQWYsQ0FBUDtBQUNILGVBYkMsQ0FBTjs7O0FBQUE7O0FBY0E7QUFBQTtBQUFBLGdCQUFPLE9BQU8sQ0FBQyxNQUFSLENBQWUsR0FBZixDQUFQOzs7Ozs7OztPQWhCRTtBQWtCVCxLQXBCZSxDQUFwQjtBQXNCQSxXQUFPO0FBQ0gsU0FBRyxDQUFDLFlBQUosQ0FBaUIsUUFBakIsQ0FBMEIsS0FBMUIsQ0FBZ0MsV0FBaEM7QUFDSCxLQUZEO0FBR0gsR0ExQlEsRUEwQk4sQ0FBQyxZQUFELEVBQWUsY0FBZixDQTFCTSxDQUFUO0FBNEJBLFNBQU87QUFBQyxXQUFPLFNBQVI7QUFBVSxPQUFHO0FBQWIsR0FBUDtBQUNILENBbERNLEM7Ozs7Ozs7Ozs7O0FDUFAsdUIiLCJmaWxlIjoianMvbWFpbi5lMGMwMjgwNjk3MjZjMjMyYTAxOS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJztcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnO1xuXG5pbXBvcnQgeyB1c2VBeGlvcyB9IGZyb20gJy4vdXRpbHMvdXNlQXhpb3MnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnLi9hc3NldHMvc3R5bGVzL0dsb2JhbFN0eWxlcyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi9hc3NldHMvc3R5bGVzL3RoZW1lJztcblxuaW1wb3J0IHsgSG9tZSwgQ2hhdFJvb20gfSBmcm9tICcuL3BhZ2VzJztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFwaSwgbG9hZGluZyB9ID0gdXNlQXhpb3MoKTtcbiAgICBjb25zdCBzd3JDb25maWcgPSB7XG4gICAgICAgIC8vIHVzZVNXUuyXkCB1cmzrp4wg7KCB7Ja064+EIGF4aW9z7J2YIHJlc3BvbnNlLmRhdGEg6rCS7J20IHJldHVyblxuICAgICAgICBmZXRjaGVyOiAodXJsOiBzdHJpbmcsIHBhcmFtczogb2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBhcGlcbiAgICAgICAgICAgICAgICAuZ2V0KHVybCwge3BhcmFtc30pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICAgIDxTdG9yZT5cbiAgICAgICAgICAgICAgICA8U1dSQ29uZmlnIHZhbHVlPXtzd3JDb25maWd9PlxuICAgICAgICAgICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdsb2JhbFN0eWxlcy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgcmVuZGVyPXtwcm9wcyA9PiA8SG9tZSB7Li4ucHJvcHN9IC8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiLzpyb29tSWRcIiBleGFjdCByZW5kZXI9e3Byb3BzID0+IDxDaGF0Um9vbSB7Li4ucHJvcHN9IC8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz1cIi9cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8L1NXUkNvbmZpZz5cbiAgICAgICAgICAgIDwvU3RvcmU+XG4gICAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyIsImV4cG9ydCBjb25zdCBJTkNSRUFTRSA9ICdJTkNSRUFTRSc7XG5leHBvcnQgY29uc3QgREVDUkVBU0UgPSAnREVDUkVBU0UnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gICosXG4gICo6OmFmdGVyLFxuICAqOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBodG1sLFxuICBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJnQ29sb3IubGlnaHRNb2RlfTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICBhLFxuICAgIGxhYmVsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmZvbnRDb2xvci5saWdodE1vZGV9XG4gICAgfVxuXG4gICAgJi5kYXJrLW1vZGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iZ0NvbG9yLmRhcmtNb2RlfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmZvbnRDb2xvci5kYXJrTW9kZX07XG4gICAgICBcbiAgICAgIGEsXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmZvbnRDb2xvci5kYXJrTW9kZX07O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIGEsXG4gIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIGE6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcbiAgfVxuXG4gIGlucHV0OjotbXMtY2xlYXIsXG4gIGlucHV0OjotbXMtcmV2ZWFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuXG4gIGlucHV0Ojotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbiAgaW5wdXQ6Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuICBpbnB1dDo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbiAgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlcixcbiAgdGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH0gLyogRkYgNC0xOCAqL1xuXG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyLFxuICB0ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH0gLyogRkYgMTkrICovXG5cbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxuICB0ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9IC8qIElFIDEwKyAqL1xuXG5gO1xuXG5jb25zdCBHbG9iYWxTdHlsZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxHbG9iYWwgc3R5bGVzPXtzdHlsZXN9Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzOyIsImltcG9ydCB7IG1pbldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWluV2lkdGgnO1xuXG5jb25zdCBkZXZpY2VTaXplID0ge1xuICAgIGRlc2t0b3A6ICcxMjgwcHgnLFxuICAgIGxhcHRvcDogJzEwMjRweCcsXG4gICAgdGFibGV0OiAnNzY4cHgnLFxuICAgIG1vYmlsZTogJzQ4MHB4Jyxcbn07XG5cbmNvbnN0IGRldmljZSA9IHtcbiAgICBkZXNrdG9wOiBgQG1lZGlhIChtaW4td2lkdGg6ICR7bWluV2lkdGgoZGV2aWNlU2l6ZS5sYXB0b3ApfSlgLFxuICAgIGxhcHRvcDogYEBtZWRpYSAobWluLXdpZHRoOiAke21pbldpZHRoKGRldmljZVNpemUudGFibGV0KX0pIGFuZCAobWF4LXdpZHRoOiAke2RldmljZVNpemUubGFwdG9wfSlgLFxuICAgIHRhYmxldDogYEBtZWRpYSAobWluLXdpZHRoOiAke21pbldpZHRoKGRldmljZVNpemUubW9iaWxlKX0pIGFuZCAobWF4LXdpZHRoOiAke2RldmljZVNpemUudGFibGV0fSlgLFxuICAgIG1vYmlsZTogYEBtZWRpYSAobWF4LXdpZHRoOiAke2RldmljZVNpemUubW9iaWxlfSlgXG59O1xuXG5jb25zdCBiZ0NvbG9yID0ge1xuICAgIGxpZ2h0TW9kZTogJ3doaXRlJyxcbiAgICBkYXJrTW9kZTogJyMyMzIzMjMnXG59O1xuXG5jb25zdCBmb250Q29sb3IgPSB7XG4gICAgbGlnaHRNb2RlOiAnYmxhY2snLFxuICAgIGRhcmtNb2RlOiAnI2RmZGZkZidcbn07XG5cbmNvbnN0IGNvbG9yID0ge1xuICAgIHByaW1hcnk6IFwiIzRlOThlZFwiLFxuICAgIGRhbmdlcjogXCIjZmI0ZDQ0XCIsXG4gICAgd2hpdGU6IFwiI2ZmZmZmZlwiLFxuICAgIGJsYWNrOiBcIiM0MzQ0NDZcIixcbiAgICBibGFja19ib2xkOiBcIiMwZjBmMGZcIixcbiAgICBncmF5OiBcIiM5ZDlmYTJcIixcbiAgICBncmF5X3R3bzogXCIjNzc3OTdjXCIsXG59O1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgICBkZXZpY2VTaXplLFxuICAgIGRldmljZSxcbiAgICBiZ0NvbG9yLFxuICAgIGZvbnRDb2xvcixcbiAgICBjb2xvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSG9tZVwiICovICcuL0hvbWUnKSk7XG5leHBvcnQgY29uc3QgQ2hhdFJvb20gPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiQ2hhdFJvb21cIiAqLyAnLi9DaGF0Um9vbScpKTsiLCJpbXBvcnQgeyBJTkNSRUFTRSwgREVDUkVBU0UgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuaW50ZXJmYWNlIEluaXRpYWxTdGF0ZSB7XG4gICAgbnVtYmVyOiBudW1iZXJcbn1cblxuZW51bSBBY3Rpb25LaW5kIHtcbiAgICBJTkNSRUFTRSA9ICdJTkNSRUFTRScsXG4gICAgREVDUkVBU0UgPSAnREVDUkVBU0UnXG59XG5cbnR5cGUgQWN0aW9uID0ge1xuICAgIHR5cGU6IEFjdGlvbktpbmRcbiAgICBudW1iZXI6IG51bWJlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRSZWR1Y2VyKHN0YXRlOiBJbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIElOQ1JFQVNFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IHN0YXRlLm51bWJlciArIDFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgREVDUkVBU0U6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG51bWJlcjogc3RhdGUubnVtYmVyIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07IiwiXG5pbXBvcnQgeyBjb3VudFJlZHVjZXIgfSBmcm9tICcuL2NvdW50UmVkdWNlcic7XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICAgIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge307XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZWR1Y2Vycykge1xuICAgICAgICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZXJzW2tleV0oc3RhdGVba2V5XSwgYWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgY291bnQ6IHtcbiAgICAgICAgbnVtYmVyOiAwXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGNvdW50OiBjb3VudFJlZHVjZXJcbn0pOyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuY29uc3QgRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGNvbnN0IFN0b3JlOiBSZWFjdC5GQyA9ICh7Y2hpbGRyZW59KSA9PiB7XG5cbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICAgICAgICA8RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9EaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlUm9vdFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBQcm92aWRlcicpXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VSb290RGlzcGF0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VDb250ZXh0KERpc3BhdGNoQ29udGV4dCk7XG5cbiAgICBpZiAoIWRpc3BhdGNoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgUHJvdmlkZXInKVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGF0Y2g7XG59IiwiZXhwb3J0IGNvbnN0IG1pbldpZHRoID0gKGRldmljZVNpemU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoTnVtYmVyKGRldmljZVNpemUuc3BsaXQoJ3B4JylbMF0pICsgMSkudG9TdHJpbmcoKSArICdweCdcbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJX1VSTCxcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlQXhpb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtyZWZyZXNoVG9rZW4sIHNldFJlZnJlc2hUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJjZXB0b3IgPSBhcGkuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZy5oZWFkZXJzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGFwaS5pbnRlcmNlcHRvcnMucmVxdWVzdC5lamVjdChpbnRlcmNlcHRvcik7XG4gICAgICAgIH07XG4gICAgfSwgW2FjY2Vzc1Rva2VuXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcmNlcHRvciA9IGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoJy9hdXRoL3JlZnJlc2gnLCB7cmVmcmVzaFRva2VufSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIuY29uZmlnLmhlYWRlcnNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gYEJlYXJlciAke3Jlcy5kYXRhLmFjY2Vzc190b2tlbn1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlvcyhlcnIuY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZyBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZWplY3QoaW50ZXJjZXB0b3IpO1xuICAgICAgICB9O1xuICAgIH0sIFtyZWZyZXNoVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSk7XG5cbiAgICByZXR1cm4ge2xvYWRpbmcsIGFwaX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7Il0sInNvdXJjZVJvb3QiOiIifQ==