let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrementHomeByOne() {
    homeScore += 1
    updateHomeScore()
}
function incrementHomeByTwo() {
    homeScore += 2
    updateHomeScore()
}
function incrementHomeByThree() {
    homeScore += 3
    updateHomeScore()
}
function incrementGuestByOne() {
    guestScore += 1
    updateGuestScore()
}
function incrementGuestByTwo() {
    guestScore += 2
    updateGuestScore()
}
function incrementGuestByThree() {
    guestScore += 3
    updateGuestScore()
}

function updateHomeScore(){
    homeScoreEl.textContent = homeScore
}

function updateGuestScore(){
    guestScoreEl.textContent = guestScore
}

function clearScore() {
    homeScore = 0
    guestScore = 0
    updateHomeScore()
    updateGuestScore()
}