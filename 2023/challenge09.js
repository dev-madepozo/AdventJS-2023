/*
  Challenge # 09
  Title: Switch the lights
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/9
*/

function adjustLights(lights) {
  let deltas = [0, 0]

  for (const [k, v] of lights.entries()) {
    deltas[0] += !!(!(k % 2) && v !== '🟢' || k % 2 && v === '🟢')
    deltas[1] += !!(!(k % 2) && v === '🟢' || k % 2 && v !== '🟢')
  }

  return Math.min(...deltas)
}
