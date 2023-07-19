// task 3

function str(array){
 var str1 = [];
 array.forEach (function(value){

   str1.push(value[0] + ' ' + value[value.length - 1]);

 });
    
    return str1;

}

  console.log(str(["tharaa", "ghena" , "eman"]));
