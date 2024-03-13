class DisplayTesting {
    constructor(testingUtility) {
        this.test = testingUtility
        this.validateWidthAndHeightOfDisplay()
    }

    validateWidthAndHeightOfDisplay() {

        var testData = new Array()
        var env = new Enviorment()
        var maze = new Maze([[0,0,0],[0,0,0],[0,0,0]])
        env.setMaze(maze)
        var displayUnderTesting = new Display(null, null)

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])
        
        displayUnderTesting = new Display(env, 10)

        testData.push([30, displayUnderTesting.getCanvasWidth()])
        testData.push([30, displayUnderTesting.getCanvasHeight()])

        displayUnderTesting = new Display(env, "dbfihf")

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        displayUnderTesting = new Display(env, new Object())

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        displayUnderTesting = new Display(env, null)

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        displayUnderTesting = new Display(null, 10)

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        displayUnderTesting = new Display(new Object(), 10)

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        env.setMaze(null)
        displayUnderTesting = new Display(env, 10)

        testData.push([0, displayUnderTesting.getCanvasWidth()])
        testData.push([0, displayUnderTesting.getCanvasHeight()])

        var AllTestsPass = true

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])
        
        if (AllTestsPass)
            console.log("Width and height of display is working as expected!")
        else 
            console.error("Wigth and height of display is not being set correctly...")
    }

    cleanUp() {
        var allCreatedCanvas = document.getElementsByTagName("canvas")
        for (let i = 0; 0 < allCreatedCanvas.length; i++)
            allCreatedCanvas[0].remove()
    }
}

new DisplayTesting(new TestingUtility())
