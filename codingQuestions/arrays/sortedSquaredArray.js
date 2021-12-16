/*** 
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  e:g:
  input: array = [1, 2, 3, 5, 6, 8, 9]
  output: [1, 4, 9, 25, 36, 64, 81]
*/

//SOLUTION 1
// O(n log n) time | O(n) space
function sortedSquaredArray(array) {
    return array.map(integer => Math.pow(integer,2)).sort((a,b) => a-b)
}
  
//SOLUTION 2
//O(n) time | O(n)space
function sortedSquaredArray(array) {
    let leftPointer = 0
      let rightPointer = array.length - 1
      const squaredSortedArray = [] 
      do {
          const smallerValue = array[leftPointer]
          const largerValue = array[rightPointer]
          if (Math.abs(smallerValue) > Math.abs(largerValue)){
              squaredSortedArray.unshift(smallerValue * smallerValue)
              leftPointer++
          }
          else {
              squaredSortedArray.unshift(largerValue * largerValue)
              rightPointer--
          }
      } while(leftPointer <= rightPointer)
      return squaredSortedArray
  }
