function resetLEDs () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(25, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
input.onSound(DetectedSound.Loud, function () {
    DO_LOOP = 1
})
function loopLEDs (delay: number) {
    for (let index = 0; index < 8; index++) {
        resetLEDs()
        basic.pause(100)
        strip.clear()
        strip.show()
        basic.pause(100)
    }
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    for (let index = 0; index < 120; index++) {
        basic.pause(delay)
        strip.rotate(1)
        strip.show()
    }
    resetLEDs()
}
let DO_LOOP = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.clear()
strip.show()
input.setSoundThreshold(SoundThreshold.Loud, 135)
resetLEDs()
basic.forever(function () {
    if (DO_LOOP == 1) {
        loopLEDs(25)
        DO_LOOP = 0
    }
})
