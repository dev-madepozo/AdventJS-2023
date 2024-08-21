/*
  Challenge # 21
  Title: 🪐 Binary message
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/21
*/

function findBalancedSegment(message) {
  let balance = []
  let maxLength = 0

  for (const i of message.keys()) {
    const nums = [0, 0]
    for (let j = i; j < message.length; j++) {
      nums[message[j]] += 1

      if (nums[0] == nums[1] && (j - i) > maxLength) {
        balance = [i, j]
        maxLength = j - i
      }
    }
  }

  return balance
}
