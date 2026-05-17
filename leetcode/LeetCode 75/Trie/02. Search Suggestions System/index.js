const suggestedProducts = function(products, searchWord) {
    const trie = new Trie();
    for (const product of products) {
        trie.insert(product);
    }
    const result = [];
    for (let i = 0; i < searchWord.length; i++) {
        result.push(trie.suggest(searchWord.slice(0, i + 1)));
    }
    return result;
};

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node[ch]) node[ch] = {};
            node = node[ch];
        }
        node.isEnd = true;
    }

    suggest(prefix) {
        let node = this.root;
        for (const ch of prefix) {
            if (!node[ch]) return [];
            node = node[ch];
        }
        return this.collect(node, prefix);
    }

    collect(node, path) {
        const suggestions = [];
        const dfs = (node, path) => {
            if (suggestions.length >= 3) return;
            if (node.isEnd) suggestions.push(path);
            for (const ch of Object.keys(node).sort()) {
                if (ch === 'isEnd') continue;
                dfs(node[ch], path + ch);
            }
        };
        dfs(node, path);
        return suggestions;
    }
}

const x = suggestedProducts(
    ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    'mouse'
);
console.log(JSON.stringify(x));
