/*
  Challenge # 08
  Title: Sorting the warehouse
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/8
*/

function organizeGifts(gifts) {
  const groupOfGifts = gifts.match(/\d+[a-z]/g)
  let result = ''

  for (const gift of groupOfGifts) {
    let totalGifts = parseInt(gift, 10)
    const giftName = gift.at(-1)
    let organizeBy = Math.floor(totalGifts / 50)

    if (organizeBy) {
      result += `[${giftName}]`.repeat(organizeBy)
      totalGifts %= 50
    }

    organizeBy = Math.floor(totalGifts / 10)

    if (organizeBy) {
      result += `{${giftName}}`.repeat(organizeBy)
      totalGifts %= 10
    }

    if (totalGifts) {
      result += `(${giftName.repeat(totalGifts)})`
    }
  }

  return result
}
