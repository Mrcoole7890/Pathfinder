/*

Maze Object will:

- have a constructor that takes a single parameter, mazeAsTwoDArray, that must be a rectangular array object **DONE**

- have a toString function that displays the maze as a string **DONE**

- have a mapping function to convert values to their representations **DONE**

*/

class MazeTesting {

    constructor(testingUtility) {
        this.test = testingUtility
        this.twoByTwoMaze = new Maze([[0,1],[0,0]])
        this.threeByThreeMaze = new Maze([[0,1,0],[0,0,0],[1,0,0]])

        this.testPrintString()
        this.testMalformedConstructorParameters()
        this.testDefaultValueMap()
    }

    testPrintString() {
        var expectedTwoByTwoMazeToString = " 0 1 \n 0 0 \n "
        var expectedThreeByThreeMazeToString = " 0 1 0 \n 0 0 0 \n 1 0 0 \n "

        if (   this.test.isEquals(expectedTwoByTwoMazeToString, this.twoByTwoMaze.getMazeAsString())
            && this.test.isEquals(expectedThreeByThreeMazeToString, this.threeByThreeMaze.getMazeAsString()))
            console.log("All maze as string tests are passing!")
        else 
            console.error("Maze to string convertions are not working as expected")
    }

    testMalformedConstructorParameters() {
        var testData = [
            [null, new Maze([[0,1],[]])],
            [null, new Maze(3)],
            [null, new Maze([[0,1,0],[0,0],[1,0,0]])]
        ]

        var AllTestsPass = true

        for(let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1].getMazeAsString())

        if (AllTestsPass)
            console.log("All malformed maze checks pass!")
        else 
            console.error("There are some malformed maze checks not being handeled")
    }

    testDefaultValueMap() {
        var testData = new Maze([[0,1,0],[0,0,0],[1,0,0]])
        var AllTestsPass = true

        AllTestsPass = AllTestsPass && this.test.isEquals("Floor", testData.valueMap.get(0))
        AllTestsPass = AllTestsPass && this.test.isEquals("Wall", testData.valueMap.get(1))
        AllTestsPass = AllTestsPass && this.test.isEquals("Player", testData.valueMap.get(2))
        AllTestsPass = AllTestsPass && this.test.isEquals("Goal", testData.valueMap.get(3))

        if (AllTestsPass)
            console.log("Default Value Mapping works as expected!")
        else
            console.error("It seems the default value mapping has been tampered with...")
    }
}

new MazeTesting(new TestingUtility())
