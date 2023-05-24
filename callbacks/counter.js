// In a new file counter.js:

// Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.
// Declare a function called increment that:
// increments the value of counter by 1
// and prints it using console.log
// Using setInterval, call this function every second so the counter is incremented and printed every second.
// If you've done the above correctly, you should be able to run the file and see the counter being incremented and printed every second:

let counter = 0; 
console.log(counter);

const incrementCounter = () => {
  counter++;
  console.log(counter);
}

setInterval(incrementCounter, 1000);
