
class game {

    constructor() {
        this.maze = new Maze(
        [[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1],
        [1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1],
        [1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1],
        [1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1],
        [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]])
        this.playerStart = [0,1]
        this.goalLocation = [19,19]
        this.enviorment = new Enviorment()
        this.enviorment.setMaze(this.maze)
        this.display = new Display(this.enviorment, 10)
        this.enviorment.setPlayerLocation(this.playerStart)
        this.enviorment.setGoalLocation(this.goalLocation)
        this.events = new EventHandling()
        this.enviorment.expandedNodes = new Array()

        this.directionMap = new Map()
        this.directionMap.set("-1,0", "up")
        this.directionMap.set("0,1", "right")
        this.directionMap.set("1,0", "down")
        this.directionMap.set("0,-1", "left")

        this.pathfinderAgent = new Pathfinder("A*", this.enviorment)
        this.moveIndex = 0
        this.directions = this.getPathAsDirectionalSteps(this.pathfinderAgent.getPath())

        setInterval(() =>{
            this.loop()
        }, 250)
    }
    
    loop() {
        this.display.draw()
        this.display.drawExplanedNodes()

        if (this.directions.length > this.moveIndex)
            this.enviorment.movePlayer(this.directions[this.moveIndex++])

        // this.display.draw()
        // if (this.events.activeKeys.get("a"))
        //     this.enviorment.movePlayer("left")
        // if (this.events.activeKeys.get("w"))
        //     this.enviorment.movePlayer("up")
        // if (this.events.activeKeys.get("d"))
        //     this.enviorment.movePlayer("right")
        // if (this.events.activeKeys.get("s"))
        //     this.enviorment.movePlayer("down")
        // this.events.activeKeys = new Map()
    }

    getPathAsDirectionalSteps(pathFinderFunction) {
        var goalNode = pathFinderFunction
        var path = new Array()
        while(goalNode != null){
            path.push(goalNode.cords)
            goalNode = goalNode.parent
        }
        path = path.reverse()
        var movesAsWords = new Array()

        for (var i = 1; i < path.length; i++){ 
            movesAsWords.push(this.directionMap.get([path[i][0]-path[i-1][0], path[i][1]-path[i-1][1]].toString()))
        }

        return movesAsWords
    }

}


var mygame = new game()