/***

  There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. 
  Teams compete in a round robin, where each team faces off against all other teams. 
  Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. 
  In each competition there's always one winner and one loser; there are no ties. 
  A team receives 3 points if it wins and 0 points if it loses. 
  The winner of the tournament is the team that receives the most amount of points. 
  Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. 
  The input arrays are named competitions and results respectively. 

  e:g: 
  input: 
    competitions = [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"]
    ]
    results = [0, 0, 1]
  output: "Python"
 */

const HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
    const teamsScores = {}
	
	for (let i = 0; i < results.length; i++) {
		const [homeTeam, awayTeam] = competitions[i]
		let winner = results[i] === HOME_TEAM_WON ? homeTeam : awayTeam  
		if (winner in teamsScores) teamsScores[winner]+=1
		else teamsScores[winner] = 1
	}
	console.log(teamsScores)
	
	let teams = Object.keys(teamsScores)
	let topScorer = teams[0]
	for (const team of teams) {
		if (teamsScores[team] > teamsScores[topScorer]) {
			topScorer = team
		}
	}
	return topScorer
}