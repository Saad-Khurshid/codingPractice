/***

  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.
  
  A peak is defined as adjacent integers in the array that are strictly
  increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.

  e:g: 
  input: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
  output: 6 (from index 5 to index 10)
 */


// O(n) time | O(1) space

function longestPeak(array) {
	let longPeak = 0, i = 0, j = 0, k = 0
    
    for (i = 0; i< array.length - 1; ) {
        if (array[i] >= array [i+1]) i++
        else {
            for (j = i; j < array.length - 1; ) {
                if(array[j+1] > array[j]) j++
                else break
            }
            
            if (j === array.length - 1) break

            else if (array[ j + 1] === array [j]) {
                i = j + 1
            }
            
            else {
                for (k = j; k < array.length - 1; ) {
                    if ( array[k + 1] < array [k]) k++
                    else {
                        break
                    }
                }
                longPeak = k + 1 - i > longPeak ? k + 1 - i : longPeak
                i = k
            }
        }
    }

    return longPeak
}