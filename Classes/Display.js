/*

Display object takes the enviorment state and draws it to the canvas tag

*/
class Display{
    /*

    Constructor takes an Enviorment object along with a tile size as an int

    Invalid parameters will cause the related fields to be set to null or zero

    After feilds are set, a canvas tag is inserted into the document tag of the HTML page
    its dimentions will be the tile size multiplied by the Enviorment width and height

    Titles within the enviorment are given colors inicated by the mapping

    */
    constructor(env, tileSize) {
        if (env == null){
            console.warn("Initializing Display with null enviorment paramenter.")
            this.enviorment = null
        }
        else if (env.constructor.name != "Enviorment"){
            console.warn("Initializing Display with enviorment parameter with unexpected values.")
            this.enviorment = null        
        }
        else
            this.enviorment = env

        if (tileSize < 0) {
            console.error("Tile size cannot be a negative number. Setting tile size to 0.")
            this.tileSize = 0
        }
        else if (tileSize == null) {
            console.warn("Initializing Display with null tile size. Setting tile size to 0.")
            this.tileSize = 0
        }
        else if (tileSize.constructor.name != "Number") {
            console.error("Unexpected tile size data type. Setting tile size to 0.")
            this.tileSize = 0
        }
        else
            this.tileSize = tileSize

        this.canvasElement = document.createElement("canvas")
        document.getElementsByTagName("body")[0].prepend(this.canvasElement)
        this.ctx = this.canvasElement.getContext("2d")

        this.setCanvasWidth()
        this.setCanvasHeight()

        this.tileMapping = new Map()
        this.tileMapping.set("Wall", "black")
        this.tileMapping.set("Floor", "blue")
        this.tileMapping.set("Player", "Green")
        this.tileMapping.set("Goal", "Yellow")
        this.tileMapping.set("ExpandedNode", "gray")
    }

    /*
    Takes the width attribute of the canvas and returns the parsed value as an int
    If none is found then 0 is returned
    */
    getCanvasWidth() {
        if (this.canvasElement.getAttribute("width") == null){
            console.error("Attempting to get the width of unset canvas...")
            return 0        
        }
        return parseInt(this.canvasElement.getAttribute("width"))
    }

    /*
    Takes the heigh attribute of the canvas and returns the parsed value as an int
    If none is found then 0 is returned
    */
    getCanvasHeight() {
        if (this.canvasElement.getAttribute("height") == null) {
            console.error("Attempting to get the height of unset canvas...")
            return 0
        }
        return parseInt(this.canvasElement.getAttribute("height"))
     }

    /*
    Sets the width of the actual canvas based on the width of the Eviorment object's maze
    If the maze is not set within the Enviorment a warning is thrown and the width is set to zero
    */
    setCanvasWidth() {
        if (this.enviorment == null)
            this.warnAndRevertAttribute("Attempting to set canvas width when there is no enviorment set. Setting width to 0.", "width")
        else if (this.enviorment.getMaze() == null)
           this.warnAndRevertAttribute("Attempting to set canvas width when there is no maze set. Setting width to 0.", "width")
        else
           this.canvasElement.setAttribute("width", this.enviorment.getMaze().getWidth() * this.tileSize)
    }
    
    /*
    Sets the height of the actual canvas based on the height of the Eviorment object's maze
    If the maze is not set within the Enviorment a warning is thrown and the height is set to zero
    */
    setCanvasHeight() {
        if (this.enviorment == null)
            this.warnAndRevertAttribute("Attempting to set canvas height when there is no enviorment set. Setting height to 0.", "height")
        else if (this.enviorment.getMaze() == null)
           this.warnAndRevertAttribute("Attempting to set canvas height when there is no maze set. Setting height to 0.", "height")
        else
           this.canvasElement.setAttribute("height", this.enviorment.getMaze().getWidth() * this.tileSize)
    }
    
    /*
    draws the canvas to represent the current state of the enviorment
    */
    draw() {
        for (let i = 0; i < this.enviorment.getMaze().getHeight(); i++){
            for (let j = 0; j < this.enviorment.getMaze().getWidth(); j++) {
                this.ctx.fillStyle = this.tileMapping.get(this.enviorment.getMaze().valueMap.get(this.enviorment.getMaze().maze[i][j]))
                this.ctx.fillRect(this.tileSize * j, this.tileSize * i, this.tileSize, this.tileSize)                  
            }
        }
        this.drawPoint(this.enviorment.player, "Player")
        this.drawPoint(this.enviorment.goal, "Goal")
    }

    /*
    draws expanded nodes within the enviorment
    */
    drawExplanedNodes() {
        for (let i = 0; i < this.enviorment.expandedNodes.length; i++){
            if (!this.enviorment.player.isEquals(this.enviorment.expandedNodes[i]) 
            && !this.enviorment.goal.isEquals(this.enviorment.expandedNodes[i]))
            this.drawPoint(this.enviorment.expandedNodes[i], "ExpandedNode")
        }
    }

    /*
    draws a tile based on the tile size, Point position, and color mapping
    */
    drawPoint(pointObj, tileName) {
        if (pointObj.constructor.name != "Point") {
            console.warn("attempting to draw an unexpected object: " + pointObj.constructor.name)
            return
        }
        this.ctx.fillStyle = this.tileMapping.get(tileName)
        this.ctx.fillRect(this.tileSize * pointObj.getCords()[1], this.tileSize * pointObj.getCords()[0], this.tileSize, this.tileSize)
    }

    /*
    prints a console.warn alert and sets the attribute to zero
    */
    warnAndRevertAttribute(warning, attributeName) {
           console.warn(warning)
           this.canvasElement.setAttribute(attributeName, 0)
    } 
    
    getMouseCords(mouseStats) {
        var rect = this.canvasElement.getBoundingClientRect()
        return {
            x: mouseStats.x - rect.left,
            y: mouseStats.y - rect.top
        }
    }
}
