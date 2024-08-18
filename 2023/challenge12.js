/*
  Challenge # 12
  Title: 📸 Is it a valid copy?
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/12
*/

function checkIsValidCopy(original, copy) {
  for (const [i, v] of [...original].entries()) {
    if (
      '#+:. '.indexOf(v) > '#+:. '.indexOf(copy[i]) ||
      (
        ![0, -32].includes(v?.charCodeAt() - copy[i]?.charCodeAt()) &&
        !'#+:. '.includes(copy[i])
      )
    ) return false
  }

  return true
}
