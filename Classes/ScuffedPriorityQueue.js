class PQ {
    constructor() {
        this.list = new Array()        
    }

    push(item, value) {
        this.list.push([item, value])
    }

    pop() {
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
    }

    length() {
        return this.list.length
    }
}