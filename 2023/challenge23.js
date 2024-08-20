/*
  Challenge # 23
  Title: 🍽️ Christmas dinner
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/23
*/

function organizeChristmasDinner(dishes) {
  const group = {}

  for (const [name, ...ingredients] of dishes) {
    for (const item of ingredients) {
      group[item] = group[item] ?? []
      group[item].push(name)
    }
  }

  const result = []

  for (const [k, v] of Object.entries(group)) {
    v.length > 1 && result.push([k, ...v.sort((a, b) => a.localeCompare(b))])
  }

  return result.sort((a, b) => a[0].localeCompare(b[0]))
}
