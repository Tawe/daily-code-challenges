type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, t)
    }
};

const log = debounce(console.log, 100);
log(1);
log(2);
log(3);