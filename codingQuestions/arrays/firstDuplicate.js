/*
Given an array of integers between <span>1</span> and <span>n</span>,
inclusive, where <span>n</span> is the length of the array, write a function
that returns the first integer that appears more than once (when the array is
read from left to right).
In other words, out of all the integers that might occur more than once in the
input array, your function should return the one whose first duplicate value
has the minimum index.
If no integer appears more than once, your function should return -1.
Note that you're allowed to mutate the input array.

Sample Input:
    array = [2, 1, 5, 2, 3, 3, 4]
Sample Output: 2 
*/

//SOLUTION 1
// O(n) time | O(n) space
function firstDuplicateValue(array) {
    const set = new Set()
    for (const value of array) {
        if(set.has(value)) return value
        else set.add(value)
    }
    return -1
}

//SOLUTION 2
// O(n) time | O(1) space
function firstDuplicateValue(array) {
    for (const value of array) {
        let absVal = Math.abs(value)
        if(array[absVal - 1] < 0) return absVal
        else array[absVal - 1] *= -1
    }
    return -1
}