/*
Write a function that takes in an array of integers and returns an array of
length 2 representing the largest range of integers contained in that array.
The first number in the output array should be the first number in the range,
while the second number should be the last number in the range.
A range of numbers is defined as a set of numbers that come right after each
other in the set of real integers. For instance, the output array
[2, 6] represents the range {2, 3, 4, 5, 6}, which
is a range of length 5. Note that numbers don't need to be sorted or adjacent
in the input array in order to form a range.
You can assume that there will only be one largest range.
Sample Input:
    array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
Sample Output: [0, 7]
*/
// O(n) time | O(n) space
function largestRange(array) {
    const hashMap = {}
      
    let sequenceStart, sequenceEnd
    
    array.forEach( elem => hashMap[elem] = true)
    
    for (let i = 0; i < array.length; i++){
        let value = array[i]
        if(hashMap[value]) {
            hashMap[value] = false
            let currentStart = value
            let currentEnd = value

            while(hashMap[currentStart-1]) hashMap[--currentStart] = false
            while(hashMap[currentEnd+1]) hashMap[currentEnd++] = false

            if((currentEnd - currentStart > sequenceEnd - sequenceStart) || (!sequenceStart &&!sequenceEnd)) {
                sequenceEnd = currentEnd
                sequenceStart = currentStart
            }
        }
    }
    
    return [sequenceStart, sequenceEnd]
}