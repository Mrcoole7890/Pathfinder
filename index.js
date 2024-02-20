class Maze {

    constructor(mazeAsTwoDArray){
        this.maze = mazeAsTwoDArray
    }

    getMazeAsString() {
        var finalString = " "
        for (let i = 0; i < this.maze.length; i++){
            for (let j = 0; j < this.maze[i].length; j++)
                finalString += this.maze[i][j] + " "
            finalString += "\n "
        }
        return finalString
    }

}

class MazeTesting {

    constructor() {        
        this.nullMaze = new Maze([])
        this.twoByTwoMaze = new Maze([[0,1],[0,0]])
        this.threeByThreeMaze = new Maze([[0,1,0],[0,0,0],[1,0,0]])
    }

    isEquals(expected, actual, message) {
        if (expected === actual)
            return true
        else
            console.log(message)
            return false
    }

    isEquals(expected, actual) {
        if (expected === actual)
            return true
        else
            console.log("Values Do Not Match:\n" + expected + " is not equal to\n" + actual + "**End**")
            return false
    }

    testPrintString() {
        var expectedNullMazeToString = " "
        var expectedTwoByTwoMazeToString = " 0 1 \n 0 0 \n "
        var expectedThreeByThreeMazeToString = " 0 1 0 \n 0 0 0 \n 1 0 0 \n "

        if (this.isEquals(expectedNullMazeToString, this.nullMaze.getMazeAsString())
            && this.isEquals(expectedTwoByTwoMazeToString, this.twoByTwoMaze.getMazeAsString())
            && this.isEquals(expectedThreeByThreeMazeToString, this.threeByThreeMaze.getMazeAsString()))
            console.log("All maze as string tests are passing!")
    }
}

var mt = new MazeTesting()
mt.testPrintString()
