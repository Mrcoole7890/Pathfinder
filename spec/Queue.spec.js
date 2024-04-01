var Queues = require("../Classes/Queue.js")

describe('Queue class', () => {
    it('when intialized the length should be zero', () => {
        var q = new Queues.Queue()
        expect(q.length).toBe(0)
    });
    it('when push is called, add one to the length of the list', () => {
        var q = new Queues.Queue()
        var qOldLength = q.length
        q.push(5)
        expect(q.length).toBe(qOldLength + 1)
    });
    it('when push is called, takes item params and adds it to the queue', () => {
        var q = new Queues.Queue()
        var pushValue = "string value"
        q.push(pushValue)
        expect(q.list.includes(pushValue)).toBe(true)
    });
    it('when push is called, the value parameter is thrown out', () => {
        fail("unimplemented test case")
    });
    it('when pop is called, the front node in the list is retruned', () => {
        var q = new Queues.Queue()
        var expectedValue = 0x1
        q.push(expectedValue, null)
        q.push("random value", 64)
        q.push(21, false)
        expect(q.pop()).toBe(expectedValue)
    });
    it('when pop is called and the length of the list is not 0, decrement the length value of list', () => {
        var q = new Queues.Queue()
        var expectedValue = 0x1
        q.push(expectedValue, "this")
        q.push("random value", 0x0)
        q.push(21, true)
        var qExpectedLength = 3
        q.pop()
        expect(q.length).toBe(qExpectedLength - 1)
    });
});