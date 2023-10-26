let container = document.getElementById("container");
let playDiv = document.getElementById("playDiv");
let playBtn = document.getElementById("playBtn");
let ball = document.getElementById("ball");
let blocker = document.getElementById("blocker");
function startGame() {
    playDiv.style.display = "none";
    container.style.display = "flex";
    setTimeout(function () {
        container.style.opacity = "1";
    }, 100)
}

/* cup1 */
document.getElementById("cup1").addEventListener("click", function () {
    let cupNum = Math.floor(Math.random() * (1 - 4) + 4)
    console.log(cupNum);
    if (cupNum == 1) {
        console.log("WIN!");
        cup1.src = "medicine-ball.png";
        blocker.style.display = "block";
        setTimeout(function () {
            anotherGame("Win")
        }, 3000)
    }
    else {
        container.style.display = "none";
        anotherGame("Lose");
    }
})
/* cup2 */
document.getElementById("cup2").addEventListener("click", function () {
    let cupNum = Math.floor(Math.random() * (1 - 4) + 4)
    console.log(cupNum);
    if (cupNum == 2) {
        console.log("WIN!");
        cup2.src = "medicine-ball.png";
        blocker.style.display = "block";
        setTimeout(function () {
            anotherGame("Win")
        }, 3000)
    }
    else {
        container.style.display = "none";
        anotherGame("Lose");
    }
})
/* cup3 */
document.getElementById("cup3").addEventListener("click", function () {
    let cupNum = Math.floor(Math.random() * (1 - 4) + 4)
    console.log(cupNum);
    if (cupNum == 3) {
        console.log("WIN!");
        cup3.src = "medicine-ball.png";
        blocker.style.display = "block";
        setTimeout(function () {
            anotherGame("Win")
        }, 3000)
    }
    else {
        container.style.display = "none";
        anotherGame("Lose");
    }
})

function anotherGame(result) {
    playDiv.style.display = "flex";
    playBtn.innerHTML = result;
    container.style.display = "none";
    cup1.src = "paper-cup.png";
    cup2.src = "paper-cup.png";
    cup3.src = "paper-cup.png";
    blocker.style.display = "none";
}