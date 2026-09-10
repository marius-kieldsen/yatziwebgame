

let values = [0, 0, 0, 0, 0];

let throwCount = 0; 


let random = Math.floor(Math.random()* 6) +1;
console.log(random);

function getvalues () {
    return values;
}


function getThrowCount() {
    return throwCount;
}

function resetThrowCount() {
    throwCount = 0;
}

function throwDice(holds) {
    for (let i = 0; i < holds.length; i++) {
        if (!holds[i]) {
            values[i] = Math.floor(Math.random()*6)+1;
        } 
    }
    throwCount++;
}


function getResults() {
    let results = 
}