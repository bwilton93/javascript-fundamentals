const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns an array of Mars & Maltesers, when passed "Ma" and "10"', () => {
    subString = 'Ma';
    maxPrice = 10;
    expect(searchCandies(subString, maxPrice)).toStrictEqual([ 'Mars', 'Maltesers' ]);
  })

  it('returns an array of Skitties, Skittles, Starbust when passed "S" and "10"', () => {
    subString = 'S';
    maxPrice = 10;
    expect(searchCandies(subString, maxPrice)).toStrictEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  })

  it('returns an array of Mars, when passed "Ma" and "2', () => {
    subString = 'Ma';
    maxPrice = 2;
    expect(searchCandies(subString, maxPrice)).toStrictEqual([ 'Mars' ]);
  })
  
  it('returns an array of Skitties, Skittles, when passed "S" and "4"', () => {
    subString = 'S';
    maxPrice = 4;
    expect(searchCandies(subString, maxPrice)).toStrictEqual([ 'Skitties', 'Skittles' ])
  })
})


// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4