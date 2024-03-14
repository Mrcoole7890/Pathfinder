/*
Point Object will:

- store the points location **DONE**

- have a function to move the point up, down, left, or right
*/

class Point {

    constructor(pointCords) {
        this.cords = null
        if (!Array.isArray(pointCords))
            console.warn("Unexpected parameter was passed into the Point constructor. [ " + pointCords + " passed ]")
        else if (pointCords.length != 2)
            console.warn("Array length was not 2. Array length was: " + pointCords.length + ".")
        else if (pointCords[0].constructor.name !== "Number" || pointCords[1].constructor.name !== "Number")
            console.warn("Attempting to pass non-numerical values as cordinates")
        else if (pointCords[0] % 1 != 0 || pointCords[1] % 1 != 0)
            console.warn("Attempting to pass a decimal values as cordinates")
        else if (0 > pointCords[0])
            console.warn("The Y cordinate cannot be negative")
        else if (0 > pointCords[1])
            console.warn("The X cordinate cannot be negative")
        else
            this.cords = pointCords
    }

    setCords(pointCords) {
        var tempPoint = new Point(pointCords)
        if (this.cords != null && tempPoint.getCords() == null)
            return this
        this.cords = tempPoint.getCords()
        return this
    }

    getCords() {
        return this.cords
    }

    isEquals(otherCords) {
        if ((otherCords.getCords() == null && !(this.getCords() == null)) || (!(otherCords.getCords() == null) && this.getCords() == null))
            return false
        else if (otherCords.getCords() == null && this.cords == null)
            return true
        else if (otherCords.getCords()[0] == this.cords[0]  && otherCords.getCords()[1] == this.cords[1])
            return true
        else
            return false
    }
}
