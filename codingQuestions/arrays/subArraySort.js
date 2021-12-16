/*
Write a function that takes in an array of at least two integers and that
returns an array of the starting and ending indices of the smallest subarray
in the input array that needs to be sorted in place in order for the entire
input array to be sorted (in ascending order).
  If the input array is already sorted, the function should return [-1, -1]
Sample Input:
    array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
Sample Output: [3, 9]
*/

// O(n) time | O(1) space
function subarraySort(array) {
    let largestUnorderedNumber
    let smallestUnorderedNumber
    for (let i=0; i< array.length-1; i++) {
        if(array[i+1] < array[i]) {
            if (!smallestUnorderedNumber || array[i+1] < smallestUnorderedNumber) {
                smallestUnorderedNumber = array [i+1]
            }
            if(!largestUnorderedNumber || array[i] >largestUnorderedNumber) {
                largestUnorderedNumber = array[i]
            }
        }
    }
    
    if (!smallestUnorderedNumber && !largestUnorderedNumber) return [-1, -1]
    
    let startingIndex = 0
    let endingIndex = array.length - 1
    
    while(startingIndex < array.length && array[startingIndex] <= smallestUnorderedNumber) startingIndex++
    while (endingIndex >= 0 && array[endingIndex] >= largestUnorderedNumber) endingIndex--
    
    return [startingIndex, endingIndex]
    
}
