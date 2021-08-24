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

eval("$(window).on('scroll', function () {\n  var scroll = $(window).scrollTop();\n\n  if (scroll >= 70) {\n    $('.js-navigation-wrapper').addClass('navigation-wrapper--active');\n  } else {\n    $('.js-navigation-wrapper').removeClass('navigation-wrapper--active');\n  }\n});\n$('.js-hamburger').on('click', function () {\n  $(this).toggleClass('is-active');\n  $('.js-navigation').toggleClass('is-active');\n  $('html, body').toggleClass('no-scroll');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVhZGVyLmpzPzRmNGQiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsIm9uIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUMvQixNQUFJQyxNQUFNLEdBQUdILENBQUMsQ0FBQ0MsTUFBRCxDQUFELENBQVVHLFNBQVYsRUFBYjs7QUFFQSxNQUFJRCxNQUFNLElBQUksRUFBZCxFQUFrQjtBQUNkSCxJQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssUUFBNUIsQ0FBcUMsNEJBQXJDO0FBQ0gsR0FGRCxNQUVPO0FBQ0hMLElBQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCTSxXQUE1QixDQUF3Qyw0QkFBeEM7QUFDSDtBQUNKLENBUkQ7QUFVQU4sQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0Q0YsRUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxXQUFSLENBQW9CLFdBQXBCO0FBQ0FQLEVBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTyxXQUFwQixDQUFnQyxXQUFoQztBQUNBUCxFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTyxXQUFoQixDQUE0QixXQUE1QjtBQUNILENBSkQiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIFxuICAgIGlmIChzY3JvbGwgPj0gNzApIHtcbiAgICAgICAgJCgnLmpzLW5hdmlnYXRpb24td3JhcHBlcicpLmFkZENsYXNzKCduYXZpZ2F0aW9uLXdyYXBwZXItLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5qcy1uYXZpZ2F0aW9uLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnbmF2aWdhdGlvbi13cmFwcGVyLS1hY3RpdmUnKTtcbiAgICB9XG59KTtcblxuJCgnLmpzLWhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJy5qcy1uYXZpZ2F0aW9uJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICQoJ2h0bWwsIGJvZHknKS50b2dnbGVDbGFzcygnbm8tc2Nyb2xsJyk7XG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2hlYWRlci5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/header.js\n");

/***/ }),

/***/ "./resources/js/homepage.js":
/*!**********************************!*\
  !*** ./resources/js/homepage.js ***!
  \**********************************/
