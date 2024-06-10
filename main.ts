input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (schritt_nr_plan < schritt.length - 1) {
        schritt[schritt_nr_plan] = bewegung_auswahl
        music.playTone(349, music.beat(BeatFraction.Eighth))
        schritt_nr_plan += 1
        bewegung_auswahl = 0
        bewegung[bewegung_auswahl].showImage(0)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(131, music.beat(BeatFraction.Double))
        bewegung[bewegung_auswahl].showImage(0)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playTone(988, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(988, music.beat(BeatFraction.Quarter))
    for (let schritt_nr_ausfuehrung = 0; schritt_nr_ausfuehrung <= schritt_nr_plan - 1; schritt_nr_ausfuehrung++) {
        basic.showNumber(schritt_nr_ausfuehrung)
        if (schritt[schritt_nr_ausfuehrung] == 0) {
            calliBot2E.motor(C2eMotor.beide, C2eDir.vorwärts, 100)
            basic.pause(600)
            calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        } else if (schritt[schritt_nr_ausfuehrung] == 1) {
            calliBot2E.motor(C2eMotor.links, C2eDir.rückwärts, 100)
            calliBot2E.motor(C2eMotor.rechts, C2eDir.vorwärts, 100)
            basic.pause(450)
            calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        } else if (schritt[schritt_nr_ausfuehrung] == 2) {
            calliBot2E.motor(C2eMotor.links, C2eDir.vorwärts, 100)
            calliBot2E.motor(C2eMotor.rechts, C2eDir.rückwärts, 100)
            basic.pause(450)
            calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        } else if (schritt[schritt_nr_ausfuehrung] == 3) {
            calliBot2E.motor(C2eMotor.beide, C2eDir.vorwärts, 100)
            basic.pause(600)
            calliBot2E.motorStop(C2eMotor.beide, C2eStop.Bremsen)
        } else {
            basic.showIcon(IconNames.Confused)
        }
        calliBot2E.led(C2eMotor.beide, C2eState.an)
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        calliBot2E.led(C2eMotor.beide, C2eState.aus)
    }
    calliBot2E.led(C2eMotor.beide, C2eState.an)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    calliBot2E.led(C2eMotor.beide, C2eState.aus)
    basic.pause(250)
    calliBot2E.led(C2eMotor.beide, C2eState.an)
    music.playTone(988, music.beat(BeatFraction.Eighth))
    calliBot2E.led(C2eMotor.beide, C2eState.aus)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
    if (bewegung_auswahl < bewegung.length - 1) {
        bewegung_auswahl += 1
    } else {
        bewegung_auswahl = 0
    }
    bewegung[bewegung_auswahl].showImage(0)
})
let bewegung: Image[] = []
let bewegung_auswahl = 0
let schritt: number[] = []
let schritt_nr_plan = 0
basic.showLeds(`
    . # # # .
    # . . . #
    . . . . .
    . # . # .
    . . . . .
    `)
schritt_nr_plan = 0
schritt = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
bewegung_auswahl = 0
bewegung = [
images.createImage(`
    . . # . .
    . . # . .
    # . # . #
    . # # # .
    . . # . .
    `),
images.createImage(`
    # . # . .
    # . . # .
    . # # # #
    . . . # .
    . . # . .
    `),
images.createImage(`
    . . # . #
    . # . . #
    # # # # .
    . # . . .
    . . # . .
    `),
images.createImage(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
]
music.play(music.stringPlayable("F G B C5 - B C5 - ", 441), music.PlaybackMode.UntilDone)
bewegung[bewegung_auswahl].showImage(0)
