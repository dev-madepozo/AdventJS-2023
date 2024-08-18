/*
  Challenge # 10
  Title: 🎄 Create your own Christmas tree
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/10
*/

function createChristmasTree(ornaments, height) {
  let tree = ''
  for (let i = 1, pos = 0; i <= height; i++) {
    tree += ' '.repeat(height - i)

    for (let j = 1; j <= i; j++) {
      tree += `${ornaments.at(pos)}${i - j ? ' ': ''}`
      pos = !ornaments.at(pos + 1) ? 0 : pos + 1
    }

    tree += '\n'
  }

  return tree + ' '.repeat(height - 1) + '|\n'
}
