/*
  Challenge # 05
  Title: Santa's CyberTruck
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/5
*/

function cyberReindeer(road, time) {
  const moves = [road]

  for (let i = 0; i < time - 1 ; i++) {
    const move = i === 4 ? moves[i].replaceAll('|', '*') : moves[i];
    moves.push(
      move.replace(
        /(S\.|S\*)/,
        `${'|*'.includes(road[move.indexOf('S')]) ? '*' : '.'}S`
      ) 
    );
  }

  return moves;
}
