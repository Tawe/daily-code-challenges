function getSemifinalMatchups(teams) {
    const teamsWithPoints = teams.map((team) => {
        const [teamName, record] = team.split(": ");
        const [wins, otWins, otLosses, losses] = record.split("-").map(Number);
        return { teamName, points: wins * 3 + otWins * 2 + otLosses };
    });
    teamsWithPoints.sort((a, b) => b.points - a.points);
    const firstTeam = teamsWithPoints[0];
    const fourthTeam = teamsWithPoints[3];
    const secondTeam = teamsWithPoints[1];
    const thirdTeam = teamsWithPoints[2];
    return `The semi-final games will be ${firstTeam.teamName} vs ${fourthTeam.teamName} and ${secondTeam.teamName} vs ${thirdTeam.teamName}.`;
}

const x = getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"])
x;