/*
  Challenge # 13
  Title: Calculating the time
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/13
*/

function calculateTime(deliveries) {
  let delta = deliveries.reduce((acc, cur) => {
    const [hh, mm, ss] = cur.split(':')
    return acc - (hh * 3600 + mm * 60 + +ss)
  }, 7 * 60 * 60) // 7 hours in seconds

  let result = delta > 0 ? '-' : ''
  delta = Math.abs(delta)
  result += `0${delta / 3600 | 0}:`.slice(-3)
  delta %= 3600
  result += `0${delta / 60 | 0}:`.slice(-3)
  result += `0${delta % 60}`.slice(-2)

  return result
}
