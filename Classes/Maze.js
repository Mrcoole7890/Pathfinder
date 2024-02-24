/*

Maze Object will:

- have a constructor that takes a single parameter, mazeAsTwoDArray, that must be a rectangular array object **DONE**

- have a toString function that displays the maze as a string **DONE**

- have a mapping function to convert values to their representations **DONE**

*/

class Maze {
    constructor(mazeAsTwoDArray){
        this.maze = mazeAsTwoDArray
        this.valueMap = new Map()
        this.valueMap.set(1, "Wall")
        this.valueMap.set(0, "Floor")
        this.valueMap.set(2, "Player")
        this.valueMap.set(3, "Goal")
        this.playerPosition = null
        this.goalPosition = null

        if (!Array.isArray(mazeAsTwoDArray) || mazeAsTwoDArray.length == 0){
            console.warn("Cannot convert " + mazeAsTwoDArray + " object to maze")
            this.maze = null
        }
        else {
            var mazeWidth = mazeAsTwoDArray[0].length;
            for(var i = 0; i < mazeAsTwoDArray.length; i++){
                if (mazeAsTwoDArray[i].length != mazeWidth){
                    console.warn("Width of array rows is not uniform")
                    this.maze = null            
                }
            }  
        }
    }

    getMazeAsString() {
        if (this.maze == null) return null
        var finalString = " "
        for (let i = 0; i < this.maze.length; i++){
            for (let j = 0; j < this.maze[i].length; j++)
                finalString += this.maze[i][j] + " "
            finalString += "\n "
        }
        return finalString
    }
}
