class EventEmitter {
    constructor() {
        this.events = new Map();
    }
        
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const listeners = this.events.get(eventName);
        listeners.push(callback);
        
        return {
            unsubscribe: () => {
                const idx = listeners.indexOf(callback);
                if (idx !== -1) {
                    listeners.splice(idx, 1);
                }
            }
        };
    }
  
    emit(eventName, args = []) {
        const listeners = this.events.get(eventName);
        if (!listeners || listeners.length === 0) {
            return [];
        }
        return listeners.map((cb) => cb(...args));
    }
}

const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", () => 5);
emitter.emit("firstEvent");
sub.unsubscribe();
emitter.emit("firstEvent");