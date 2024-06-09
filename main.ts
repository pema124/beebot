input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (schritt_nr < schritte.length - 1) {
        schritte[schritt_nr] = auswahl
        music.playTone(349, music.beat(BeatFraction.Eighth))
        schritt_nr += 1
        auswahl = 0
        bewegung[auswahl].showImage(0)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(131, music.beat(BeatFraction.Double))
        bewegung[auswahl].showImage(0)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    music.playTone(988, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(988, music.beat(BeatFraction.Quarter))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
    if (auswahl < bewegung.length - 1) {
        auswahl += 1
    } else {
        auswahl = 0
    }
    bewegung[auswahl].showImage(0)
})
let bewegung: Image[] = []
let schritte: number[] = []
let schritt_nr = 0
let auswahl = 0
auswahl = 0
let auswahl_loeschen = 0
schritt_nr = 0
schritte = [
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
bewegung[auswahl].showImage(0)
