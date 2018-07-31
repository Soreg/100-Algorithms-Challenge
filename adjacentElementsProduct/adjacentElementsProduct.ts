function adjacentElementsProduct(inputArray: number[]): number {
  let largestNumber = inputArray[0] * inputArray[1];

  inputArray.map((number, i) => {
    largestNumber = number * inputArray[i+1] > largestNumber ? number * inputArray[i+1] : largestNumber;
  })

  return largestNumber;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));