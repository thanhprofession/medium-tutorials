function BinarySearchTree() {

    function Node(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    this.root = null;

    this.addNode = function(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            insertNode(this.root, node);
        }
    }

    function insertNode(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                insertNode(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                insertNode(currentNode.right, newNode);
            }
        }
    }

    this.breadthFirstTraversal = function(callback) {

        let queue = [];
        let nextNode;

        queue.push(this.root);

        while(queue.length>0) {
            nextNode = queue.shift();

            if(nextNode.left) {
                queue.push(nextNode.left);
            }

            if(nextNode.right) {
                queue.push(nextNode.right);
            }

            callback(node.value);
        }
    }

}

let tree = new BinarySearchTree();
tree.addNode(3);
tree.addNode(5);
tree.addNode(14);
tree.addNode(11);
tree.addNode(25);
tree.addNode(2);

tree.breadthFirstTraversal(function log(value) {
    console.log(value);
});