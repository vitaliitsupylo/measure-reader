export default class Model {
    constructor(state = []) {
        this.state = state;
    }

    addHistory(item) {
        this.state.push(item);
        return item;
    }

    getVideo(id) {
        return this.state.find(item => item.id === id);
    }

    updateItem(id, data) {
        let item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
    }

    removeItem(id) {
        let index = this.state.findIndex(item => item.id === id);

        if (index > -1) {
            this.state.splice(item, 1);
        }
    }
}
