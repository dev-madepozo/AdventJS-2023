/*
  Challenge # 06
  Title: 🦌 The reindeer on trial
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/6
*/

function maxDistance(movements) {
  let distance = 0
  let wildcard = 0

  for (const mov of movements) {
    distance += '>' == mov
    distance -= '<' == mov
    wildcard += '*' == mov
  }

  return Math.abs(distance) + wildcard
}
