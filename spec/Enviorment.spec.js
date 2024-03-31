var Enviorments = require("../Classes/Enviorment.js")
var Mazes = require("../Classes/Maze.js")

describe('Enviorment Class', () => {
    it('can set the players location correctly', () => {
        var envUnderTest = new Enviorments.Enviorment()
        var setEnvUnderTest = new Enviorments.Enviorment()
        setEnvUnderTest.setMaze(new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]]))
        setEnvUnderTest.setPlayerLocation([1,1])
        expect(envUnderTest.player.getCords()).toBe(null)
        expect(setEnvUnderTest.player.getCords()[0]).toBe(1)
        expect(setEnvUnderTest.player.getCords()[1]).toBe(1)
    });

    it('can handle when incorrect parameters are passed into set player location', () => {
        var arrayOfInvalidCords = [
            [-1,0],
            [3,0],
            [0,-1],
            [0,3]
        ]
        var validMazeArray = [[0,1,0],[0,0,0],[1,0,0]]
        for (var i = 0; i < arrayOfInvalidCords.length; i++) {
            var tempEnv = new Enviorments.Enviorment()
            var tempMaze = new Mazes.Maze(validMazeArray)
            tempEnv.setMaze(tempMaze)
            tempEnv.setPlayerLocation(arrayOfInvalidCords[i])
            expect(tempEnv.player.getCords()).toBe(null)
        }
    });

    it('can set the goal location correctly', () => {
        var envUnderTest = new Enviorments.Enviorment()
        var setEnvUnderTest = new Enviorments.Enviorment()
        setEnvUnderTest.setMaze(new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]]))
        setEnvUnderTest.setGoalLocation([1,1])
        expect(envUnderTest.goal.getCords()).toBe(null)
        expect(setEnvUnderTest.goal.getCords()[0]).toBe(1)
        expect(setEnvUnderTest.goal.getCords()[1]).toBe(1)
    });

    it('can handle when incorrect parameters are passed into set player location', () => {
        var arrayOfInvalidCords = [
            [-1,0],
            [3,0],
            [0,-1],
            [0,3]
        ]
        var validMazeArray = [[0,1,0],[0,0,0],[1,0,0]]
        var testData = new Array()
        for (var i = 0; i < arrayOfInvalidCords.length; i++) {
            var tempEnv = new Enviorments.Enviorment()
            var tempMaze = new Mazes.Maze(validMazeArray)
            tempEnv.setMaze(tempMaze)
            tempEnv.setGoalLocation(arrayOfInvalidCords[i])
            expect(tempEnv.goal.getCords()).toBe(null)
        }
    });

    it('can validate when the goal location is reached', () => {
        var envUnderTest = new Enviorments.Enviorment()
        var validLocation = [1,1]
        var invalidLocation = [0,1]
        envUnderTest.setMaze(new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]]))
        expect(envUnderTest.isGoalReached()).toBe(false)
        envUnderTest.setGoalLocation(validLocation)
        expect(envUnderTest.isGoalReached()).toBe(false)
        envUnderTest.setPlayerLocation(validLocation)
        expect(envUnderTest.isGoalReached()).toBe(true)
        envUnderTest.setPlayerLocation(invalidLocation)
        expect(envUnderTest.isGoalReached()).toBe(false)
    });

    it('can move the players cordinates', () => {
        var envUnderTest = new Enviorments.Enviorment()
        envUnderTest.setMaze(new Mazes.Maze([[0,0,0],[0,0,0],[0,0,0]]))
        var topLeftLocation = [0,0]
        var bottomRightLocation = [envUnderTest.getMaze().maze.length-1, envUnderTest.getMaze().maze[0].length-1]
        envUnderTest.setPlayerLocation(topLeftLocation)
        var invalidMoveOptions = [0, 1, 2, 3, "left", "up"]
        var validMoveOptions =   ["down", "right"]

        for(var i = 0; i < invalidMoveOptions.length; i++)
            expect(envUnderTest.isValidMove(invalidMoveOptions[i])).toBe(false)
        for(var i = 0; i < validMoveOptions.length; i++)
            expect(envUnderTest.isValidMove(validMoveOptions[i])).toBe(true)

        envUnderTest.setPlayerLocation(bottomRightLocation)
        invalidMoveOptions = ["down", "right"]
        validMoveOptions = ["left", "up"]

        for(var i = 0; i < invalidMoveOptions.length; i++)
            expect(envUnderTest.isValidMove(invalidMoveOptions[i])).toBe(false)
        for(var i = 0; i < validMoveOptions.length; i++)
            expect(envUnderTest.isValidMove(validMoveOptions[i])).toBe(true)

        envUnderTest.setMaze(new Mazes.Maze([[0,1,0],[1,0,1],[0,1,0]]))
        var middleLocation = [1,1]
        envUnderTest.setPlayerLocation(middleLocation)
        var invalidMoveOptions = ["left", "up", "down", "right"]

        for(var i = 0; i < invalidMoveOptions.length; i++)
            expect(envUnderTest.isValidMove(invalidMoveOptions[i])).toBe(false)
    });

    it('can return the valid moves a player can move at a given point', () => {
        var envUnderTest = new Enviorments.Enviorment()
        envUnderTest.setMaze(new Mazes.Maze([[0,0,0],[0,0,0],[0,0,0]]))
        var playerLocation = [0,0]
        envUnderTest.setPlayerLocation(playerLocation)
        var validMoveOptions =  ["down", "right"]
        var actualReturnedValues = envUnderTest.getValidPlayerMovesAt(playerLocation)

        expect(Array.isArray(actualReturnedValues)).toBe(true)

        expect(actualReturnedValues.length != validMoveOptions.length).toBe(false)
        
        for (var i = 0; i < actualReturnedValues.length; i++)
            expect(validMoveOptions.includes(actualReturnedValues[i])).toBe(true)

        envUnderTest.setMaze(new Mazes.Maze([[0,1,0],[1,0,1],[0,1,0]]))
        playerLocation = [1,1]
        envUnderTest.setPlayerLocation(playerLocation)
        validMoveOptions =  []
        actualReturnedValues = envUnderTest.getValidPlayerMovesAt(playerLocation)
        
        for (var i = 0; i < actualReturnedValues.length; i++)
            expect(validMoveOptions.includes(actualReturnedValues[i])).toBe(true)

        envUnderTest.setMaze(new Mazes.Maze([[0,1,0],[1,0,1],[0,1,0]]))
        playerLocation = [1,1]
        envUnderTest.setPlayerLocation(playerLocation)
        validMoveOptions =  []
        actualReturnedValues = envUnderTest.getValidPlayerMovesAt(playerLocation)
        
        for (var i = 0; i < actualReturnedValues.length; i++)
            expect(validMoveOptions.includes(actualReturnedValues[i])).toBe(true)
    });
});