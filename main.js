const Model = require('./template/js/model');
const View = require('./template/js/view');
const Controller = require('./template/js/controller');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);


const file = document.getElementById('file');

file.addEventListener('click', function () {
    view.getFile(this);
});
