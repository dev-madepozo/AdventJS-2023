/*
  Challenge # 12
  Title: 📸 Is it a valid copy?
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/12
*/

function checkIsValidCopy(original, copy) {
  if (original.length != copy.length) return false
  for (const [i, c1] of [...original].entries()) {
    const c2 = copy[i]
    if (
      (c1 == ' ' && c2 != ' ') ||
      ('#+:. '.indexOf(c1) > '#+:. '.indexOf(c2)) ||
      (
        c1?.charCodeAt() != c2?.charCodeAt() &&
        c1?.charCodeAt() + 32 != c2?.charCodeAt() &&
        !'#+:. '.includes(c2)
      )
    ) return false
  }

  return true
}
