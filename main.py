heading = 0

def on_forever():
    global heading
    heading = input.compass_heading()
    if heading < 45:
        basic.show_arrow(ArrowNames.NORTH)
    elif heading < 135:
        basic.show_arrow(ArrowNames.EAST)
    elif heading < 225:
        basic.show_arrow(ArrowNames.SOUTH)
    elif heading < 315:
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.show_arrow(ArrowNames.NORTH)
basic.forever(on_forever)
