/*
  Challenge # 21
  Title: 🪐 Binary message
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/21
*/

function findBalancedSegment(message) {
  let balance = []
  let maxRange = 0

  for (const i of message.keys()) {
    const counts = [0, 0]

    for (let j = i; j < message.length; j++) {
      counts[message[j]]++
      const condition = ((counts[0] == counts[1]) + ((j - i) > maxRange)) - 1

      if (condition > 0) {
        balance = [i, j]
        maxRange = j - i
      }
    }
  }

  return balance
}
