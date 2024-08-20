/*
  Challenge # 04
  Title: 😵‍💫 Turn the parentheses around
  Level: Medium
  Link: https://adventjs.dev/en/challenges/2023/4
*/

function decode(message) {
  while(message.includes('(')) {
    const [matched, value] = message.match(/\(([^()]+)\)/)
    message = message.replace(matched, [...value].reverse().join(''))
  }

  return message;
}
