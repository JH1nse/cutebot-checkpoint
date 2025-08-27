enum RadioMessage {
    StartTijd = 340,
    Finish = 5694,
    Checkpoint3Behaald = 11045,
    rechtdoor = 12848,
    Checkpoint4Behaald = 14638,
    Checkpoint2Behaald = 24361,
    Checkpoint1 = 25201,
    links = 30556,
    Checkpoint2 = 32327,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Checkpoint4 = 53120,
    Start = 56380,
    Checkpoint1Behaald = 56413,
    rem = 58635,
    Checkpoint3 = 63779
}
// Als de finish binnenkrijgt dat het behaald is een animatie laten zien en de variabel "Behaald" zetten op 1 (waar) en de variabel "f" zetten op 1 (waar).
// 
// "f" regelt het geluidje
radio.onReceivedMessage(RadioMessage.Checkpoint3Behaald, function () {
    gehaald += 1
    f += 1
    for (let index = 0; index < 9999999999999; index++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.pause(100)
    }
})
// Als het vorige checkpoint behaald is de hele tijd sturen dat dit de finish is totdat het checkpoint behaald is
radio.onReceivedMessage(RadioMessage.Checkpoint2Behaald, function () {
    for (let index = 0; index < 99999999999999; index++) {
        basic.pause(100)
        if (gehaald == 0) {
            radio.sendMessage(RadioMessage.Finish)
        }
    }
})
/**
 * finish
 */
// Finish resetten en registreren, radio configureren en de F van Finish tonen
let gehaald = 0
let f = 0
gehaald = 0
radio.setTransmitPower(0.001)
radio.setGroup(35)
// Let op: omdat het toevoegen van berichten alles reset is het registratie bericht "Checkpoint4ehaald" om ervoor te zorgen dat ik niet ALLES opnieuw moet doen :)
radio.sendMessage(RadioMessage.Checkpoint4Behaald)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . . .
    # . . . .
    `)
// Als de finish behaald is een geluidje afspelen
// 
// (dit herhaald zich elke 30 seconden na het behalen)
basic.forever(function () {
    if (f >= 1) {
        music.play(music.stringPlayable("F - F - F - F - ", 700), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D - E E - F - ", 400), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("E E - F F F F F ", 600), music.PlaybackMode.UntilDone)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
        basic.pause(5000)
    }
})
