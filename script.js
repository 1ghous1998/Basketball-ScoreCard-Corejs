let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let paraSave = document.getElementById("para-save")

let countHome = 0
let countGuest = 0


function incrementOne() {
    countHome += 1
    homeScore.textContent = countHome
}

function incrementTwo() {
    countHome += 2
    homeScore.textContent = countHome
}

function incrementThree() {
    countHome += 3
    homeScore.textContent = countHome
}

function decrementOne() {
    countHome -= 1
    homeScore.textContent = countHome
}

function decrementTwo() {
    countHome -= 2
    homeScore.textContent = countHome
}

function decrementThree() {
    countHome -= 3
    homeScore.textContent = countHome
}


function guestOne() {
    countGuest += 1
    guestScore.textContent = countGuest
}

function guestTwo() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function guestThree() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function guestdOne() {
    countGuest -= 1
    guestScore.textContent = countGuest
}

function guestdTwo() {
    countGuest -= 2
    guestScore.textContent = countGuest
}

function guestdThree() {
    countGuest -= 3
    guestScore.textContent = countGuest
}

function resetHome() {
    homeScore.textContent = 0
    countHome = 0
}


function resetGuest() {
    guestScore.textContent = 0
    countGuest = 0
}


function saveRecord() {
    // let savePara = "Home Score is" + " " + countHome + " " + "| Guest Score is" + " " + countGuest + "!" + "  "
    if (countHome < countGuest) {
        
        paraSave.textContent += "Score is" + " " + countHome + " - " + countGuest + " " + "Guest is the Winner of This Game || "

    } else if (countHome === countGuest) {

        paraSave.textContent += countHome + " - " + countGuest + " " + "The Match Has Been Drawn || "

    } else if (countHome > countGuest) {

        paraSave.textContent += "Score is" + " " + countHome + " - " + countGuest + " " + "Home is the Winner of This Game || "
    }

    // paraSave.textContent += savePara
    homeScore.textContent = 0
    countHome = 0
    guestScore.textContent = 0 
    countGuest = 0

}
