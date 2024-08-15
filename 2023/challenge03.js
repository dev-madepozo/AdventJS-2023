/*
  Challenge # 03
  Title: The naugthy elf
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/3
*/

function findNaughtyStep(original, modified) {
  for(let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original[i] !== modified[i]) {
      return original.length <= modified.length ? modified[i]: original[i]
    }
  }
  return ''
}