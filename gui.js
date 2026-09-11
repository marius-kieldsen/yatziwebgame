
function rollAction() {
       throwDice(getHolds());
    let values = getvalues();
    let throwCount = getThrowCount;

    updateRolled(); 

    if (throwCount == 3) {
        //disable my button
        disableHolds(); 
    }
    else if (throwCount ==1 ) {
        enableHolds();
        enableResults();
    }
    for (let i = 0; i<values.length; i++) {
        let die = document.getElementById("die" + (i+1));
        die.innerHTML = values[i];
    }
}


