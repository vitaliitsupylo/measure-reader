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
const Model = __webpack_require__(3);
const Controller = __webpack_require__(4);

const model = new Model();
const view = new View();
const controller = new Controller(model, view);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class View {
    constructor() {
        this.file = document.querySelector('#file');
        this.area = document.querySelector('#area');
    }

    //
    // getFile() {
    //     if (!this.input) {
    //         this.input = createElement('input', {'type': 'file'})
    //     }
    //
    //     this.input.click();
    //     this.input.addEventListener('change', () => {
    //         this.emit('add', this.input.files[0]['path']);
    //     });
    // }
    //
    // setText(text) {
    //     this.area.innerHTML = `${text}`;
    // }
};

module.exports = View;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Model {

    constructor(state = []) {
        this.state = state;
    }
    
    getDataFile(url) {
        // return new Promise((resolve, reject) => {
        //     // fs.readFile(url, 'utf8', (error, result) => {
        //     //     // console.log(pdfParser.parseBuffer(result));
        //     //     if (error) {
        //     //         reject(error);
        //     //     } else {
        //     //         resolve(result);
        //     //     }
        //     // });
        //
        //     const pdfParser = new PDFParser(this, 1);
        //
        //     console.log(pdfParser);
        //
        //     pdfParser.on('pdfParser_dataError', errData => {
        //         console.error(errData.parserError);
        //         reject(errData.parserError);
        //     });
        //     pdfParser.on('pdfParser_dataReady', pdfData => {
        //         console.log(pdfParser.getRawTextContent());
        //         resolve(pdfParser.getRawTextContent());
        //         // fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
        //     });
        //
        //     pdfParser.loadPDF(url);
        // });
    }
};

module.exports = Model;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }


    async addData(urlFile) {
        let text = await this.model.getDataFile(urlFile);
        console.log(text);
        this.view.setText(text);
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
//# sourceMappingURL=main.js.map