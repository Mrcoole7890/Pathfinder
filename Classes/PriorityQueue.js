class PriorityQueue {

    // when intialized the length should be zero
    constructor() {
        this.list = []
        this.length = 0
    }

    // add one to the length of the list
    // takes item and value params and adds them to the heap
    push(item, value) {
        this.length++
        this.list.push([item, value])
        this.sortUp()
    }

    // returns the node with the lowest value in the heap
    // when the heap is empty pop should return null
    // decrement the length value of list if the length of the list is not 0
    pop() {
        if (this.length <= 0)
            return undefined
        else{
            this.length--
            var finalValue = this.list[0][0]
            this.sortDown()
            this.list.pop()
            return finalValue
        }
    }

    // returns the expected index of the left child node
    getLeftChildIndex(parentIndex) {
        return (parentIndex*2)+1
    }

    // returns the expected index of the right child node
    getRightChildIndex(parentIndex) {
        return (parentIndex*2)+2
    }

    // returns the left child node
    // if there is no left child then null is returned
    getLeftChildNode(parentIndex) {
        if (this.getLeftChildIndex(parentIndex) >= this.length)
            return null
        return this.list[this.getLeftChildIndex(parentIndex)]
    }

    // returns the right child node
    // if there is no right child then null is returned
    getRightChildNode(parentIndex) {
        if (this.getRightChildIndex(parentIndex) >= this.length)
            return null
        return this.list[this.getRightChildIndex(parentIndex)]
    }

    // returns the expected index of the parentNode
    getParentOfNodeIndex(childNodeIndex) {
        if (childNodeIndex % 2)
            return (childNodeIndex - 1)/2
        else
            return (childNodeIndex - 2)/2
    }

    // returns the parent node of the child
    // if the index of the child node is 0 (root node) null is returned
    getParentOfNode(childNodeIndex) {
        if (childNodeIndex <= 0)
            return null
        return this.list[this.getParentOfNodeIndex(childNodeIndex)]
    }

    isLessThan(isThis, lessThanThis) {
        if (isThis == null || lessThanThis == null)
            return false
        return isThis[1] < lessThanThis[1]
    }

    // starting from the top, replaces the root node with the smaller of the two children, and applies this operation on the subtree of its children until a leaf node has been reached
    sortDown() {
        var rootTemp = this.list[0]
        this.list[0] = this.list[this.list.length - 1]
        this.list[this.list.length - 1] = rootTemp
        var currIndex = 0
        while(this.getLeftChildNode(currIndex) != null) {
            var smallChildIndex = this.getLeftChildIndex(currIndex)
            if (this.getRightChildNode(currIndex) != null
            && this.isLessThan(this.getRightChildNode(currIndex), this.getLeftChildNode(currIndex))){
                var smallChildIndex = this.getRightChildIndex(currIndex)
            }
            if (this.isLessThan(this.list[smallChildIndex], this.list[currIndex])) {
                var temp = this.list[currIndex]
                this.list[currIndex] = this.list[smallChildIndex]
                this.list[smallChildIndex] = temp
                this.currIndex = smallChildIndex
            }
            else break
        }
    }

    // starting with the end of the array, checks if the node is less than it parent, if not it swaps with the parent and applies the same operation until the child is no longer less than the parent
    sortUp() {
        var currIndex = this.length - 1
        while (this.isLessThan(this.list[currIndex], this.getParentOfNode(currIndex))){
            var temp = this.list[currIndex]
            this.list[currIndex] = this.getParentOfNode(currIndex)
            if (this.getParentOfNode(currIndex) == null)
                break
            else
                this.list[this.getParentOfNodeIndex(currIndex)] = temp
            currIndex = this.getParentOfNodeIndex(currIndex)
        }
    }
}

exports.PriorityQueue = PriorityQueue