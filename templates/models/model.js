const fs = nw.require('fs');
const PDFParser = nw.require("pdf2json");
let pdfParser = new PDFParser();

class Model {

    constructor(state = []) {
        this.state = state;
    }

    //
    // addHistory(url, text) {
    //     this.state[url] = text;
    //     return url;
    // }


    getDataFile(url) {
        return new Promise((resolve, reject) => {
            fs.readFile(url, 'utf8', (error, result) => {
                // console.log(pdfParser.parseBuffer(result));
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

        });
    }


};

module.exports = Model;