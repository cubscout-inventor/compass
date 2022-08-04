let heading = 0
basic.forever(function on_forever() {
    
    heading = input.compassHeading()
    if (heading < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (heading < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (heading < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (heading < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
    
})
