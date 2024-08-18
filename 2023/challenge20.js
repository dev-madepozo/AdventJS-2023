/*
  Challenge # 20
  Title: 🏋️‍♂️ Distribute the weight
  Level: Hard
  Link: https://adventjs.dev/en/challenges/2023/20
*/

function distributeGifts(weights) {
  const calculatedWeights = []
  const calculateAverageWegiht = (values) => {
    return Math.round(values.reduce((x, y) => x + y, 0) / values.length);
  }

  for (let i = 0; i < weights.length; i++) {
    calculatedWeights[i] = []
    for (let j = 0; j < weights[i].length; j++) {
      calculatedWeights[i][j] = calculateAverageWegiht([
        weights[i - 1] ? weights[i - 1][j] : 0,
        weights[i + 1] ? weights[i + 1][j] : 0, 
        weights[i][j - 1], weights[i][j], weights[i][j + 1]
      ].filter(Boolean))
    }
  }

  return calculatedWeights;
}
