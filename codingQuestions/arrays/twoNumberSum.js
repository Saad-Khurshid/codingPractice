/**** 
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.
 
  e:g: 
  inputs: array = [3, 5, -4, 8, 11, 1, -1, 6], targetSum = 10
  output = [-1, 11]
 */

/* SOLUTION 1
SPACE TIME COMPLEXITY
O(n^2) time | O(1) space

*/
function twoNumberSum(array, targetSum) {
for (let i = 0; i < array.length - 1; i++) {
        const firstNum = array[i]
        for (let j= i + 1; j < array.length; j++) {
            const secondNum = array[j]
            if (firstNum + secondNum === targetSum)
                return [firstNum, secondNum]
        }
    }
    return []
} 

/* SOLUTION 2
SPACE TIME COMPLEXITY
O(n) space time
*/

function twoNumberSum(array, targetSum) {
const hashMap = {}
    for (const firstNum of array){
        let secondNum = targetSum - firstNum
        if(secondNum in hashMap)
            return [firstNum, secondNum]
        else 
            hashMap[firstNum] = true
    }
    return []
}

/* SOLUTION 3
SPACE TIME COMPLEXITY
sort O(n log n) and traverse O(n)
So, 
O(n log n) T | O(1) space
*/

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a-b)
    let leftPointer = 0
    let rightPointer = array.length - 1
    while (leftPointer < rightPointer) {
        let firstNum = array[leftPointer]
        let secondNum = array[rightPointer]
        let currentSum = firstNum + secondNum
        if (currentSum === targetSum)
            return [firstNum, secondNum]
        else if (currentSum < targetSum){
            leftPointer++
        }
        else if (currentSum > targetSum){
            rightPointer--
        }
    }
    return []
}  