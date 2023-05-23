const fizzbuzz_until = (num) => {
  for (let i = 0 ; i < num ; i++) {
    j = i + 1;
    if (j % 3 == 0) {
      if (j % 5 == 0) {
        console.log('FizzBuzz');
      } else {
        console.log('Fizz');
      }
    } else if (j % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(j);
    }
  }
};

module.exports = fizzbuzz_until;
