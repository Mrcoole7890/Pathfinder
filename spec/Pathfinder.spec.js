var Pathfinders = require("../Classes/Pathfinder.js")
var Enviorments = require("../Classes/Enviorment.js")
var Mazes = require("../Classes/Maze.js")

describe('Pathfinder class', () => {
    it('handels parameters valid or invalid',() => {
        var maze = new Mazes.Maze([
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ])
        var enviorment = new Enviorments.Enviorment()

        expect(new Pathfinders.Pathfinder(0, enviorment).enviorment).toBe(null)

        enviorment.setMaze(maze)

        expect(new Pathfinders.Pathfinder(0, enviorment).enviorment).toBe(null)

        enviorment.setPlayerLocation([0,0])

        expect(new Pathfinders.Pathfinder(0, enviorment).enviorment).toBe(null)

        enviorment.setGoalLocation([2,2])

        expect(new Pathfinders.Pathfinder(0, enviorment).enviorment.constructor.name).toBe("Enviorment")

        enviorment.setMaze(null)

        expect(new Pathfinders.Pathfinder(0, enviorment).enviorment).toBe(null)
    })
});