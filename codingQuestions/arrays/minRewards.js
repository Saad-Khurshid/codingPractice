/** 
Imagine that you're a teacher who's just graded the final exam in a class. You
have a list of student scores on the final exam in a particular order (not
necessarily sorted), and you want to reward your students. You decide to do so
fairly by giving them arbitrary rewards following two rules:
All students must receive at least one reward.
Any given student must receive strictly more rewards than an adjacent
student (a student immediately to the left or to the right) with a lower
score and must receive strictly fewer rewards than an adjacent student with
a higher score.
Write a function that takes in a list of scores and returns the minimum number
of rewards that you must give out to students to satisfy the two rules.
You can assume that all students have different scores; in other words, the
scores are all unique.

Sample Input: [8, 4, 2, 1, 3, 6, 7, 9, 5]

Sample Output: 
    SUM([4, 3, 2, 1, 2, 3, 4, 5, 1]) = 25
*/

// SOLUTION 1
// O(n) time | O(n) space
function minRewards(scores) {
	let rewards = new Array(scores.length).fill(1)
    let peaks = []
	for(let i = 0; i < scores.length; i++){
		if(i===0 && scores[i] < scores[i+1]) peaks.push(i)
		if(i === scores.length - 1 && scores[i] < scores[i-1]) peaks.push(i)
		if(i===0 || i === scores.length -1) continue
		if(scores[i] < scores[i-1] && scores[i] < scores[i+1]) peaks.push(i)
	}
	for(let peak of peaks){
		let leftIdx = peak - 1
		while(leftIdx >= 0 && scores[leftIdx] > scores[leftIdx+1]){
			rewards[leftIdx] = Math.max(rewards[leftIdx+1]+1, rewards[leftIdx])
			leftIdx--
		}
		let rightIdx = peak + 1
		while(rightIdx < scores.length && scores[rightIdx] > scores[rightIdx-1]){
			rewards[rightIdx] = rewards[rightIdx-1] + 1
			rightIdx++
		}
	}
	
	return rewards.reduce((prevVal, currVal) => prevVal + currVal)
}

// SOLUTION 2
// O(n) time | O(n) space
function minRewards(scores) {
    let rewards = new Array(scores.length).fill(1)
    for(let i = 1; i < scores.length; i++) {
        if(scores[i] > scores[i-1]){
            rewards[i] = rewards[i-1] + 1
        }
    }
    for (let i = scores.length - 2; i >= 0; i--){
        if(scores[i] > scores[i+1]){
            rewards[i] = Math.max(rewards[i+1] + 1, rewards[i])
        }
    }
    
    return rewards.reduce((a,b) => a+b)
}

// SOLUTION 3
// O(n^2) time | O(n) space
function minRewards(scores) {
    let rewards = new Array(scores.length).fill(1)
      
      for(let i = 1; i < scores.length; i++){
          let j = i - 1
          if(scores[i] > scores[j]){
              rewards[i] = rewards[j] + 1
          }
          else {
              while ( j >= 0 && scores [j] > scores[j+1]){
                  rewards[j] = Math.max(rewards[j], rewards[j+1] + 1)
                  j--
              }
          }
      }
      
      return rewards.reduce((a,b) => a+b)
  }
  