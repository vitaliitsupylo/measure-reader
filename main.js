const Model = require('./models/model');
const View = require('./views/view');
const Controller = require('./controllers/controller');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

const file = document.getElementById('file');

file.addEventListener('click', function () {
    view.getFile(this);
});
