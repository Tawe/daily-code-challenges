type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        let timeoutId: ReturnType<typeof setTimeout>;
        const timeoutPromise = new Promise<never>((_, reject) => {
            timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        try {
            return await Promise.race([fn(...args), timeoutPromise]);
        } finally {
            clearTimeout(timeoutId!);
        }
    }
};

const limited = timeLimit((t: number) => new Promise((res, rej) => setTimeout(res, t)), 100);
limited(150).then(console.log).catch(console.log)
limited(120).then(console.log).catch(console.log)