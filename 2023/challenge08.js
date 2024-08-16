/*
  Challenge # 08
  Title: Sorting the warehouse
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/8
*/

function organizeGifts(gifts) {
  let result = ''

  for (const item of gifts.match(/\d+[a-z]/g)) {
    let [quantity, name] = item.match(/[a-zA-Z]+|[0-9]+/g)

    result += `[${name}]`.repeat(quantity / 50 | 0)
    quantity %= 50

    result += `{${name}}`.repeat(quantity / 10 | 0)
    quantity %= 10

    result += quantity ? `(${name.repeat(quantity)})` : ''
  }

  return result
}
