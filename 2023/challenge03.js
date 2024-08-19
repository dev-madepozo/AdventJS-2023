/*
  Challenge # 03
  Title: 😏 The naughty elf
  Level: Easy
  Link: https://adventjs.dev/en/challenges/2023/3
*/

function findNaughtyStep(original, modified) {
  if (original.length < modified.length) {
    [original, modified] = [modified, original]
  }

  return [...original].find((c, i) => c != modified[i]) ?? ''
}
