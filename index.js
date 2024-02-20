class Maze {

    constructor(mazeAsTwoDArray){
        this.maze = mazeAsTwoDArray
        if (!Array.isArray(mazeAsTwoDArray) || mazeAsTwoDArray.length == 0){
            console.error("Cannot convert " + mazeAsTwoDArray + " object to maze")
            this.maze = null
        }
        else {
            var mazeWidth = mazeAsTwoDArray[0].length;
            for(var i = 0; i < mazeAsTwoDArray.length; i++){
                if (mazeAsTwoDArray[i].length != mazeWidth){
                    console.error("Width of array rows is not uniform")
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

class MazeTesting {

    constructor() {
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
        var expectedTwoByTwoMazeToString = " 0 1 \n 0 0 \n "
        var expectedThreeByThreeMazeToString = " 0 1 0 \n 0 0 0 \n 1 0 0 \n "

        if (   this.isEquals(expectedTwoByTwoMazeToString, this.twoByTwoMaze.getMazeAsString())
            && this.isEquals(expectedThreeByThreeMazeToString, this.threeByThreeMaze.getMazeAsString()))
            console.log("All maze as string tests are passing!")
    }

    testMalformedConstructorParameters() {
        var testData = [
            [null, new Maze([[0,1],[]])],
            [null, new Maze(3)],
            [null, new Maze([[0,1,0],[0,0],[1,0,0]])]
        ]

        var AllTestsPass = true

        for(let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.isEquals(testData[i][0], testData[i][1].getMazeAsString())

        if (AllTestsPass)
            console.log("All malformed maze checks pass!")
    }
}

var mt = new MazeTesting()
mt.testPrintString()
mt.testMalformedConstructorParameters()
