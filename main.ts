let heading = 0
basic.forever(function () {
    heading = input.compassHeading()
    basic.showNumber(heading)
})
