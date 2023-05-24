const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
};

console.log(filterLongNumbers(numbers));
// [ '1763687364', '4763687363', '7867867862' ]

console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out
// [ '4763687363', '7867867862' ]

console.log(filterLongNumbers([]));
// [ ]
