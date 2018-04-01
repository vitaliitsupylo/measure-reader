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