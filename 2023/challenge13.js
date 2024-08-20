/*
  Challenge # 13
  Title: Calculating the time
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/13
*/

function calculateTime(deliveries) {
  let delta = 7 * 60 * 60

  for (const time of deliveries) {
    const [hh, mm, ss] = time.split(':')
    delta -= (hh * 3600 + mm * 60 + +ss)
  }

  let result = delta > 0 ? '-': ''
  delta = Math.abs(delta)
  result += `0${delta / 3600 | 0}:`.slice(-3)
  delta %= 3600
  result += `0${(delta % 3600) / 60 | 0}:`.slice(-3)
  result += `0${delta % 60}`.slice(-2)

  return result
}


calculateTime(['00:10:00', '01:00:00', '03:30:00'])
