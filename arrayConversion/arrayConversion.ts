function arrayConversion(inputArray: number[]): number {
  const finalArray = inputArray.concat();
  let odd = false;

  while(finalArray.length !== 1 ) {
    for(var i = 0; i < finalArray.length; i++) {
      const sum = odd ? finalArray[i] * finalArray[i + 1] : finalArray[i] + finalArray[i + 1];
      finalArray.splice(i, 2, sum);
    }
    odd = !odd;
  }

  return finalArray.reduce((a, b) => a + b);
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
