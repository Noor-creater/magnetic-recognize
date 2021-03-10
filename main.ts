let baseline = input.magneticForce(Dimension.X)
basic.forever(function () {
    if (Math.abs(input.magneticForce(Dimension.X)) - baseline > 100) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.clearScreen()
    }
})
