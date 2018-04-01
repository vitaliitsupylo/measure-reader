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