/*
  Challenge # 16
  Title: ❌ Friday deployment
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/16
*/

function transformTree(tree) {
  const buildTree = (pos) => (
    tree[pos] == null ? null : {
      value: tree[pos],
      left: buildTree(2 * pos + 1),
      right: buildTree(2 * pos + 2)
    }
  )

  const treeObject = buildTree(0)
  return treeObject
}
