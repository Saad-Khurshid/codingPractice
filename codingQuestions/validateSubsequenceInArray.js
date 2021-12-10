/******** 
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  e:g:
  input: array = [5, 1, 22, 25, 6, -1, 8, 10], sequence = [1, 6, -1, 10]
  output: true
 */

/* SOLUTION 1
SPACE TIME COMPLEXITY
O(n^2 + m) time | O(1) space
*/
function isValidSubsequence(array, sequence) {
    let startIndex = 0
    for (let i = 0; i < sequence.length; i++) {
        let currentNum = sequence[i]
        let isPresentInArray = false
        for (let j = startIndex; j < array.length; j++) {
            if(currentNum === array[j]) {
                isPresentInArray = true
                startIndex = j+1
                break
            }
        }
        if (!isPresentInArray) return false
    }
    return true
}

/* SOLUTION 2
SPACE TIME COMPLEXITY
O(n) time | O(1) space
*/
function isValidSubsequence(array, sequence) {
    let sequenceIndex = 0
    let arrayIndex = 0
    while(sequenceIndex < sequence.length && arrayIndex < array.length) {
        if(array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++
        arrayIndex++
    }
    return sequenceIndex === sequence.length
}