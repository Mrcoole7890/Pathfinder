class Pathfinder {
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
        
    }
}