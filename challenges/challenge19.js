/*
  Challenge # 19
  Title: 💣 Face the sabotage
  Level: Medium
  Link: https://2023.adventjs.dev/en/challenges/2023/19
*/

function revealSabotage(store) {
  let upRow;
  let downRow;

  for (const [i, row] of store.entries()) {
    downRow = store[i + 1]
    for (const [j, value] of row.entries()) {
      if (value != '*') {
        const sum = 
        (upRow?.[j-1] == '*') + (upRow?.[j] == '*') + (upRow?.[j+1] == '*') +
        (row?.[j-1] == '*') + (row?.[j+1] == '*') + (downRow?.[j-1] == '*') +
        (downRow?.[j] == '*') + (downRow?.[j+1] == '*')
        row[j] = `${sum || ' '}`
      }
    }
    upRow = row
  }

  return store
}
