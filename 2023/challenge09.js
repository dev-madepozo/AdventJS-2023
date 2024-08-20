/*
  Challenge # 09
  Title: Switch the lights
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/9
*/

function adjustLights(lights) {
  let delta = 0

  for (const [k, v] of lights.entries()) {
    delta += !(k % 2) && v != '🟢' || k % 2 && v == '🟢'
  }

  return Math.min(delta, lights.length - delta)
}
