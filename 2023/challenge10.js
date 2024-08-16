/*
  Challenge # 10
  Title: Create your own Christmas tree
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/10
*/

function createChristmasTree(ornaments, height) {
  const totalOrnaments = ornaments.repeat(height * 5).split('');
  const tree = [];

  for (let i = 0; i < height; i++) {
    tree.push(
      ' '.repeat(height - i - 1) +
      totalOrnaments.splice(0, i + 1).join(' ')
    )
  }
  tree.push(' '.repeat(height - 1) + '|\n')
  return tree.join('\n');
}
