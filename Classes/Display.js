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
        if (this.enviorment == null) {
            console.warn("Attempting to set canvas width when there is no enviorment set. Setting width to 0.")
           this.canvasElement.setAttribute("width", 0)
        }            
        else if (this.enviorment.getMaze() == null){
           console.warn("Attempting to set canvas width when there is no maze set. Setting width to 0.")
           this.canvasElement.setAttribute("width", 0)
        }    
        else
           this.canvasElement.setAttribute("width", this.enviorment.getMaze().getWidth() * this.tileSize)
    }
    
    setCanvasHeight() {
        if (this.enviorment == null) {
            console.warn("Attempting to set canvas height when there is no enviorment set. Setting height to 0.")
           this.canvasElement.setAttribute("height", 0)
        }            
        else if (this.enviorment.getMaze() == null){
           console.warn("Attempting to set canvas height when there is no maze set. Setting height to 0.")
           this.canvasElement.setAttribute("height", 0)
        }   
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
        this.ctx.fillStyle = this.tileMapping.get("Player")
        this.ctx.fillRect(this.tileSize * this.enviorment.player.getCords()[1], this.tileSize * this.enviorment.player.getCords()[0], this.tileSize, this.tileSize)
        this.ctx.fillStyle = this.tileMapping.get("Goal")
        this.ctx.fillRect(this.tileSize * this.enviorment.goal.getCords()[1], this.tileSize * this.enviorment.goal.getCords()[0], this.tileSize, this.tileSize)  
    }   
}
