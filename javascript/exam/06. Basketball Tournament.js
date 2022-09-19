function basketBallTournament(input) {
    let tournamentsName = input.shift();
    let gamesCounter = 0;
    let gamesWon = 0;
    let gamesLost = 0;
    let gamesPlayed = 0;
    let tournamentsCounter = 0;
    let totalGamesCounter = 0;
    while(tournamentsName !== "End of tournaments") {
        gamesPlayed = Number(input.shift());
        for(let i = 0; i < gamesPlayed; i++) {
            let pointsForDesi = Number(input.shift());
            let pointsForOtherTeam = Number(input.shift());
            gamesCounter++;
            totalGamesCounter++;
            if(pointsForDesi > pointsForOtherTeam) {
                gamesWon++;
                console.log(`Game ${gamesCounter} of tournament ${tournamentsName}: win with ${pointsForDesi - pointsForOtherTeam} points.`);
            } 
            else if(pointsForDesi < pointsForOtherTeam) {
                gamesLost++;
                console.log(`Game ${gamesCounter} of tournament ${tournamentsName}: lost with ${pointsForOtherTeam - pointsForDesi} points.`);
            }
        } 
        tournamentsCounter++;
        gamesCounter = 0;
        tournamentsName = input.shift();
    }     
    let matchesWinPercent = (gamesWon / totalGamesCounter) * 100;
    let matchesLostPercent = (gamesLost / totalGamesCounter) * 100;
    if(tournamentsName === "End of tournaments") {
        console.log(`${matchesWinPercent.toFixed(2)}% matches win`);
        console.log(`${matchesLostPercent.toFixed(2)}% matches lost`);
    }
} 