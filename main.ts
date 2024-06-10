input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (schritt_nr < schritt.length - 1) {
        schritt[schritt_nr] = bewegung_auswahl
        music.playTone(349, music.beat(BeatFraction.Eighth))
        schritt_nr += 1
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
let schritt_nr = 0
schritt_nr = 0
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
bewegung[bewegung_auswahl].showImage(0)
music.play(music.stringPlayable("F G B C5 - B C5 - ", 350), music.PlaybackMode.InBackground)
