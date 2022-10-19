// function romanToInt converts from roman numbers to integers

const s = "MCMXCIV";
const romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    let count = 0;
    for (i = 0; i < s.length; i++) {
        if (romans[s[i]] < romans[s[i+1]]) {
            count += romans[s[i+1]] - romans[s[i]];
            i++;
        } else {
            count += romans[s[i]];
        }
    }
    return count;
};

romanToInt(s);

// function romanToInt converts from roman numbers to integers
// code by: Muhammad Saeed

// variable of the result
let totalIntNum = 0;

// the roman chars map to ints
const intNumsMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

function romanCharToInt(romanChar) {
    let intNum = romans[romanChar];
    return intNum;
}

let romanToInt = function(totalRomanNum) {
    for (let i = 0; i < totalRomanNum.length; i++) {
        if (romanCharToInt(totalRomanNum[i]) < romanCharToInt(totalRomanNum[i+1])) {
            totalIntNum += romanCharToInt(totalRomanNum[i+1]) - romanCharToInt(totalRomanNum[i])
            ++i;    // to skip the char which is preceded by a char with a smaller value
        } else {
            totalIntNum += romanCharToInt(totalRomanNum[i]);
        }
    }
    console.log(totalIntNum);
};

romanToInt("XCIX");