/*
  Challenge # 03
  Title: The naugthy elf
  Level: easy
  Link: https://adventjs.dev/en/challenges/2023/1
*/

function findNaughtyStep(original, modified) {
  if (original === modified) return '';

  for(let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original[i] !== modified[i]) {
      if (original.length <= modified.length) {
        return modified[i]
      } else {
        return original[i]
      }
    }
  }
}
