/*
  Challenge # 01
  Title: 🎁 First gift repeated!
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/1
*/

function findFirstRepeated(gifts) {
  const index = gifts.find((gift, index) => gifts.indexOf(gift) - index)
  return [-1, index][+(index >= 0)]
}
