/*
  Challenge # 11
  Title: 📖 The studious elves
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/11
*/

function getIndexsForPalindrome2(word) {
  if (word == word.split('').reverse().join('')) return []

  for (let i = 0; i < Math.round(word.length / 2); i++) {
    for (let j = i + 1; j < word.length; j++) {
      const temp = word.split('')
      temp[i] = word[j]
      temp[j] = word[i]
      if (temp.toString() === temp.reverse().toString()) return [i, j]
    }
  }

  return null
}
