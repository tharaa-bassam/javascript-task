let num = [ '8', '5' , '4' ];
function arrayExceptLast(num){
    
  if (num.length > 0) {
    return num.slice(0, num.length -1);
  }
  else {
    return undefined;
  }
}
  console.log(arrayExceptLast(num));
