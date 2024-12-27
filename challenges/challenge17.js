/*
  Challenge # 17
  Title: 🛷 Optimizing the rental
  Level: Easy
  Link: https://2023.adventjs.dev/en/challenges/2023/17
*/

function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const optimization = [intervals.shift()]

  for (const current of intervals) {
    const [x, y] = current
    const previous = optimization.at(-1)

    if (x <= previous[1]) {
      previous[1] = Math.max(previous[1], y)
    } else {
      optimization[optimization.length] = current
    }
  }

  return optimization
}
