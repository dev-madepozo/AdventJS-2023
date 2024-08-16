/*
  Challenge # 07
  Title: The 3D boxes
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/7
*/

function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const max = size * 2 - 1
  const draff = [' '.repeat(max - size) + '#'.repeat(size)]

  for (let i = 0; i < size - 2; i++) {
    const line = '#' + symbol.repeat(size -2 ) + '#' + symbol.repeat(i) + '#'
    draff.push(' '.repeat(max - line.length) + line)
  }

  draff.push('#'.repeat(size) + symbol.repeat(size - 2) + '#')

  for (let i = size - 3; i >= 0; i--) {
    draff.push('#' + symbol.repeat(size -2 ) + '#' + symbol.repeat(i) + '#')
  }

  draff.push('#'.repeat(size) +'\n')
  return draff.join('\n')
}