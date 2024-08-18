/*
  Challenge # 11
  Title: 📖 The studious elves
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/11
*/

function getIndexsForPalindrome(word) {
  if (word == word.split('').reverse().join('')) return []

  for (let i = 0; i < Math.round(word.length / 2) ; i++) {
    if (word[i] == word[word.length-i-1] && i != word.length-i-1) continue
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) continue
      const temp = word.split('')
      temp[i] = word[j]
      temp[j] = word[i]
      if (temp.join('') === temp.reverse().join('')) return [i, j]
    }
  }

  return null
}
