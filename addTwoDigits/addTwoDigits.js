function addTwoDigits(n) {
  const numbers = n.toString().split('');
  
  return numbers.reduce((a, b) => {
    return parseInt(a) + parseInt(b)
  });
}

console.log(addTwoDigits(29));