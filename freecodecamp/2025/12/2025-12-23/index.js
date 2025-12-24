function emailChainCount(subject) {
    const matches = subject.match(/fwd:|fw:|re:/gi);
    return matches ? matches.length : 0;
}

const x = emailChainCount("fw: re: Hello, how are you?");
x;