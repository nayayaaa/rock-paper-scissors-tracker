function updateScoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player A: " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B: " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Draws: " + Draw)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Total_Rounds)
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
    Total_Rounds += 1
    PA += 1
    updateScoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
    Total_Rounds += 1
    Draw += 1
    updateScoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
    Total_Rounds += 1
    PB += 1
    updateScoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("wanna play a game?")
    PA = 0
    PB = 0
    Draw = 0
    Total_Rounds = 0
    basic.pause(2000)
    updateScoreboard()
}
let Total_Rounds = 0
let Draw = 0
let PB = 0
let PA = 0
reset()
