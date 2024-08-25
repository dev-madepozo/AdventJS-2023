/*
  Challenge # 25
  Title: 🗺️ Calculating distances
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/25
*/

function travelDistance(map) {
  map = map.split('\n')
  const size = map[0].length
  const newMap = map.join('');
  const sIndex = newMap.indexOf('S')
  let [santaX, santaY] = [sIndex / size | 0, sIndex % size]
  let ditance = 0
  const totalChidren = newMap.match(/\d/g).length

  for (const i of Array(totalChidren).keys()) {
    const cIndex = newMap.indexOf(i + 1)
    const childPos = [cIndex / size | 0, cIndex % size]
    ditance += Math.abs(santaX - childPos[0]) + Math.abs(santaY - childPos[1]);
    [santaX, santaY] = childPos
  }

  return ditance
}
