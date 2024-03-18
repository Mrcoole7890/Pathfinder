class Display{
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

    getCanvasWidth() {
        if (this.canvasElement.getAttribute("width") == null){
            console.error("Attempting to get the width of unset canvas...")
            return 0        
        }
        return parseInt(this.canvasElement.getAttribute("width"))
    }

    getCanvasHeight() {
        if (this.canvasElement.getAttribute("height") == null) {
            console.error("Attempting to get the height of unset canvas...")
            return 0
        }
        return parseInt(this.canvasElement.getAttribute("height"))
    }

    setCanvasWidth() {
        if (this.enviorment == null)
            this.warnAndRevertAttribute("Attempting to set canvas width when there is no enviorment set. Setting width to 0.", "width")
        else if (this.enviorment.getMaze() == null)
           this.warnAndRevertAttribute("Attempting to set canvas width when there is no maze set. Setting width to 0.", "width")
        else
           this.canvasElement.setAttribute("width", this.enviorment.getMaze().getWidth() * this.tileSize)
    }
    
    setCanvasHeight() {
        if (this.enviorment == null)
            this.warnAndRevertAttribute("Attempting to set canvas height when there is no enviorment set. Setting height to 0.", "height")
        else if (this.enviorment.getMaze() == null)
           this.warnAndRevertAttribute("Attempting to set canvas height when there is no maze set. Setting height to 0.", "height")
        else
           this.canvasElement.setAttribute("height", this.enviorment.getMaze().getWidth() * this.tileSize)
    }
    
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

    drawExplanedNodes() {
        for (let i = 0; i < this.enviorment.expandedNodes.length; i++){
            if (!this.enviorment.player.isEquals(this.enviorment.expandedNodes[i]) 
            && !this.enviorment.goal.isEquals(this.enviorment.expandedNodes[i]))
            this.drawPoint(this.enviorment.expandedNodes[i], "ExpandedNode")
        }
    }

    drawPoint(pointObj, tileName) {
        if (pointObj.constructor.name != "Point") {
            console.warn("attempting to draw an unexpected object: " + pointObj.constructor.name)
            return
        }
        this.ctx.fillStyle = this.tileMapping.get(tileName)
        this.ctx.fillRect(this.tileSize * pointObj.getCords()[1], this.tileSize * pointObj.getCords()[0], this.tileSize, this.tileSize)
    }
    warnAndRevertAttribute(warning, attributeName) {
           console.warn(warning)
           this.canvasElement.setAttribute(attributeName, 0)
    }  
}
