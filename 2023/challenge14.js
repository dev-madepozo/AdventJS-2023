/*
  Challenge # 14
  Title: 🚨 Autonomous robot
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/14
*/

function maxGifts(houses) {
  let [total, previous] = [0, 0]

  for (const value of houses) {
    [previous, total] = [total, Math.max(total, previous + value)]
  }

  return total
}
