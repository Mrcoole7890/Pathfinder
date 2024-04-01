var PriorityQueues = require("../Classes/PriorityQueue.js")

describe('PriorityQueue class', () => {
    it('when intialized the length should be zero', () => {
        var pq = new PriorityQueues.PriorityQueue()
        expect(pq.length).toBe(0)
    });
    it('when push is called, add one to the length of the list', () => {
        var pq = new PriorityQueues.PriorityQueue()
        var pqOldLength = pq.length
        expect(pqOldLength).toBe(pqOldLength + 1)
    });
    it('when push is called, takes item and value params and adds them to the heap', () => {
        var pq = new PriorityQueues.PriorityQueue()
        var pushValue = "string value"
        pq.push(pushValue)
        expect(pq.list.includes(pushValue)).toBe(true)
    });
    it('when pop is called, the node with the lowest value in the heap is retruned', () => {
        var pq = new PriorityQueues.PriorityQueue()
        var expectedValue = 0x1
        pq.push(expectedValue, 0)
        pq.push("random value", 5)
        pq.push(21, 7)
        expect(pq.pop()).toBe(expectedValue)
    });
    it('when pop is called and the length of the list is not 0, decrement the length value of list', () => {
        var pq = new PriorityQueues.PriorityQueue()
        var expectedValue = 0x1
        pq.push(expectedValue, "this")
        pq.push("random value", 0x0)
        pq.push(21, true)
        var qExpectedLength = 3
        pq.pop()
        expect(pq.length).toBe(qExpectedLength - 1)
    });
});