export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addVideo.bind(this));
    }

    addVideo(file) {
        const data = this.model.addHistory({
            id: Date.now(),
            file: file,
            completed: false
        });

        this.view.fileReader(data);
    }

}
