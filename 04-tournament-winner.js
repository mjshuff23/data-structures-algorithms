/*
    There's an algo tourney taking place in which programmer teams compete against each other.  Team compete in round robin, where each team faces off against all other teams
    - Only 2 teams compete against each other at a time
       - One team is the home team(index 0), the other the away team(index 1)
    - There are no ties, one winner, one loser per match
    - Winner receives 3 points, loser receives 0
    - Most points wins

    Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament.
    - Input arrays named competitions and results
      - competitions has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team
      - results contains information about the winner of each competition in the competitions array
        - results[i] denotes winner of competitions[i]
        - 1 = home team won, 0 = away team won
    - Only one team will win the tournament, and each team will compete against each other exactly once in the tournament
    - The tournament will always have at least 2 teams
*/

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];

const results = [0, 0, 1]; // C#, Python, Python

// Solution 1
// Time - O(n), Space - O(k)
//   - n refers to number of competitions
//   - k refers to number of teams

const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  // Write your code here.
  let currentBestTeam = '';
  const teamScores = { [currentBestTeam]: 0 };
  // 1. Loop through competitions
  for (let i = 0; i < competitions.length; i++) {
    // Each index with be another array
    let [homeTeam, awayTeam] = competitions[i]; // ["HTML", "C#"]
    let result = results[i]; // 0
    // Since result being 0 means index 1 wins and vice versa, let's switch
    // result === 0 ? result = 1 : result = 0;
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, teamScores);

    // if the team that just won has a higher score than the current
    // best team, make it the current best team
    if (teamScores[winningTeam] > teamScores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

// Helper function
function updateScores(team, points, teamScores) {
  // if team isn't in score list, initialize the key
  if (!(team in teamScores)) teamScores[team] = 0;

  // add points to score
  teamScores[team] += points;
}

console.log(tournamentWinner(competitions, results));
