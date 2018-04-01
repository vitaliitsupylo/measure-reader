class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    emit(type, arg) {
        console.log(type);
        if (this.events[type]) {
            this.events[type].forEach((callback) => {
                callback(arg);
            });
        }
    }

};

module.exports = EventEmitter;