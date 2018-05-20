const View = require('./views/view');
const Model = require('./models/model');
const Controller = require('./controllers/controller');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
