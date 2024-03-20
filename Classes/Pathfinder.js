class Pathfinder {
    constructor(type, enviorment) {

        if (type == null || type == undefined) {
            console.warn("Attempting to initialize a pathfinder when the type is invalid ( it is " + type + " ) ")
            this.type = null
        } else if (type.constructor.name != "Number" || type % 1 != 0 || type < 0 || type > 2) {
            console.warn("Cannot construct Pathfinder object with type that is not a whole number 0, 1, or 2 ( the number is " + type + " )")
            this.type = null
        }
        else{
            this.typeMapping = {
                0: "DFS",
                1: "BFS",
                2: "A*"
            }
            this.type = this.typeMapping[type]
        }
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
        
    }
}