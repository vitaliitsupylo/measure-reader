class Model {
    constructor(state = []) {
        this.state = state;
    }

    addHistory(item) {
        this.state.push(item);
        return item;
    }

    getFile(id) {
        return this.state.find(item => item.id === id);
    }
};

module.exports = Model;