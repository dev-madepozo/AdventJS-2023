/*
  Challenge # 08
  Title: 🏬 Sorting the warehouse
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/8
*/

function organizeGifts(gifts) {
  let result = ''

  for (const [, qty, gift] of gifts.matchAll(/(\d+)(\w)/g)) {
    const bags = qty % 10
    result +=
      `[${gift}]`.repeat(qty / 50) +
      `{${gift}}`.repeat(((qty % 50) / 10)) +
      `(${gift.repeat(bags)})`.repeat(!!bags)
  }

  return result
}
