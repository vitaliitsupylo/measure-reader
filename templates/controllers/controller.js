class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        view.on('add', this.addData.bind(this));
    }


    async addData(urlFile) {
        let text = await this.model.getDataFile(urlFile);
        this.view.setText(text);
    }

    // readFile(file) {
    //     this.model.getDataFile(file.path, this.setFile.bind(this));
    // }
    //
    // setFile(text) {
    //     this.view.innerText(text);
    // }

};

module.exports = Controller;