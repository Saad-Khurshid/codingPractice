/*
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are
entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply
don't increase. Similarly, non-decreasing elements aren't necessarily
exclusively increasing; they simply don't decrease.
Note that empty arrays and arrays of one element are monotonic.

Sample Input:
    array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
Sample Output: true
*/

// O(n) time | O(1) space

function isMonotonic(array) {
    if (array.length < 2 ) return true
      
    let initialFlag = array[0] < array[array.length - 1]
    let flag = initialFlag
    let idx = 0
    
    while (flag === initialFlag && idx < array.length - 1) {
        let value = array[idx]
        let nextValue = array[idx+1]
        if(value !== nextValue)
            flag = value <= nextValue
        idx++
    }
    
    return flag === initialFlag
      
}