class Maze {

    constructor(mazeAsTwoDArray){
        this.maze = mazeAsTwoDArray
        this.valueMap = new Map()
        this.valueMap.set(1, "Wall")
        this.valueMap.set(0, "Floor")
        this.valueMap.set(2, "Player")
        this.valueMap.set(3, "Goal")
        this.playerPosition = null

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

    getPlayerPosition() {
        if (this.maze == null) {
            console.warn("You are attempting to find the player postion in a null maze...")
            return null
        }
        return this.playerPosition   
    }

    setPlayerPosition(cords) {
        if (this.maze == null)
            console.warn("You are attempting to set the player postion in a null maze...")

        else if (this.getPlayerPosition() != null)
            console.warn("A player is already inserted into the maze. There cannot be more than 1 player in the maze.")

        else if (this.maze.length <= cords[0] || 0 > cords[0])
            console.warn("The Y cordinate is out of bounds.")

        else if (this.maze[cords[0]].length <= cords[1] || 0 > cords[1])
            console.warn("The X cordinate is out of bounds.")

        else {
            var valueAtDesiredInsertion = this.valueMap.get(this.maze[cords[1]][cords[0]])
            if (valueAtDesiredInsertion == "Wall")
                console.warn("Cannot insert the player at a wall position.")
            else if (valueAtDesiredInsertion == "Floor") {
                this.playerPosition = cords
                return this
            }
        }    
        return null   
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
            console.warn("Values Do Not Match:\n" + expected + " is not equal to\n" + actual + "**End**")
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

    testDefaultValueMap() {
        var testData = new Maze([[0,1,0],[0,0,0],[1,0,0]])
        var AllTestsPass = true

        AllTestsPass = AllTestsPass && this.isEquals("Floor", testData.valueMap.get(0))
        AllTestsPass = AllTestsPass && this.isEquals("Wall", testData.valueMap.get(1))
        AllTestsPass = AllTestsPass && this.isEquals("Player", testData.valueMap.get(2))
        AllTestsPass = AllTestsPass && this.isEquals("Goal", testData.valueMap.get(3))

        if (AllTestsPass)
            console.log("Default Value Mapping works as expected!")
        else
            console.warn("It seems the default value mapping has been tampered with...")
    }

    testValidGetAndSetPlayerLocation () {
        var testMaze = new Maze([[0,1,0],[0,0,0],[1,0,0]])
        var AllTestsPass = true
        var expectedPlayerLocation = [1,1]
        testMaze.setPlayerPosition(expectedPlayerLocation)

        AllTestsPass = AllTestsPass && this.isEquals(expectedPlayerLocation[0], testMaze.getPlayerPosition()[0])
        AllTestsPass = AllTestsPass && this.isEquals(expectedPlayerLocation[1], testMaze.getPlayerPosition()[1])


        if (AllTestsPass)
            console.log("Valid player insertion and query is working!")
        else
            console.warn("Attempted To insert a player in the valid position:\n " 
                + expectedPlayerLocation
                + "\nin the maze:\n"
                + testMaze.getMazeAsString()
                + "\nThis should have been a valid insertion...")                    
    }

    testInvalidGetAndSetPlayerLocation () {
        var outOfBoundsYTooBig = [0, 3]
        var outOfBoundsYTooSmall = [0, -1]
        var outOfBoundsXTooBig = [3, 0]
        var outOfBoundsXTooSmall = [-1, 0]
        var validCord = [1,1]
        var testMaze = new Maze([[0,1,0],[0,0,0],[1,0,0]])
        var nullMaze = new Maze()
        var AllTestsPass = true

        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.getPlayerPosition())
        AllTestsPass = AllTestsPass && this.isEquals(null, nullMaze.getPlayerPosition()) 
        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.setPlayerPosition(outOfBoundsYTooBig))
        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.setPlayerPosition(outOfBoundsYTooSmall))
        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.setPlayerPosition(outOfBoundsXTooBig))
        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.setPlayerPosition(outOfBoundsXTooSmall))
        
        testMaze.setPlayerPosition(validCord)
        AllTestsPass = AllTestsPass && this.isEquals(null, testMaze.setPlayerPosition(validCord))

        if (AllTestsPass)
            console.log("Invalid player insertion and query is handeled!")
        else
            console.log("There are some issues with handeling invalid player insertions...")      
    }

    
}

var mt = new MazeTesting()
mt.testPrintString()
mt.testMalformedConstructorParameters()
mt.testDefaultValueMap()
mt.testValidGetAndSetPlayerLocation()
mt.testInvalidGetAndSetPlayerLocation()
