const btns = document.getElementsByClassName("btn")
const newGameBtn = document.getElementById("new-game-btn")
const homeScoreBoard = document.getElementById("home-score")
const guestScoreBoard = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0


const updateScores = () => {
  homeScoreBoard.innerHTML = homeCount
  guestScoreBoard.innerHTML = guestCount
}

const setWinner = btn => {
  homeScoreBoard.classList.remove("higher-score")
  guestScoreBoard.classList.remove("higher-score")
  
  if (btn) {
    btn.classList.add("higher-score")
  }
}

const highlightWinner = () => {
  if (+homeScoreBoard.innerHTML > +guestScoreBoard.innerHTML) {
    setWinner(homeScoreBoard)
  } else if (+homeScoreBoard.innerHTML === +guestScoreBoard.innerHTML) {
    setWinner(null)
  } else {
    setWinner(guestScoreBoard)
  }
}


newGameBtn.addEventListener("click", () => {
  homeCount = 0
  guestCount = 0

  updateScores()
  setWinner(null)
})


for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  const isHomeBtn = btn.parentElement.classList.contains("home")
  const isGuestBtn = btn.parentElement.classList.contains("guest")

  btn.addEventListener("click", () => {
    if (isHomeBtn) {
      homeCount += +btn.innerHTML
    }
    if (isGuestBtn) {
      guestCount += +btn.innerHTML
    }

    updateScores()
    highlightWinner()
  })
}