class EventHandling {

    constructor() {
        document.addEventListener("keyup", this.handelKeyUpEvent)
        document.addEventListener("keydown", this.handelKeyDownEvent)
        this.activeKeys = new Map()
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
}
