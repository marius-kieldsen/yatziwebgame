let values = [0, 0, 0, 0, 0];
let throwCount = 0; 

function getValues () {
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
    let results = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i <= 5; i++) { 
    
        results[i] = sameValuePoints(i +1);    
    }

        results[6] = onePairPoints();
        results[7] = twoPairPoints();
        results[8] = threeSamePoints(); 
        results[9] = fourSamePoints(); 
        results[10] = fullHousePoints(); 
        results[11] = smallStraightPoints(); 
        results[12] = largeStraightPoints(); 
        results[13] = chancePoints(); 
        results[14] = yatzyPoints(); 
        
        return results;
}



function frequency() {
    let freq = [0,0,0,0,0,0,0]; 
    for (let v of values) {
        if (v >= 1 && v <= 6) {
            freq[v]++;
        } 
    }
        return freq
}

function sameValuePoints(value) {
    return frequency()[value] * value;
}

function onePairPoints() {
    let freq = frequency(); 
    let points = 0;
    for (let i = 6; i >= 1; i--) {
        if(freq[i] >= 2 && points == 0) {
            points = i *2; 
        }     
    }
    return points;
}


function twoPairPoints() {
    let freq = frequency(); 
    let points = 0; 
    let pairs = 0; 
    for (let i = 6; i >= 1; i--) {
        if (freq[i] >= 2) {
            points += i * 2 ; 
            pairs++;
        }
    }
    if (pairs != 2) {
        points = 0; 
    }
    return points;
}

function threeSamePoints() {
    let freq = frequency(); 
    let points = 0; 
    for (let i = 6; i >= 1; i--) {
        if (freq[i] >= 3 && points == 0 )  {
            points = i * 3;
        }
    }
    return points;
}


function fourSamePoints() {
        let freq = frequency(); 
    let points = 0; 
    for (let i = 6; i >= 1; i--) {
        if (freq[i] >= 4 && points == 0 )  {
            points = i * 4;
        }
    }
    return points;
}

function fullHousePoints() {
    let freq = frequency(); 
    let three = 0; 
    let two = 0; 

    for (let i = 6; i >= 1; i--) {
        if (freq[i] == 3) {
            three = i; 
        } else if (freq[i] == 2) {
            two = i; 
        }
    }
    if (three != 0 && two != 0) {
        return 3* three + 2* two;
    }
    return 0; 
}

function smallStraightPoints() {
    let freq = frequency();
    if (freq[1]==1 && freq[2] == 1 && freq[3]== 1 && freq[4] ==1 &&freq[5]==1) {
        return 15;
    }
    return 0; 
}


function largeStraightPoints() {
    let freq = frequency(); 
    if (freq[2]==1 && freq[3]==1 && freq[4]==1 && freq[5]==1 && freq[6]==1 ) {
        return 20;
    }
    return 0;
}

function chancePoints() {
    let freq = frequency(); 
    let points = 0; 
    for (let i = 1; i <= 6; i++) {
        points += i*freq[i];
    } 
    return points;
}


function yatzyPoints() {
    let freq = frequency(); 
    for (let i = 1; i <= 6; i++) {
        if (freq[i]==5) {
            return 50;
        }
    }
     return 0;
}