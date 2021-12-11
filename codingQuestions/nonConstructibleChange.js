/***
    Given an array of positive integers representing the values of coins in your
    possession, write a function that returns the minimum amount of change (the
    minimum sum of money) that you cannot create. The given coins can have
    any positive integer value and aren't necessarily unique (i.e., you can have
    multiple coins of the same value).
        
        
    For example, if you're given coins = [1, 2, 5], the minimum
    amount of change that you can't create is 4. If you're given no
    coins, the minimum amount of change that you can't create is 1.
    

    input: [5, 7, 1, 1, 2, 3, 22]
    output: 20
*/

// O(n) time | O(1) space
function nonConstructibleChange(coins) {
	coins.sort((a,b) => a-b)
	let sum = 0
	for (let i = 0; i < coins.length; i++) {
		let currentCoin = coins[i]
		if (currentCoin > sum+1)
			return sum + 1
		else sum += currentCoin
	}
	return sum + 1
}
