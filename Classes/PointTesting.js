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
        this.testIsEquals()
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

    testIsEquals() {
        var pointOne = new Point([1,1])
        var pointTwo = new Point([1,1])
        var pointThree = new Point(null)
        var pointFour = new Point([1,5])

        var testData = [
            [true, pointOne.isEquals(pointTwo)],
            [true, pointThree.isEquals(new Point(null))],
            [false, pointThree.isEquals(pointTwo)],
            [false, pointOne.isEquals(pointFour)]
        ]

        var AllTestsPass = true

        for (var i = 0; i < testData.length; i++)
            AllTestsPass = AllTestsPass && this.test.isEqualsWithMessage(testData[i][0], testData[i][1], "check index at " + i)

        if (AllTestsPass)
            console.log("Is Equals working as expected!")
        else 
            console.error("Is Equals not working...")
    
        return AllTestsPass
    }
}

new PointTesting(new TestingUtility())
