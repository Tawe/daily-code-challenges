let LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        const leastRecentlyUsed = this.cache.keys().next().value;
        this.cache.delete(leastRecentlyUsed);
    }
    this.cache.set(key, value);
};
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1));
lruCache.put(3, 3);
console.log(lruCache.get(2));
lruCache.put(4, 4);
console.log(lruCache.get(1));
console.log(lruCache.get(3));
console.log(lruCache.get(4));