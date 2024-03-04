class EnviormentTesting {

    constructor(testingUtility) {
        this.test = testingUtility
        this.testSetPlayerLocation()
        this.testInvalidSetPlayerLocation()
    }

    testSetPlayerLocation() {
        var envUnderTest = new Enviorment()
        var setEnvUnderTest = new Enviorment()
        setEnvUnderTest.setMaze(new Maze([[0,1,0],[0,0,0],[1,0,0]]))
        setEnvUnderTest.setPlayerLocation([1,1])
        var testData = [
            [null, envUnderTest.player.getCords()],
            [1, setEnvUnderTest.player.getCords()[0]],
            [1, setEnvUnderTest.player.getCords()[1]]       
        ]

        var AllTestsPass = true

        console.log(testData)

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Set player at valid location method is working!")
        else 
            console.error("Set player at valid location method is not working...") 
    }

    testInvalidSetPlayerLocation() {
        var arrayOfInvalidCords = [
            [-1,0],
            [3,0],
            [0,-1],
            [0,3]
        ]
        var validMazeArray = [[0,1,0],[0,0,0],[1,0,0]]
        var testData = new Array()
        for (var i = 0; i < arrayOfInvalidCords.length; i++) {
            var tempEnv = new Enviorment()
            var tempMaze = new Maze(validMazeArray)
            tempEnv.setMaze(tempMaze)
            tempEnv.setPlayerLocation(arrayOfInvalidCords[i])
            testData.push([null, tempEnv.player.getCords()])
        }

        var AllTestsPass = true

        console.log(testData)

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Set player at invalid location method is working!")
        else 
            console.error("Set player at invalid location method is not working...") 
    }
    
    testGetPlayerLocation() {
    }

    testSetGoalLocation() {
    }

    testGetGoalLocation() {
    }

    testIsGoalReached() {
    }

    testMovePlayer() {
    }

    testGetValidPlayerMovesAt(cords) {
    }
}

new EnviormentTesting(new TestingUtility())
