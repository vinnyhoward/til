function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function () {
    this.root.visit();
};

Tree.prototype.addValue = function (val) {
    const n = new Node(val);
    if (this.root === null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
};
