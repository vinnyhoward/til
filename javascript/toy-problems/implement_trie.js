// Implement Trie (Prefix Tree)
// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

var Trie = function () {
    this.children = {};
    this.terminates = false;
};

Trie.prototype.insert = function (word) {
    let iterate = this;
    for (let i = 0; i < word.length; i++) {
        if (iterate[word.charAt(i)]) iterate = iterate[word.charAt(i)];
        else {
            iterate[word.charAt(i)] = new Trie();
            iterate = iterate[word.charAt(i)];
        }
    }
    iterate.terminates = true;
};

Trie.prototype.search = function (word) {
    let iterate = this;
    for (let i = 0; i < word.length; i++) {
        if (iterate[word.charAt(i)]) iterate = iterate[word.charAt(i)];
        else return false;
    }
    return iterate.terminates === true;
};

Trie.prototype.startsWith = function (prefix) {
    let iterate = this;
    for (let i = 0; i < prefix.length; i++) {
        if (iterate[prefix.charAt(i)]) iterate = iterate[prefix.charAt(i)];
        else return false;
    }
    return true;
};
