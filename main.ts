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
/**
 * checkpoint 1
 */
// Als het checkpoint binnenkrijgt dat het behaald is een vinkje laten zien en de variabel "Behaald" zetten op 1 (waar)
radio.onReceivedMessage(RadioMessage.Checkpoint1Behaald, function () {
    gehaald += 1
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
// Checkpoint resetten en registreren, radio configureren en de nummer van het checkpoint tonen
let gehaald = 0
radio.setTransmitPower(0.001)
radio.setGroup(35)
// Let op: omdat het toevoegen van berichten alles reset is het registratie bericht "Checkpoint3" om ervoor te zorgen dat ik niet ALLES opnieuw moet doen :)
radio.sendMessage(RadioMessage.Checkpoint3)
basic.showNumber(1)
// De hele tijd sturen dat dit een checkpoint is totdat het checkpoint behaald is
basic.forever(function () {
    if (gehaald == 0) {
        radio.sendMessage(RadioMessage.Checkpoint1)
    }
})
