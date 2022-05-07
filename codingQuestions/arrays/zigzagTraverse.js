/***
  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in zigzag order.

  Zigzag order starts at the top left corner of the two-dimensional array, goes
  down by one element, and proceeds in a zigzag pattern all the way to the
  bottom right corner.

  Sample Input:
[
  [1,  3,  4, 10],
  [2,  5,  9, 11],
  [6,  8, 12, 15],
  [7, 13, 14, 16],
]
Sample Output:
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
 */

/** SOLUTION 1 
 * SPACE TIME COMPLEXITY 
 * O(n) Time | O(n) space
*/

function zigzagTraverse(array) {
    const height = array.length - 1
    const width = array[0].length - 1
    const result = []
    
    let col = 0
    let row = 0
    
    let goingDown = true
    
    while (!isOutOfBounds(row, col)) {
        result.push(array[row][col])
        if (goingDown) {
            if (col === 0 || row === height) {
                if (row < height) {
                    row++
                }
                else {
                    col++
                }
                goingDown = false
            } else {
                row++
                col--
            }
        }
        else {
            if (row === 0 || col === width) {
                if (col < width) {
                    col++
                }
                else {
                    row++
                }
                goingDown = true
            }
            else {
                row--
                col++
            }
        }
        
    }
    
    return result
    
    function isOutOfBounds (row, col) {
        return row < 0 || row > height || col < 0 || col > width
    }
      
}

/** SOLUTION 2
 * SPACE TIME COMPLEXITY 
 * O(n) Time | O(n) space
*/

function zigzagTraverse(array) {
    // Write your code here.
    const height = array.length - 1
    const width = array[0].length - 1

    const result = []

    let movement

    let i = 0, j = 0
    

    const traverseRightUp = () => {
        movement = 'rightUp'
        while (i > 0 && j < width) {
            result.push(array[--i][++j])
        }
        if (j < width) {
            traverseRight()
        }
        else if (j === width) {
            traverseDown()
        }
    }

    const traverseRight = () => {
        if (i === height && j === width) return
        
        result.push(array[i][++j])
        if (movement === 'rightUp') {
            traverseLeftDown()
        }
        if (movement === 'leftDown') {
            traverseRightUp()
        }
    }

    const traverseLeftDown = () => {
        movement = 'leftDown'
        while (i < height && j > 0) {
            result.push(array[++i][--j])
        }

        if (i<height) {
            traverseDown()
        }
        else if (i===height) {
            traverseRight()
        }
    }

    const traverseDown = () => {
        if (i === height && j === width) return
        
        if (i < height) {
            result.push(array[++i][j])
        }
        else if (j < width) result.push(array[i][++j])

        if (movement === 'start' || movement === 'leftDown') {
                traverseRightUp()
        }

        if (movement === 'rightUp') {
            traverseLeftDown()
        }
	}

    const start = () => {
        movement = 'start'
        result.push(array[i][j])
        traverseDown()
    }
		
		start()
	
	return result

}
