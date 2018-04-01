const createElement = require('./createElement');
const EventEmitter = require('./../eventEmitter');

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