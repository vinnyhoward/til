function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

Node.prototype.visit = function () {
    if (this.left) this.left.visit();
    console.log('value:', this.value);
    if (this.right) this.right.visit();
};

Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        this.left === null ? (this.left = n) : this.left.addNode(n);
    } else if (n.value > this.value) {
        this.right === null ? (this.right = n) : this.right.addNode(n);
    }
};
