// constructor function
function Tree(root) {
    this.root = root;
}

Tree.prototype.addValue = function(value) {
    const node = new Node(value);
    if (this.root == null) {
        this.root = node;
    } else {
        this.root.addNode(node);
    }
}

Tree.prototype.traverse = function () {
    this.root.visit();
}

Tree.prototype.search = function(value) {
    return this.root.search(value);
}