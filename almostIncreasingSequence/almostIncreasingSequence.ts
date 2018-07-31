function almostIncreasingSequence(sequence: number[]): boolean {
  let count = 0;

  sequence.map((num, i) => {
    if(num <= sequence[i-1]) {
      count++;
      if(num <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
        return false;
      }
    }
  })
  
  return count <= 1;
}

// find first wrong and remove
// If the soreted version is equal to original, then true
// else falls

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 