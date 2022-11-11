// function hasTargetSum(array, target) {
//   // Iterate through the array 1 less than its length with each iteration adding the first number with every other number and checking to see if it matches the target. If no matches are found, remove the first number from the array destructively and repeat the iteration process until the array only has 1 number left or a match is found.
//   while(array.length - 1 > 0) {
//     for(let n = 1; n < array.length; n++) {
//       if(array[0] + array[n] === target) {
//         return true
//       }
//     }
//     array.shift()
//   }
//   return false
// }

/* 
  O(n^2)
  This algorithm has a quadratic time complexity. As the input array length increases, the time increases exponentially.
*/

// Alternate solution
function hasTargetSum(array, target) {
  const seenNumbers = new Set()
  for(const number of array) {
    const complement = target - number
    if(seenNumbers.has(complement)) return true
    seenNumbers.add(number)
  }
  return false
}

/* 
  I need a function called hasTargetSum that recieves two arguments: an array of integers and a target integer. The function returns true if any pairs of numbers in the array sums to the target integer.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 3, 3, 9, 3], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 23, 5, 17, 32], 100));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 9, 9, 17, 13, 16, 18, 0], 18));
}

module.exports = hasTargetSum;
