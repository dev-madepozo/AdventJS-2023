/*
  Challenge # 01
  Title: First gift repeated
  Level: easy
  Link: https://adventjs.dev/en/challenges/2023/1
*/

function findFirstRepeated(gifts) {
  const ids = {}

  for (let i = 0; i < gifts.length; i++) {
    if (ids[gifts[i]]) {
      return gifts[i]
    } else {
      ids[gifts[i]] = 1
    }
  }

  return -1;
}
