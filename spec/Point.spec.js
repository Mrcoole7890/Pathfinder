var Points = require("../Classes/Point.js")

describe('Point Class', () => {
    it('should initialize objects when a valid parameter is passed', () => {
        var pointObjectUnderTesting = new Points.Point([1,1])
        expect(pointObjectUnderTesting.getCords()[0]).toBe(1)
        expect(pointObjectUnderTesting.getCords()[1]).toBe(1)
        expect(pointObjectUnderTesting.setCords([0,1]).getCords()[0]).toBe(0)
        expect(pointObjectUnderTesting.setCords([0,1]).getCords()[1]).toBe(1)
    });
});