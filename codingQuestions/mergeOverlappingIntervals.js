/*
Write a function that takes in a non-empty array of arbitrary intervals,
merges any overlapping intervals, and returns the new intervals in no
particular order.
Each interval interval is an array of two integers, with
interval[0] as the start of the interval and
interval[1] as the end of the interval.
Note that back-to-back intervals aren't considered to be overlapping. For
example, [1, 5] and [6, 7] aren't overlapping;
however, [1, 6] and [6, 7] are indeed overlapping.
Also note that the start of any particular interval will always be less than
or equal to the end of that interval.

Sample Input
    intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
Sample Output: [[1, 2], [3, 8], [9, 10]]
*/

// SOLUTION 1
// O(n lon(n)) time | O(n) space
function mergeOverlappingIntervals(array) {
    const mergedIntervals = []
    array.sort((a,b) => a[0]-b[0])
    let i = 0
    while (i < array.length) {
        let start = array[i][0]
        let end = array[i][1]
        
        while (i < array.length - 1 && array[i+1][0] <= end) {
            i++
            end = array[i][1] > end ? array[i][1] : end
        }
        mergedIntervals.push([start, end])
        i++
    }
    
    return mergedIntervals
}

// SOLUTION 2
// O(n lon(n)) time | O(n) space
function mergeOverlappingIntervals(array) {
    const sortedIntervals = array.sort((a,b) => a[0] - b[0])
    let currentInterval = sortedIntervals[0]
    const mergedIntervals = [currentInterval]
    
    for (const nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval
        const [nextIntervalStart, nextIntervalEnd] = nextInterval
        
        if(currentIntervalEnd >= nextIntervalStart) {
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        }
        else{
            currentInterval = nextInterval
            mergedIntervals.push(currentInterval)
        }
    }
    return mergedIntervals
}