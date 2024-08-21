/*
  Challenge # 08
  Title: 🏬 Sorting the warehouse
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/8
*/

function organizeGifts(gifts) {
  let result = []

  for (const [, qty, gift] of gifts.matchAll(/(\d+)(\w)/g)) {
    const pallets = qty / 50 | 0
    const boxes = (qty - (50 * pallets)) / 10 | 0
    const bags = qty - (pallets * 50) - (boxes * 10)

    result.push(
      `[${gift}]`.repeat(pallets),
      `{${gift}}`.repeat(boxes),
      `(${gift.repeat(bags)})`.repeat(!!bags)
    )
  }

  return result.join('')
}
