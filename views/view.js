const createElement = require('./createElement');
const EventEmitter = require('./eventEmitter');

class View extends EventEmitter {
    constructor() {
        super();

        this.file = document.getElementById('file');
        this.area = document.getElementById('area');
        // this.file.addEventListener('click', this.getFile.bind(this));

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

    fileReader(data) {

        let fileReader = new FileReader();
        fileReader.readAsDataURL(data.file);

        fileReader.addEventListener('load', (even) => {
            console.log(even);
            // this.video.setAttribute('src', `${even.srcElement.result}`);
        });

    }
};

module.exports = View;