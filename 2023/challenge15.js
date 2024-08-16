/*
  Challenge # 15
  Title: Autonomous robot
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/15
*/

function autonomousDrive(store, movements) {
  let x = store.findIndex(row => row.includes('!'))
  let y = store[x].indexOf('!')

  for(const mov of movements) {
    const n = 'RD'.indexOf(mov) || 1

    if ('RL'.includes(mov) && store[x][y + n] == '.') {
      store[x] = store[x].replace(...(mov == 'R' ? ['!.', '.!'] : ['.!', '!.']))
      y += n
    }

    if ('UD'.includes(mov) && store[x + n] && store[x + n][y] == '.') {
      store[x + n] = store[x + n].substr(0, y) + '!' + store[x + n].substr(y+1)
      store[x] = store[x].replace('!', '.')
      x += n
    }
  }

  return store
}
