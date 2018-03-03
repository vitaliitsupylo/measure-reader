const createElement = require('./helpers/create-element.js');
console.log(createElement);

const Model = require('./model/model');
const View = require('./view/view');
const Controller = require('./controller/controller');

const model = new Model();
const view = new View();
const controller = new Controller(model, view);