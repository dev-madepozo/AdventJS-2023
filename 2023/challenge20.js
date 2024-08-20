/*
  Challenge # 20
  Title: 🏋️‍♂️ Distribute the weight
  Level: Hard
  Link: https://adventjs.dev/en/challenges/2023/20
*/

function distributeGifts(weights) {
  const distribution = []

  for (const [i, row] of weights.entries()) {
    distribution[i] = []
    for (const [j, value] of row.entries()) {
      let [up, right, down, left] = [
        ~~weights[i-1]?.at(j), ~~row[j+1], ~~weights[i+1]?.at(j), ~~row[j-1]
      ]
      distribution[i][j] = Math.round(
        (up + down + value + left + right) /
        (!!up + !!down +!!value + !!left + !!right)
      )
    }
  }

  return distribution;
}
