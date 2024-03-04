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
    }

    setGoalLocation(cords) {
    }

    getGoalLocation() {
    }

    isGoalReached() {
    }

    movePlayer(direction) {
    }

    getValidPlayerMoves() {
    }
}
