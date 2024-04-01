const exp = require("constants");
var UnvisitedNodeLists = require("../Classes/UnvisitedNodesList.js")

describe('UnvisitedNodeList Class', () => {
    it('handles invalid type parameters by setting its type to null', () => {
        var invalidTypeValues = [undefined, null, -1, 1.5, 3, "sdsdf", "bfs"]

        for (var i = 0; i < invalidTypeValues.length; i++)
            expect(new UnvisitedNodeLists.UnvisitedNodesList(invalidTypeValues[i]).type).toBe(null)
    });
    it('accepts the valid type parameters and sets them accordingly', () => {
        var validTypeValues = ["BFS", "DFS", "A*"]

        for (let i = 0; i < validTypeValues.length; i++)
            expect(new UnvisitedNodeLists.UnvisitedNodesList(validTypeValues[i]).type).toBe(validTypeValues[i])
    });
    it('should return the lowest valued item in the list when A* is set and pop is called', () => {
        var unvisitedNodesList = new UnvisitedNodeLists.UnvisitedNodesList("A*")

        unvisitedNodesList.push(1, 5)
        unvisitedNodesList.push(2, 2)
        unvisitedNodesList.push(3, 17)

        expect(unvisitedNodesList.pop()).toBe(2)
        expect(unvisitedNodesList.pop()).toBe(1)
        expect(unvisitedNodesList.pop()).toBe(3)
        expect(unvisitedNodesList.pop()).toBe(null)
    });
    it('should return the last item pushed in the list when BFS is set and pop is called', () => {
        var unvisitedNodesList = new UnvisitedNodeLists.UnvisitedNodesList("BFS")

        unvisitedNodesList.push(1, null)
        unvisitedNodesList.push(2, 8)
        unvisitedNodesList.push(3, "Hello")

        expect(unvisitedNodesList.pop()).toBe(3)
        expect(unvisitedNodesList.pop()).toBe(2)
        expect(unvisitedNodesList.pop()).toBe(1)
        expect(unvisitedNodesList.pop()).toBe(undefined)
    });
    it('should return the first item pushed in the list when DFS is set and pop is called', () => {
        var unvisitedNodesList = new UnvisitedNodeLists.UnvisitedNodesList("DFS")

        unvisitedNodesList.push(1, null)
        unvisitedNodesList.push(2, 8)
        unvisitedNodesList.push(3, "Hello")

        expect(unvisitedNodesList.pop()).toBe(1)
        expect(unvisitedNodesList.pop()).toBe(2)
        expect(unvisitedNodesList.pop()).toBe(3)
        expect(unvisitedNodesList.pop()).toBe(undefined)
    });
});