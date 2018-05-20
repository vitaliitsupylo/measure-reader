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

