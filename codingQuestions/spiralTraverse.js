/*
Write a function that takes in an n x m two-dimensional array (that can be
square-shaped when n == m) and returns a one-dimensional array of all the
array's elements in spiral order.  
Spiral order starts at the top left corner of the two-dimensional array, goes
to the right, and proceeds in a spiral pattern all the way until every element
has been visited.

Sample Input: 
    array = [
        [1,   2,  3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7],
    ]
Sample Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
*/

// O(N) time | O(N) space; where N is total number of elements in 2D array

// ITERATIVE SOLUTION
function spiralTraverse(array) {
    const results = []
      
    let startRow = 0, endRow = array.length - 1
    let startCol = 0, endCol = array[0].length - 1
    
    while (startRow <= endRow && startCol <= endCol) {
        
        for (let col = startCol; col <= endCol; col++) {
            results.push(array[startRow][col])
        }
        
        if (startRow === endRow) break
        
        for (let row = startRow + 1; row <= endRow; row++) {
            results.push(array[row][endCol])
        }
        
        if(startCol === endCol) break
        
        for (let col = endCol - 1; col >= startCol; col--) {
            results.push(array[endRow][col])
        }
        
        for (let row = endRow - 1; row > startRow; row--) {
            results.push(array[row][startCol])
        }
        
        startRow++
        endRow--
        startCol++
        endCol--
    }
    
    return results
}

// RECURSIVE SOLUTION
function spiralTraverse(array) {
	const results = []
    let startRow = 0, endRow = array.length - 1
	let startCol = 0, endCol = array[0].length - 1
	spiralFill(array, startRow, endRow, startCol, endCol, results)
	return results
}

function spiralFill (array, startRow, endRow, startCol, endCol, results) {
	if(startRow > endRow || startCol > endCol) return
	
	for (let col = startCol; col <= endCol; col++) {
		results.push(array[startRow][col])
	}
	
	if(startRow === endRow) return
	
	for (let row = startRow + 1; row <= endRow; row++) {
		results.push(array[row][endCol])
	}
	
	if(startCol === endCol) return
	
	for (let col = endCol - 1; col >= startCol; col--) {
		results.push(array[endRow][col])
	}
	
	for (let row = endRow - 1; row > startRow; row--) {
		results.push(array[row][startCol])
	}
	
	return spiralFill (array, startRow+1, endRow-1, startCol+1, endCol-1, results)
}