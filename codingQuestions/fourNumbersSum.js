/* 
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all quadruplets in
the array that sum up to the target sum and return a two-dimensional array of
all these quadruplets in no particular order.
If no four numbers sum up to the target sum, the function should return an
empty array.
Sample Input:
    array = [7, 6, 4, -1, 1, 2]
    targetSum= 16
Sample Output: [[7, 6, 4, -1], [7, 6, 1, 2]]
*/

//O(n^3) time | O(n)
function fourNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    const quadruplesArray = []
    
    for (let numOne = 0; numOne < array.length - 3; numOne++) {
        for (let numTwo = numOne+1; numTwo < array.length-2; numTwo++) {
            let numThree = numTwo+1
            let numFour = array.length - 1
            
            while(numThree < numFour) {
                let sum = array[numOne] + array[numTwo] + array[numThree] + array[numFour]
                if(sum === targetSum){
                    quadruplesArray.push([array[numOne], array[numTwo], array[numThree], array[numFour]])
                    numThree++
                }
                else if ( sum > targetSum) numFour--
                else numThree++
            }
        }
    }
    
    return quadruplesArray
}  