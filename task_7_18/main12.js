// task 2



function even(array){

    var evenarray=[];
    array.forEach(function(value){
        if(value%2==0){
                    evenarray.push(value);
                }
            });
            return evenarray;
}
console.log(even([ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9])); 

