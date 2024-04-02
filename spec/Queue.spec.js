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
    it('when pop is called, the front node in the list is retruned', () => {
        var q = new Queues.Queue()
        var expectedValue = [0x1, "random value", 21]
        q.push(expectedValue[0], null)
        q.push(expectedValue[1], 64)
        q.push(expectedValue[2], false)
        expect(q.pop()).toBe(expectedValue[0])
        expect(q.pop()).toBe(expectedValue[1])
        expect(q.pop()).toBe(expectedValue[2])
        expect(q.pop()).toBe(undefined)

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
        q.pop()
        expect(q.length).toBe(qExpectedLength - 2)
        q.pop()
        expect(q.length).toBe(qExpectedLength - 3)
    });
});