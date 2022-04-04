function gameObject() {
    let gameInfo = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: "0",
            shoe: "16",
            points: "22",
            rebounds: "12",
            assists: "12",
            steals: "3",
            blocks: "1",
            slamDunks: "1",
          },
          "Reggie Evans": {
            number: "30",
            shoe: "14",
            points: "12",
            rebounds: "12",
            assists: "12",
            steals: "12",
            blocks: "12",
            slamDunks: "7",
          },
          "Brook Lopez": {
            number: "11",
            shoe: "17",
            points: "17",
            rebounds: "19",
            assists: "10",
            steals: "3",
            blocks: "1",
            slamDunks: "15",
          },
          "Mason Plumlee": {
            number: "1",
            shoe: "19",
            points: "26",
            rebounds: "12",
            assists: "6",
            steals: "3",
            blocks: "8",
            slamDunks: "5",
          },
          "Jason Terry": {
            number: "31",
            shoe: "15",
            points: "19",
            rebounds: "2",
            assists: "2",
            steals: "4",
            blocks: "11",
            slamDunks: "1",
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["turquoise", "purple"],
        players: {
          "Jeff Adrien": {
            number: "4",
            shoe: "18",
            points: "10",
            rebounds: "1",
            assists: "1",
            steals: "2",
            blocks: "7",
            slamDunks: "2",
          },
          "Bismak Biyombo": {
            number: "0",
            shoe: "16",
            points: "12",
            rebounds: "4",
            assists: "7",
            steals: "7",
            blocks: "15",
            slamDunks: "10",
          },
          "DeSagna Diop": {
            number: "2",
            shoe: "14",
            points: "24",
            rebounds: "12",
            assists: "12",
            steals: "4",
            blocks: "5",
            slamDunks: "5",
          },
          "Ben Gordon": {
            number: "8",
            shoe: "15",
            points: "33",
            rebounds: "3",
            assists: "2",
            steals: "1",
            blocks: "1",
            slamDunks: "0",
          },
          "Brendan Haywood": {
            number: "33",
            shoe: "15",
            points: "6",
            rebounds: "12",
            assists: "12",
            steals: "22",
            blocks: "5",
            slamDunks: "12",
          },
        },
      },
    }
    return gameInfo
  }
 console.log(gameObject())

function homeTeamName(){
  let object = gameObject()
  return object['home']['teamName']
}
console.log(homeTeamName('Brooklyn Nets'))

function numPointsScored(playerName){
  let game = gameObject()
  for (let teamHomeOrAway in game){
    let playerList = game[teamHomeOrAway].players
    for (let player in playerList){
      if (player === playerName){
        return playerList[player].points
      }
    }
  }
} 

console.log(numPointsScored('Brendan Haywood'))

function shoeSize(playerName) {
  let game = gameObject()
  for (let teamHomeOrAway in game) {
      let playerList = game[teamHomeOrAway].players
      for (let player in playerList) {
          if (player === playerName) {
              return playerList[player].shoe
          }
      }
  }
  
}
console.log(shoeSize('Jason Terry'))

function teamColors(teamName) {
  let game = gameObject()
  for (let teamHomeOrAway in game) {
      let team = game[teamHomeOrAway]
      if (team.teamName === teamName)
      return team.colors
  }
}
console.log (teamColors('Brooklyn Nets'))

function teamNames(){
  let game = gameObject()
  let teamArry = []
  for (let teamHomeOrAway in game){
    let team = game[teamHomeOrAway]
    teamArry.push(team.teamName)
  }
  return teamArry
}
console.log(teamNames())

function playerNumbers(teamName){
  let game = gameObject()
  let homeTeam = game.home
  let awayTeam = game.away
  let teamPlayers = homeTeam.teamName === teamName ? homeTeam.players : awayTeam.players
  let playerNumbersList = []
  for (let player in teamPlayers){
    playerNumbersList.push(teamPlayers[player].number)
    //debugger
  }
  return playerNumbersList
}
console.log(playerNumbers('Charlotte Hornets'))

function playerStats(playerName){
  let game = gameObject()
  let homeTeamPlayers = game.home.players
  let awayTeamPlayers = game.away.players
  let allPlayers = {...homeTeamPlayers, ...awayTeamPlayers
  }
  return allPlayers[playerName]
}
console.log(playerStats('Brendan Haywood'))

function bigShoeRebounds() {
  let game = gameObject()
  let homeTeamPlayers = game.home.players
  let awayTeamPlayers = game.away.players
  let allPlayers = { ...homeTeamPlayers, ...awayTeamPlayers }
  let playerArr = Object.entries(allPlayers)
  let shoesPlayers = playerArr.map((player) => player[1].shoe)
  let biggestShoe = Math.max(...shoesPlayers)
  let indexOfBigShoePlayer = shoesPlayers.indexOf(biggestShoe.toString())
  return playerArr[indexOfBigShoePlayer][1].rebounds
}
 console.log(bigShoeRebounds())

 function playerWithLongestName() {
  let game = gameObject()
  let allPlayersObj = {...game.home.players, ...game.away.players}
  let playerNames = Object.keys(allPlayersObj)
  let nameLengthArray = playerNames.map(player => player.length)
  let longestName = nameLengthArray.indexOf(Math.max(...nameLengthArray))
  return playerNames[longestName]
  //    debugger
}

console.log(playerWithLongestName())

function doesLongNameStealATon() {
  let game = gameObject()
  let allPlayersObj = {...game.home.players, ...game.away.players}
  let longestNamePlayer = playerWithLongestName()
  let stealsArray = []
  for (let player in allPlayersObj) {
      stealsArray.push(allPlayersObj[player].steals)
  //    debugger
  }
  let mostStealsValue = Math.max(...stealsArray)
  return allPlayersObj[longestNamePlayer].steals === mostStealsValue
}
//debugger
console.log(doesLongNameStealATon())
