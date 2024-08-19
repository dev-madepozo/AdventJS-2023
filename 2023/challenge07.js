/*
  Challenge # 07
  Title: 📦 The 3D boxes
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/7
*/

function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const max = size * 2 - 1
  const drawing = ['#'.repeat(size).padStart(max, ' ') + '\n']

  for (const i in '#'.repeat(size - 2)) {
    let line = `#${symbol.repeat(size - 2)}#${symbol.repeat(i)}#\n`
    drawing[~~i + 1] = line.padStart(max + 1, ' ')
    drawing[max - i - 2] = line
  }

  drawing[size - 1] = '#'.repeat(size) + symbol.repeat(size - 2) + '#\n'
  drawing[max - 1] = '#'.repeat(size) + '\n'
  return drawing.join('')
}
