enum RadioMessage {
    StartTijd = 340,
    Finish = 5694,
    rechtdoor = 12848,
    Checkpoint1 = 25201,
    links = 30556,
    Checkpoint2 = 32327,
    rechts = 39515,
    achteruit = 43484,
    vooruit = 44692,
    message1 = 49434,
    Checkpoint4 = 53120,
    Start = 56380,
    rem = 58635,
    Checkpoint3 = 63779
}
input.onPinPressed(TouchPin.P2, function () {
    radio.sendMessage(RadioMessage.Start)
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.pause(100)
    } else {
        radio.sendMessage(RadioMessage.StartTijd)
    }
})
radio.setTransmitPower(7)
radio.setGroup(35)
basic.forever(function () {
	
})
