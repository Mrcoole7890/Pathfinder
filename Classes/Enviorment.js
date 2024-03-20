/*

Enviorment Object will:

- Handel interations between the goal, player, and maze objects

- have a function to insert the player into the maze at an open location there can only be one player

- have a get player location function

- have a function to insert a goal loaction there can only be one goal

- have a function to move the players location if it is valid

- have a function to return valid moves from the players position

*/

class Enviorment {
    constructor() {
        this.player = new Point(null)
        this.goal = new Point(null)
        this.maze = null
    }

    setMaze(maze) {
        this.maze = maze    
    }

    getMaze() {
        return this.maze
    }

    getDistanceFromGoal(node) {
        return Math.abs(this.getGoalLocation()[0] - node[0]) + Math.abs(this.getGoalLocation()[1] - node[1]) 
    }

    setPlayerLocation(cords) {
        if (this.getMaze().maze.length <= cords[0]){
            console.warn("The Y cordinate cannot be larger than the height of the maze")
            this.player.setCords(null)
            return null
        } 
        else if (this.getMaze().maze[0].length <= cords[1]){
            console.warn("The X cordinate cannot be larger than the height of the maze")
            this.player.setCords(null)
            return null
        } 
        this.player.setCords(cords)  
    }
    
    getPlayerLocation() {
        return this.player.getCords()
    }

    setGoalLocation(cords) {
        if (this.getMaze().maze.length <= cords[0]){
            console.warn("The Y cordinate cannot be larger than the height of the maze")
            this.goal.setCords(null)
            return null
        } 
        else if (this.getMaze().maze[0].length <= cords[1]){
            console.warn("The X cordinate cannot be larger than the height of the maze")
            this.goal.setCords(null)
            return null
        } 
        this.goal.setCords(cords)  
    }

    getGoalLocation() {
        return this.goal.getCords()
    }

    isGoalReached() {
        if (this.getPlayerLocation() == null){
            console.warn("Goal cannot be reached if the player is null")
            return false
        }
        else if (this.getGoalLocation() == null){
            console.warn("Goal cannot be reached if it is null")
            return false
        }
        else if (this.getPlayerLocation()[0] == this.getGoalLocation()[0]
         && this.getPlayerLocation()[1] == this.getGoalLocation()[1])
            return true
        else {
            console.warn("The goal has not been reached\n Player " 
                + this.getPlayerLocation() + "\n Goal "
                + this.getGoalLocation())
            return false
        }
    }

    movePlayer(direction) {
        var currPlayerLocation = this.getPlayerLocation()
        if (currPlayerLocation == null){
            console.warn("Attempting to move a player that dosent exist.")
            return false
        }
        switch(direction) {
            case "up":
                if (this.maze.getValueAt([currPlayerLocation[0]-1, currPlayerLocation[1]]) == "Wall"){
                    console.warn("Cannot move the player " + direction + " into a wall")
                    return false
                }
                this.setPlayerLocation([currPlayerLocation[0]-1, currPlayerLocation[1]])
                break
            case "down":
                if (this.maze.getValueAt([currPlayerLocation[0]+1, currPlayerLocation[1]]) == "Wall") {
                    console.warn("Cannot move the player " + direction + " into a wall")
                    return false
                }
                this.setPlayerLocation([currPlayerLocation[0]+1, currPlayerLocation[1]])
                break
            case "left":
                if (this.maze.getValueAt([currPlayerLocation[0], currPlayerLocation[1]-1]) == "Wall") {
                    console.warn("Cannot move the player " + direction + " into a wall")
                    return false
                }
                this.setPlayerLocation([currPlayerLocation[0], currPlayerLocation[1]-1])
                break
            case "right":
                if (this.maze.getValueAt([currPlayerLocation[0], currPlayerLocation[1]+1]) == "Wall") {
                    console.warn("Cannot move the player " + direction + " into a wall")
                    return false
                }
                this.setPlayerLocation([currPlayerLocation[0], currPlayerLocation[1]+1])
                break
            default:
                console.warn("the direction \"" + direction + "\" is not a valid direction")
                break
        }
        if ((this.getPlayerLocation()[0] == currPlayerLocation[0] && this.getPlayerLocation()[1] == currPlayerLocation[1]) || this.getPlayerLocation() == null) {
            console.warn("Attempting to move player out of bounds of the maze.")
            this.setPlayerLocation(currPlayerLocation)
            return false
        }
        else return true

    }

    isValidMove(direction) {
        var currPlayerLocation = this.getPlayerLocation()
        if(this.movePlayer(direction) == true){
            this.setPlayerLocation(currPlayerLocation)
            return true
        }
        else{
            console.warn("Cannot move player in the direction (" + direction + ")")
            return false
        } 
    }

    getValidPlayerMoves() {
        var possibleDirections = [
            "left",
            "right",
            "up",
            "down"
        ]

        var validDirections = new Array()

        for (var i = 0; i < possibleDirections.length; i++) {
            if (this.isValidMove(possibleDirections[i]))
                validDirections.push(possibleDirections[i])
        }

        return validDirections
    }

    getValidPlayerMovesAt(cords) {
        var finalArray = new Array()

        if (cords[0] > 0 && "Floor" == this.maze.getValueAt([cords[0]-1, cords[1]]))
            finalArray.push("up")
        if ("Floor" == this.maze.getValueAt([cords[0]+1, cords[1]]))
            finalArray.push("down")
        if (cords[1] > 0 && "Floor" == this.maze.getValueAt([cords[0], cords[1]-1]))
            finalArray.push("left")
        if ("Floor" == this.maze.getValueAt([cords[0], cords[1]+1]))
            finalArray.push("right")

        return finalArray
    }
}
