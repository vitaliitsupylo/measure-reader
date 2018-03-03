const Model = require('./modules/model');
import View from './modules/view';
import Controller from './modules/controller';


const model = new Model();
const view = new View();
const controller = new Controller(model, view);



