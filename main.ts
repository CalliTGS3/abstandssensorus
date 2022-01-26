function Messung () {
    // send pulse
    pins.digitalWritePin(DigitalPin.P0, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P0, 0)
    Pulsdauer = pins.pulseIn(DigitalPin.P1, PulseValue.High)
    Entfernung = Math.trunc(Pulsdauer * 153 / 29 / 2 / 100)
}
let Entfernung = 0
let Pulsdauer = 0
OLED12864_I2C.init(60)
basic.forever(function () {
    Messung()
    OLED12864_I2C.clear()
    OLED12864_I2C.showNumber(
    0,
    0,
    Entfernung,
    1
    )
    basic.pause(500)
})
