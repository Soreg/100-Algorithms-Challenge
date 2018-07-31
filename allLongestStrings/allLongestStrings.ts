function allLongestStrings(inputArray: string[]): string[] {
  inputArray = inputArray.sort((a, b) =>  b.length - a.length ) // Sort by length of characters

  const longestArray = inputArray.filter((string) => {
    return string.length >= inputArray[0].length;
  });

  return longestArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));