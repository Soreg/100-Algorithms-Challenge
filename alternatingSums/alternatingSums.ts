function alternatingSums(a: number[]): number[] {
  let team1 = [];
  let team2 = [];
  let allTeams = [];

  a.map((num, i) => {
    i % 2 === 0 ? team1.push(num) : team2.push(num);
  });

  allTeams.push(team1.reduce((a, b) => a + b), team2.reduce((a, b) => a + b));

  return allTeams;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))