let tempstr = ""
let temperature = 0
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"Temperatur =",
3,
0
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.forever(function () {
    temperature = pins.analogReadPin(AnalogPin.P0) / 2.1
    temperature = Math.round(temperature)
    temperature /= 10
lcd1602.putNumber(
    temperature,
    3,
    1
    )
    basic.pause(1000)
    if (temperature > 23) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
