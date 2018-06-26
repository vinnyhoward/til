let toAlternatingCase = str => {
  let newCase = []
  const newStr = str.split('')
  for(i = 0; i < newStr.length; i++) {
    if(newStr[i] === newStr[i].toUpperCase()) {
      newCase.push(newStr[i].toLowerCase())
    } else if(newStr[i] === newStr[i].toLowerCase()) {
      newCase.push(newStr[i].toUpperCase())
    } else {
      newCase.push(newStr[i])
    }
  }
  return newCase.join('');
}

toAlternatingCase("HelLo wORLD")