function compile(code) {
  let result = 0
  const commands = {
    '+': () => result++,
    '-': () => result--,
    '*': () => result *= 2
  }

  for (let i = 0; i < code.length; i++) {
    commands[code[i]]?.()
    code[i] == '¿' && result <= 0 && (i = code.indexOf('?', i))
    if (code[i] == '<' && code.lastIndexOf('%', i) > -1 ) {
      code = code.substr(0, i) + code.substr(i + 1)
      i = code.lastIndexOf('%', i)
    }
  }

  return result
}