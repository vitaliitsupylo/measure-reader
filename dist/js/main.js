/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_view__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_controller__ = __webpack_require__(6);





const model = new __WEBPACK_IMPORTED_MODULE_0__modules_model__["a" /* default */]();
const view = new __WEBPACK_IMPORTED_MODULE_1__modules_view__["a" /* default */]();
const controller = new __WEBPACK_IMPORTED_MODULE_2__modules_controller__["a" /* default */](model, view);





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Model {
    constructor(state = []) {
        this.state = state;
    }

    addHistory(item) {
        this.state.push(item);
        return item;
    }

    getVideo(id) {
        return this.state.find(item => item.id === id);
    }

    updateItem(id, data) {
        let item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
    }

    removeItem(id) {
        let index = this.state.findIndex(item => item.id === id);

        if (index > -1) {
            this.state.splice(item, 1);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Model;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_create_element__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_event_emitter__ = __webpack_require__(5);




class View extends __WEBPACK_IMPORTED_MODULE_1__helpers_event_emitter__["a" /* default */] {
    constructor() {
        super();

        this.file = document.getElementById('file');
        this.video = document.getElementById('video');
        this.play = document.getElementById('play');

        this.file.addEventListener('click', this.getFile.bind(this));
    }

    getFile() {
        if (!this.input) {
            this.input = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_create_element__["a" /* default */])('input', {'type': 'file'})
        }

        this.input.click();
        this.input.addEventListener('change', () => {
            this.emit('add', this.input.files[0]);
        });
    }

    fileReader(data) {

        let fileReader = new FileReader();
        fileReader.readAsDataURL(data.file);

        fileReader.addEventListener('load', (even) => {
            this.video.setAttribute('src', `${even.srcElement.result}`);
        });

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;
function createElement(tag, props, ...children) {

    const element = document.createElement(tag);

    Object.keys(props).forEach(prop => element[prop] = props[prop]);

    if (children.length > 0) {
        children.forEach((child) => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
    }
    return element;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach((callback) => {
                callback(arg);
            });
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventEmitter;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addVideo.bind(this));
    }

    addVideo(file) {
        const data = this.model.addHistory({
            id: Date.now(),
            file: file,
            completed: false
        });

        this.view.fileReader(data);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Controller;



/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map