/*
  Challenge # 25
  Title: 🗺️ Calculating distances
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/25
*/

function travelDistance(map) {
  const childPositions = new Map()
  let distance = 0
  let positionS = []
  map.split('\n').forEach((city, row) => {
    [...city.matchAll(/[0-9]/gi)].map(({ index}) => index).forEach(col => {
      childPositions.set(city[col], [row, col])
    })

    if (city.indexOf('S') !== -1) {
      positionS[0] = [row, city.indexOf('S')]
    }
  })

  for (const [k, [x, y]] of new Map([...childPositions.entries()].sort())) {
    distance += Math.abs(x - positionS[0][0]) + Math.abs(y - positionS[0][1])
    positionS[0] = [x, y]
  }

  return distance
}
