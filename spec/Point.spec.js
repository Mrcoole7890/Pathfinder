var Points = require("../Classes/Point.js")

describe('Point Class', () => {
    it('should initialize objects when a valid parameter is passed', () => {
        var pointObjectUnderTesting = new Points.Point([1,1])
        expect(pointObjectUnderTesting.getCords()[0]).toBe(1)
        expect(pointObjectUnderTesting.getCords()[1]).toBe(1)
        expect(pointObjectUnderTesting.setCords([0,1]).getCords()[0]).toBe(0)
        expect(pointObjectUnderTesting.setCords([0,1]).getCords()[1]).toBe(1)
    });
    it('should set its x and y values to null when invalid inputs are given', () => {
        var pointObjectUnderTesting = new Points.Point(null)
        var validPoint = new Points.Point([1,1])
        expect(pointObjectUnderTesting.getCords()).toBe(null)
        expect(pointObjectUnderTesting.setCords([-1,0]).getCords()).toBe(null) // Y is too small
        expect(pointObjectUnderTesting.setCords([5.89,0]).getCords()).toBe(null) // Y is a decimal
        expect(pointObjectUnderTesting.setCords([0,-4]).getCords()).toBe(null) // X is too small
        expect(pointObjectUnderTesting.setCords([0,5.98]).getCords()).toBe(null) // X is a decial
        expect(pointObjectUnderTesting.setCords("Bad Value").getCords()).toBe(null) // a non-arrray was passed
        expect(pointObjectUnderTesting.setCords([1,0,4]).getCords()).toBe(null) // array was too large
        expect(pointObjectUnderTesting.setCords([1]).getCords()).toBe(null) // array was too small
        expect(pointObjectUnderTesting.setCords(null).getCords()).toBe(null) // array was null
        expect(validPoint.getCords()[0]).toBe(1)
        expect(validPoint.getCords()[1]).toBe(1)
        expect(pointObjectUnderTesting.setCords(validPoint.getCords()).getCords()[0]).toBe(1)
        expect(validPoint.getCords()[1]).toBe(1)
    });
    it('should compare two points based on their x and y cordinates and return a bool correctly', () => {
        var pointOne = new Points.Point([1,1]) // simple cordinate
        var pointTwo = new Points.Point([1,1])  // should be equal to point one
        var pointThree = new Points.Point(null) // should be able to compare null points
        var pointFour = new Points.Point([1,5]) // should not be equals to point one or point two
        expect(pointOne.isEquals(pointTwo)).toBe(true)
        expect(pointThree.isEquals(new Points.Point(null))).toBe(true)
        expect(pointThree.isEquals(pointTwo)).toBe(false)
        expect(pointOne.isEquals(pointFour)).toBe(false)
    });
});