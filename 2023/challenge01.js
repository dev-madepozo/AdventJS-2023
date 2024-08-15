/*
  Challenge # 01
  Title: First gift repeated!
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/1
*/

function findFirstRepeated(gifts) {
  const ids = new Set();
  
  for (const gift of gifts) {
    if (ids.has(gift)) return gift;
    ids.add(gift);
  }

  return -1;
}
