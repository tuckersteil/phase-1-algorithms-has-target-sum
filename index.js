//array =[1, 6, 7, 8, 3, 4]
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    const complement = target - array[i];
    for (let j = i +1; j < array.length; j++){
      if (array[j] === complement) return true;
    }
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  go through array and see if two add up to target number 
first grab each index and add it to all other numbeers that follow it in array 
see if any of theose values match target 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
