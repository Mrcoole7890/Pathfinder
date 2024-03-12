/*

TestingUtility Object:

- will be used by the testing objects for helper functions

- will have a function for testing if values are equal

- will have a function for running all test methods

*/

class TestingUtility {

    isEqualsWithMessage(expected, actual, message) {
        if (expected === actual)
            return true
        else
            console.log(message)
            return false
    }

    isEquals(expected, actual) {
        if (expected === actual)
            return true
        else
            console.warn("Values Do Not Match:\n" + expected + " is not equal to\n" + actual + "**End**")
            return false
    }
}
