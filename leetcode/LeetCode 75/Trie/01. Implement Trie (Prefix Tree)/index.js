const Trie = function() {
    this.root = {};
};

Trie.prototype.insert = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node[ch]) node[ch] = {};
        node = node[ch];
    }
    node.isEnd = true;
};

Trie.prototype.search = function(word) {
    let node = this.root;
    for (const ch of word) {
        if (!node[ch]) return false;
        node = node[ch];
    }
    return !!node.isEnd;
};

Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (const ch of prefix) {
        if (!node[ch]) return false;
        node = node[ch];
    }
    return true;
};

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
