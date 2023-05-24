const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const personalise = (name) => {
  return `Hi ${name}! 50% off our best candies for you today!`;
};

const generateMessages = names.map(personalise);

console.log(generateMessages);
