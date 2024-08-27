/*
  Challenge # 15
  Title: ↔️ Autonomous robot
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/15
*/

function autonomousDrive(store, movements) {
  let x = store.findIndex(row => row.includes('!'))
  let y = store[x].indexOf('!')

  const rightOrLeft = {
    R: ['!.', '.!'],
    L: ['.!', '!.']
  }

  const diretions = { R: 1, D: 1, L: -1, U: -1 }

  for(const mov of movements) {
    const n = diretions[mov]

    if ('RL'.includes(mov)) {
      if (store[x][y + n] == '.') {
        store[x] = store[x].replace(...(rightOrLeft[mov]))
        y += n
      }
    } else {
      if (store[x + n]?.[y] == '.') {
        store[x+n] = store[x+n].substr(0, y) + '!' + store[x+n].substr(y+1)
        store[x] = store[x].replace('!', '.')
        x += n
      }
    }
  }

  return store
}
