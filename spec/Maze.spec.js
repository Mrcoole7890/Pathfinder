var Mazes = require("../Classes/Maze.js")

describe('Maze Class', () => {
    it('should return a string version of its self', () => {
        var twoByTwoMaze = new Mazes.Maze([[0,1],[0,0]])
        var threeByThreeMaze = new Mazes.Maze([[0,1,0],[0,0,0],[1,0,0]])
        var expectedTwoByTwoMazeToString = " 0 1 \n 0 0 \n "
        var expectedThreeByThreeMazeToString = " 0 1 0 \n 0 0 0 \n 1 0 0 \n "

        expect(twoByTwoMaze.getMazeAsString()).toBe(expectedTwoByTwoMazeToString)
        expect(threeByThreeMaze.getMazeAsString()).toBe(expectedThreeByThreeMazeToString)
    });
});
