/*
  Challenge # 13
  Title: ⌚️ Calculating the time
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/13
*/

function calculateTime(deliveries) {
  let time = 25200 // 7 hours in seconds
  for (const delivery of deliveries) {
    const [h, m, s] = delivery.split(':')
    time -= +s + 60 * m + 3600 * h
  }

  let format = new Date(Math.abs(time) * 1000).toISOString().substring(11, 19)

  return [format, `-${format}`].at(time > 0)
}
