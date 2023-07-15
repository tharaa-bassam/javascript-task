let nums = [ '8', '5' , '4' , '3' , '2' , '1']
function indexOfArray(nums, index) {
  if (index >= 0 && index < nums.length) {
    return nums[index];
  } 
  else {
    return undefined;
  }
}

console.log(indexOfArray(nums, 10));
