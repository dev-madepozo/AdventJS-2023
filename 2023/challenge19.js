/*
  Challenge # 19
  Title: Face the sabotage
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/19
*/

function revealSabotage(store) {
  const newStore = structuredClone(store)
  for (let i = 0; i < newStore.length; i++) {
    for (let j = 0; j < newStore[i].length; j++) {
      if (newStore[i][j] === '*') continue
      const newValue = [
        newStore[i - 1]?.slice(j - 1 < 0 ? 0 : j - 1, j + 2),
        newStore[i].slice(j - 1 < 0 ? 0 : j - 1, j + 2),
        newStore[i + 1]?.slice(j - 1 < 0 ? 0 : j - 1, j + 2)
      ].join('').match(/\*/g)?.length || 0
      newStore[i][j] = newValue > 0 ? `${newValue}` : ' ';
    }
  }

  return newStore
}
