class PriorityQueue {

    // when intialized the length should be zero
    constructor() {
        this.list = []
        this.length = 0
    }

    // add one to the length of the list
    // takes item and value params and adds them to the heap
    push(item, value) {

    }

    // returns the node with the lowest value in the heap
    // when the heap is empty pop should return null
    // decrement the length value of list if the length of the list is not 0
    pop() {
        
    }

    // returns the expected index of the left child node
    getLeftChildIndex(parentIndex) {

    }

    // returns the expected index of the right child node
    getRightChildIndex(parentIndex) {

    }

    // returns the left child node
    // if there is no left child then null is returned
    getLeftChildNode(parentIndex) {

    }

    // returns the right child node
    // if there is no right child then null is returned
    getRightChildNode(parentIndex) {
        
    }

    // returns the expected index of the parentNode
    getParentOfNodeIndex(childNodeIndex) {

    }

    // returns the parent node of the child
    // if the index of the child node is 0 (root node) null is returned
    getParentOfNode(childNodeIndex) {

    }
}

exports.PriorityQueue = PriorityQueue