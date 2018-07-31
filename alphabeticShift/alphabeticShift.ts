function alphabeticShift(inputString: string): string {
  const alphabet = ('abcdefghijklmnopqrstuvwxyz').split('')

  const string = inputString.split('').map((char) => {
    const i = alphabet.indexOf(char);
    return alphabet[i+1] !== undefined ? alphabet[i+1] : 'a'
  }).join('');

  return string;
}

console.log(alphabeticShift('crazy'));