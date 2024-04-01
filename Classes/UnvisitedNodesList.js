/*
wrapper for making list operations uniform when used to determine which nodes to expand in the pathfinder
*/
class UnvisitedNodesList {
    constructor(type) {
        this.list = new Array()
        
        if (type !== "DFS"
            && type !== "BFS" 
            && type !== "A*") {
            this.type = null
        }
        else{
            this.type = type
        }
    }

    push(item, value) {
        if (this.type !== "A*")
            this.list.push(item)
        else 
            this.list.push([item, value])
    }

    pop() {
        switch(this.type){
            case "A*":
                if (this.list == null)
                    return null
                else if (this.list.length == 0)
                    return null
                
                var smallestValue = Number.POSITIVE_INFINITY
                var finalIndex = null
                for (var i = 0; i < this.list.length; i++) { 
                    if(this.list[i][1] <= smallestValue){
                        finalIndex = i
                        smallestValue = this.list[i][1]
                    }
                }
                var finalValue = this.list[finalIndex][0]
                this.list.splice(finalIndex,1)
                if(finalIndex != null)
                    return finalValue
                else 
                    return null
            case "BFS":
                return this.list.pop()
            case "DFS":
                return this.list.shift()
        }

    }

    length() {
        return this.list.length
    }
}

exports.UnvisitedNodesList = UnvisitedNodesList