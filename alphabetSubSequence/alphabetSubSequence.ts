function alphabetSubsequence(s: string): boolean {
  const charCodes = s.split('');
  const chars = [];

  charCodes.forEach((char) => {
    chars.push(char.charCodeAt(0));
  })

  if (new Set(chars).size !== chars.length) {
    return false;
  }

  for(let i = 0; i < chars.length; i++) {
    if(chars[i] >= chars[i + 1]) {
      return false;
    }
  }

  return true;

  
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
