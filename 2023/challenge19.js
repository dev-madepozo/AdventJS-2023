/*
  Challenge # 19
  Title: 💣 Face the sabotage
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/19
*/

function revealSabotage(store) {
  const newStore = []
  for (let i = 0; i < store.length; i++) {
    newStore[i] = []
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] === '*') {
        newStore[i][j] = '*'
        continue
      }
      const newValue = [
        store[i - 1]?.slice(j - 1 < 0 ? 0 : j - 1, j + 2),
        store[i].slice(j - 1 < 0 ? 0 : j - 1, j + 2),
        store[i + 1]?.slice(j - 1 < 0 ? 0 : j - 1, j + 2)
      ].join('').match(/\*/g)?.length
      newStore[i][j] = `${newValue || ' '}`;
    }
  }

  return newStore
}
