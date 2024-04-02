class Queue {

    // when intialized sets length should be zero
    constructor() {
        this.list = []
        this.length = 0
    }

    // add one to the length of the list
    // takes item params and adds it to the queue
    // the value parameter is thrown out
    push(item, value) {
        this.length++
        this.list = [item].concat(this.list)
    }

    // returns the front node in the list
    // when the queue is empty pop should return null
    // decrement the length value of list if the length of the list is not 0
    pop() {
        if (this.length == 0)
            return
        else {
            this.length--
            return this.list.pop()
        }
    }

}

exports.Queue = Queue