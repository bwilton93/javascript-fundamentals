// > getNumberSign(3);
// 'positive'

// > getNumberSign(0);
// 'zero'

// > getNumberSign(-5);
// 'negative'

const getNumberSign = (num) => {
  if (num < 0) {
    return 'negative';
  } else if (num > 0) {
    return 'positive';
  } else {
    return 'zero';
  }
};

module.exports = getNumberSign;