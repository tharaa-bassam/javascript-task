// map task 2
let a = [ 1 , 5 , 8]

function stringItUp (a){

    let strNumbers = a.map((num) => String(num)); 
    return strNumbers;
}

console.log(stringItUp(a));