/***/ (() => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Get the canvas element from the DOM\nvar canvas = document.querySelector('#scene');\ncanvas.width = canvas.clientWidth;\ncanvas.height = canvas.clientHeight; // Store the 2D context\n\nvar ctx = canvas.getContext('2d');\n\nif (window.devicePixelRatio > 1) {\n  canvas.width = canvas.clientWidth * 2;\n  canvas.height = canvas.clientHeight * 2;\n  ctx.scale(2, 2);\n}\n/* ====================== */\n\n/* ====== VARIABLES ===== */\n\n/* ====================== */\n\n\nvar width = canvas.clientWidth; // Width of the canvas\n\nvar height = canvas.clientHeight; // Height of the canvas\n\nvar rotation = 0; // Rotation of the globe\n\nvar dots = []; // Every dots in an array\n\n/* ====================== */\n\n/* ====== CONSTANTS ===== */\n\n/* ====================== */\n\n/* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */\n\nvar DOTS_AMOUNT = 1000; // Amount of dots on the screen\n\nvar DOT_RADIUS = 3; // Radius of the dots\n\nvar GLOBE_RADIUS = width * 0.7; // Radius of the globe\n\nvar GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center\n\nvar PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML\n\nvar PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML\n\nvar FIELD_OF_VIEW = width * 0.8;\n\nvar Dot = /*#__PURE__*/function () {\n  function Dot(x, y, z) {\n    _classCallCheck(this, Dot);\n\n    this.x = x;\n    this.y = y;\n    this.z = z;\n    this.xProject = 0;\n    this.yProject = 0;\n    this.sizeProjection = 0;\n  } // Do some math to project the 3D position into the 2D canvas\n\n\n  _createClass(Dot, [{\n    key: \"project\",\n    value: function project(sin, cos) {\n      var rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);\n      var rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;\n      this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);\n      this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;\n      this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;\n    } // Draw the dot on the canvas\n\n  }, {\n    key: \"draw\",\n    value: function draw(sin, cos) {\n      this.project(sin, cos); // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);\n\n      ctx.beginPath();\n      ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);\n      ctx.closePath();\n      ctx.fill();\n    }\n  }]);\n\n  return Dot;\n}();\n\nfunction createDots() {\n  // Empty the array of dots\n  dots.length = 0; // Create a new dot based on the amount needed\n\n  for (var i = 0; i < DOTS_AMOUNT; i++) {\n    var theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]\n\n    var phi = Math.acos(Math.random() * 2 - 1); // Random value between [-1, 1]\n    // Calculate the [x, y, z] coordinates of the dot along the globe\n\n    var x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);\n    var y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);\n    var z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;\n    dots.push(new Dot(x, y, z));\n  }\n}\n/* ====================== */\n\n/* ======== RENDER ====== */\n\n/* ====================== */\n\n\nfunction render(a) {\n  // Clear the scene\n  ctx.clearRect(0, 0, width, height); // Increase the globe rotation\n\n  rotation = a * 0.0001;\n  var sineRotation = Math.sin(rotation); // Sine of the rotation\n\n  var cosineRotation = Math.cos(rotation); // Cosine of the rotation\n  // Loop through the dots array and draw every dot\n\n  for (var i = 0; i < dots.length; i++) {\n    dots[i].draw(sineRotation, cosineRotation);\n  }\n\n  window.requestAnimationFrame(render);\n} // Function called after the user resized its screen\n\n\nfunction afterResize() {\n  width = canvas.offsetWidth;\n  height = canvas.offsetHeight;\n\n  if (window.devicePixelRatio > 1) {\n    canvas.width = canvas.clientWidth * 2;\n    canvas.height = canvas.clientHeight * 2;\n    ctx.scale(2, 2);\n  } else {\n    canvas.width = width;\n    canvas.height = height;\n  }\n\n  GLOBE_RADIUS = width * 0.7;\n  GLOBE_CENTER_Z = -GLOBE_RADIUS;\n  PROJECTION_CENTER_X = width / 2;\n  PROJECTION_CENTER_Y = height / 2;\n  FIELD_OF_VIEW = width * 0.8;\n  createDots(); // Reset all dots\n} // Variable used to store a timeout when user resized its screen\n\n\nvar resizeTimeout; // Function called right after user resized its screen\n\nfunction onResize() {\n  // Clear the timeout variable\n  resizeTimeout = window.clearTimeout(resizeTimeout); // Store a new timeout to avoid calling afterResize for every resize event\n\n  resizeTimeout = window.setTimeout(afterResize, 500);\n}\n\nwindow.addEventListener('resize', onResize); // Populate the dots array with random dots\n\ncreateDots(); // Render the scene\n\nwindow.requestAnimationFrame(render);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaG9tZXBhZ2UuanM/YmQyNCJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzY2FsZSIsInJvdGF0aW9uIiwiZG90cyIsIkRPVFNfQU1PVU5UIiwiRE9UX1JBRElVUyIsIkdMT0JFX1JBRElVUyIsIkdMT0JFX0NFTlRFUl9aIiwiUFJPSkVDVElPTl9DRU5URVJfWCIsIlBST0pFQ1RJT05fQ0VOVEVSX1kiLCJGSUVMRF9PRl9WSUVXIiwiRG90IiwieCIsInkiLCJ6IiwieFByb2plY3QiLCJ5UHJvamVjdCIsInNpemVQcm9qZWN0aW9uIiwic2luIiwiY29zIiwicm90WCIsInJvdFoiLCJwcm9qZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImNyZWF0ZURvdHMiLCJsZW5ndGgiLCJpIiwidGhldGEiLCJyYW5kb20iLCJwaGkiLCJhY29zIiwicHVzaCIsInJlbmRlciIsImEiLCJjbGVhclJlY3QiLCJzaW5lUm90YXRpb24iLCJjb3NpbmVSb3RhdGlvbiIsImRyYXciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZnRlclJlc2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplVGltZW91dCIsIm9uUmVzaXplIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBRixNQUFNLENBQUNHLEtBQVAsR0FBZUgsTUFBTSxDQUFDSSxXQUF0QjtBQUNBSixNQUFNLENB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QUcsR0FBdkI7QUFDQWMsRUFBQUEsY0FBYyxHQUFHLENBQUNELFlBQWxCO0FBQ0FFLEVBQUFBLG1CQUFtQixHQUFHZixLQUFLLEdBQUcsQ0FBOUI7QUFDQWdCLEVBQUFBLG1CQUFtQixHQUFHZCxNQUFNLEdBQUcsQ0FBL0I7QUFDQWUsRUFBQUEsYUFBYSxHQUFHakIsS0FBSyxHQUFHLEdBQXhCO0FBRUFvQyxFQUFBQSxVQUFVLEdBakJZLENBaUJSO0FBQ2YsQyxDQUVEOzs7QUFDQSxJQUFJa0IsYUFBSixDLENBQ0E7O0FBQ0EsU0FBU0MsUUFBVCxHQUFxQjtBQUNuQjtBQUNBRCxFQUFBQSxhQUFhLEdBQUdoRCxNQUFNLENBQUNrRCxZQUFQLENBQW9CRixhQUFwQixDQUFoQixDQUZtQixDQUduQjs7QUFDQUEsRUFBQUEsYUFBYSxHQUFHaEQsTUFBTSxDQUFDbUQsVUFBUCxDQUFrQk4sV0FBbEIsRUFBK0IsR0FBL0IsQ0FBaEI7QUFDRDs7QUFDRDdDLE1BQU0sQ0FBQ29ELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxRQUFsQyxFLENBRUE7O0FBQ0FuQixVQUFVLEcsQ0FFVjs7QUFDQTlCLE1BQU0sQ0FBQzRDLHFCQUFQLENBQTZCTixNQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gR2V0IHRoZSBjYW52YXMgZWxlbWVudCBmcm9tIHRoZSBET01cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2VuZScpO1xuY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xuY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XG4vLyBTdG9yZSB0aGUgMkQgY29udGV4dFxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcbiAgY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoICogMjtcbiAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgKiAyO1xuICBjdHguc2NhbGUoMiwgMik7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PSBWQVJJQUJMRVMgPT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT0gKi9cbmxldCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDsgLy8gV2lkdGggb2YgdGhlIGNhbnZhc1xubGV0IGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7IC8vIEhlaWdodCBvZiB0aGUgY2FudmFzXG5sZXQgcm90YXRpb24gPSAwOyAvLyBSb3RhdGlvbiBvZiB0aGUgZ2xvYmVcbmxldCBkb3RzID0gW107IC8vIEV2ZXJ5IGRvdHMgaW4gYW4gYXJyYXlcblxuLyogPT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09IENPTlNUQU5UUyA9PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogU29tZSBvZiB0aG9zZSBjb25zdGFudHMgbWF5IGNoYW5nZSBpZiB0aGUgdXNlciByZXNpemVzIHRoZWlyIHNjcmVlbiBidXQgSSBzdGlsbCBzdHJvbmdseSBiZWxpZXZlIHRoZXkgYmVsb25nIHRvIHRoZSBDb25zdGFudHMgcGFydCBvZiB0aGUgdmFyaWFibGVzICovXG5jb25zdCBET1RTX0FNT1VOVCA9IDEwMDA7IC8vIEFtb3VudCBvZiBkb3RzIG9uIHRoZSBzY3JlZW5cbmNvbnN0IERPVF9SQURJVVMgPSAzOyAvLyBSYWRpdXMgb2YgdGhlIGRvdHNcbmxldCBHTE9CRV9SQURJVVMgPSB3aWR0aCAqIDAuNzsgLy8gUmFkaXVzIG9mIHRoZSBnbG9iZVxubGV0IEdMT0JFX0NFTlRFUl9aID0gLUdMT0JFX1JBRElVUzsgLy8gWiB2YWx1ZSBvZiB0aGUgZ2xvYmUgY2VudGVyXG5sZXQgUFJPSkVDVElPTl9DRU5URVJfWCA9IHdpZHRoIC8gMjsgLy8gWCBjZW50ZXIgb2YgdGhlIGNhbnZhcyBIVE1MXG5sZXQgUFJPSkVDVElPTl9DRU5URVJfWSA9IGhlaWdodCAvIDI7IC8vIFkgY2VudGVyIG9mIHRoZSBjYW52YXMgSFRNTFxubGV0IEZJRUxEX09GX1ZJRVcgPSB3aWR0aCAqIDAuODtcblxuY2xhc3MgRG90IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnogPSB6O1xuICAgIFxuICAgIHRoaXMueFByb2plY3QgPSAwO1xuICAgIHRoaXMueVByb2plY3QgPSAwO1xuICAgIHRoaXMuc2l6ZVByb2plY3Rpb24gPSAwO1xuICB9XG4gIC8vIERvIHNvbWUgbWF0aCB0byBwcm9qZWN0IHRoZSAzRCBwb3NpdGlvbiBpbnRvIHRoZSAyRCBjYW52YXNcbiAgcHJvamVjdChzaW4sIGNvcykge1xuICAgIGNvbnN0IHJvdFggPSBjb3MgKiB0aGlzLnggKyBzaW4gKiAodGhpcy56IC0gR0xPQkVfQ0VOVEVSX1opO1xuICAgIGNvbnN0IHJvdFogPSAtc2luICogdGhpcy54ICsgY29zICogKHRoaXMueiAtIEdMT0JFX0NFTlRFUl9aKSArIEdMT0JFX0NFTlRFUl9aO1xuICAgIHRoaXMuc2l6ZVByb2plY3Rpb24gPSBGSUVMRF9PRl9WSUVXIC8gKEZJRUxEX09GX1ZJRVcgLSByb3RaKTtcbiAgICB0aGlzLnhQcm9qZWN0ID0gKHJvdFggKiB0aGlzLnNpemVQcm9qZWN0aW9uKSArIFBST0pFQ1RJT05fQ0VOVEVSX1g7XG4gICAgdGhpcy55UHJvamVjdCA9ICh0aGlzLnkgKiB0aGlzLnNpemVQcm9qZWN0aW9uKSArIFBST0pFQ1RJT05fQ0VOVEVSX1k7XG4gIH1cbiAgLy8gRHJhdyB0aGUgZG90IG9uIHRoZSBjYW52YXNcbiAgZHJhdyhzaW4sIGNvcykge1xuICAgIHRoaXMucHJvamVjdChzaW4sIGNvcyk7XG4gICAgLy8gY3R4LmZpbGxSZWN0KHRoaXMueFByb2plY3QgLSBET1RfUkFESVVTLCB0aGlzLnlQcm9qZWN0IC0gRE9UX1JBRElVUywgRE9UX1JBRElVUyAqIDIgKiB0aGlzLnNpemVQcm9qZWN0aW9uLCBET1RfUkFESVVTICogMiAqIHRoaXMuc2l6ZVByb2plY3Rpb24pO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueFByb2plY3QsIHRoaXMueVByb2plY3QsIERPVF9SQURJVVMgKiB0aGlzLnNpemVQcm9qZWN0aW9uLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRG90cygpIHtcbiAgLy8gRW1wdHkgdGhlIGFycmF5IG9mIGRvdHNcbiAgZG90cy5sZW5ndGggPSAwO1xuICBcbiAgLy8gQ3JlYXRlIGEgbmV3IGRvdCBiYXNlZCBvbiB0aGUgYW1vdW50IG5lZWRlZFxuICBmb3IgKGxldCBpID0gMDsgaSA8IERPVFNfQU1PVU5UOyBpKyspIHtcbiAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiAyICogTWF0aC5QSTsgLy8gUmFuZG9tIHZhbHVlIGJldHdlZW4gWzAsIDJQSV1cbiAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoKE1hdGgucmFuZG9tKCkgKiAyKSAtIDEpOyAvLyBSYW5kb20gdmFsdWUgYmV0d2VlbiBbLTEsIDFdXG4gICAgXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBbeCwgeSwgel0gY29vcmRpbmF0ZXMgb2YgdGhlIGRvdCBhbG9uZyB0aGUgZ2xvYmVcbiAgICBjb25zdCB4ID0gR0xPQkVfUkFESVVTICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKTtcbiAgICBjb25zdCB5ID0gR0xPQkVfUkFESVVTICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcbiAgICBjb25zdCB6ID0gKEdMT0JFX1JBRElVUyAqIE1hdGguY29zKHBoaSkpICsgR0xPQkVfQ0VOVEVSX1o7XG4gICAgZG90cy5wdXNoKG5ldyBEb3QoeCwgeSwgeikpO1xuICB9XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09IFJFTkRFUiA9PT09PT0gKi9cbi8qID09PT09PT09PT09PT09PT09PT09PT0gKi9cbmZ1bmN0aW9uIHJlbmRlcihhKSB7XG4gIC8vIENsZWFyIHRoZSBzY2VuZVxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICBcbiAgLy8gSW5jcmVhc2UgdGhlIGdsb2JlIHJvdGF0aW9uXG4gIHJvdGF0aW9uID0gYSAqIDAuMDAwMTtcbiAgXG4gIGNvbnN0IHNpbmVSb3RhdGlvbiA9IE1hdGguc2luKHJvdGF0aW9uKTsgLy8gU2luZSBvZiB0aGUgcm90YXRpb25cbiAgY29uc3QgY29zaW5lUm90YXRpb24gPSBNYXRoLmNvcyhyb3RhdGlvbik7IC8vIENvc2luZSBvZiB0aGUgcm90YXRpb25cbiAgXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgZG90cyBhcnJheSBhbmQgZHJhdyBldmVyeSBkb3RcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZG90c1tpXS5kcmF3KHNpbmVSb3RhdGlvbiwgY29zaW5lUm90YXRpb24pO1xuICB9XG4gIFxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59XG5cblxuLy8gRnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSB1c2VyIHJlc2l6ZWQgaXRzIHNjcmVlblxuZnVuY3Rpb24gYWZ0ZXJSZXNpemUgKCkge1xuICB3aWR0aCA9IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodDtcbiAgaWYgKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSkge1xuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aCAqIDI7XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgKiAyO1xuICAgIGN0eC5zY2FsZSgyLCAyKTtcbiAgfSBlbHNlIHtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG4gIEdMT0JFX1JBRElVUyA9IHdpZHRoICogMC43O1xuICBHTE9CRV9DRU5URVJfWiA9IC1HTE9CRV9SQURJVVM7XG4gIFBST0pFQ1RJT05fQ0VOVEVSX1ggPSB3aWR0aCAvIDI7XG4gIFBST0pFQ1RJT05fQ0VOVEVSX1kgPSBoZWlnaHQgLyAyO1xuICBGSUVMRF9PRl9WSUVXID0gd2lkdGggKiAwLjg7XG4gIFxuICBjcmVhdGVEb3RzKCk7IC8vIFJlc2V0IGFsbCBkb3RzXG59XG5cbi8vIFZhcmlhYmxlIHVzZWQgdG8gc3RvcmUgYSB0aW1lb3V0IHdoZW4gdXNlciByZXNpemVkIGl0cyBzY3JlZW5cbmxldCByZXNpemVUaW1lb3V0O1xuLy8gRnVuY3Rpb24gY2FsbGVkIHJpZ2h0IGFmdGVyIHVzZXIgcmVzaXplZCBpdHMgc2NyZWVuXG5mdW5jdGlvbiBvblJlc2l6ZSAoKSB7XG4gIC8vIENsZWFyIHRoZSB0aW1lb3V0IHZhcmlhYmxlXG4gIHJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAvLyBTdG9yZSBhIG5ldyB0aW1lb3V0IHRvIGF2b2lkIGNhbGxpbmcgYWZ0ZXJSZXNpemUgZm9yIGV2ZXJ5IHJlc2l6ZSBldmVudFxuICByZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoYWZ0ZXJSZXNpemUsIDUwMCk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xuXG4vLyBQb3B1bGF0ZSB0aGUgZG90cyBhcnJheSB3aXRoIHJhbmRvbSBkb3RzXG5jcmVhdGVEb3RzKCk7XG5cbi8vIFJlbmRlciB0aGUgc2NlbmVcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2hvbWVwYWdlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/homepage.js\n");

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