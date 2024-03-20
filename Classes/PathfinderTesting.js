class PathfinderTesting {
    constructor(testingUtilitiy) {
        this.test = testingUtilitiy
        this.testEnviormentParameters()
    }

    testEnviormentParameters() {
        var maze = new Maze([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ])

        var testData = new Array()
        var enviorment = new Enviorment()

        testData.push([null, new Pathfinder(0, enviorment).enviorment])

        enviorment.setMaze(maze)

        testData.push([null, new Pathfinder(0, enviorment).enviorment])

        enviorment.setPlayerLocation([0,0])

        testData.push([null, new Pathfinder(0, enviorment).enviorment])

        enviorment.setGoalLocation([2,2])

        testData.push(["Enviorment", new Pathfinder(0, enviorment).enviorment.constructor.name])

        enviorment.setMaze(null)

        testData.push([null, new Pathfinder(0, enviorment).enviorment])
        
        var AllTestsPass = true 

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEqualsWithMessage(testData[i][0], testData[i][1], i)

        if (AllTestsPass)
            console.log("Pathfinder enviorment parameter handeling works as expected!")
        else
            console.error("Pathfinder enviorment parameter handeling is not working as expected...")

    }
}