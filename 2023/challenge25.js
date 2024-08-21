/*
  Challenge # 25
  Title: 🗺️ Calculating distances
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/25
*/

function travelDistance(map) {
  map = map.replace('S', '0')
  const positions = {}

  for (const [i, row] of map.split('\n').entries()) {
    for (const pos of [...row.matchAll(/\d/gi)]) {
      positions[pos[0]] = [i, pos.index]
    }
  }

  let [sX, sY] = positions['0']
  let distance = 0

  for (const [x, y] of Object.values(positions)) {
    distance += Math.abs(x - sX) + Math.abs(y - sY);
    [sX, sY] = [x, y]
  }

  return distance
}
