const names = [
  'Barney',
  'James',
  'Chloe',
  'Kat'
];

console.log(names.length)
console.log(names[1]); // Print second name in array (Index 0 = first name)

const newNames = names.concat('Iwan');

console.log(newNames.length);
console.log(newNames[newNames.length - 1]);
