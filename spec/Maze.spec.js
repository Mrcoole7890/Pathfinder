var Mazes = require("../Classes/Maze.js")

describe('Maze Class', () => {
    it('should return a string version of its self when valid parameters are passed', () => {
        var twoByTwoMaze = new Mazes.Maze([[0,1],[0,0]])
        var threeByThreeMaze = new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]])
        var expectedTwoByTwoMazeToString = " 0 1 \n 0 0 \n "
        var expectedThreeByThreeMazeToString = " 0 1 0 \n 0 0 0 \n 1 0 0 \n "

        expect(twoByTwoMaze.getMazeAsString()).toBe(expectedTwoByTwoMazeToString)
        expect(threeByThreeMaze.getMazeAsString()).toBe(expectedThreeByThreeMazeToString)
    });
    it('should return null when invalid parameters are passed', () => {
        expect(new Mazes.Maze([[0,1],[]]).getMazeAsString()).toBe(null)
        expect(new Mazes.Maze(3).getMazeAsString()).toBe(null)
        expect(new Mazes.Maze([[0,1,0],[0,0],[1,0,0]]).getMazeAsString()).toBe(null)
    });
    it('should have certain integers maped to string values', () => {
        var mazeUnderTesting = new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]])
        expect(mazeUnderTesting.valueMap.get(0)).toBe("Floor")
        expect(mazeUnderTesting.valueMap.get(1)).toBe("Wall")
        expect(mazeUnderTesting.valueMap.get(2)).toBe("Player")
        expect(mazeUnderTesting.valueMap.get(3)).toBe("Goal")
    });
});