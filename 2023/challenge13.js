/*
  Challenge # 13
  Title: ⌚️ Calculating the time
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/13
*/

function calculateTime(deliveries) {
  const date = new Date(null)
  let totalTimeInSeconds = 25200 // 7 hours in seconds

  for (const time of deliveries) {
    const [h, m, s] = time.split(':')
    totalTimeInSeconds -= (+s + 60 * m + 3600 * h)
  }

  let sign = ['', '-'].at(totalTimeInSeconds > 0)
  date.setSeconds(Math.abs(totalTimeInSeconds))

  return `${sign}${date.toISOString().substring(11, 19)}`
}
