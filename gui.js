
const categories = ["ones", "twos", "threes", "fours", "fives", "sixes", "one-pair", "two-pair", "three-same", "four-same", "full-house", "small-straight", "big-straight", "chance", "yatzy"];

const dieImages = [null, "assets/die-one.svg", "assets/die-two.svg", "assets/die-three.svg", "assets/die-four.svg", "assets/die-five.svg", "assets/die-six.svg"];
const maxTurns = 15;

let holds = [false, false, false, false, false];

const dice = document.querySelectorAll(".die-image"); // array 
const rollBtn = document.getElementById("roll-btn");
const turnLabel =document.getElementById("turn-label")

const turn = 1;

function updateDice() {
    const values = getValues(); 
    for (let i = 0; i < dice.length; i++) {
        dice[i].src = dieImages[values[i]];
    }
}

rollBtn.addEventListener("click", () => {
    if (getThrowCount() >= 3) {
        alert("YOU GOAT, YOU ALREADY ROLLED 3 TIMES")
    } else {
        throwDice(holds);
        updateDice();
        updatePreview();
    }
});

function updatePreview() {
    const results = getResults();

    categories.forEach((id, i) => {
    const input = document.getElementById(id);
    if (input.classList.contains("used")) return;

    input.value = results[i];
    })
}

categories.forEach((id, i) => {
    const input = document.getElementById(id);

    input.addEventListener("click", () => {
        if (input.classList.contains("used")) return;
        input.value = getResults()[i];
        input.classList.add("used");
        turn++;
        turnLabel.textContent = "Turn" + turn;
        resetThrowCount();
    })
})




