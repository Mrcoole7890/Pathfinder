class Pathfinder {
    /*
    takes a string as the type parameter and a Enviorment object for the second object
    performs validation on both the string and the Enviorment and then sets them
    */
    constructor(type, enviorment) {

        if (enviorment == null || enviorment == undefined || enviorment.constructor.name != "Enviorment") {
            console.warn("Attempting to initialize a pathfinder when the enviorment is invalid ( it is " + enviorment + " ) ")
            this.enviorment = null
        } else if (enviorment.getPlayerLocation() == null){
            console.warn("Attempthing to initialize pathfinder when the player location is not set")
            this.enviorment = null
        } else if (enviorment.getGoalLocation() == null){
            console.warn("Attempthing to initialize pathfinder when the goal location is not set")
            this.enviorment = null
        } else if (enviorment.getMaze() == null) {
            console.warn("Attempthing to initialize pathfinder when the goal location is not set")
            this.enviorment = null
        }
        else
            this.enviorment = enviorment

        try {
            this.unvisitiedNodes = new UnvisitedNodesList(type)
        } catch(e) {
            var UnvisitedNodeLists = require("../Classes/UnvisitedNodesList.js")
            this.unvisitiedNodes = new UnvisitedNodeLists.UnvisitedNodesList(type)
        }
    }

    /*
    Performs a search based on the type set in durring construction
    */
    getPath() {
        var visitedNodes = new Array()
        var unvisitiedNodes = this.unvisitiedNodes
        this.enviorment.player.parent = null
        unvisitiedNodes.push(this.enviorment.player, this.enviorment.getDistanceFromGoal(this.enviorment.player.cords))

        while (unvisitiedNodes.length() != 0) {
            var nodeToBeExpanded = unvisitiedNodes.pop()
            visitedNodes.push(nodeToBeExpanded)
            this.enviorment.expandedNodes.push(nodeToBeExpanded)
            if (this.enviorment.goal.isEquals(nodeToBeExpanded))
                return nodeToBeExpanded
            else {
                var possibleMoves = this.enviorment.getValidPlayerMovesAt(nodeToBeExpanded.cords) 
                var getAdjecentNodes = new Array()
                for (var i = 0; i < possibleMoves.length; i++)
                    getAdjecentNodes.push(nodeToBeExpanded.getPointFromDirection(possibleMoves[i]))

                
                for (var i = 0; i < getAdjecentNodes.length; i++){
                    var isFound = false
                    for (var j = 0; j < visitedNodes.length; j++){
                        if (visitedNodes[j].isEquals(getAdjecentNodes[i])){
                            isFound = true
                        }
                    }
                    if (!isFound && getAdjecentNodes[i] != null){
                        getAdjecentNodes[i].parent = nodeToBeExpanded
                        unvisitiedNodes.push(getAdjecentNodes[i], this.enviorment.getDistanceFromGoal(getAdjecentNodes[i].cords))
                    }
                }
            }
        }
    }
}

exports.Pathfinder = Pathfinder