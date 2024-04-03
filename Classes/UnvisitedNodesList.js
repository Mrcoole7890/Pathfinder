/*
wrapper for making list operations uniform when used to determine which nodes to expand in the pathfinder
*/
class UnvisitedNodesList {
    constructor(type) {
        
        if (type !== "DFS"
            && type !== "BFS" 
            && type !== "A*") {
            this.type = null
        }
        else{
            this.type = type
            switch(this.type) {
                case "A*":
                    try {
                        this.list = new PriorityQueue()
                    } catch (e) {
                        var PriorityQueues = require('../Classes/PriorityQueue.js')
                        this.list = new PriorityQueues.PriorityQueue()
                    }
                    break
                case "BFS":
                    try {
                        this.list = new Queue()
                    } catch (e) {
                        var Queues = require('../Classes/Queue.js')
                        this.list = new Queues.Queue()
                    }
                    break
                case "DFS":
                    this.list = new Array()

            }
        }
    }

    push(item, value) {
        if (this.type !== "A*")
            this.list.push(item)
        else 
            this.list.push(item, value)
    }

    pop() {
        switch(this.type){
            case "A*":
                return this.list.pop()
            case "BFS":
                return this.list.pop()
            case "DFS":
                return this.list.pop()
        }

    }

    length() {
        return this.list.length
    }
}

exports.UnvisitedNodesList = UnvisitedNodesList