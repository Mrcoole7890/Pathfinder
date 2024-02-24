/*
Point Object will:

- store the points location

- have a function to move the point up, down, left, or right
*/

class PointTesting {
    
    constructor(testingUtility) {
        this.test = testingUtility
        this.testInvalidPointConstructor()
        this.testValidPointConstructor()
    }

    testValidPointConstructor() {
        var pointObjectUnderTesting = new Point([1,1])
        var testData = [
            [1, pointObjectUnderTesting.getCords()[0]],
            [1, pointObjectUnderTesting.getCords()[1]],
            [0, pointObjectUnderTesting.setCords([0,1]).getCords()[0]],
            [1, pointObjectUnderTesting.setCords([0,1]).getCords()[1]],
        ]

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])

        if (AllTestsPass)
            console.log("Valid Point cordinate setting and getting working as expected!")
        else 
            console.error("Valid Point cordinate setting and getting not working as expected...")

        return AllTestsPass
    }

    testInvalidPointConstructor() {
        var pointObjectUnderTesting = new Point(null)
        var validPoint = new Point([1,1])
        var testData = [
            [null, pointObjectUnderTesting.getCords()],
            [null, pointObjectUnderTesting.setCords([-1,0]).getCords()], // Y is too small
            [null, pointObjectUnderTesting.setCords([5.89,0]).getCords()], // Y is a decimal
            [null, pointObjectUnderTesting.setCords([0,-4]).getCords()], // X is too small
            [null, pointObjectUnderTesting.setCords([0,5.98]).getCords()], // X is a decial
            [null, pointObjectUnderTesting.setCords("Bad Value").getCords()], // a non-arrray was passed
            [null, pointObjectUnderTesting.setCords([1,0,4]).getCords()], // array was too large
            [null, pointObjectUnderTesting.setCords([1]).getCords()], // array was too small
            [null, pointObjectUnderTesting.setCords(null).getCords()], // array was null
            [1, validPoint.getCords()[0]],
            [1, validPoint.getCords()[1]],
            [1, pointObjectUnderTesting.setCords(validPoint.getCords()).getCords()[0]],
            [1, validPoint.getCords()[1]],
        ]

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEquals(testData[i][0], testData[i][1])

        if (AllTestsPass)
            console.log("Invalid Point cordinate checks are working as expected!")
        else 
            console.error("Invalid Point cordinate checks are not working...")
    
        return AllTestsPass
    }
}

new PointTesting(new TestingUtility())
