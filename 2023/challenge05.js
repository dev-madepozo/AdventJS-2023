/*
  Challenge # 05
  Title: 🛷 Santa's CyberTruck
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/5
*/

function cyberReindeer(road, time) {
  const roads = [road]
  let char = '.'
  let pos = 1

  for (const i of Array.from({ length: time - 1}).keys()) {
    let nextRoad = [roads[i], roads[i].replaceAll('|', '*')][+(i == 4)]

    if (nextRoad[pos] !== '|') {
      [char, nextRoad] = [nextRoad[pos++], nextRoad.replace(/S./, `${char}S`)]
    }

    roads[i + 1] = nextRoad
  }

  return roads;
}
