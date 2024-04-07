class EventHandling {

    constructor() {
        this.activeKeys = new Map()
        this.mouseStats = {}
        document.addEventListener("keyup", (event) => {
            this.handelKeyUpEvent(event)
        })
        document.addEventListener("keydown", (event) =>{
            this.handelKeyDownEvent(event)
        })
        document.addEventListener("blur", (event) =>{
            this.handelKeyUpEvent(event)
        })
        document.addEventListener("mousedown", (event) =>{
            this.handelMouseLeftClickDown(event)
        }, false)
        document.addEventListener("mouseup", (event) =>{
            this.handelMouseLeftClickUp(event)
        })
    }

    handelKeyUpEvent(event) {
        if (this.activeKeys.has(event))
            this.activeKeys.set(event.key, false)
        else
            console.warn("attempting to set unmonitored key (" + event.key + ") to inactive.")   
    } 
    handelKeyDownEvent(event) {
        this.activeKeys.set(event.key, true)   
    }
    handelMouseLeftClickDown(event) {
        var e = event || window.event
        var btnCode = e.button
        if (btnCode == 0){
            this.activeKeys.set("m1", true)
            this.mouseStats.x = e.clientX
            this.mouseStats.y = e.clientY
        }
    }
    handelMouseLeftClickUp(event) {
        var e = event || window.event
        var btnCode = e.button
        if (btnCode == 0){
            this.activeKeys.set("m1", false)
        }
    }
}
