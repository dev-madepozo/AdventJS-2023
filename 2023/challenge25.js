/*
  Challenge # 25
  Title: 🗺️ Calculating distances
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/25
*/

function travelDistance(map) {
  const children = {}
  let [sX, sY, distance] = [0, 0, 0]
  
  const rows = map.split('\n');

  for (let i = 0; i < rows.length; i++) {
    [...rows[i].matchAll(/[0-9]/gi)].forEach(item => {
      children[item[0]] = [i, item.index]
    })

    if (rows[i].indexOf('S') !== -1) {
      [sX, sY] = [i, rows[i].indexOf('S')]
    }
  }

  for (const [x, y] of Object.values(children)) {
    distance += Math.abs(x - sX) + Math.abs(y - sY);
    [sX, sY] = [x, y]
  }

  return distance
}
