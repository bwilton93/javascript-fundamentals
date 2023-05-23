for (let i = 0 ; i < 20 ; i ++) {
  num = i + 1
  
  if (num % 2 == 0) {
    even_or_odd = 'even';
  } else {
    even_or_odd = 'odd';
  }

  console.log(`${num} is ${even_or_odd}`);
};
