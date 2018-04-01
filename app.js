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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const View = __webpack_require__(2);
const Model = __webpack_require__(5);
const Controller = __webpack_require__(6);

const model = new Model();
const view = new View();

const controller = new Controller(model, view);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const createElement = __webpack_require__(3);
const EventEmitter = __webpack_require__(4);

class View extends EventEmitter {
    constructor() {
        super();

        this.file = document.querySelector('#file');
        this.area = document.querySelector('#area');
        this.file.addEventListener('click', this.getFile.bind(this));
    }

    getFile() {
        if (!this.input) {
            this.input = createElement('input', {'type': 'file'})
        }

        this.input.click();
        this.input.addEventListener('change', () => {
            this.emit('add', this.input.files[0]);
        });
    }

    innerText(text) {
        this.area.innerHTML = `${text}`;
    }
};

module.exports = View;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (tag, props, ...children) => {

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
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg) {
        console.log(type);
        if (this.events[type]) {
            this.events[type].forEach((callback) => {
                callback(arg);
            });
        }
    }

};

module.exports = EventEmitter;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

const fs = nw.require('fs');

class Model {
    constructor(state = {}) {
        this.state = state;
    }

    addHistory(url, text) {
        this.state[url] = text;
        return url;
    }

    getDataFile(url, innerText) {

        if (this.state.hasOwnProperty(url)) {
            innerText((this.state[url]));
            return;
        }

        fs.readFile(url, 'utf8', (err, txt) => {
            if (err) {
                console.error(err);
                return;
            }
            this.addHistory(url, txt);
            innerText(txt);
        });
    }


};

module.exports = Model;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        view.on('add', this.readFile.bind(this));
    }

    readFile(file) {
        this.model.getDataFile(file.path, this.setFile.bind(this));
    }

    setFile(text) {
        this.view.innerText(text);
    }

};

module.exports = Controller;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map