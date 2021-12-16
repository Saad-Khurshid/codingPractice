/*
Write a function that takes in a non-empty array of integers and returns an
array of the same length, where each element in the output array is equal to
the product of every other number in the input array.
In other words, the value at <span>output[i]</span> is equal to the product of
every number in the input array other than <span>input[i]</span>.
Note that you're expected to solve this problem without using division.

Sample Input:
    array = [5, 1, 4, 2]
Sample Output: [8, 40, 10, 20]
*/

// O(n) time | O(1) space
function arrayOfProducts(array) {
    const products = new Array(array.length).fill(0)
    let product = 1
    let zerosCount = 0, zerosIndex = 0
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) product = product * array[i]
        else {
            zerosIndex = i
            zerosCount++
        }
    }

    if (zerosCount > 0){
        if (zerosCount === 1) products[zerosIndex] = product 
    }
    else {
        for (let j = 0; j < array.length; j++) {
            products[j] = product / array[j]
        }
    }
    
    return products
}