"use strict";
(self["webpackChunkwordle_wasm_react"] = self["webpackChunkwordle_wasm_react"] || []).push([["pkg_index_js"],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_33a70abd254019e4": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_alert_33a70abd254019e4),
/* harmony export */   "greet": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.greet)
/* harmony export */ });
/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ "./pkg/index_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_js__WEBPACK_IMPORTED_MODULE_0__]);
_index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_33a70abd254019e4": () => (/* binding */ __wbg_alert_33a70abd254019e4),
/* harmony export */   "greet": () => (/* binding */ greet)
/* harmony export */ });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./pkg/index_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function logError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    let error = function () {
      try {
        return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
      } catch (_) {
        return "<failed to stringify thrown value>";
      }
    }();

    console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
    throw e;
  }
}
/**
*/


function greet() {
  _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();
}
function __wbg_alert_33a70abd254019e4() {
  return logError(function (arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
  }, arguments);
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "f9187d093b37e2a387bb", {
		"./index_bg.js": {
			"__wbg_alert_33a70abd254019e4": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_33a70abd254019e4
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ "./pkg/index_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "f9187d093b37e2a387bb", {
		"./index_bg.js": {
			"__wbg_alert_33a70abd254019e4": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_33a70abd254019e4
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGtnX2luZGV4X2pzLmJ1bmRsZS43MmQ3YWFlMWI3ZDI0YWRjOGViNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBLE1BQU1DLFlBQVksR0FBRyxPQUFPQyxXQUFQLEtBQXVCLFdBQXZCLEdBQXFDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxPQUFYLEVBQW9CLE1BQXBCLEVBQTRCRixXQUFqRSxHQUErRUEsV0FBcEc7QUFFQSxJQUFJRyxpQkFBaUIsR0FBRyxJQUFJSixZQUFKLENBQWlCLE9BQWpCLEVBQTBCO0VBQUVLLFNBQVMsRUFBRSxJQUFiO0VBQW1CQyxLQUFLLEVBQUU7QUFBMUIsQ0FBMUIsQ0FBeEI7QUFFQUYsaUJBQWlCLENBQUNHLE1BQWxCO0FBRUEsSUFBSUMsb0JBQW9CLEdBQUcsSUFBM0I7O0FBQ0EsU0FBU0MsZUFBVCxHQUEyQjtFQUN2QixJQUFJRCxvQkFBb0IsS0FBSyxJQUF6QixJQUFpQ0Esb0JBQW9CLENBQUNFLE1BQXJCLEtBQWdDWCx5REFBckUsRUFBeUY7SUFDckZTLG9CQUFvQixHQUFHLElBQUlJLFVBQUosQ0FBZWIseURBQWYsQ0FBdkI7RUFDSDs7RUFDRCxPQUFPUyxvQkFBUDtBQUNIOztBQUVELFNBQVNLLGtCQUFULENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7RUFDbEMsT0FBT1gsaUJBQWlCLENBQUNHLE1BQWxCLENBQXlCRSxlQUFlLEdBQUdPLFFBQWxCLENBQTJCRixHQUEzQixFQUFnQ0EsR0FBRyxHQUFHQyxHQUF0QyxDQUF6QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0UsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUJDLElBQXJCLEVBQTJCO0VBQ3ZCLElBQUk7SUFDQSxPQUFPRCxDQUFDLENBQUNFLEtBQUYsQ0FBUSxJQUFSLEVBQWNELElBQWQsQ0FBUDtFQUNILENBRkQsQ0FFRSxPQUFPRSxDQUFQLEVBQVU7SUFDUixJQUFJQyxLQUFLLEdBQUksWUFBWTtNQUNyQixJQUFJO1FBQ0EsT0FBT0QsQ0FBQyxZQUFZRSxLQUFiLEdBQXNCLEdBQUVGLENBQUMsQ0FBQ0csT0FBUSxlQUFjSCxDQUFDLENBQUNJLEtBQU0sRUFBeEQsR0FBNERKLENBQUMsQ0FBQ0ssUUFBRixFQUFuRTtNQUNILENBRkQsQ0FFRSxPQUFNQyxDQUFOLEVBQVM7UUFDUCxPQUFPLG9DQUFQO01BQ0g7SUFDSixDQU5ZLEVBQWI7O0lBT0FDLE9BQU8sQ0FBQ04sS0FBUixDQUFjLG1GQUFkLEVBQW1HQSxLQUFuRztJQUNBLE1BQU1ELENBQU47RUFDSDtBQUNKO0FBQ0Q7QUFDQTs7O0FBQ08sU0FBU1EsS0FBVCxHQUFpQjtFQUNwQjlCLGlEQUFBO0FBQ0g7QUFFTSxTQUFTK0IsNEJBQVQsR0FBd0M7RUFBRSxPQUFPYixRQUFRLENBQUMsVUFBVWMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7SUFDbkZDLEtBQUssQ0FBQ3BCLGtCQUFrQixDQUFDa0IsSUFBRCxFQUFPQyxJQUFQLENBQW5CLENBQUw7RUFDSCxDQUYrRCxFQUU3REUsU0FGNkQsQ0FBZjtBQUVsQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29yZGxlLXdhc20tcmVhY3QvLi9wa2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd29yZGxlLXdhc20tcmVhY3QvLi9wa2cvaW5kZXhfYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9pbmRleF9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleF9iZy5qc1wiOyIsImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9pbmRleF9iZy53YXNtJztcblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxldCBlcnJvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRXJyb3IgPyBgJHtlLm1lc3NhZ2V9XFxuXFxuU3RhY2s6XFxuJHtlLnN0YWNrfWAgOiBlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGNhdGNoKF8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8ZmFpbGVkIHRvIHN0cmluZ2lmeSB0aHJvd24gdmFsdWU+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ3YXNtLWJpbmRnZW46IGltcG9ydGVkIEpTIGZ1bmN0aW9uIHRoYXQgd2FzIG5vdCBtYXJrZWQgYXMgYGNhdGNoYCB0aHJldyBhbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBncmVldCgpIHtcbiAgICB3YXNtLmdyZWV0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19hbGVydF8zM2E3MGFiZDI1NDAxOWU0KCkgeyByZXR1cm4gbG9nRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBhbGVydChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufSwgYXJndW1lbnRzKSB9O1xuXG4iXSwibmFtZXMiOlsid2FzbSIsImxUZXh0RGVjb2RlciIsIlRleHREZWNvZGVyIiwibW9kdWxlIiwicmVxdWlyZSIsImNhY2hlZFRleHREZWNvZGVyIiwiaWdub3JlQk9NIiwiZmF0YWwiLCJkZWNvZGUiLCJjYWNoZWdldFVpbnQ4TWVtb3J5MCIsImdldFVpbnQ4TWVtb3J5MCIsImJ1ZmZlciIsIm1lbW9yeSIsIlVpbnQ4QXJyYXkiLCJnZXRTdHJpbmdGcm9tV2FzbTAiLCJwdHIiLCJsZW4iLCJzdWJhcnJheSIsImxvZ0Vycm9yIiwiZiIsImFyZ3MiLCJhcHBseSIsImUiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsInN0YWNrIiwidG9TdHJpbmciLCJfIiwiY29uc29sZSIsImdyZWV0IiwiX193YmdfYWxlcnRfMzNhNzBhYmQyNTQwMTllNCIsImFyZzAiLCJhcmcxIiwiYWxlcnQiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9