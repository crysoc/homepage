/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./lazy */ \"./resources/js/lazy.js\");\n\n__webpack_require__(/*! ./header */ \"./resources/js/header.js\");\n\n__webpack_require__(/*! ./homepage */ \"./resources/js/homepage.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBwLmpzPzZkNDAiXSwibmFtZXMiOlsicmVxdWlyZSJdLCJtYXBwaW5ncyI6IkFBQUFBLG1CQUFPLENBQUMsc0NBQUQsQ0FBUDs7QUFFQUEsbUJBQU8sQ0FBQywwQ0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLDhDQUFELENBQVAiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9sYXp5Jyk7XG5cbnJlcXVpcmUoJy4vaGVhZGVyJyk7XG5cbnJlcXVpcmUoJy4vaG9tZXBhZ2UnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/app.js\n");

/***/ }),

/***/ "./resources/js/header.js":
/*!********************************!*\
  !*** ./resources/js/header.js ***!
  \********************************/
/***/ (() => {

eval("$(window).on('scroll', function () {\n  var scroll = $(window).scrollTop();\n\n  if (scroll >= 70) {\n    $('.js-navigation-wrapper').addClass('navigation-wrapper--active');\n  } else {\n    $('.js-navigation-wrapper').removeClass('navigation-wrapper--active');\n  }\n});\n$('.js-hamburger').on('click', function () {\n  $(this).toggleClass('is-active');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVhZGVyLmpzPzRmNGQiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUMvQixNQUFJQyxNQUFNLEdBQUdILENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVHLFNBQVYsRUFBYjs7QUFFQSxNQUFJRCxNQUFNLElBQUksRUFBZCxFQUFrQjtBQUNkSCxJQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssUUFBNUIsQ0FBcUMsNEJBQXJDO0FBQ0gsR0FGRCxNQUVPO0FBQ0hMLElBQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTSxXQUE1QixDQUF3Qyw0QkFBeEM7QUFDSDtBQUNKLENBUkQ7QUFVQU4sQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0Q0YsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFdBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgXG4gICAgaWYgKHNjcm9sbCA+PSA3MCkge1xuICAgICAgICAkKCcuanMtbmF2aWdhdGlvbi13cmFwcGVyJykuYWRkQ2xhc3MoJ25hdmlnYXRpb24td3JhcHBlci0tYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLmpzLW5hdmlnYXRpb24td3JhcHBlcicpLnJlbW92ZUNsYXNzKCduYXZpZ2F0aW9uLXdyYXBwZXItLWFjdGl2ZScpO1xuICAgIH1cbn0pO1xuXG4kKCcuanMtaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2hlYWRlci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/header.js\n");

/***/ }),

/***/ "./resources/js/homepage.js":
/*!**********************************!*\
  !*** ./resources/js/homepage.js ***!
  \**********************************/
/***/ (() => {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvaG9tZXBhZ2UuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/homepage.js\n");

/***/ }),

