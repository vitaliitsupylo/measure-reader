const fs = nw.require('fs');
const PDFParser = nw.require("pdf2json");

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
            // fs.readFile(url, 'utf8', (error, result) => {
            //     // console.log(pdfParser.parseBuffer(result));
            //     if (error) {
            //         reject(error);
            //     } else {
            //         resolve(result);
            //     }
            // });

            const pdfParser = new PDFParser(this, 1);

            console.log(pdfParser);

            pdfParser.on('pdfParser_dataError', errData => {
                console.error(errData.parserError);
                reject(errData.parserError);
            });
            pdfParser.on('pdfParser_dataReady', pdfData => {
                console.log(pdfParser.getRawTextContent());
                resolve(pdfParser.getRawTextContent());
                // fs.writeFile("./pdf2json/test/F1040EZ.json", JSON.stringify(pdfData));
            });

            pdfParser.loadPDF(url);
        });
    }
};

module.exports = Model;