class EnviormentTesting {

    constructor(testingUtility) {
        this.test = testingUtility
        this.testSetPlayerLocation()
        this.testInvalidSetPlayerLocation()
        this.testValidSetGoalLocation()
        this.testInvalidSetGoalLocation()
        this.testIsGoalReached()
        this.testMovePlayer()
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

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Set player at invalid location method is working!")
        else 
            console.error("Set player at invalid location method is not working...") 
    }
    
    testGetPlayerLocation() {
    }

    testValidSetGoalLocation() {
        var envUnderTest = new Enviorment()
        var setEnvUnderTest = new Enviorment()
        setEnvUnderTest.setMaze(new Maze([[0,1,0],[0,0,0],[1,0,0]]))
        setEnvUnderTest.setGoalLocation([1,1])
        var testData = [
            [null, envUnderTest.goal.getCords()],
            [1, setEnvUnderTest.goal.getCords()[0]],
            [1, setEnvUnderTest.goal.getCords()[1]]       
        ]

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Set goal at valid location method is working!")
        else 
            console.error("Set goal at valid location method is not working...") 
    }

    testInvalidSetGoalLocation() {
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
            tempEnv.setGoalLocation(arrayOfInvalidCords[i])
            testData.push([null, tempEnv.goal.getCords()])
        }

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Set goal at invalid location method is working!")
        else 
            console.error("Set goal at invalid location method is not working...") 
    }

    testGetGoalLocation() {
    }

    testIsGoalReached() {
        var envUnderTest = new Enviorment()
        var validLocation = [1,1]
        var invalidLocation = [0,1]

        envUnderTest.setMaze(new Maze([[0,1,0],[0,0,0],[1,0,0]]))
        var testData = new Array()

        testData.push([false, envUnderTest.isGoalReached()])
        envUnderTest.setGoalLocation(validLocation)
        testData.push([false, envUnderTest.isGoalReached()])
        envUnderTest.setPlayerLocation(validLocation)
        testData.push([true, envUnderTest.isGoalReached()])
        envUnderTest.setPlayerLocation(invalidLocation)
        testData.push([false, envUnderTest.isGoalReached()])

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Is player at goal location method is working!")
        else 
            console.error("Is player at goal location method is not working...") 
    }

    testMovePlayer() {

        var envUnderTest = new Enviorment()
        envUnderTest.setMaze(new Maze([[0,0,0],[0,0,0],[0,0,0]]))
        var topLeftLocation = [0,0]
        var bottomRightLocation = [envUnderTest.getMaze().maze.length-1, envUnderTest.getMaze().maze[0].length-1]
        envUnderTest.setPlayerLocation(topLeftLocation)
        var invalidMoveOptions = [0, 1, 2, 3, "left", "up"]
        var validMoveOptions =   ["down", "right"]
        var testData = new Array()

        for(var i = 0; i < invalidMoveOptions.length; i++)
            testData.push([false, envUnderTest.isValidMove(invalidMoveOptions[i])])
        for(var i = 0; i < validMoveOptions.length; i++)
            testData.push([true, envUnderTest.isValidMove(validMoveOptions[i])])

        envUnderTest.setPlayerLocation(bottomRightLocation)
        invalidMoveOptions = ["down", "right"]
        validMoveOptions = ["left", "up"]

        for(var i = 0; i < invalidMoveOptions.length; i++)
            testData.push([false, envUnderTest.isValidMove(invalidMoveOptions[i])])
        for(var i = 0; i < validMoveOptions.length; i++)
            testData.push([true, envUnderTest.isValidMove(validMoveOptions[i])])

        envUnderTest.setMaze(new Maze([[0,1,0],[1,0,1],[0,1,0]]))
        var middleLocation = [1,1]
        envUnderTest.setPlayerLocation(middleLocation)
        var invalidMoveOptions = ["left", "up", "down", "right"]

        for(var i = 0; i < invalidMoveOptions.length; i++)
            testData.push([false, envUnderTest.isValidMove(invalidMoveOptions[i])])

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEqualsWithMessage(testData[i][0], testData[i][1], "Check values at index " + i)
        
        if (AllTestsPass)
            console.log("Player move method is working!")
        else 
            console.error("Player move method is not working...") 
    }
}

new EnviormentTesting(new TestingUtility())
