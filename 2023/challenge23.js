/*
  Challenge # 23
  Title: 🍽️ Christmas dinner
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/23
*/

function organizeChristmasDinner(dishes) {
  const group = {}
  const organizedChristmasDinner = []

  dishes.forEach(([name, ...ingredients]) => {
    const filteredIngredients = ingredients.filter(ingredient => {
      let count = 0;

      for (let i = 0; i < dishes.length; i++) {
        count += !!(dishes[i].includes(ingredient))
      }

      return count > 1
    })

    if (filteredIngredients.length) {
      filteredIngredients.forEach(item => {
        if (item) {
          if (group[item]) {
            group[item].push(name)
          } else {
            group[item] = [name]
          }
        }
      })
    }
  })

  Object.entries(group).forEach(([ingredient, names]) => {
    organizedChristmasDinner.push([
      ingredient, ...names.sort((a, b) => a.localeCompare(b))
    ])
  })

  return organizedChristmasDinner.sort(([a], [b]) => a.localeCompare(b));
}
