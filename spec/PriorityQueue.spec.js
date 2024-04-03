const exp = require("constants");
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

    it('returns the expected index of the left child node', () =>{
        // getLeftChildIndex(parentIndex)
        var pq = new PriorityQueues.PriorityQueue()
        expect(pq.getLeftChildIndex(0)).toBe(1)
        expect(pq.getLeftChildIndex(1)).toBe(3)
        expect(pq.getLeftChildIndex(2)).toBe(5)
    })
    
    it('returns the expected index of the right child node', () =>{
        // getRightChildIndex(parentIndex)
        var pq = new PriorityQueues.PriorityQueue()
        expect(pq.getRightChildIndex(0)).toBe(2)
        expect(pq.getRightChildIndex(1)).toBe(4)
        expect(pq.getRightChildIndex(2)).toBe(6)
    })
    
    it('returns the left child node', () =>{
        // getLeftChildNode(parentIndex) 
        var pq = new PriorityQueues.PriorityQueue()
        for (var i = 0; i < 7; i++)
            pq.push(i, i)

        expect(pq.getLeftChildNode(0)[0]).toBe(1)
        expect(pq.getLeftChildNode(1)[0]).toBe(3)
        expect(pq.getLeftChildNode(2)[0]).toBe(5)
    })
    it('if there is no left child then null is returned', () =>{
        // getLeftChildNode(parentIndex) 
        var pq = new PriorityQueues.PriorityQueue()
        pq.push(0, 0)
        expect(pq.getLeftChildNode(0)).toBe(null)
        pq.push(1, 1)
        expect(pq.getLeftChildNode(0)[0]).toBe(1)
        expect(pq.getLeftChildNode(1)).toBe(null)
    })
    it('returns the right child node', () =>{
        // getRightChildNode(parentIndex) 
        var pq = new PriorityQueues.PriorityQueue()
        for (var i = 0; i < 7; i++)
            pq.push(i, i)

        expect(pq.getRightChildNode(0)[0]).toBe(2)
        expect(pq.getRightChildNode(1)[0]).toBe(4)
        expect(pq.getRightChildNode(2)[0]).toBe(6)

    })
    it('if there is no right child then null is returned', () =>{
        var pq = new PriorityQueues.PriorityQueue()
        pq.push(0, 0)
        expect(pq.getRightChildNode(0)).toBe(null)
        pq.push(1, 1)
        pq.push(2, 2)
        expect(pq.getRightChildNode(0)[0]).toBe(2)
        expect(pq.getRightChildNode(1)).toBe(null)
    })
    it('returns the expected index of the parentNode', () =>{
        // getParentOfNodeIndex(childNodeIndex)
        var pq = new PriorityQueues.PriorityQueue()
        expect(pq.getParentOfNodeIndex(1)).toBe(0)
        expect(pq.getParentOfNodeIndex(2)).toBe(0)
        expect(pq.getParentOfNodeIndex(3)).toBe(1)
        expect(pq.getParentOfNodeIndex(5)).toBe(2)
    })
    it('returns the parent node of the child', () =>{
        // getParentOfNode(childNodeIndex) 
        var pq = new PriorityQueues.PriorityQueue()
        pq.push(0, 0)
        pq.push(1, 1)
        pq.push(2, 2)
        expect(pq.getParentOfNode(1)[0]).toBe(0)
        expect(pq.getParentOfNode(2)[0]).toBe(0)
    })
    it('if the index of the child node is 0 (root node) null is returned', () =>{
        // getParentOfNode(childNodeIndex) 
        var pq = new PriorityQueues.PriorityQueue()
        pq.push(0, 0)
        expect(pq.getParentOfNode(0)).toBe(null)
    })
});