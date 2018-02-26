import createElement from './helpers/create-element';
import EventEmitter from './helpers/event-emitter';


export default class View extends EventEmitter {
    constructor() {
        super();

        this.file = document.getElementById('file');
        this.video = document.getElementById('video');
        this.play = document.getElementById('play');

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

    fileReader(data) {

        let fileReader = new FileReader();
        fileReader.readAsDataURL(data.file);

        fileReader.addEventListener('load', (even) => {
            this.video.setAttribute('src', `${even.srcElement.result}`);
        });

    }
}