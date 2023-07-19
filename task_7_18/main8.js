// task 8

function valTimesIndex(array){
    let doubleNumbers = array.map((item, index) => item * index);
    return doubleNumbers;
}

const Values =[ 1,2,3 ] ; 
console.log(valTimesIndex(Values));