/***/ "./resources/js/lazy.js":
/*!******************************!*\
  !*** ./resources/js/lazy.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var lazyVideos = [].slice.call(document.querySelectorAll(\"video.lazy\"));\n\n  if (\"IntersectionObserver\" in window) {\n    var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {\n      entries.forEach(function (video) {\n        if (video.isIntersecting) {\n          for (var source in video.target.children) {\n            var videoSource = video.target.children[source];\n\n            if (typeof videoSource.tagName === \"string\" && videoSource.tagName === \"SOURCE\") {\n              videoSource.src = videoSource.dataset.src;\n            }\n          }\n\n          video.target.load();\n          video.target.classList.remove(\"lazy\");\n          lazyVideoObserver.unobserve(video.target);\n        }\n      });\n    });\n    lazyVideos.forEach(function (lazyVideo) {\n      lazyVideoObserver.observe(lazyVideo);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbGF6eS5qcz9kYzU5Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxhenlWaWRlb3MiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2luZG93IiwibGF6eVZpZGVvT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImZvckVhY2giLCJ2aWRlbyIsImlzSW50ZXJzZWN0aW5nIiwic291cmNlIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJ2aWRlb1NvdXJjZSIsInRhZ05hbWUiLCJzcmMiLCJkYXRhc2V0IiwibG9hZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVub2JzZXJ2ZSIsImxhenlWaWRlbyIsIm9ic2VydmUiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3JELE1BQUlDLFVBQVUsR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0osUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixZQUExQixDQUFkLENBQWpCOztBQUVBLE1BQUksMEJBQTBCQyxNQUE5QixFQUFzQztBQUNwQyxRQUFJQyxpQkFBaUIsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFTQyxPQUFULEVBQWtCQyxRQUFsQixFQUE0QjtBQUMzRUQsTUFBQUEsT0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDOUIsWUFBSUEsS0FBSyxDQUFDQyxjQUFWLEVBQTBCO0FBQ3hCLGVBQUssSUFBSUMsTUFBVCxJQUFtQkYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFFBQWhDLEVBQTBDO0FBQ3hDLGdCQUFJQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxRQUFiLENBQXNCRixNQUF0QixDQUFsQjs7QUFDQSxnQkFBSSxPQUFPRyxXQUFXLENBQUNDLE9BQW5CLEtBQStCLFFBQS9CLElBQTJDRCxXQUFXLENBQUNDLE9BQVosS0FBd0IsUUFBdkUsRUFBaUY7QUFDL0VELGNBQUFBLFdBQVcsQ0FBQ0UsR0FBWixHQUFrQkYsV0FBVyxDQUFDRyxPQUFaLENBQW9CRCxHQUF0QztBQUNEO0FBQ0Y7O0FBRURQLFVBQUFBLEtBQUssQ0FBQ0csTUFBTixDQUFhTSxJQUFiO0FBQ0FULFVBQUFBLEtBQUssQ0FBQ0csTUFBTixDQUFhTyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QjtBQUNBaEIsVUFBQUEsaUJBQWlCLENBQUNpQixTQUFsQixDQUE0QlosS0FBSyxDQUFDRyxNQUFsQztBQUNEO0FBQ0YsT0FiRDtBQWNELEtBZnVCLENBQXhCO0FBaUJBYixJQUFBQSxVQUFVLENBQUNTLE9BQVgsQ0FBbUIsVUFBU2MsU0FBVCxFQUFvQjtBQUNyQ2xCLE1BQUFBLGlCQUFpQixDQUFDbUIsT0FBbEIsQ0FBMEJELFNBQTFCO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0F6QkgiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGF6eVZpZGVvcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInZpZGVvLmxhenlcIikpO1xuICBcbiAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xuICAgICAgdmFyIGxhenlWaWRlb09ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbih2aWRlbykge1xuICAgICAgICAgIGlmICh2aWRlby5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgZm9yICh2YXIgc291cmNlIGluIHZpZGVvLnRhcmdldC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICB2YXIgdmlkZW9Tb3VyY2UgPSB2aWRlby50YXJnZXQuY2hpbGRyZW5bc291cmNlXTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWRlb1NvdXJjZS50YWdOYW1lID09PSBcInN0cmluZ1wiICYmIHZpZGVvU291cmNlLnRhZ05hbWUgPT09IFwiU09VUkNFXCIpIHtcbiAgICAgICAgICAgICAgICB2aWRlb1NvdXJjZS5zcmMgPSB2aWRlb1NvdXJjZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHZpZGVvLnRhcmdldC5sb2FkKCk7XG4gICAgICAgICAgICB2aWRlby50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxhenlcIik7XG4gICAgICAgICAgICBsYXp5VmlkZW9PYnNlcnZlci51bm9ic2VydmUodmlkZW8udGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIFxuICAgICAgbGF6eVZpZGVvcy5mb3JFYWNoKGZ1bmN0aW9uKGxhenlWaWRlbykge1xuICAgICAgICBsYXp5VmlkZW9PYnNlcnZlci5vYnNlcnZlKGxhenlWaWRlbyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbGF6eS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/lazy.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz80NzVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;