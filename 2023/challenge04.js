/*
  Challenge # 04
  Title: Turn the parentheses around
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/4
*/

function decode(message) {
  let decoded = message

  while(decoded.includes('(')) {
    const regex = /\((.*?)\)/g;
    let text = regex.exec(decoded)[1]

    if (text.includes('(')) {
      text = text.slice(text.indexOf('(') + 1)
    }

    decoded = decoded.replace(`(${text})`, text.split('').reverse().join(''));
  }

  return decoded;
}
