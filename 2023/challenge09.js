/*
  Challenge # 09
  Title: Switch the lights
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/9
*/

function adjustLights(lights) {
  let ballColor = '🟢'

  const firstComaprison = 
    lights.filter((ball, x) => x % 2 === 0 && ball !== ballColor).length
    + lights.filter((ball, x) => x % 2 === 1 && ball === ballColor).length

  const secondComaprison = 
    lights.filter((ball, x) => x % 2 === 0 && ball === ballColor).length
    + lights.filter((ball, x) => x % 2 === 1 && ball !== ballColor).length

  return Math.min(firstComaprison, secondComaprison)
}
