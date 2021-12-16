/***
Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.
Note that the absolute difference of two integers is the distance between
them on the real number line. For example, the absolute difference of -5 and 5
is 10, and the absolute difference of -5 and -4 is 1.
You can assume that there will only be one pair of numbers with the smallest
difference.

Sample Input:
    arrayOne = [-1, 5, 10, 20, 28, 3]
    arrayTwo = [26, 134, 135, 15, 17]
Sample Output: [28, 26]

*/

// O(n log(n) + m log(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
    const getAbsoluteDifference = (numOne, numTwo) => {
        return Math.abs(numOne-numTwo)
    }
    let ptrOne = 0, ptrTwo = 0
	
	arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	
	let smallestDifference = Infinity
	let smallestDifferencePair = [arrayOne[ptrOne], arrayTwo[ptrTwo]] 
	
	while(ptrOne < arrayOne.length && ptrTwo < arrayTwo.length){
		let firstValue = arrayOne[ptrOne]
		let secondValue = arrayTwo[ptrTwo]
		
		let diff = getAbsoluteDifference(firstValue, secondValue)
		if (diff < smallestDifference) {
			smallestDifference = diff
			smallestDifferencePair = [firstValue, secondValue]
		}
		
		if (firstValue < secondValue) {	
			ptrOne++
		}
		else if (firstValue > secondValue) {
			ptrTwo++
		}
		else break
	}
	
	return smallestDifferencePair
	
}
