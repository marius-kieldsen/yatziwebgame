const category = [
    { id: "ones", index: 0},
    { id: "twos", index: 1 },
    { id: "threes", index: 2 },
    { id: "fours", index: 3 },
    { id: "fives", index: 4 },
    { id: "sixes", index: 5 },
    { id: "onePair", index: 6 },
    {id: "twoPair", index: 7 },
    { id: "threeOfAKind", index: 8 },
    { id: "fourOfAKind", index: 9 },
    { id: "fullHouse", index: 10 },
    { id: "smallStraight", index: 11 },
    { id: "largeStraight", index: 12 },
    { id: "yatzy", index: 13 },
    { id: "chance", index: 14 }
];

const dieImages = ["assets/die-one.svg", "assets/die-two.svg", "assets/die-three.svg", "assets/die-four.svg", "assets/die-five.svg"];
const maxTurns = 15;

let holds = [false, false, false, false, false];


const dice = document.querySelectorAll(".die-image"); // array 
const rollBtn = document.getElementById("roll-btn");
const turnLabel =document.getElementById("turn-label")


rollBtn.addEventListener("click", () => {
    if (getThrowCount() >= 3) {
        alert("YOU GOAT, YOU ALREADY ROLLED 3 TIMES")
    } else {
        throwDice(holds);
    }
});

dieImages.forEach((element, i) => {
    dice[i].src = dieImages[values[i]];
});
