/*
  Challenge # 01
  Title: 🎁 First gift repeated!
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/1
*/

function findFirstRepeated(gifts) {
  return gifts.find((gift, index) => gifts.indexOf(gift) - index) ?? -1
}
