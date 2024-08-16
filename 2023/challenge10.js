/*
  Challenge # 10
  Title: Create your own Christmas tree
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/10
*/

function createChristmasTree(ornaments, height) {
  ornaments = ornaments.repeat(height * 4).split('');
  const tree = [];

  for (const i in Array.from({ length: height })) {
    tree[i] = ' '.repeat(height - 1 - i) + ornaments.splice(0, +i + 1).join(' ')
  }

  tree[tree.length] = ' '.repeat(height - 1) + '|\n'
  return tree.join('\n');
}
