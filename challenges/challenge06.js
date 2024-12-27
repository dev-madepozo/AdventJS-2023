/*
  Challenge # 06
  Title: 🦌 The reindeer on trial
  Level: Easy
  Link: https://2023.adventjs.dev/en/challenges/2023/6
*/

function maxDistance(movements) {
  let distance = 0
  let wildcards = 0

  for (const movement of movements) {
    distance += '>' == movement
    distance -= '<' == movement
    wildcards += '*' == movement
  }

  return Math.abs(distance) + wildcards
}
