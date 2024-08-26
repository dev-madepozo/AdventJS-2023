/*
  Challenge # 23
  Title: 🍽️ Christmas dinner
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/23
*/

function organizeChristmasDinner(dishes) {
  const group = {}
  const result = []

  for (const [name, ...ingredients] of dishes) {
    for (const item of ingredients) {
      group[item] = group[item] ?? []
      group[item].push(name)
    }
  }

  for (const [k, v] of Object.entries(group)) {
    v.length > 1 && result.push([k, ...v.sort()])
  }

  return result.sort()
}
