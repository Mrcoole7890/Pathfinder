class UnvisitedNodesListTesting {
    constructor(testingUtility) {
        this.test = testingUtility
        this.testInvalidTypeParameters()
        this.testValidTypeParameters()
        this.testPopForAStar()
        this.testPopForBFS()
        this.testPopForDFS()
    }

    testInvalidTypeParameters() {

        var testData = new Array()
        var invalidTypeValues = [undefined, null, -1, 1.5, 3, "sdsdf", "bfs"]
        
        var AllTestsPass = true 

        for (var i = 0; i < invalidTypeValues.length; i++)
            testData.push([null, new UnvisitedNodesList(invalidTypeValues[i])])

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEqualsWithMessage(testData[i][0], testData[i][1].type, i)

        if (AllTestsPass)
            console.log("UnvisitedNodesList invalid type parameter handeling works as expected!")
        else
            console.error("UnvisitedNodesList invalid type parameter handeling is not working as expected...")

    }

    testValidTypeParameters() {
        var testData = new Array()
        
        var AllTestsPass = true 
        var validTypeValues = ["BFS", "DFS", "A*"]

        for (let i = 0; i < validTypeValues.length; i++)
            testData.push([true, new UnvisitedNodesList(validTypeValues[i]).type != null])

        for (let i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])

        if (AllTestsPass)
            console.log("UnvisitedNodesList valid type parameter handeling works as expected!")
        else
            console.error("UnvisitedNodesList valid type parameter handeling is not working as expected...")

    }

    testPopForAStar(){
        var unvisitedNodesList = new UnvisitedNodesList("A*")

        unvisitedNodesList.push(1, 5)
        unvisitedNodesList.push(2, 2)
        unvisitedNodesList.push(3, 17)

        if (unvisitedNodesList.pop() == 2)
            console.log("UnvisitedNodesList pop method works as expected for A* !")
        else
            console.error("UnvisitedNodesList pop method is not working as expected for A*...")

    }

    testPopForBFS(){
        var unvisitedNodesList = new UnvisitedNodesList("BFS")

        unvisitedNodesList.push(1, null)
        unvisitedNodesList.push(2, 8)
        unvisitedNodesList.push(3, "Hello")

        if (unvisitedNodesList.pop() == 3)
            console.log("UnvisitedNodesList pop method works as expected for BFS !")
        else
            console.error("UnvisitedNodesList pop method is not working as expected for BFS...")
    }

    testPopForDFS(){
        var unvisitedNodesList = new UnvisitedNodesList("DFS")

        unvisitedNodesList.push(1, null)
        unvisitedNodesList.push(2, 8)
        unvisitedNodesList.push(3, "Hello")

        if (unvisitedNodesList.pop() == 1)
            console.log("UnvisitedNodesList pop method works as expected for DFS !")
        else
            console.error("UnvisitedNodesList pop method is not working as expected for DFS...")
    }
}