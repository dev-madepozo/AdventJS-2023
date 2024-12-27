/*
  Challenge # 10
  Title: 🎄 Create your own Christmas tree
  Level: Easy
  Link: https://2023.adventjs.dev/en/challenges/2023/10
*/

function createChristmasTree(ornaments, height) {
  let tree = ''
  let pos = 0

  for (const i of Array.from({ length: height}).keys()) {
    tree += ' '.repeat(height - i - 1)

    for (let j = 0; j <= i; j++) {
      tree += `${ornaments[pos++ % ornaments.length]}${' '.repeat(!!(i - j))}`
    }

    tree += '\n'
  }

  return tree + ' '.repeat(height - 1) + '|\n'
}
