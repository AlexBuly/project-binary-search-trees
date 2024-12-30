export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    setLeft(left) {
        this.left = left;
    }

    setRight(right) {
        this.right = right;
    }
}