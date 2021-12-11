/**
Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in
the array that sum up to the target sum and return a two-dimensional array of
all these triplets. The numbers in each triplet should be ordered in ascending
order, and the triplets themselves should be ordered in ascending order with
respect to the numbers they hold.
If no three numbers sum up to the target sum, the function should return an
empty array.

input:
    array = [12, 3, 1, 2, -6, 5, -8, 6]
    targetSum = 0
output: 
    [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]] 
 */

//SOLUTION 1
// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
	let allTriplets = []
	for ( let i = 0; i < array.length; i++) {
		let firstValue = array[i]
		let partialTargetValue = targetSum - firstValue	
	  let values = {}
		for (let  j = i + 1; j < array.length; j++) {
			let secondValue = array[j]
			let thirdTargetValue = partialTargetValue - secondValue
			if(thirdTargetValue in values) allTriplets.push([firstValue, secondValue, thirdTargetValue].sort((a,b) => a-b)) 
			else {				
				values[secondValue] = true
			}
		}
	}
	
	return allTriplets.sort(([a,b,c],[d,e,f]) => a-d || b-e || c-f)
}

//SOLUTION 2
// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    let triplets = []
    
    for (let i = 0; i < array.length - 2; i++) {
        let firstValue = array[i]
        let left = i + 1
        let right = array.length - 1
        while(left < right){
            let currentSum = firstValue + array[left] + array[right]
            if(currentSum === targetSum) {
                triplets.push([firstValue, array[left], array[right]])
                left++
                right--
            }
            else if(currentSum < targetSum) left++
            else if (currentSum > targetSum) right--
                
        }
    }
    return triplets
    
}
  