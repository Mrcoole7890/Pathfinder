class PathfinderTesting {
    constructor(testingUtilitiy) {
        this.test = testingUtilitiy

        this.testInvalidTypeParameters()
        this.testValidTypeParameters()
    }

    testInvalidTypeParameters() {
        var maze = new Maze([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ])
        var enviorment = new Enviorment()
        enviorment.setMaze(maze)
        enviorment.setPlayerLocation([0,0])
        enviorment.setGoalLocation([2,2])
        var testData = new Array()
        var invalidTypeValues = [undefined, null, -1, 1.5, 3]
        
        var AllTestsPass = true 

        for (var i = 0; i < invalidTypeValues.length; i++)
            testData.push([null, new Pathfinder(invalidTypeValues[i], enviorment)])

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEqualsWithMessage(testData[i][0], testData[i][1].type, i)

        if (AllTestsPass)
            console.log("Pathfinder invalid type parameter handeling works as expected!")
        else
            console.error("Pathfinder invalid type parameter handeling is not working as expected...")

    }

    testValidTypeParameters() {
        var maze = new Maze([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ])
        var enviorment = new Enviorment()
        enviorment.setMaze(maze)
        enviorment.setPlayerLocation([0,0])
        enviorment.setGoalLocation([2,2])
        var testData = new Array()
        var invalidTypeValues = [0, 1, 2]
        
        var AllTestsPass = true 

        for (var i = 0; i < invalidTypeValues.length; i++)
            testData.push(["Pathfinder", new Pathfinder(invalidTypeValues[i], enviorment).constructor.name])

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])

        if (AllTestsPass)
            console.log("Pathfinder valid type parameter handeling works as expected!")
        else
            console.error("Pathfinder valid type parameter handeling is not working as expected...")

    }
}