class EventHandling {

    constructor() {
        this.activeKeys = new Map()
        document.addEventListener("keyup", (event) => {
            this.handelKeyUpEvent(event)
        })
        document.addEventListener("keydown", (event) =>{
            this.handelKeyDownEvent(event)
        })
        document.addEventListener("blur", (event) =>{
            this.handelKeyUpEvent(event)
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
}
