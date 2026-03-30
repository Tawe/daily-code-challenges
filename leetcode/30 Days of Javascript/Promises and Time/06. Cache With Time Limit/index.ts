class TimeLimitedCache {
    private cache: Map<number, number>
    private timeouts: Map<number, ReturnType<typeof setTimeout> | undefined>
    constructor() {
        this.cache = new Map()  
        this.timeouts = new Map()
    }
    
    set(key: number, value: number, duration: number): boolean {
        const existing = this.cache.get(key)
        if (existing) {
            clearTimeout(this.timeouts.get(key))
            this.timeouts.set(key, undefined)
        }
        const timeout = setTimeout(() => {
            this.cache.delete(key)
            this.timeouts.set(key, undefined)
        }, duration)
        this.cache.set(key, value)
        this.timeouts.set(key, timeout)
        return existing !== undefined ? true : false
    }
    
    get(key: number): number {
        return this.cache.get(key) ?? -1
    }
    
    count(): number {
        return this.cache.size ?? 0
    }
}

const cache = new TimeLimitedCache()
cache.set(1, 1, 1000)
console.log(cache.get(1))
console.log(cache.count())