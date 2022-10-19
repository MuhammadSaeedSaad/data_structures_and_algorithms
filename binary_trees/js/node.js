// constructor function
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function (node) {
    if (node.value < this.value) {
        if (this.left == null) {
            this.left = node;
        } else {
            this.left.addNode(node);
        }
    } else if (node.value > this.value) {
        if (this.right == null) {
            this.right = node;
        } else {
            this.right.addNode(node);
        }
    }
}

Node.prototype.visit = function() {
    if (this.left) {
        this.left.visit();
    }
    console.log(this.value);
    if (this.right) {
        this.right.visit();
    }
}

Node.prototype.search = function(value) {
    if (this.value == value) {
        return true;
    } else if (value < this.value  && this.left != null) {
        return this.left.search(value);
    } else if (value > this.value && this.right != null) {
        return this.right.search(value);
    } else {
        return false;
    }
}