/**
You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.

The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

Sample Input
    array = [2, 1, 2, 2, 2, 3, 4, 2]
    toMove = 2

Sample Output : [1, 3, 4, 2, 2, 2, 2, 2]
*/

// O(n)time | O(1) space
function moveElementToEnd(array, toMove) {
    let left = 0, right = array.length - 1
    while (left < right) {
        if (array[left] !== toMove) left++
        else if (array[right] === toMove) right--
        else {
            array[left] = array[left] + array[right]
            array[right] = array[left] - array[right]
            array[left] = array[left] - array[right]
            left++
            right--
        }
    }
    return array
}